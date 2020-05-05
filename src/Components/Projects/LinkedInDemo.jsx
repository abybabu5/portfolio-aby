import React, {Component} from 'react';
import "./Project.scss";
import {Link} from "react-router-dom";
import {FaLink, TiArrowBack} from "react-icons/all";
import img from "../../images/24919.jpg";


class LinkedInDemo extends Component {
    render() {
        return <div>
            <div className="container">
                <img src={img} id="bg" alt="landing-image"/>
                <div className="row content-center align-items-center top-margin linkedIn">
                    <div className="col-9">

                        <div className="textFont-demo">
                            <h1 className="title-heading">LinkedIn Mock-up</h1>
                            <div className="video-container">
                                <div className="video-box">
                                    <div style={{position: "relative", paddingBottom: "56.25%", height: 0,}}>
                                        <iframe src="https://www.loom.com/embed/b0f08e65b6d1415e8cad051511763dab"
                                                frameBorder="0"
                                                webkitallowfullscreen
                                                mozallowfullscreen
                                                allowFullScreen
                                                style={{
                                                    position: "absolute",
                                                    top: 0,
                                                    left: 0,
                                                    width: "100%",
                                                    height: "100%",
                                                }}>
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
                                                    <div className="tool">ReactJS, Redux</div>
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
                                                           href="https://github.com/abybabu5/FE_linkedIn_MongoDB/tree/OAuth_FB"
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
                                                       href="http://fe-linkedin-aby.herokuapp.com/"
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
                                <button className="url-btn">
                                    <div className="go-back-projects">
                                        <Link to="/projects" className="go-back-projects-link">
                                            <div className="arrow-back"><TiArrowBack/>
                                                <div className="go-back-project-text">Go back to Projects</div>
                                            </div>
                                        </Link>
                                    </div>
                                </button>
                            </div>
                        </div>


                    </div>
                </div>
            </div>
        </div>
            ;
    }
}

export default LinkedInDemo;
