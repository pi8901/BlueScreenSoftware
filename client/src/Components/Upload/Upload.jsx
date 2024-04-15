import React from 'react'
import "./Upload.css"
import DropComponents from "./DropComponents"

const Upload = () => {

    const onFileChange = (files) => {
        console.log(files);
    }

    return (
        <div className="upload-main-container">
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

{/* <div className='absolute z-[3] -left-1/2 top-0 w-[50] h-[50] rounded-full white__gradient'/>
<div className='absolute z-[0] -left-1/2 bottom-0 w-[50] h-[50] rounded-full pink__gradient'/> */}    