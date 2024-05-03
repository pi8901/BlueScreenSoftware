import React, { useRef, useState } from 'react';
import PropTypes from 'prop-types';

import './DropComponents.css';

import { ImageConfig } from "./ImageConfig.jsx";
import uploadImg from "../../img/cloud-upload-regular-240.png";

import axios from 'axios';

const DropFileInput = props => {

    const wrapperRef = useRef(null);

    const [fileList, setFileList] = useState([]);

    const onDragEnter = () => wrapperRef.current.classList.add('dragover');

    const onDragLeave = () => wrapperRef.current.classList.remove('dragover');

    const onDrop = () => wrapperRef.current.classList.remove('dragover');

    const onFileDrop = (e) => {
        const newFile = e.target.files[0];
        if (newFile) {
            const updatedList = [...fileList, newFile];
            setFileList(updatedList);
            props.onFileChange(updatedList);
    
            const formData = new FormData();
            formData.append("file", newFile);
            axios.post('http://localhost:8080/upload', formData, {
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            }).then(response => {
                console.log('Upload erfolgreich:', response);
            }).catch(error => {
                console.error('Upload fehlgeschlagen:', error);
                // Exception handling 
            });
    
        }
    }

    const fileRemove = (file) => {
        const updatedList = [...fileList];
        updatedList.splice(fileList.indexOf(file), 1);
        setFileList(updatedList);
        props.onFileChange(updatedList);
    }

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
                        <p className="drop-file-preview__title">
                            Ready to upload
                        </p>
                        {
                            fileList.map((item, index) => (
                                <div key={index} className="drop-file-preview__item">
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

const onFileDrop = (e) => {
    const newFile = e.target.files[0];
    if (newFile) {
        const updatedList = [...fileList, newFile];
        setFileList(updatedList);
        props.onFileChange(updatedList);

        const formData = new FormData();
        formData.append("file", newFile);
        axios.post('http://your-api-url/upload', formData, {
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        }).then(response => {
            console.log('Upload erfolgreich:', response);
        }).catch(error => {
            console.error('Upload fehlgeschlagen:', error);
            // Exception handling 
        });

    }
}