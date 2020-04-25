import React, {Component} from 'react';
import img from "../../images/working-pattern-internet-abstract-1089438.jpg";
import ProjectsPage from "./ProjectsPage";
import spotifyCover from "../../cover-img/spotify-cover-img.PNG";
import "./ProjectsPage.css";
import "./Project.css";


class Project extends Component {
    render() {
        return (
            <div className="bootstrap-iso">
                <div className="container">
                    <div className="row content-center align-items-center">
                        <div className="container-fluid d-flex justify-content-center">
                            <div className="col-md-4">
                                <ProjectsPage imgsrc={spotifyCover} title="Spotify Mock-up"
                                              text="Spotify Mock-up made in ReactJs using deezer API"/>
                            </div>
                            {/*<div className="col-md-4">*/}
                            {/*    <ProjectsPage/>*/}
                            {/*</div>*/}
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
