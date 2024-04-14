import React from 'react'
import "./hero.css"
import vid from "../../StartAssets/start_vid.mp4"


const Hero = () => {
  return (
    <div className='hero-container'>

        <div className="video-container">

            <video className='hero-vid' src={vid} muted loop autoPlay></video>

            <h1 className='slogan-h1'>"Entdecke dein Geschäftspotenzial -<br/> Daten, die den Unterschied machen."</h1>
            <p className='p-author'>- ChatGPT</p>
            <p>Wähle aus, was dein nächster Schritt sein soll</p>

            <div className="button-container">

                <button className="buttn--outline buttn--large">
                    Zur Analyse
                </button>

                <button className="buttn--outline buttn--large">
                    Zu den Strategien
                </button>
            </div>

        </div>
    </div>
  );
}

export default Hero