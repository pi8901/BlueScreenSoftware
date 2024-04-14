import React from "react";
import Navbar from "../Navbar/Navbar";
import Hero from "../Herosection/Hero";
import Cards from "../Cards/Cards";




const Startseite = () => {
    return (
        <div className="Startseite">
            <Navbar />
            <Hero />
            <Cards />
        </div>
    )
}

export default Startseite