import profilePic from '../assets/img/Face2.png';
import Menu from '../components/Menu/Menu';
import '../App.css';
import AppFunctions from '../utils/AppFunctions';
import Footer from '../components/Footer/Footer';
import { useEffect, useRef, useState } from 'react';
import { sendEventContactMe, sendEventCopyToClipboard } from '../utils/analytics';

function ContactMe() {
    const appFunctionsRef = useRef(null);
    const ballRef = useRef(null);
    const lizardRef = useRef(null);
    const menuRef = useRef(null);
    const appRef = useRef(null);
    const textRefs = useRef([]);
    const mainRef = useRef(null);
    const messageAreaRef = useRef(null);
    const contactsRef = useRef(null);
    const [activeMenu, setActiveMenu] = useState("email");

    const handleEmailClick = () => {
        appFunctionsRef.current.handleEmailClick();
        sendEventContactMe('contact_me_page');
    };

    useEffect(() => {
        const ball = ballRef.current;
        const lizard = lizardRef.current;
        const menu = menuRef.current;
        const app = appRef.current;
        const main = mainRef.current
        const messageArea = messageAreaRef.current;

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

        function checkOverlap() {
            const ballRect = ball.getBoundingClientRect();
            if (!lizard || !menu) return;
            const lizardRect = lizard.getBoundingClientRect();
            const menuRect = menu.getBoundingClientRect();
            const mainRect = main.getBoundingClientRect();

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

            if (mouseX < mainRect.right &&
                mouseX > mainRect.left &&
                mouseY < mainRect.bottom &&
                mouseY > mainRect.top
            ) {
                ball.style.width = '256px';
                ball.style.height = '256px';
                ball.style.background = '#000000';
                app.style.background = '#000000';
                messageArea.style.color = '#FFFFFF';
                messageArea.style.background = '#1E1E1E';
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
                    ball.style.border = 'none';
                    ball.style.background = '#91939e12';
                    app.style.background = '#F8F9FA';
                    messageArea.style.color = 'black';
                    messageArea.style.background = '#FFFFFF';
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

    const handleCopyClick = () => {
        if (messageAreaRef.current) {
            messageAreaRef.current.select();
            sendEventCopyToClipboard(messageAreaRef.current.value);
            document.execCommand('copy');
        }

    };

    return (
        <div className="AskToMe" ref={appRef}>
            <div className="ball" ref={ballRef}></div>
            <AppFunctions ref={appFunctionsRef} />
            <div className='content displayMobile'>
                <Menu title="Contact Me" lizardRef={lizardRef} menuRef={menuRef} />
                <div className='rightPanel' ref={mainRef}>
                    <div className='bigMe galleryTitle'>
                        <span ref={el => textRefs.current[0] = el}>Let's </span>
                        <span ref={el => textRefs.current[1] = el}>get </span>
                        <span ref={el => textRefs.current[2] = el}>in </span>
                        <span ref={el => textRefs.current[3] = el} className='orange'>touch </span>
                    </div>
                    <div className='mh-16'>
                        {/* <h1 className='grey-text'>Write me to brake the ice</h1> */}
                        <div className='contactApp'>
                            <div className='sidebar'>
                                <h1 className='grey-text' ref={contactsRef}>Contacts</h1>
                                <div className={`menuElement ${activeMenu === 'email' ? 'active' : ''}`} onClick={() => setActiveMenu('email')}>Email</div>
                                <div className={`menuElement ${activeMenu === 'linkedin' ? 'active' : ''}`} onClick={() => setActiveMenu('linkedin')}>LinkedIn</div>
                            </div>
                            <div className='textarea-container'>
                                <div className='profileInfo'>
                                    <img alt='Alessandro Face' src={profilePic} className='profilePicChat' />
                                    <div className='profileDetails'>
                                        <div className='name' onClick={
                                            activeMenu === 'email' ? handleEmailClick :
                                                () => window.open('https://www.linkedin.com/in/alecava/', '_blank')
                                        }>Alessandro Cavallotti</div>
                                        <div className='grey-text role'
                                            onClick={
                                                activeMenu === 'email' ? handleEmailClick :
                                                    () => window.open('https://www.linkedin.com/in/alecava/', '_blank')
                                            }>{activeMenu === 'email' ? 'cavallotti.alessandro00@gmail.com' : 'LinkedIn profile'}</div>
                                    </div>
                                </div>
                                <button className='copyButton' onClick={handleCopyClick}>Copy</button>
                                <textarea className='messageArea' placeholder='e.g: Hello, can we schedule a meeting?' rows={10} ref={messageAreaRef}></textarea>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </div >
    );
}

export default ContactMe;
