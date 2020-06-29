import React, {Component} from 'react';
import {FaGithub, FaLinkedinIn, FaTwitter, FaYoutube} from 'react-icons/fa';
import photo from "../../images/Aby-landing.jpg"
import "./Landing.scss";
import img from "../../images/24919.jpg";
import {Link} from "react-router-dom";


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
                <div className="landing-grid-mobile">
                    <div className="card__left-mobile">
                        <div className="card-left-container">
                            <div className="card-left-middle__content-mobile"><Link to="/intro"><img
                                style={{borderRadius: "50%", width: "100px"}} src={photo} alt=""/></Link>
                            </div>
                            <div className="card-artist__type">
                                <div className="card-top-left__btn">Aby Babu</div>
                                <div>Javascript Enthusiast</div>
                                <div>Technology addict</div>
                            </div>
                        </div>

                    </div>
                    <div className="lower-container">
                        <div className="stack-dev-title">
                            <div>
                                <h2>Front End Web Developer</h2>
                                <hr/>
                            </div>
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
        );
    }
}

export default Landing;
