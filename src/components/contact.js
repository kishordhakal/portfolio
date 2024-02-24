import React from "react";
import { IoIosDocument } from "react-icons/io";
import { FaLinkedin, FaGoogle, FaGithub } from 'react-icons/fa';
import './contact.css'
export default function Contact() {
    return(
        <div className="contact-me">
            <h1>Contact Me</h1>
            <p>If you have some cool projects ideas that we can work on, contct me. </p>
            <p>If you are working on something meaning-full that would help 
                a lot of people, please conact me.</p>
            <p> Lets work towards a better world.</p>
            <div className="social-icons">
                    <a href="https://www.linkedin.com/in/dhakalkishor/"><FaLinkedin size={40} /></a>
                    <a href="mailto:dhakalkishor111@gmail.com"><FaGoogle size={40}/></a>
                    <a href="https://github.com/kishordhakal"><FaGithub size={40}/></a>
                    <a href="https://kishordhakal.github.io/resume/"><IoIosDocument size={40} /></a>    
            </div>
        </div>
);
}