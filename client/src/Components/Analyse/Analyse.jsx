import React from "react";
import './Analyse.css'
import Navbar from "../Navbar/Navbar"
import Charts from "../Charts/Charts"
import Upload from "../Upload/Upload"

const Analyse = () => {
    return (
        <div className="Analyse">
        <Navbar />
        <Upload/>
        {/* <Charts /> */}
        </div>
    )
}

export default Analyse