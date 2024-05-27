import React from 'react'
import "./Upload.css"
import DropComponents from "./DropComponents"
import DropFileInput from '../Upload/DropComponents.jsx';

const Upload = () => {

    const onFileChange = (files) => {
        console.log(files);
    }

    

    return (
        <div className="upload-main-container bg-[#252525]">
            <div className="upload-container bg-slate-900/50">
                <h2 className="upload-header text-white">
                    Lorem ipsum dolor sit amet
                </h2>
                <DropComponents
                    onFileChange={(files) => onFileChange(files)}
                />
            </div>
        </div>
    );
}

export default Upload    