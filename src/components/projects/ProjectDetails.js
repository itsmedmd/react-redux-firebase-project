import React from 'react'

const ProjectDetails = (props) => {
    const id = props.match.params.id;
    return (
        <div className="container section project-details">
            <div className="card z-depth-0">
                <div className="card-conent">
                    <span className="card-title">Project Title - {id}</span>
                    <p>lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem </p>
                </div>
                <div className="card-action grey lighten-4 grey-text">
                    <div>Posted by DMD</div>
                    <div>11th August, 11:03AM</div>
                </div>
            </div>
        </div>
    )
}

export default ProjectDetails;
