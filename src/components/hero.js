import React from 'react';
import './hero.css'
import heroImage from '../assets/hero_image.JPG'
export default function HeroImage() {
  return (
      <div className='hero'>
            <img src={heroImage} alt="sunset"/>
            <div className='hero-content'>
                <h1>Hello, </h1><h2>I am Kishor.</h2> <br/>
                 <h2>And I Design, Code and Build.</h2>
                 <p>I believe in Techonology for everyone. Code for a better world.</p>
            </div>
      </div>
  );
}