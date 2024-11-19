import lizard from '../assets/icons/chameleon_white.svg';
import { Link } from 'react-router-dom';
import Footer from '../components/Footer/Footer';
import React, { useState, useEffect, useRef } from 'react';
import '../App.css';

function Home() {
    const [myName, setMyName] = useState("Alessandro,");
    const [fadeClass, setFadeClass] = useState('fade-in');
    const ballRef = useRef(null);
    const headerRef = useRef(null);
    const textRefs = useRef([]);
    const lizardRef = useRef(null);
    const menuRef = useRef(null);
    const appRef = useRef(null);

    useEffect(() => {
        const texts = ["Alessandro,", "@scavalleroo,"];
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

    useEffect(() => {
        const ball = ballRef.current;
        const header = headerRef.current;
        const lizard = lizardRef.current;
        const menu = menuRef.current;
        const app = appRef.current;

        let mouseX = 0;
        let mouseY = 0;

        let ballX = 0;
        let ballY = 0;

        let speed = 0.1;

        // Update ball position
        function animate() {
            // Determine distance between ball and mouse
            let distX = mouseX - ballX;
            let distY = mouseY - ballY;

            // Find position of ball and some distance * speed
            ballX = ballX + (distX * speed);
            ballY = ballY + (distY * speed);

            ball.style.left = ballX + "px";
            ball.style.top = ballY + "px";

            requestAnimationFrame(animate);
        }

        animate();

        // Move ball with cursor
        document.addEventListener("mousemove", function (event) {
            mouseX = event.pageX;
            mouseY = event.pageY;
        });

        // Detect when ball is over headerHome
        function checkOverlap() {
            const ballRect = ball.getBoundingClientRect();
            const headerRect = header.getBoundingClientRect();
            const lizardRect = lizard.getBoundingClientRect();
            const menuRect = menu.getBoundingClientRect();

            if (
                mouseX < headerRect.right &&
                mouseX > headerRect.left &&
                mouseY < headerRect.bottom &&
                mouseY > headerRect.top
            ) {
                ball.style.width = '256px';
                ball.style.height = '256px';
                ball.style.background = '#000000';
                app.style.background = '#000000';
            } else {
                if (
                    mouseX < menuRect.right &&
                    mouseX > menuRect.left &&
                    mouseY < menuRect.bottom &&
                    mouseY > menuRect.top
                ) {
                    ball.style.width = '0px';
                    ball.style.height = '0px';
                } else {
                    ball.style.width = '64px';
                    ball.style.height = '64px';
                    ball.style.background = '#91939e12';
                    app.style.background = '#F8F9FA';
                }
            }

            // Check overlap with text elements
            textRefs.current.forEach(text => {
                if (!text) return;
                const textRect = text.getBoundingClientRect();
                if (
                    ballRect.left < textRect.right &&
                    ballRect.right > textRect.left &&
                    ballRect.top < textRect.bottom &&
                    ballRect.bottom > textRect.top
                ) {
                    text.classList.remove('grey-text');
                    text.classList.add('white-text');
                } else {
                    text.classList.remove('white-text');
                    text.classList.add('grey-text');
                }
            });

            // Check overlap with lizard and move it
            if (
                ballRect.left < lizardRect.right &&
                ballRect.right > lizardRect.left &&
                ballRect.top < lizardRect.bottom &&
                ballRect.bottom > lizardRect.top
            ) {
                const moveX = ballRect.left < lizardRect.left ? 5 : -5;
                const moveY = ballRect.top < lizardRect.top ? 5 : -5;
                lizard.style.transform = `translate(${moveX}px, ${moveY}px)`;
            } else {
                lizard.style.transform = 'translate(0, 0)';
            }

            requestAnimationFrame(checkOverlap);
        }

        checkOverlap();

        // Clean up event listener on component unmount
        return () => {
            document.removeEventListener("mousemove", function (event) {
                mouseX = event.pageX;
                mouseY = event.pageY;
            });
        };
    }, []);


    return (
        <div className="App" ref={appRef}>
            <div className="ball" ref={ballRef}></div>
            <div className='topBar'>
                <Link to="/"><img src={lizard} alt="lizard" width="40" height="40" className='lizard' ref={lizardRef} /></Link>
                <div className='callToActions' ref={menuRef}>
                    <div className='buttonAction'>
                        <Link to="/asktome" className='button'>Ask Me</Link>
                    </div>
                    <div className='buttonAction'>
                        <Link to="/selectedwork" className='button'>Selected Work</Link>
                    </div>
                    <div className='buttonAction'>
                        <Link to="/contactme" className='button'>Contact Me</Link>
                    </div>
                </div>
            </div>
            <div className='centerHome'>
                <div className='headerHome' ref={headerRef}>
                    <div className='myName'>
                        <div className='bigMe'><span ref={el => textRefs.current[0] = el}>Hello,</span> <span ref={el => textRefs.current[8] = el}>I'm</span></div> <div className={`bigMe orange ${fadeClass}`}>{myName}</div>
                    </div>
                    <div className='bigMe'><span ref={el => textRefs.current[1] = el}>Early</span> <span className='orange'>UX/UI Designer</span> <span ref={el => textRefs.current[2] = el}>with</span> <span ref={el => textRefs.current[3] = el}>the</span> <span ref={el => textRefs.current[4] = el}>goal</span> <span ref={el => textRefs.current[5] = el}>of</span> <span ref={el => textRefs.current[6] = el}>creating</span> <span ref={el => textRefs.current[7] = el}>products</span> <span className='orange'>driven by innovation.</span></div>
                </div>
            </div>
            <Footer />
        </div>
    );
}

export default Home;
