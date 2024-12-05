import Menu from '../components/Menu/Menu';
import '../App.css';
import Footer from '../components/Footer/Footer';
import ProjectCard from '../components/ProjectCard/ProjectCard';
import React, { useState, useEffect, useRef } from 'react';

function SelectedWork() {
    const [projects, setProjects] = useState([]);
    const ballRef = useRef(null);
    const lizardRef = useRef(null);
    const menuRef = useRef(null);
    const mainRef = useRef(null);
    const appRef = useRef(null);
    const textRefs = useRef([]);

    // Fetch the JSON data when the component mounts
    useEffect(() => {
        fetch('data/allProjects.json')
            .then((response) => response.json())
            .then((data) => setProjects(data))
            .catch((error) => console.error('Error fetching data:', error));

        const ball = ballRef.current;
        const lizard = lizardRef.current;
        const menu = menuRef.current;
        const main = mainRef.current;
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


    return (
        <div className="AskToMe" ref={appRef}>
            <div className="ball" ref={ballRef}></div>
            <div className='content displayMobile'>
                <Menu title="Selected Work" menuRef={menuRef} lizardRef={lizardRef} />
                <div className='main' ref={mainRef}>
                    <div className='bigMe galleryTitle'>
                        <span ref={el => textRefs.current[0] = el}>Projects </span>
                        <span ref={el => textRefs.current[1] = el}>designed </span>
                        <span ref={el => textRefs.current[2] = el}>around </span>
                        <span ref={el => textRefs.current[3] = el} className='orange'>People </span>
                    </div>
                    <div className='gallery'>
                        {projects.map((project, index) => (
                            <ProjectCard key={index} project={project} />
                        ))}
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
}

export default SelectedWork;
