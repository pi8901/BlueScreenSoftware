import React, { useRef, useState, useContext } from 'react';
import PropTypes from 'prop-types';

import './DropComponents.css';

import { ImageConfig } from "./ImageConfig.jsx";
import uploadImg from "../../img/cloud-upload-regular-240.png";

import axios from 'axios';
import { DataContext } from '../DataContext/DataContext';

const DropFileInput = props => {

    const wrapperRef = useRef(null);

    const [fileList, setFileList] = useState([]);
    const [uploadError, setUploadError] = useState(null);
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

    const uploadFiles = () => {
        setUploadError(null);
        fileList.forEach(file => {
            const formData = new FormData();
            formData.append("file", file);
            axios.post('http://localhost:8080/upload', formData, {
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            }).then(response => {
                console.log('Upload erfolgreich:', response);
                fetchData('apriori');
                fetchData('topflop');
                //fetchData('turnover');
                fileRemove(file);
            }).catch(error => {
                console.error('Upload fehlgeschlagen:', error);
                setUploadError("Upload fehlgeschlagen: " + error.message);
            });
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
                    <p className='text-black '>Drag & Drop your files here</p>
                </div>
                <input type="file" value="" onChange={onFileDrop}/>
            </div>
            {
                fileList.length > 0 ? (
                    <div className="drop-file-preview">
                        <button className="btn rounded-full bg-neutral-900 py-2 px-3.5 font-com text-sm text-white shadow shadow-black/60' drop-file-preview__title" onClick={uploadFiles}>
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
    onFileChange: PropTypes.func
}

export default DropFileInput;