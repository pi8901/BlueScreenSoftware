import React from "react";
import Navbar from "../Navbar/Navbar"
import vid from "../../StartAssets/start_vid.mp4"


const Startseite = () => {
    return (
        <div className="Startseite">
            <Navbar />
            <video src={vid} muted loop autoPlay></video>
        </div>
    )
}

export default Startseite