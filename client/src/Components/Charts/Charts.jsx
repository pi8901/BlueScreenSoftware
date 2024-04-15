import React from 'react';
import './Charts.css';
import CardItem from './ChartsItem';
import bild from '../../img/startcard1.jpg';
import bild2 from '../../img/startcard2.jpg';
import bild3 from '../../img/startcard3.jpg';
import bild4 from '../../img/startcard4.jpg';
import upload from '../../img/cloud-upload-icon.png';



const Charts = () => {
  return (
    <div className="test">
      <div className='charts'>

        <h1 className='charts-slogan'>Lorem ipsum dolor sit amet, consectetur adipiscing elit</h1>
        <div className='charts__container'>
          <div className='charts__wrapper'>
            <ul className='charts__items'>
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
            <ul className='charts__items'>
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
            </ul>
            <ul className='charts__items'>
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
            </ul>
          </div>
        </div>

      </div>
    </div>
  );
}

export default Charts;