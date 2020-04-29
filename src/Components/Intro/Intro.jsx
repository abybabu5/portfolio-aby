import React, {Component} from 'react';
import img from "../../images/24919.jpg";
import abyPhoto from "../../images/Aby DP-min-min.jpg";
// import 'bootstrap/dist/css/bootstrap.min.css';
import "./Intro.css"

class Intro extends Component {
    render() {
        return (
            <div>
                <img src={img} id="bg" alt="landing-image"/>
                <div className="container">
                    <div className="row content-center align-items-center top-margin">
                        <div className="col-9">
                            <div className="textFont-intro">
                                <div className="col-3">
                                    <img alt="AbyPhoto" src={abyPhoto} className="aby-foto" style={{width: '100%'}}/>
                                </div>
                                <div className="title">About me
                                <div className="paragraphText">
                                    My name is Aby Babu.
                                    I am an English-language professional- Full-Stack Developer, services consultant working with people and
                                    organisations
                                    in the
                                    field of Information Technology in Italy. <br/>
                                    Recently I finished Full-Stack Development course from Strive School Berlin (Batch Oct19).
                                    Previously I had the opportunity to work in different projects as an Environmental Health and Safety specialist in Oil& gas, Manufacturing, Industrial Construction and Electromechanical engineering (Shah gas Abu Dhabi, Tram- Dubai, Reliance Industries PVT ltd India, and Sterlite Industries PVT ltd India)
                                    and after I moved to Italy I started to work in the IT field.
                                    I offer a broad application of skills across a diverse range of professional service
                                    functions -
                                    from
                                    training and coaching to project consulting -
                                    with a clear focus on supporting public policy organisations and objectives.
                                    Software
                                    Development and
                                    Web
                                    Design Provider, providing best in quality
                                    and class technologies for my clients.</div>
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
