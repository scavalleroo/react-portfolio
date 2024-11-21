import ProjectCard from '../ProjectCard/ProjectCard';
import { Link } from 'react-router-dom';
import React, { useEffect, useState, useRef } from 'react';
import AppFunctions from '../../utils/AppFunctions';
import './Answers.css';

const SelectedWork = ({ refObj }) => {
    const [isVisible, setIsVisible] = useState(false);
    const [popularProjects, setPopularProjects] = useState([]);
    const [recentProjects, setRecentProjects] = useState([]);

    const appFunctionsRef = useRef(null);

    // Fetch the JSON data when the component mounts
    useEffect(() => {
        fetch('data/mostPopular.json')
            .then((response) => response.json())
            .then((data) => setPopularProjects(data))
            .catch((error) => console.error('Error fetching data:', error));


        fetch('data/mostRecent.json')
            .then((response) => response.json())
            .then((data) => setRecentProjects(data))
            .catch((error) => console.error('Error fetching data:', error));

        setTimeout(setIsVisible(true), 1400);
    }, []);

    return (
        <div className={`bubbleCustom ${isVisible ? 'visible' : ''}`} ref={refObj}>
            <AppFunctions ref={appFunctionsRef} />
            <div className='content gap-0'>
                <div className='title-gallery'>Most popular projects</div>
                <div className='gallery'>
                    {popularProjects.map((project, index) => (
                        <ProjectCard key={index} project={project} />
                    ))}
                </div>
                <div className='title-gallery'>Most recent projects</div>
                <div className='gallery'>
                    {recentProjects.map((project, index) => (
                        <ProjectCard key={project.id * 100} project={project} />
                    ))}
                </div>
                <div className='callToAction'>
                    <div className='title'>
                        Do you want to know more about my work?
                    </div>
                    <div className='buttons'>
                        <Link to="/selectedwork" className='rightButton'>
                            See all the projects
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SelectedWork;