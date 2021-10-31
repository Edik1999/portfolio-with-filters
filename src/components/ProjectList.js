import React from 'react';

const ProjectList = ({projects, selectedFilter}) => {
    return (
        <div className={"projects " + selectedFilter}>
            {projects.map((el,index) => {
                return ( 
                    <div className="projects-item" key={index}>
                        <img src={el.img} alt="portfolio item"/>
                    </div>
                )
            })}
        </div>
    );
}

export default ProjectList;
