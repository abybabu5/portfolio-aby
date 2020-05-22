import React from 'react';
import {Link} from "react-router-dom";
import "./ProjectCard.scss";


const ProjectCard = (props) => {

    return (
        <div className="project-card-container">
            <div className="row-project content-center align-items-center">
                <div className={"container-card " + props.pageClass}>
                    <div className="card-container-project">
                        <div className="image-project" style={{backgroundColor: "antiquewhite"}}><img
                            className="card-img-top-projects"
                            style={{borderRadius: "20px", boxShadow: "0px 9px 14px 2px rgba(0, 0, 0, 0.43)"}}
                            src={props.imgsrc}
                            alt="coverImg1"/></div>
                    </div>
                    <div className="card-body">
                        <h4 className="card-title">{props.title}</h4>
                        <hr/>
                        <div className="card-text-div">
                            <p className="card-text">{props.text}</p>
                        </div>
                        <div className="card-text-div">
                            <p className="card-text">{props.note}</p>
                        </div>
                        <hr/>
                        <div className="button-div">
                            <Link to={props.projectLink} className="link-decoration">
                                <div className="btn-project">
                                    <div className="go-to-the-project">Go to the Project</div>
                                </div>
                            </Link>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
}

export default ProjectCard;
