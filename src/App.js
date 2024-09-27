import profilePic from './assets/img/Face.png';
import email from './assets/icons/email.png';
import github from './assets/icons/github.png';
import linkedin from './assets/icons/linkedin.png';
import instagram from './assets/icons/instagram.png';
import React, { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [myName, setMyName] = useState("Alessandro,");
  const [fadeClass, setFadeClass] = useState('fade-in');

  useEffect(() => {
    const texts = ["Alessandro,", "Ale,", "@scavalleroo,", "Cava,"];
    let index = 0;

    const interval = setInterval(() => {
      setFadeClass('fade-out'); // Start fade-out before changing the text

      setTimeout(() => {
        index = (index + 1) % texts.length;
        setMyName(texts[index]);
        setFadeClass('fade-in'); // Start fade-in with the new text
      }, 500); // Delay to match fade-out duration

    }, 3000); // Changes every 3 seconds

    // Clean up the interval on component unmount
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="App">
      <div className='disclamer'>
        Not Another <div className='textColorChange'>Portfolio</div>
      </div>
      <div className='header'>
        <div className='myName'>
          <div className='bigMe'>Hi, </div>I'm <div className={`blue ${fadeClass}`}>{myName}</div>
        </div>
        <div className='funny textColorChange'>UX/UI Designer</div>
        <div className='msc'>
          MSc in Human Computer Interaction,
        </div>
        <div className='funny textColorChange'>Driven by Innovation</div>
      </div>
      <div className='callToActions'>
        <div className='buttonAction'>
          <div className='button'>Ask To Me</div>
          <div className='myMessage'>
            <img src={profilePic} className='smallProfile' />
            <div className='bubble'>
              Learn more about me
            </div>
          </div>
        </div>
        <div className='buttonAction'>
          <div className='button'>Selected Work</div>
          <div className='myMessage'>
            <img src={profilePic} className='smallProfile' />
            <div className='bubble'>
              Discover the methodology
            </div>
          </div>
        </div>
        <div className='buttonAction'>
          <div className='button'>Contact Me</div>
          <div className='myMessage'>
            <img src={profilePic} className='smallProfile' />
            <div className='bubble'>
              Drop me a message!
            </div>
          </div>
        </div>
      </div>
      <div className='footer'>
        <div className='copyright'>Designed in Paris, France © 2024 Alessandro Cavallotti</div>
        <div className='contacts'>
          <img src={email} className='icon' />
          <img src={linkedin} className='icon' />
          <img src={github} className='icon' />
          <img src={instagram} className='icon' />
        </div>
      </div>
    </div>
  );
}

export default App;
