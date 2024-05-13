import React, { useState, useEffect, useRef } from 'react';
import ReactModal from 'react-modal';
import "./StrategienComponent.css";
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import slide_image from "../../img/img_1.jpg";


const StrategienComponent = () => {

    localStorage.removeItem('strategien'); // Hier für Test entfernen!

    const strategieRef = useRef(null);
    
    const handleNavigateToStrategie = () => {
        if (strategieRef.current) {
            strategieRef.current.scrollIntoView({ behavior: 'smooth' });
        }
    };


    const [showModal, setShowModal] = useState(false);
    const [newStrategie, setNewStrategie] = useState({
        title: '',
        desc: '',
        coverImg: ''
    });

    const [strategien, setStrategien] = useState(() => {
        const savedStrategien = localStorage.getItem('strategien');
        return savedStrategien ? JSON.parse(savedStrategien) : [
            {
                id: 1,
                title: 'Strategie 1',
                desc: 'Beschreibung hier...',
                coverImg: slide_image
            },
            {
                id: 2,
                title: 'Strategie 2',
                desc: 'Lorem ipsum, dolor sit amet ',
                coverImg: slide_image
            },
            {
                id: 3,
                title: 'Strategie 3',
                desc: 'Beschreibung hier...',
                coverImg: slide_image
            }
        ];
    });

   
    useEffect(() => {
        localStorage.setItem('strategien', JSON.stringify(strategien));
    }, [strategien]);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setNewStrategie(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleAddStrategie = () => {
        const newId = strategien.length + 1; 
        const updatedStrategien = [...strategien, { ...newStrategie, id: newId, coverImg: slide_image }];
        setStrategien(updatedStrategien);
        setShowModal(false);
    };

    const handleDeleteStrategie = (id) => {
        const updatedStrategien = strategien.filter(strategie => strategie.id !== id);
        setStrategien(updatedStrategien);
    };
    
    function StrategienCards({ children, imgSrc, ...props }) {
        return (
          <div ref={strategieRef} {...props} className='relative'>
                <div className="">
                    <img src={imgSrc} alt="" className='transition-transform h-full w-full object-cover group-hover:rotate-2 group-hover:scale-125' />
                </div>
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black group-hover:from-black/70 group-hover:via-black/60 group-hover:to-black/70"></div>
                <div className="absolute inset-0 flex flex-col items-center justify-center px-9 text-center translate-y-[60%] group-hover:translate-y-0 transition-all text-white">{children}
                    <button className='rounded-full bg-neutral-900 py-2 px-3.5 text-sm  text-white'  onClick={() => handleNavigateToStrategie()} >Zu den Strategien</button>
                </div>
          </div>
        );
    };

    
    return (
        <div className="strategie-body bg-[#252525]">
            <div className="slider-container">
                <h1 className="heading outline-solid">Mit unseren Strategien <br/>sind Sie ganz vorne dabei</h1>
               
                <div className='flex items-center justify-center bg-[#222222] rounded-xl '>
                    <div className='grid grid-cols-1 w-full md:grid-cols-2 lg:grid-cols-3 gap-5 self-start my-40 ml-7 mr-7'>
                        <div className='group relative cursor-pointer items-center justify-center overflow-hidden transition-shadow hover:shadow-xl hover:shadow-black/30 rounded-xl'>
                            <StrategienCards imgSrc={slide_image}>
                                <h3 className="text-xl font-bold mb-2 ">Lorem Ipsum</h3>
                                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eius placeat facere corrupti earum illum ad veniam maxime!</p>
                                <div className="space-x-4 mt-4">
                                    <button className='btn' >
                                    </button>
                                </div>
                            </StrategienCards>
                        </div>

                        <div className='group relative cursor-pointer items-center justify-center overflow-hidden transition-shadow hover:shadow-xl hover:shadow-black/30 rounded-xl'>
                            <StrategienCards imgSrc={slide_image}>
                                <h3 className="text-xl font-bold mb-2 ">Lorem Ipsum</h3>
                                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eius placeat facere corrupti earum illum ad veniam maxime! </p>
                                <div className="space-x-4 mt-4">
                                    <button className='rounded-full bg-neutral-900 py-2 px-3.5 font-com text-sm capitalize text-white shadow shadow-black/60'>
                                    </button>
                                </div>
                            </StrategienCards>
                        </div>

                        <div className='group relative cursor-pointer items-center justify-center overflow-hidden transition-shadow hover:shadow-xl hover:shadow-black/30 rounded-xl'>
                            <StrategienCards imgSrc={slide_image}>
                                <h3 className="text-xl font-bold mb-2 ">Lorem Ipsum</h3>
                                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eius placeat facere corrupti earum illum ad veniam maxime! </p>
                                <div className="space-x-4 mt-4">
                                    <button className='btn'>
                                    </button>
                                </div>
                            </StrategienCards>
                        </div>

                    </div>
                </div>


            </div>
            
            <div className='w-full py-[p50x]'>
                <div className='max-w[1240px] mx-auto '>
                    <div className='grid lg:grid-cols-1 gap-8 px-4 text-black'>

                        {strategien.map((strategien) =>
                            <div key={strategien.id} className='bg-white rounded-xl overflow-hidden drop-shadow-md my-5 ml-10 mr-10'>
                                <img className='h-56 w-full object-cover' src={strategien.coverImg} alt="" />
                                <div className='p-8'>
                                    <h3 className="font-bold text-2xl my-1">{strategien.title}</h3>
                                    <p className="text-gray-600 text-xl">{strategien.desc}</p>
                                    <button className='btn' onClick={() => handleDeleteStrategie(strategien.id)}>Löschen</button>
                                </div>
                            </div>
                        
                        )}

                    </div>
                </div>
            </div>
            <button className='grid lg:grid-cols-1 rounded-full bg-neutral-900 py-2 px-3.5 font-com text-sm capitalize text-white shadow shadow-black/60 ml-auto mr-auto' onClick={() => setShowModal(true)}>
                    Hier klicken, um neuen Beitrag hinzuzufügen! 
            </button>

            <ReactModal isOpen={showModal} onRequestClose={() => setShowModal(false)}>
                <h2>Neuen Beitrag hinzufügen</h2>
                <input type="text" name="title" placeholder="Titel" value={newStrategie.title} onChange={handleInputChange} />
                <textarea name="desc" placeholder="Beschreibung" value={newStrategie.desc} onChange={handleInputChange} />
                <input type="text" name="coverImg" placeholder="Cover Bild URL" value={newStrategie.coverImg} onChange={handleInputChange} />
                <button onClick={handleAddStrategie}>Hinzufügen</button>
            </ReactModal>

        </div>


      );
}

export default StrategienComponent;


