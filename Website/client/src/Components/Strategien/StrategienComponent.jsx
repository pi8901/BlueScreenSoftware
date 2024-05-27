import React, { useState, useEffect, useRef } from 'react';
import ReactModal from 'react-modal';
import "./StrategienComponent.css";
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import slide_image from "../../img/img_1.jpg";
import { useData } from '../DataContext/DataContext';
import axios from 'axios';
import { RingLoader } from 'react-spinners';

const StrategienComponent = () => {
    const { data, loading, error, fetchData } = useData();
    const [strategien, setStrategien] = useState([]);
    const [showModal, setShowModal] = useState(false);
    const [newStrategie, setNewStrategie] = useState({
        title: '',
        desc: '',
        coverImg: ''
    });
    const strategieRefs = useRef({});

    useEffect(() => {
        fetchData('strategies');
    }, []);

    useEffect(() => {
        if (data.strategies) {
            setStrategien(data.strategies.map(strategy => ({
                ...strategy,
                coverImg: strategy.coverImg === 'slide_image' ? slide_image : strategy.coverImg
            })));
        }
    }, [data]);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setNewStrategie(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleAddStrategie = () => {
        const formData = new FormData();
        formData.append("title", newStrategie.title);
        formData.append("desc", newStrategie.desc);
        formData.append("coverImg", "slide_image");

        axios.post('http://localhost:8080/strategy', formData, {
            headers: {
                'Content-Type': 'application/json'
            }
        }).then(response => {
            console.log('Upload erfolgreich:', response);
            setStrategien(prevStrategien => [...prevStrategien, {
                ...response.data,
                coverImg: slide_image
            }]);
            fetchData('strategies');
            setShowModal(false);
        }).catch(error => {
            console.error('Upload fehlgeschlagen:', error);
        });
    };

    const handleDeleteStrategie = (id) => {
        console.log(`Deleting strategy with id: ${id}`);
        axios.delete(`http://localhost:8080/deleteStrategy/${id}`)
        .then(response => {
            console.log('Delete response:', response); // Log the response from the API
            setStrategien(prevStrategien => prevStrategien.filter(strategie => strategie.id !== id));
        })
        .catch(error => console.error('Error deleting strategy:', error));
    };

    const handleNavigateToStrategie = (id) => {
        if (strategieRefs.current[id]) {
            strategieRefs.current[id].scrollIntoView({ behavior: 'smooth' });
        }
    };

    const previewText = (text, maxLength) => {
        if (text.length <= maxLength) return text;
        return text.slice(0, maxLength) + '...';
    };

    if (loading) {
        return (
            <div className="flex items-center justify-center min-h-screen bg-[#252525]">
                <RingLoader speedMultiplier={1} color="var(--logoColor)" />
            </div>
        );
    }

    if (error) {
        return <div>Error: {error.message}</div>;
    }

    const StrategienCards = ({ id, children, imgSrc, ...props }) => {
        return (
            <div {...props} className='relative'>
                <div className="">
                    <img src={imgSrc} alt="" className='transition-transform h-full w-full object-cover group-hover:rotate-2 group-hover:scale-125' />
                </div>
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black group-hover:from-black/70 group-hover:via-black/60 group-hover:to-black/70"></div>
                <div className="absolute inset-0 flex flex-col items-center justify-center px-9 text-center translate-y-[60%] group-hover:translate-y-0 transition-all text-white">
                    {children}
                    <button className='rounded-full bg-neutral-900 py-2 px-3.5 text-sm text-white' onClick={() => handleNavigateToStrategie(id)}>
                        Zu der Strategie
                    </button>
                </div>
            </div>
        );
    };

    return (
        <div className="strategie-body bg-[#252525]">
            <div className="slider-container">
            <h1 className="heading">Mit unseren <span className="highlight">Strategien</span> <br />sind Sie ganz vorne dabei</h1>
                <div className='flex items-center justify-center bg-[#222222] rounded-xl'>
                    <div className='grid grid-cols-1 w-full md:grid-cols-2 lg:grid-cols-3 gap-5 self-start my-40 ml-7 mr-7'>
                        {strategien.map((strategie, index) => (
                            <div key={strategie.id || index} className='group relative cursor-pointer items-center justify-center overflow-hidden transition-shadow hover:shadow-xl hover:shadow-black/30 rounded-xl'>
                                <StrategienCards id={strategie.id} imgSrc={strategie.coverImg}>
                                    <h3 className="text-xl font-bold mb-2">{strategie.title}</h3>
                                    <p>{previewText(strategie.desc, 100)}</p>
                                    <br />
                                </StrategienCards>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
            <div className='w-full py-[p50x]'>
                <div className='max-w[1240px] mx-auto'>
                    <div className='grid lg:grid-cols-1 gap-8 px-4 text-black'>
                        {strategien.map((strategie) =>
                            <div key={strategie.id} ref={el => (strategieRefs.current[strategie.id] = el)} className='bg-white rounded-xl overflow-hidden drop-shadow-md my-5 ml-10 mr-10'>
                                <img className='h-56 w-full object-cover' src={strategie.coverImg} alt="" />
                                <div className='p-8'>
                                    <h3 className="font-bold text-2xl my-1">{strategie.title}</h3>
                                    <p className="text-gray-600 text-xl">{strategie.desc}</p>
                                    <button className='btn' onClick={() => handleDeleteStrategie(strategie.id)}>Löschen</button>
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </div>
            <button className='grid lg:grid-cols-1 rounded-full bg-neutral-900 py-2 px-3.5 font-com text-sm capitalize text-white shadow shadow-black/60 ml-auto mr-auto pb-2' onClick={() => setShowModal(true)}>
                Hier klicken, um neuen Beitrag hinzuzufügen! 
            </button>

            <ReactModal 
                isOpen={showModal} 
                onRequestClose={() => setShowModal(false)}
                className="custom-modal"
                overlayClassName="custom-overlay"
                shouldCloseOnOverlayClick={true}
            >
                <h2>Neuen Beitrag hinzufügen</h2>
                <input type="text" name="title" placeholder="Titel" value={newStrategie.title} onChange={handleInputChange} className="modal-input" />
                <textarea name="desc" placeholder="Beschreibung" value={newStrategie.desc} onChange={handleInputChange} className="modal-input" />
                <button onClick={handleAddStrategie} className="modal-button">Hinzufügen</button>
            </ReactModal>
        </div>
    );
}

export default StrategienComponent;
