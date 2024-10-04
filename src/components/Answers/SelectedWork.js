import ProjectCard from '../ProjectCard/ProjectCard';
import React, { useEffect, useState } from 'react';
import './Answers.css';

const SelectedWork = () => {
    const [isVisible, setIsVisible] = useState(false);
    const [popularProjects, setPopularProjects] = useState([]);
    const [recentProjects, setRecentProjects] = useState([]);

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
        <div className={`bubbleCustom ${isVisible ? 'visible' : ''}`}>
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
                        <ProjectCard key={index} project={project} />
                    ))}
                </div>
                <div className='callToAction'>
                    <div className='title'>
                        Do you want to know more about my work?
                    </div>
                    <div className='buttons'>
                        <div className='leftButton'>
                            See all the projects
                        </div>
                        <div className='rightButton'>
                            Contact me
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SelectedWork;