import React from 'react';
import './Cards.css';
import CardItem from './CardItem';
import bild from '../../img/startcard1.jpg';
import bild2 from '../../img/startcard2.jpg';
import bild3 from '../../img/startcard3.jpg';
import bild4 from '../../img/startcard4.jpg';
import upload from '../../img/cloud-upload-icon.png';



const Cards = () => {
  return (
    <div className='cards'>
      <h1 className='card-slogan'>Sieh dir diese tollen Karten an!?</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              src={bild}
              text='Testen Sie wie unsere Software in der Konkurrenz performt'
              label='Aktuelles'
              path='/startseite'
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
              text='Gemütlich Ihre per Drag & Drop .csv Datei zur Analyse hochladen'
              label='Easy Upload'
              path='/startseite'
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
              path='/startseite'
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;