import React, {Component} from 'react';
import {FaLinkedinIn, FaGithub, FaTwitter, FaYoutube} from 'react-icons/fa';
import photo from "../../images/Aby-landing.jpg"
import "./Landing.css";
import img from "../../images/24919.jpg";
import {Link} from "react-router-dom";
import jsIcon from "../../icons/iconfinder_187_Js_logo_logos_4373213.png";
import nodeJsIcon from "../../icons/iconfinder_233_Node_Js_logo_4375017.png";
import bsIcon from "../../icons/iconfinder_Bootstrap_682700.png";
import html from "../../icons/iconfinder_html5_386722.png";
import react from "../../icons/iconfinder_react_js_1322468.png";
import mongdb from "../../icons/icons8-mongodb-512.png";
import pgAdmin from "../../icons/icons8-postgresql-512.png";
import sass from "../../icons/icons8-sass-512.png";
import express from "../../icons/icons8-js-80.png";
import css from "../../icons/icons8-css3-512.png";


class Landing extends Component {
    render() {
        return (
            <div>
                <img src={img} id="bg" alt="landing-image"/>
                <div className="landing-grid">
                    <div>
                        <div className="banner-text">
                            <div className="card-container-landing">
                                <div className="card">
                                    <div className="card__left">
                                        <div className="card__animated-arrow">

                                        </div>
                                        <div className="card-top-left__btn">Aby Babu</div>
                                        <div className="card-left-middle__content"><Link to="/intro"><img
                                            style={{borderRadius: "50%", width: "150px"}} src={photo} alt=""/></Link>
                                        </div>
                                        <div className="card-artist__type">
                                            <span>Javascript Enthusiast</span>
                                            <br/>
                                            <span>Technology addict</span>
                                        </div>

                                    </div>
                                    <div className="stack-dev-title">
                                        <h1>Front End Web Developer</h1>
                                        <hr/>
                                        <div className="stack-dev-para">
                                            <p> HTML/CSS | Bootstrap | Sass </p>
                                            <p> JavaScript | React </p>


                                            {/*<p>NodeJS | Express | MongoDB | PostgreSQL</p>*/}
                                        </div>
                                        <div className="social-links">
                                            <div className="landing-icons">
                                                {/* LinkedIn */}
                                                <a href="https://www.linkedin.com/in/aby-babu-4b80a7155/"
                                                   rel="noopener noreferrer"
                                                   target="_blank">
                                                    <div className="icon-svg">
                                                        <FaLinkedinIn/>
                                                    </div>
                                                </a>
                                            </div>
                                            <div className="landing-icons">
                                                {/* Github */}
                                                <a href="https://github.com/abybabu5" rel="noopener noreferrer"
                                                   target="_blank" style={{textDecoration: 'none'}}>
                                                    <div className="icon-svg">
                                                        <FaGithub/>
                                                    </div>
                                                </a>
                                            </div>

                                            <div className="landing-icons">
                                                {/* Twitter */}
                                                <a href="https://twitter.com/abybabu5" rel="noopener noreferrer"
                                                   target="_blank"
                                                   style={{textDecoration: 'none'}}>
                                                    <div className="icon-svg">
                                                        <FaTwitter/>
                                                    </div>
                                                </a>
                                            </div>
                                            <div className="landing-icons">
                                                {/* Youtube */}
                                                <a href="https://www.youtube.com/channel/UChkNXg_OwCsNiDWgCw_WJFQ?view_as=subscriber"
                                                   rel="noopener noreferrer" target="_blank"
                                                   style={{textDecoration: 'none'}}>
                                                    <div className="icon-svg">
                                                        <FaYoutube/>
                                                    </div>
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Landing;
