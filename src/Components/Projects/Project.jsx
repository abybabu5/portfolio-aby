import React, {Component} from 'react';
import Spotify from "./Spotify";
import img from "../../images/working-pattern-internet-abstract-1089438.jpg";
import spotifyCover from "../../cover-img/spotify-cover.PNG";
import capstoneCover from "../../cover-img/capstone-cover.PNG"
import linkedInCover from "../../cover-img/linkedIn-cover.PNG"
import "./ProjectsPage.css";
import "./Project.css";
import Capstone from "./Capstone";


class Project extends Component {
    render() {
        return (
            <div className="bootstrap-iso">
                <img src={img} id="bg" alt="landing-image"/>
                <div className="container-card-project">
                    <div className="row content-center align-items-center">
                        <div className="container-fluid d-flex justify-content-center">
                            <div className="row-cols-4">
                                <div className="col-md-4">
                                    <Spotify imgsrc={spotifyCover} title="Spotify Mock-up FE"
                                             text="SPOTIFY Challenge: Spotify Mock-up made in ReactJs using deezer API"/>
                                </div>
                                <div className="col-md-4">
                                    <Capstone imgsrc={capstoneCover} title="Ideal Place to Work FE"
                                              text="CAPSTONE Team Project: Ideal place to work made in React using google API"/>
                                </div>
                                <div className="col-md-4">
                                    <Capstone imgsrc={linkedInCover} title="LinkedIn Mock-up FE"
                                              text="LINKEDIN Team Project: Mock-up made in React using the API made by the Team"/>
                                </div>
                            </div>

                            {/*<div className="col-md-4">*/}
                            {/*    <ProjectsPage/>*/}
                            {/*</div>*/}
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Project;
