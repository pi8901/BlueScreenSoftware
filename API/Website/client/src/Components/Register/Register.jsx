import React, { useState } from "react";
import './Register.css';
import '../../App.css';
import video from '../../LoginAssets/Login_vid.mp4';
import logo from '../../LoginAssets/Logo_blauweiss.png';
import { Link, useNavigate } from 'react-router-dom';
import { FaUserShield } from "react-icons/fa";
import { BsFillShieldLockFill } from "react-icons/bs";
import { AiOutlineSwapRight } from "react-icons/ai";
import { MdMarkEmailRead } from "react-icons/md";

const Register = () => {

    const [users, setUsers] = useState([]);
    const [emailadress, setEmail] = useState('');
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [registerMessage, setRegisterMessage] = useState('');
    const navigate = useNavigate();

    const handleRegister = (e) => {
        e.preventDefault();
        if (!username.trim() || !password.trim() || !emailadress.trim()) {
            setRegisterMessage('die Felder dürfen nicht leer sein.');
            return; 
        }
        const newUser = { emailadress, username, password };
        setUsers([...users, newUser]);
        setUsername('');
        setPassword(''); 
        setEmail('');
        setRegisterMessage('Registrierung erfolgreich!');
        navigate('/');
    };

    return (

        <div className="registerPage flex">
        <div className="container flex"  style={{ boxShadow: 'rgba(100, 100, 111, 0.8) 0px 7px 29px 0px' }}>
            <div className="videoDiv">
                <video src={video} autoPlay muted loop></video>

                <div className="textDiv">
                    <h2 className="title">Analysiere Daten einfach und schnell</h2>
                    <p>Hier kann ein Text stehen</p>
                </div>

                <div className="footerDiv flex">
                   <span className="text">du hast bereits einen Account?</span> 
                   <Link to={'/'}>
                   <button className="btn">Zum Login</button>
                   </Link>
                </div>
            </div>

            <div className="formDiv flex">
                <div className="headerDiv">
                    <img src={logo} alt="Logo" />
                    <h3>Wir freuen uns auf dich!</h3>
                </div>

                <form onSubmit={handleRegister} className="form grid">
                <span className={`showMessage ${registerMessage ? 'isActive' : ''}`}>{registerMessage}</span>
                    <div className="inputDiv">
                        <label htmlFor="email">Email</label>
                        <div className="input flex">
                        <MdMarkEmailRead className="icon"/>
                        <input type="email" id="email" placeholder="E-Mailadresse eingeben" value={emailadress} onChange={(e) => setEmail(e.target.value)}/>
                        </div>
                    </div>

                    <div className="inputDiv">
                        <label htmlFor="username">Nutzername</label>
                        <div className="input flex">
                        <FaUserShield className="icon" />
                        <input type="text" id="username" placeholder="Nutzernamen eingeben" value={username} onChange={(e) => setUsername(e.target.value)} />
                        </div>
                    </div>

                    <div className="inputDiv">
                        <label htmlFor="password">Passwort</label>
                        <div className="input flex">
                        <BsFillShieldLockFill className="icon" />
                        <input type="password" id="password" placeholder="Passwort eingeben" value={password} onChange={(e) => setPassword(e.target.value)}/>
                        </div>
                    </div>

                    <button type="submit" className="btn flex">
                        <span>Register</span>
                        <AiOutlineSwapRight className="icon" />
                    </button>
                </form>
            </div>
        </div>
        </div>
    )
}

export default Register