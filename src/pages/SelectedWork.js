import { Link } from 'react-router-dom';
import Menu from '../components/Menu/Menu';
import '../App.css';
import Footer from '../components/Footer/Footer';
import ProjectCard from '../components/ProjectCard/ProjectCard';
import React, { useState, useEffect } from 'react';

function SelectedWork() {
    const [projects, setProjects] = useState([]);

    // Fetch the JSON data when the component mounts
    useEffect(() => {
        fetch('data/allProjects.json')
            .then((response) => response.json())
            .then((data) => setProjects(data))
            .catch((error) => console.error('Error fetching data:', error));
    }, []);


    return (
        <div className="AskToMe">
            <div className='content'>
                <div className='leftPanel'>
                    <div className='disclamer'>
                        Not Another <Link to="/"><div className='textColorChange underline'>Portfolio</div></Link>
                    </div>
                    <div className='titlePage'>
                        Selected Work
                    </div>
                    <Menu />
                </div>
                <div className='gallery'>
                    {projects.map((project, index) => (
                        <ProjectCard key={index} project={project} />
                    ))}
                </div>
            </div>
            <Footer />
        </div>
    );
}

export default SelectedWork;