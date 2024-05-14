import React, { useState } from "react";
import './Login.css';
import '../../App.css';
import video from '../../LoginAssets/Login_vid.mp4';
import logo from '../../LoginAssets/Logo_blauweiss.png';
import { useNavigate, Link } from 'react-router-dom';
import { FaUserShield } from "react-icons/fa";
import { BsFillShieldLockFill } from "react-icons/bs";
import { AiOutlineSwapRight } from "react-icons/ai";


const Login = ({ setIsLoggedIn }) => {

   
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [loginMessage, setLoginMessage] = useState('');
    const navigate = useNavigate();
    
    const handleLogin = (e) => {
        e.preventDefault(); // Verhindert das Neuladen der Seite beim Submit
        if (username === '' && password === '') {
            setLoginMessage('');
            setIsLoggedIn(true);
            navigate('/startseite'); // Pfad zur Startseite
        } else {
            setLoginMessage('Falscher Nutzername oder Passwort!');
        }
    };
    

    return (
        <div className="loginPage flex">
        <div className="container flex"  style={{ boxShadow: 'rgba(100, 100, 111, 0.8) 0px 7px 29px 0px' }}>
            <div className="videoDiv">
                <video src={video} autoPlay muted loop></video>

                <div className="textDiv">
                    <h2 className="title">Analysiere Daten einfach und schnell</h2>
                    <p>Hier kann ein Text stehen</p>
                </div>

                <div className="footerDiv flex">
                   <span className="text">Du hast noch keinen Account?</span> 
                   <Link to={'/register'}>
                   <button className="btn">Zur Registrierung</button>
                   </Link>
                </div>
            </div>

            <div className="formDiv flex">
                <div className="headerDiv">
                    <img src={logo} alt="Logo" />
                    <h3>Willkommen zurück!</h3>
                </div>

                <form onSubmit={handleLogin} className="form grid">
                    <span className={`showMessage ${loginMessage ? 'isActive' : ''}`}>{loginMessage}</span>
                    <div className="inputDiv">
                        <label htmlFor="username">Nutzername</label>
                        <div className="input flex">
                        <FaUserShield className="icon" />
                        <input type="text" id="username" placeholder="Nutzernamen eingeben" value={username} onChange={(e) => setUsername(e.target.value)}/>
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
                        <span>Login</span>
                        <AiOutlineSwapRight className="icon" />
                    </button>
                    

                    <span className="forgetPassword">
                        Passwort vergessen? <a href=""> Klick mich </a>
                    </span>
                </form>
            </div>
        </div>
        </div>
    )
}

export default Login