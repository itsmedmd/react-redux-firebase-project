import React from 'react';

const ProjectSummary = ({ project }) => {
    return (
        <div className="card z-depth-0 project-summary">
            <div className="card-conent grey-text text-darken-3">
                <span className="card-title">{project.title}</span>
                <p>Posted by DMD</p>
                <p className="grey-text">11th August, 11:03AM</p>
            </div>
        </div>
    )
}

export default ProjectSummary;