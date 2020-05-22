import React, {Component} from 'react';
import img from "../../images/24919.jpg";
// import spotifyCover from "../../../public/cover-img/spotify-cover.PNG";
// import capstoneCover from "../../../public/cover-img/capstone-cover.PNG";
// import linkedInCover from "../../../public/cover-img/linkedIn-cover.PNG";
// import covid19Cover from "../../../public/cover-img/covid19-cover.PNG";
import "./ProjectCard.scss";
import "../Demo/Demo.scss";
import ProjectCard from "./ProjectCard";
import data from "../../Data/Data.json";
import {Switch} from "react-router-dom";


class ProjectsPage extends Component {
    render() {
        return (
            <div className="project-page">
                <img src={img} id="bg" alt="landing-image"/>
                <div className="container-card-project">
                    <div className="projects-container">
                        {data.map(p => {
                            return (
                                <>
                                    <ProjectCard imgsrc={p.image} title={p.title}
                                                 projectLink={p.route}
                                                 pageClass={p.pageClass}
                                                 note={p.note}/>
                                    <div className="spacer-card-project"/>
                                </>
                            )
                        })
                        }
                    </div>
                </div>
            </div>
        );
    }
}

export default ProjectsPage;
