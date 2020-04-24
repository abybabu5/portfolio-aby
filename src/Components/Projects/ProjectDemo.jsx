import React, {Component} from 'react';
import img from "../../images/working-pattern-internet-abstract-1089438.jpg";
import ReactPlayer from "react-player";
import "./Project.css";
import {Link} from "react-router-dom";
import {TiArrowBack} from "react-icons/all";


class ProjectDemo extends Component {
    render() {
        return (
            <div>
                <img src={img} id="bg" alt="landing-image"/>
                <div className="container">
                    <div className="row content-center align-items-center top-margin">
                        <div className="col-9">

                            <div className="textFont-demo">
                                <h1 className="title-heading">SPOTIFY MOCK-UP</h1>
                                <div className="video-container">
                                    <div className="video-box">
                                        <ReactPlayer url='https://youtu.be/LxeDm_cSkHU'/>
                                    </div>
                                    <div className="col-3 tools-div">
                                        <div className="title-project">Project Management Tools
                                            <div className="paragraphText">
                                                <ul className="project-management">
                                                    <li>
                                                        <div className="tool">Github</div>
                                                    </li>
                                                    <li>
                                                        <div className="tool">Trello</div>
                                                    </li>
                                                    <li>
                                                        <div className="tool">Postman</div>
                                                    </li>
                                                    <li>
                                                        <div className="tool">Heroku</div>
                                                    </li>
                                                    <li>
                                                        <div className="tool">ReactJS</div>
                                                    </li>
                                                    <li>
                                                        <div className="tool">HTML/CSS</div>
                                                    </li>
                                                    <li>
                                                        <div className="tool">Bootstrap</div>
                                                    </li>
                                                    <li>
                                                        <div className="tool">PHPStorm</div>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                        <div className="url-div">
                                            <div className="url-links">
                                                <div className="url-links">
                                                    <button className="url1">
                                                        <div>
                                                            <a className="text-decoration-none"
                                                               href="https://github.com/abybabu5/spotify-deezer-aby"
                                                               target="_blank">
                                                                <div className="text-decoration">Repo URL</div>
                                                            </a></div>
                                                    </button>
                                                </div>
                                            </div>
                                            <div className="url-links">
                                                <button className="url2">
                                                    <div>
                                                        <a className="text-decoration-none"
                                                           href="http://spotify-deezer-api-fe.herokuapp.com/"
                                                           target="_blank">
                                                            <div className="text-decoration">Live URL</div>
                                                        </a></div>
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="container-bottom-project">
                                    <div className="go-back-projects">
                                        <Link to="/projects"><div className="arrow-back"><TiArrowBack/></div>Go back to Projects</Link>
                                    </div>
                                </div>
                            </div>


                        </div>
                    </div>
                </div>
            </div>

        )
            ;
    }
}

export default ProjectDemo;
