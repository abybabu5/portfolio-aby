import React from 'react';
import {Link} from "react-router-dom";
import "./ProjectCard.scss";


const ProjectCard = (props) => {

    return (
        <div className={'project-card ' + props.pageClass}>
            <div className="container">
                <div className="row-project content-center align-items-center">
                    <div className="col-4 container-card">
                        <div className="card-container">
                            <img src={props.imgsrc} alt="coverImg1" className="card-img-top"
                                 style={{width: '100%'}}/>
                        </div>
                        <div className="card-body">
                            <h4 className="card-title">{props.title}</h4>
                            <div style={{marginBottom: "10px"}}>
                                <hr/>
                            </div>
                            <div className="card-text-div-hover">
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
        </div>
    );
}

export default ProjectCard;
