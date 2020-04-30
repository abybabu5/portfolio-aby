import React, {Component} from 'react';
import "./Project.css";
import {Link} from "react-router-dom";
import {FaLink, TiArrowBack} from "react-icons/all";
import img from "../../images/24919.jpg";


class CapstoneDemo extends Component {
    render() {
        return <div>
            <div className="container">
                <img src={img} id="bg" alt="landing-image"/>
                <div className="row content-center align-items-center top-margin">
                    <div className="col-9">

                        <div className="textFont-demo">
                            <h1 className="title-heading">IDEAL PLACE TO WORK</h1>
                            <div className="video-container">
                                <div className="video-box">
                                    {/*<ReactPlayer url="https://www.youtube.com/watch?v=LxeDm_cSkHU"/>*/}

                                    <div style={{position: "relative", paddingBottom: "56.25%", height: 0,}}>
                                        <iframe src="https://www.loom.com/embed/1163a84522394128bce74557af3c14da"
                                                frameBorder="0"
                                                webkitallowfullscreen
                                                mozallowfullscreen
                                                allowFullScreen
                                                style={{position: "absolute", top: 0, left: 0, width: "100%", height: "100%",}}>
                                        </iframe>
                                    </div>

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
                                                           href="https://github.com/abybabu5/Ideal-place-to-work-FE"
                                                           target="_blank">
                                                            <div className="text-decoration">Repo URL <span
                                                                className="url-span"><FaLink/></span></div>
                                                        </a></div>
                                                </button>
                                            </div>
                                        </div>
                                        <div className="url-links">
                                            <button className="url2">
                                                <div>
                                                    <a className="text-decoration-none"
                                                       href="http://idealplace-to-work-fe.herokuapp.com/"
                                                       target="_blank">
                                                        <div className="text-decoration">Live URL <span
                                                            className="url-span"><FaLink/></span></div>
                                                    </a></div>
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="container-bottom-project">
                                <button className="url-btn"> <div className="go-back-projects">
                                    <Link to="/projects" className="go-back-projects-link">
                                        <div className="arrow-back"><TiArrowBack/>
                                            <div className="go-back-project-text">Go back to Projects</div>
                                        </div>
                                    </Link>
                                </div></button>
                            </div>
                        </div>


                    </div>
                </div>
            </div>
        </div>
            ;
    }
}

export default CapstoneDemo;
