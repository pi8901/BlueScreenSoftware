import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import './Cards.css';
import CardItem from './CardItem';
import bild from '../../img/startcard1.jpg';
import bild2 from '../../img/startcard2.jpg';
import bild3 from '../../img/startcard3.jpg';
import bild4 from '../../img/startcard4.jpg';
import upload from '../../img/cloud-upload-icon.png';

const Cards = () => {
  return (
    <div className='cards bg-[#252525]'>
      
      <h1 className='card-slogan'></h1>
      <div className='cards__container'>
      <div className='circle w-[520px] h-[400px] bg-[#265ffd] rounded-[100%] absolute z-9 top-[110%] left-[50%] translate-x-[-200%] translate-y-[20%] blur-[1000px]'></div>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              src={bild}
              text='Testen Sie wie Ihr Unternehmen mit unserer Software performt'
              label='Aktuelles'
              path='/analyse'
            />
            <CardItem
              src={bild2}
              text='Neu hier? mit unseren Strategien sind Sie ganz vorne dabei'
              label='Aktuelles'
              path='/strategien'
            />
          </ul>
          <ul className='cards__items'>
            <CardItem
              src={upload}
              text='Gemütlich Ihre CSV-Datei per Drag & Drop zur Analyse hochladen'
              label='Easy Upload'
              path='/analyse'
            />
            <CardItem
              src={bild3}
              text='Dank unseres responsive Webdesigns, auch auf allen mobilen Geräten verfügbar'
              label='auch als App'
              path="/startseite"
            />
            <CardItem
              src={bild4}
              text='Alles an einem Ort. Kein lästiger Papierkram mehr - Jetzt die Analyse starten!'
              label='Analyse starten'
              path='/analyse'
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;