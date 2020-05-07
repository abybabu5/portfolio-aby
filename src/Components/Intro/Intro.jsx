import React, {Component} from 'react';
import img from "../../images/24919.jpg";
import abyPhoto from "../../images/Aby DP-min-min.jpg";
// import 'bootstrap/dist/css/bootstrap.min.css';
import "./Intro.css"
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

class Intro extends Component {
    render() {
        return (
            <div>
                <img src={img} id="bg" alt="landing-image"/>
                <div className="container intro-container">
                    <div className="row content-center align-items-center top-margin">
                        <div className="col-9">
                            <div className="textFont-intro">
                                <div className="col-3">
                                    <img alt="AbyPhoto" src={abyPhoto} className="aby-foto" style={{width: '100%'}}/>
                                </div>
                                <div className="title">About me
                                    <div className="paragraphText">
                                        My name is Aby Babu.
                                        I am an English-language professional- Full-Stack Developer, services consultant
                                        working with people and
                                    organisations
                                    in the
                                    field of Information Technology in Italy. <br/>
                                    Recently I finished Full-Stack Development course from Strive School Berlin (Batch Oct19).
                                    Previously I had the opportunity to work in different projects as an Environmental Health and Safety specialist in Oil& gas, Manufacturing, Industrial Construction and Electromechanical engineering (Shah gas Abu Dhabi, Tram- Dubai, Reliance Industries PVT ltd India, and Sterlite Industries PVT ltd India)
                                    and after I moved to Italy I started to work in the IT field.
                                        I offer a broad application of skills across a diverse range of professional
                                        service
                                        functions -
                                        from
                                        training and coaching to project consulting -
                                        with a clear focus on supporting public policy organisations and objectives.
                                        Software
                                        Development and
                                        Web
                                        Design Provider, providing best in quality
                                        and class technologies for my clients.</div>
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
                                            <img src={jsIcon} style={{width: "40px"}} alt=""/>
                                        </div>
                                        <div className="about-me-icons">
                                            <img src={nodeJsIcon} style={{width: "40px"}} alt=""/>
                                        </div>


                                        <div className="about-me-icons">
                                            <img src={react} style={{width: "40px"}} alt=""/>
                                        </div>
                                        <div className="about-me-icons">
                                            <img src={mongdb} style={{width: "40px"}} alt=""/>
                                        </div>
                                        <div className="about-me-icons">
                                            <img src={pgAdmin} style={{width: "40px"}} alt=""/>
                                        </div>
                                        <div className="about-me-icons">
                                            <img src={sass} style={{width: "40px"}} alt=""/>
                                        </div>
                                        <div className="about-me-icons">
                                            <img src={express} style={{width: "40px"}} alt=""/>
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
