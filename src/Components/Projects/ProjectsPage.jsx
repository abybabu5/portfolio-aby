import React, {Component} from 'react';
import img from "../../images/24919.jpg";
import spotifyCover from "../../cover-img/spotify-cover.PNG";
import capstoneCover from "../../cover-img/capstone-cover.PNG";
import linkedInCover from "../../cover-img/linkedIn-cover.PNG";
import covid19Cover from "../../cover-img/covid19-cover.PNG";
import "./ProjectsPage.scss";
import "./Project.scss";
import ProjectCard from "./ProjectCard";


class ProjectsPage extends Component {
    render() {
        return (
            <div className="project-page">
                <img src={img} id="bg" alt="landing-image"/>
                <div className="container-card-project">
                    <div className="row content-center align-items-center">
                        <div className="container-fluid d-flex justify-content-center">
                            <div className="row">
                                <div className="col-md-4">
                                    <ProjectCard imgsrc={spotifyCover} title="Spotify Mock-up FE"
                                                 projectLink="/spotifyDemo"
                                                 pageClass="spotify"
                                                 text="SPOTIFY Challenge: Spotify Mock-up made in ReactJs using deezer API"/>
                                </div>
                                <div className="col-md-4">
                                    <ProjectCard imgsrc={capstoneCover} title="Ideal Place to Work FE"
                                                 projectLink="/capstoneDemo"
                                                 text="CAPSTONE Team Project: Ideal place to work made in React using google API"/>
                                </div>
                                <div className="col-md-4">
                                    <ProjectCard imgsrc={linkedInCover} title="LinkedIn Mock-up FE"
                                                 projectLink="/linkedInDemo"
                                                 text="LINKEDIN Team Project: Mock-up made in React using the API made by the Team"/>
                                </div>
                                <div className="col-md-4">
                                    <ProjectCard imgsrc={covid19Cover} title="Covid19 Tracker Italy FE"
                                                 projectLink="/Covid19trackerDemo"
                                                 pageClass="covid"
                                                 text="Covid19 Tracker: App Made in React using an API to get the world info & exported .json file from the public repo of Dept. of Civil Protection Italy "/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default ProjectsPage;
