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

    const addMessage = (sender, newMessage) => {
        setMessages(prevMessages => [
            ...prevMessages,
            { id: prevMessages.length + 1, sender: sender, text: newMessage }
        ]);
    };

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
        }
        addMessage('Alessandro', response);
    };

    useEffect(() => {
        if (!isLoading) {
            if (divRefs.current && divRefs.current[divRefs.current.length - 1]) {
                divRefs.current[divRefs.current.length - 1].scrollIntoView({ behavior: 'smooth' });
            }
        }
        // setIsLoading(true);
        // const timer = setTimeout(() => {
        //     setIsLoading(false)
        // }, 600)
        // return () => clearTimeout(timer)
    }, [messages]);

    return (
        <div className="AskToMe">
            <div className='content displayMobile'>
                <Menu title="Ask Me" />
                <div className='chatSpace'>
                    <div className='myMessageChat'>
                        <img src={profilePic} className='profilePicChat' />
                        <div className='messageSide'>
                            <div className='nameSender'>Alessandro</div>
                            <div className='bubbleChat'>
                                Ciao 👋, I’m Alessandro. I’ve recently <span>graduated in HCID</span> and I’m aspiring to be <span>UX Designer</span> in a leading innovative company. My mission is to design and <span>enhance User Experience and adoption</span> of digital tools.
                            </div>
                        </div>
                    </div>

                    <div className='conversation'>
                        {messages.map((message, index) => (
                            <div>
                                {message.sender === 'User' ? (
                                    <div className='userMessage' ref={el => divRefs.current[index] = el} key={index}>
                                        <div className='title'>You</div>
                                        <div className='bubbleUser'>{message.text}</div>
                                    </div>
                                ) : (
                                    !(isLoading && index === messages.length - 1) ? (
                                        <div className='myMessageChat' key={index}>
                                            <img src={profilePic} className='profilePicChat' />
                                            <div className='messageSide'>
                                                <div className='nameSender'>Alessandro</div>
                                                {message.text === 'WorkExperience' ? <WorkExperience /> :
                                                    message.text === 'Education' ? <Education /> :
                                                        message.text === 'SelectedWork' ? <SelectedWork />
                                                            : <Contacts />}
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
