import React from "react";
import './Register.css';
import '../../App.css';
import video from '../../LoginAssets/Login_vid.mp4';
import logo from '../../LoginAssets/Logo_blauweiss.png';
import { Link } from 'react-router-dom';
import { FaUserShield } from "react-icons/fa";
import { BsFillShieldLockFill } from "react-icons/bs";
import { AiOutlineSwapRight } from "react-icons/ai";
import { MdMarkEmailRead } from "react-icons/md";
const Register = () => {
    return (
        <div className="registerPage flex">
        <div className="container flex">
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

                <form action="" className="form grid">

                    <div className="inputDiv">
                        <label htmlFor="email">Email</label>
                        <div className="input flex">
                        <MdMarkEmailRead className="icon"/>
                        <input type="email" id="email" placeholder="E-Mailadresse eingeben" />
                        </div>
                    </div>

                    <div className="inputDiv">
                        <label htmlFor="username">Nutzername</label>
                        <div className="input flex">
                        <FaUserShield className="icon" />
                        <input type="text" id="username" placeholder="Nutzernamen eingeben" />
                        </div>
                    </div>

                    <div className="inputDiv">
                        <label htmlFor="password">Passwort</label>
                        <div className="input flex">
                        <BsFillShieldLockFill className="icon" />
                        <input type="password" id="password" placeholder="Passwort eingeben" />
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