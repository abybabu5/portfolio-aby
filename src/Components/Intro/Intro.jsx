import React, {Component} from 'react';
import img from "../../images/24919.jpg";
import abyPhoto from "../../images/Aby DP-min-min.jpg";
import "./Intro.scss"
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
import rxjs from "../../icons/Rx_Logo-512-512.png";
import npm from "../../icons/icons8-npm-480.png";
import git from "../../icons/iconfinder_social_media_social_media_logo_git_2993773.png";

class Intro extends Component {
    render() {
        return (
            <div className="aboutme-container">
                <img src={img} id="bg" alt="landing-image"/>
                <div className="intro-container">
                    <div className="d-flex">
                        <div className="d-flex">
                            <div className="textFont-intro text-banner">
                                <div className="aby-photo-container">
                                    <img alt="AbyPhoto" src={abyPhoto} className="aby-foto" style={{width: '100%'}}/>
                                </div>
                                <div className="d-flex flex-column right-box">
                                    <div className="title">About me</div>
                                    <div className="paragraphText">
                                        My name is <b>Aby Babu</b>.
                                        I am an English-language professional- Web Developer, services consultant
                                        working with people and
                                        organisations
                                        in the
                                        field of <b>Information Technology in Italy</b>. <br/>
                                        I have finished <b>MERN</b> Full-Stack Development course from <b>Strive
                                        School Berlin (Batch Oct19).</b> Presently I am working in <b><a
                                        href="https://www.retapps.com/" style={{textDecoration: "none", color: "black"}}
                                        rel="noopener noreferrer"
                                        target="_blank"> RetApps Srl</a></b> Milan as
                                        <b> Frontend Developer- Reactjs. </b>
                                        I offer a broad application of skills across a diverse range of professional
                                        service
                                        functions -
                                        from
                                        training and coaching to project consulting -
                                        with a clear focus on supporting public policy organisations and objectives. <b>Software
                                        Development and Web</b> Design Provider, providing best in quality
                                        and class technologies for my clients.
                                    </div>
                                    <div className="about-me">
                                        <div className="about-me-icons">
                                            <img src={html} style={{width: "35px"}} alt=""/>
                                        </div>
                                        <div className="about-me-icons">
                                            <img src={css} style={{width: "40px"}} alt=""/>
                                        </div>
                                        <div className="about-me-icons">
                                            <img src={bsIcon} style={{width: "40px"}} alt=""/>
                                        </div>
                                        <div className="about-me-icons">
                                            <img src={sass} style={{width: "40px"}} alt=""/>
                                        </div>
                                        <div className="about-me-icons">
                                            <img src={jsIcon} style={{width: "40px"}} alt=""/>
                                        </div>
                                        <div className="about-me-icons">
                                            <img src={react} style={{width: "40px"}} alt=""/>
                                        </div>
                                        <div className="about-me-icons">
                                            <img src={npm} style={{width: "40px"}} alt=""/>
                                        </div>
                                        <div className="about-me-icons">
                                            <img src={nodeJsIcon} style={{width: "40px"}} alt=""/>
                                        </div>
                                        <div className="about-me-icons">
                                            <img src={rxjs} style={{width: "40px"}} alt=""/>
                                        </div>

                                        <div className="about-me-icons">
                                            <img src={mongdb} style={{width: "40px"}} alt=""/>
                                        </div>
                                        <div className="about-me-icons">
                                            <img src={pgAdmin} style={{width: "40px"}} alt=""/>
                                        </div>
                                        <div className="about-me-icons">
                                            <img src={express} style={{width: "40px"}} alt=""/>
                                        </div>
                                        <div className="about-me-icons">
                                            <img src={git} style={{width: "40px"}} alt=""/>
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

export default Intro;
