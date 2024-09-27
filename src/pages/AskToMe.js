import profilePic from '../assets/img/Face.png';
import Menu from '../components/Menu/Menu';
import '../App.css';
import Footer from '../components/Footer/Footer';
import { useState } from 'react';
import Education from '../components/Answers/Education';

function AskToMe() {

    const [messages, setMessages] = useState([]);
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
                response = "1";
                break;
            case questions[1]:
                response = "2";
                break;
            case questions[2]:
                response = "3";
                break;
            case questions[3]:
                response = "4";
                break;
        }
        addMessage('Alessandro', response);
    };

    return (
        <div className="App">
            <Menu />
            <div className='titlePage'>
                Ask to Me
            </div>
            <div className='chatSpace'>
                <div className='myMessageChat'>
                    <img src={profilePic} className='profilePicChat' />
                    <div className='messageSide'>
                        <div className='nameSender'>Alessandro</div>
                        {/* <div className='bubbleChat'>
                            Ciao 👋, I’m Alessandro. I’ve recently <span>graduated in HCID</span> and I’m aspiring to be <span>UX Designer</span> in a leading innovative company. My mission is to design and <span>enhance User Experience and adoption</span> of digital tools.
                        </div> */}
                        <Education />
                    </div>
                </div>

                <div className='conversation'>
                    {messages.map(message => (
                        <div>
                            {message.sender === 'User' ? (
                                <div className='userMessage'>
                                    <div className='title'>You</div>
                                    <div className='bubbleUser'>{message.text}</div>
                                </div>
                            ) : (
                                <div className='myMessageChat'>
                                    <img src={profilePic} className='profilePicChat' />
                                    <div className='messageSide'>
                                        <div className='nameSender'>Alessandro</div>
                                        <Education />
                                    </div>
                                </div>
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
            <Footer />
        </div>
    );
}

export default AskToMe;
