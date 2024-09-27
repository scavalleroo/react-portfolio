import profilePic from '../assets/img/Face.png';
import { Link } from 'react-router-dom';
import Footer from '../components/Footer/Footer';
import React, { useState, useEffect } from 'react';
import '../App.css';

function Home() {
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
                Not Another <Link to="/"><div className='textColorChange'>Portfolio</div></Link>
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
                    <Link to="/asktome" className='button'>Ask To Me</Link>
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
            <Footer />
        </div>
    );
}

export default Home;
