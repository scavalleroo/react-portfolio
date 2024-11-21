import profilePic from '../assets/img/Face2.png';
import Menu from '../components/Menu/Menu';
import '../App.css';
import Footer from '../components/Footer/Footer';
import { useState } from 'react';
import Education from '../components/Answers/Education';
import WorkExperience from '../components/Answers/WorkExperience';
import SelectedWork from '../components/Answers/SelectedWork';
import Contacts from '../components/Answers/Contacts';
import React, { useRef, useEffect } from 'react';

function AskToMe() {
    const divRefs = useRef([]);  // This stores refs for each message div
    const [messages, setMessages] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const questions = [
        "What is your Work Experience?",
        "What is your Education?",
        "Can you show me some of your work?",
        "How can I contact you?"
    ]
    const lizardRef = useRef(null);
    const menuRef = useRef(null);
    const ballRef = useRef(null);
    const imagesRefs = useRef([]);
    const helloMessageRef = useRef([]);
    const askMeRef = useRef(null);
    const bubbleChatRef = useRef(null);
    const answersRef = useRef([]);
    const nameSenderRef = useRef(null);
    const nameSendersRef = useRef([]);

    const addMessage = (sender, newMessage) => {
        setMessages(prevMessages => [
            ...prevMessages,
            { id: prevMessages.length + 1, sender: sender, text: newMessage }
        ]);
    };

    useEffect(() => {
        const ball = ballRef.current;
        const images = imagesRefs.current;
        const userMessages = divRefs.current;
        const lizard = lizardRef.current;
        const menu = menuRef.current;
        const helloMessages = helloMessageRef.current;
        const askMe = askMeRef.current;
        const bubbleChat = bubbleChatRef.current;
        const answers = answersRef.current;
        const nameSender = nameSenderRef.current;
        const nameSenders = nameSendersRef.current;

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

            images.forEach((image, index) => {
                if (!image) return;
                const imageRect = image.getBoundingClientRect();
                // Check overlap with lizard and move it
                if (
                    ballRect.left < imageRect.right &&
                    ballRect.right > imageRect.left &&
                    ballRect.top < imageRect.bottom &&
                    ballRect.bottom > imageRect.top
                ) {
                    const moveX = ballRect.left < imageRect.left ? 5 : -5;
                    const moveY = ballRect.top < imageRect.top ? 5 : -5;
                    image.style.transform = `translate(${moveX}px, ${moveY}px)`;
                } else {
                    image.style.transform = 'translate(0, 0)';
                }
            });

            let messageFound = null;
            let helloMessageFound = [];
            let answerFound = null;
            let indexAnswerFound = null;

            if (helloMessages.length > 0) {
                helloMessages.forEach((message, index) => {
                    if (!message) return;
                    const messageRect = message.getBoundingClientRect();
                    // Check overlap with lizard and move it
                    if (
                        ballRect.left < messageRect.right &&
                        ballRect.right > messageRect.left &&
                        ballRect.top < messageRect.bottom &&
                        ballRect.bottom > messageRect.top
                    ) {
                        helloMessageFound.push(message);
                    } else {
                        helloMessageFound.slice(helloMessageFound.indexOf(message));
                        message.classList.remove('white-text');
                    }
                });

                answers.forEach((answer, index) => {
                    if (!answer) return;
                    const answerRect = answer.getBoundingClientRect();
                    // Check overlap with lizard and move it
                    if (
                        ballRect.left < answerRect.right &&
                        ballRect.right > answerRect.left &&
                        ballRect.top < answerRect.bottom &&
                        ballRect.bottom > answerRect.top
                    ) {
                        answerFound = answer;
                        indexAnswerFound = index;
                    } else {
                        answer.style.background = '#E9EBF2';
                        answer.style.color = '#000000';
                        nameSenders[index].style.color = '#000000';
                    }
                });

                if (helloMessageFound.length > 0) {
                    ball.style.width = '180px';
                    ball.style.height = '180px';
                    ball.style.background = '#000000';
                    askMe.style.background = '#000000';
                    nameSender.style.color = '#EAEAEA';
                    bubbleChat.style.background = '#1E1E1E';
                    bubbleChat.style.color = '#91939e';
                    bubbleChat.style.fontSize = '24px';
                    answers.forEach((answer) => {
                        if (!answer) return;
                        answer.style.background = '#1E1E1E';
                        answer.style.color = '#EAEAEA';
                    });
                    nameSenders.forEach((nameSender) => {
                        if (!nameSender) return;
                        nameSender.style.color = '#EAEAEA';
                    });
                    helloMessageFound.forEach((message) => {
                        if (!message) return;
                        message.classList.add('white-text');
                    });
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
                        if (!answerFound) {
                            nameSender.style.color = '#000000';
                            askMe.style.background = '#F8F9FA';
                            bubbleChat.style.background = '#E9EBF2';
                            bubbleChat.style.color = '#000000';
                        }
                        bubbleChat.style.fontSize = '16px';
                    }
                }
            }

            if (answerFound !== null) {
                askMe.style.background = '#000000';
                answerFound.style.background = '#1E1E1E';
                answerFound.style.color = '#EAEAEA';
                nameSender.style.color = '#EAEAEA';
                bubbleChat.style.background = '#1E1E1E';
                bubbleChat.style.color = '#91939e';
                nameSenders[indexAnswerFound].style.color = '#EAEAEA';
            } else {
                if (helloMessageFound.length === 0) {
                    askMe.style.background = '#F8F9FA';
                    bubbleChat.style.background = '#E9EBF2';
                    bubbleChat.style.color = '#000000';
                }
            }

            if (userMessages.length === 0) {
                if (
                    mouseX < menuRect.right &&
                    mouseX > menuRect.left &&
                    mouseY < menuRect.bottom &&
                    mouseY > menuRect.top
                ) {
                    ball.style.width = '0px';
                    ball.style.height = '0px';
                } else {
                    if (helloMessageFound.length === 0) {
                        ball.style.width = '64px';
                        ball.style.height = '64px';
                        ball.style.border = 'none';
                        ball.style.background = '#91939e12';
                        if (!answerFound) {
                            askMe.style.background = '#F8F9FA';
                            bubbleChat.style.background = '#E9EBF2';
                            bubbleChat.style.color = '#000000';
                        }
                        bubbleChat.style.fontSize = '16px';
                    }
                }
            } else {
                userMessages.forEach((message, index) => {
                    if (!message) return;
                    const messageRect = message.getBoundingClientRect();
                    // Check overlap with lizard and move it
                    if (
                        ballRect.left < messageRect.right &&
                        ballRect.right > messageRect.left &&
                        ballRect.top < messageRect.bottom &&
                        ballRect.bottom > messageRect.top
                    ) {
                        messageFound = message;
                    } else {
                        message.children[1].style.background = '#0101ED';
                        message.children[1].classList.remove('blue');
                    }
                });

                if (messageFound) {
                    ball.style.width = '80px';
                    ball.style.height = '80px';
                    ball.style.background = '#F8F9FA';
                    ball.style.border = '2px solid #0101ED';
                    messageFound.children[1].style.background = 'transparent';
                    messageFound.children[1].classList.add('blue');
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
                        if (helloMessageFound.length === 0) {
                            ball.style.width = '64px';
                            ball.style.height = '64px';
                            ball.style.border = 'none';
                            ball.style.background = '#91939e12';
                            if (!answerFound) {
                                askMe.style.background = '#F8F9FA';
                                bubbleChat.style.background = '#E9EBF2';
                                bubbleChat.style.color = '#000000';
                            }
                            bubbleChat.style.fontSize = '16px';
                        }
                    }
                }
            }

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

    // Handle question click
    const handleQuestionClick = (question) => {
        addMessage('User', question);
        let response;
        switch (question) {
            case questions[0]:
                response = "WorkExperience";
                break;
            case questions[1]:
                response = "Education";
                break;
            case questions[2]:
                response = "SelectedWork";
                break;
            case questions[3]:
                response = "Contacts";
                break;
            default:
                response = "None";
                break;
        }
        addMessage('Alessandro', response);
    };

    useEffect(() => {
        if (!isLoading) {
            if (divRefs.current && divRefs.current[divRefs.current.length - 1]) {
                divRefs.current[divRefs.current.length - 1].scrollIntoView({ behavior: 'smooth' });
            }
        }
        setIsLoading(true);
        const timer = setTimeout(() => {
            setIsLoading(false)
        }, 600)
        return () => clearTimeout(timer)
    }, [messages]);

    return (
        <div className="AskToMe" ref={askMeRef}>
            <div className="ball" ref={ballRef}></div>
            <div className='content displayMobile'>
                <Menu title="Ask Me" menuRef={menuRef} lizardRef={lizardRef} />
                <div className='chatSpace'>
                    <div className='myMessageChat'>
                        <img alt='Alessandro Face' src={profilePic} className='profilePicChat' ref={el => imagesRefs.current[0] = el} />
                        <div className='messageSide'>
                            <div className='nameSender' ref={nameSenderRef}>Alessandro</div>
                            <div className='bubbleChat' ref={bubbleChatRef}>
                                <span ref={el => helloMessageRef.current[0] = el}>Ciao 👋, </span>
                                <span ref={el => helloMessageRef.current[1] = el}>I’m Alessandro. </span>
                                <span ref={el => helloMessageRef.current[2] = el}>I’m an </span>
                                <span ref={el => helloMessageRef.current[3] = el}>early stage </span>
                                <span className='orange'>UX Designer </span>
                                <span ref={el => helloMessageRef.current[4] = el}>looking </span>
                                <span className='orange'>for new challenges </span>
                                <br />
                                <span ref={el => helloMessageRef.current[5] = el}>What would </span>
                                <span ref={el => helloMessageRef.current[6] = el}>you like to </span>
                                <span ref={el => helloMessageRef.current[7] = el}>know about me? </span>
                            </div>
                        </div>
                    </div>

                    <div className='conversation'>
                        {messages.map((message, index) => (
                            <div key={index}>
                                {message.sender === 'User' ? (
                                    <div className='userMessage' ref={el => divRefs.current[index] = el}>
                                        <div className='title'>You</div>
                                        <div className='bubbleUser'>{message.text}</div>
                                    </div>
                                ) : (
                                    !(isLoading && index === messages.length - 1) ? (
                                        <div className='myMessageChat'>
                                            <img src={profilePic} alt='Alessandro Face' className='profilePicChat' ref={el => imagesRefs.current[index] = el} />
                                            <div className='messageSide'>
                                                <div className='nameSender' ref={el => nameSendersRef.current[index] = el}>Alessandro</div>
                                                {message.text === 'WorkExperience' ? <WorkExperience refObj={el => answersRef.current[index] = el} /> :
                                                    message.text === 'Education' ? <Education refObj={el => answersRef.current[index] = el} /> :
                                                        message.text === 'SelectedWork' ? <SelectedWork refObj={el => answersRef.current[index] = el} />
                                                            : <Contacts refObj={el => answersRef.current[index] = el} />}
                                            </div>
                                        </div>
                                    ) : (
                                        <div className="shimmer">
                                            <div className='longLine'></div>
                                            <div className='shortLine'></div>
                                        </div>
                                    )
                                )}
                            </div>
                        ))}
                    </div>

                    <div className='userMessage'>
                        <div className='title'>Ask me something...</div>
                        <div className='questions'>
                            <div className='question' onClick={() => { handleQuestionClick(questions[0]) }}>{questions[0]}</div>
                            <div className='question' onClick={() => { handleQuestionClick(questions[1]) }}>{questions[1]}</div>
                        </div>
                        <div className='questions'>
                            <div className='question' onClick={() => { handleQuestionClick(questions[2]) }}>{questions[2]}</div>
                            <div className='question' onClick={() => { handleQuestionClick(questions[3]) }}>{questions[3]}</div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
}

export default AskToMe;
