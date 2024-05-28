import React from 'react'
import "./hero.css"
import vid from "../../StartAssets/start_vid.mp4"
import { NavLink } from 'react-router-dom';

const Hero = () => {
  return (
    <div className='hero-container'>
        <div className="video-container">
            <video className='hero-vid' src={vid} muted loop autoPlay></video>
            <div className="text-container justify-center items-center">
                <h1 className='slogan-h1 text-center xl:text-7xl lg:text-5xl text-white xl:font-medium xl:mt-10 xl:mb-2 lg:font-medium lg:mt-10 lg:mb-4 text-3xl m-5'>"Entdecke dein Geschäftspotenzial -<br/> Daten, die den Unterschied machen."</h1>
                
                <p className='p-author  text-center xl:text-7xl lg:text-5xl text-white lg:xl:font-normal text-3xl font-light m-2'>- ChatGPT</p>

                <p className='text-white  text-center  xl:text-5xl xl:font-normal xl:mt-20 lg:text-5xl lg:font-normal lg:mt-20 text-3xl my-10 '>Wähle aus, was dein nächster Schritt sein soll</p>
            </div>
            <div className="button-container">
                <NavLink to="../analyse" className="zur_analyse_button">
                    <button className="buttn--outline buttn--large">
                        Zur Analyse
                    </button>
                </NavLink>
                <NavLink to="../strategien" className="zu_strategien_button">
                    <button className="buttn--outline buttn--large">
                        Zu den Strategien
                    </button>
                </NavLink>
            </div>
        </div>
    </div>
  );
}

export default Hero;
