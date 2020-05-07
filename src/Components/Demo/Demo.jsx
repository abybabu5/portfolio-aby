import React, {Component} from 'react';
import "../Projects/ProjectsPage.scss";
import {Link} from "react-router-dom";
import {FaLink, TiArrowBack} from "react-icons/all";


class Demo extends Component {
    render() {
        return <div>
            <div className="container">
                <div className="row content-center align-items-center top-margin linkedIn">
                    <div className="col-9">

                        <div className="textFont-demo">
                            <div className="top-line">
                                <div className="container-bottom-project">
                                    <button className="url-btn">
                                        <div className="go-back-projects">
                                            <Link to="/projects" className="go-back-projects-link">
                                                <div className="arrow-back"><TiArrowBack/></div>
                                            </Link>
                                        </div>
                                    </button>
                                </div>
                                <div className="div-title-container">

                                    <h1 className="title-heading">{this.props.title}</h1></div>
                                <div className="spacer-title"/>
                            </div>
                            <div className="video-container">
                                <div className="video-box">
                                    <div style={{position: "relative", paddingBottom: "56.25%", height: 0,}}>
                                        <iframe src={this.props.videoLink}
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
                                        <div className="paragraphText-project">
                                            <div className="project-management">
                                                {this.props.tools.map(tool => {
                                                    return <li className="tool">
                                                        <div>{tool}</div>
                                                    </li>
                                                })}
                                            </div>
                                            <div className="url-div">
                                                <div className="url-links">
                                                    <div className="url-links">
                                                        <button className="url1">
                                                            <div>
                                                                <a className="text-decoration-none"
                                                                   href={this.props.repoUrl}
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
                                                               href={this.props.liveUrl}
                                                               target="_blank">
                                                                <div className="text-decoration">Live URL <span
                                                                    className="url-span"><FaLink/></span></div>
                                                            </a></div>
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                </div>
                            </div>

                        </div>

                    </div>
                </div>
            </div>
        </div>
            ;
    }
}

export default Demo;
