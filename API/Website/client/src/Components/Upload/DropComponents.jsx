import React, { useRef, useState, useContext } from 'react';
import PropTypes from 'prop-types';
import './DropComponents.css';
import { ImageConfig } from "./ImageConfig.jsx";
import uploadImg from "../../img/cloud-upload-regular-240.png";
import axios from 'axios';
import { DataContext } from '../DataContext/DataContext';
import { RingLoader } from 'react-spinners';

const DropFileInput = props => {
    const wrapperRef = useRef(null);
    const [fileList, setFileList] = useState([]);
    const [uploadError, setUploadError] = useState(null);
    const [loading, setLoading] = useState(false);
    const [refresh, setRefresh] = useState(false); // Zustand für die Aktualisierung hinzufügen
    const { fetchData } = useContext(DataContext);

    const onDragEnter = () => wrapperRef.current.classList.add('dragover');
    const onDragLeave = () => wrapperRef.current.classList.remove('dragover');
    const onDrop = () => wrapperRef.current.classList.remove('dragover');

    const onFileDrop = (e) => {
        const files = e.target.files;
        if (files) {
            const updatedList = [...fileList, ...files];
            setFileList(updatedList);
            props.onFileChange(updatedList);
            setUploadError(null);
        }
    };

    const fileRemove = (file) => {
        const updatedList = [...fileList];
        updatedList.splice(fileList.indexOf(file), 1);
        setFileList(updatedList);
        props.onFileChange(updatedList);
        setUploadError(null);
    }

    const handleUploadSuccess = () => {
        setRefresh(prev => !prev); // Toggle den Zustand, um die Seite zu aktualisieren
        fetchData('apriori');
        fetchData('topflop');
        fetchData('strategies');
        fetchData('turnover/day');
        fetchData('turnover/hour');
        fetchData('turnover/customer');
    };

    const uploadFiles = () => {
        setUploadError(null);
        setLoading(true);
        const uploads = fileList.map(file => {
            const formData = new FormData();
            formData.append("file", file);
            return axios.post('http://localhost:8080/upload', formData, {
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            }).then(response => {
                console.log('Upload erfolgreich:', response);
                fileRemove(file);
            }).catch(error => {
                if (error.response) {
                    // Server antwortete mit einem Statuscode außerhalb des Bereichs von 2xx
                    switch (error.response.status) {
                        case 400:
                            setUploadError("Fehlerhafte Anfrage: hochgeladene Datei ist ungültig.");
                            break;
                        case 401:
                            setUploadError("Nicht autorisiert: Bitte melden Sie sich an.");
                            break;
                        case 404:
                            setUploadError("Server nicht gefunden: Server-URL überprüfen.");
                            break;
                        case 500:
                            setUploadError("Serverfehler: Bitte später erneut versuchen.");
                            break;
                        default:
                            setUploadError(`Fehler: ${error.response.status} - ${error.response.data}`);
                    }
                }
                    else if (error.request) {
                        // Die Anfrage wurde gestellt, aber keine Antwort erhalten
                        setUploadError("Keine Antwort vom Server erhalten.");
                    } else {
                        // Ein Fehler trat bei der Erstellung der Anfrage auf
                        setUploadError("Fehler beim Erstellen der Anfrage: " + error.message);
                    }
                    console.error('Das hat nicht geklappt:', error);
            });
        });

        Promise.all(uploads).then(() => {
            setLoading(false);
            handleUploadSuccess(); // Callback aufrufen, nachdem alle Uploads abgeschlossen sind
        });
    };

    return (
        <>
            <div
                ref={wrapperRef}
                className="drop-file-input"
                onDragEnter={onDragEnter}
                onDragLeave={onDragLeave}
                onDrop={onDrop}
            >
                <div className="drop-file-input__label">
                    <img className='drop-file-img' src={uploadImg} alt="" />
                    <p className='text-black '>Drag & Drop</p>
                </div>
                <input type="file" value="" onChange={onFileDrop}/>
            </div>
            {loading && <RingLoader speedMultiplier={1} color="var(--logoColor)" className='mr-auto ml-auto' />}
            {
                fileList.length > 0 ? (
                    <div className="drop-file-preview">
                        <button className="rounded-full bg-neutral-900 py-2 px-3.5 font-com text-sm text-white shadow shadow-black/60' drop-file-preview__title" onClick={uploadFiles}>
                            Analyse starten
                        </button>
                        {uploadError && <p className="text-white font-bold">{uploadError}</p>}
                        {
                            fileList.map((item, index) => (
                                <div key={index} className="drop-file-preview__item my-2">
                                    <img src={ImageConfig[item.type.split('/')[1]] || ImageConfig['default']} alt="" />
                                    <div className="drop-file-preview__item__info">
                                        <p>{item.name}</p>
                                        <p>{item.size}B</p>
                                    </div>
                                    <span className="drop-file-preview__item__del" onClick={() => fileRemove(item)}>x</span>
                                </div>
                            ))
                        }
                    </div>
                ) : null
            }
        </>
    );
}

DropFileInput.propTypes = {
    onFileChange: PropTypes.func,
};

export default DropFileInput;
