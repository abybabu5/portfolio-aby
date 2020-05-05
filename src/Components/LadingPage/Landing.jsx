import React, {Component} from 'react';
import {FaLinkedinIn, FaGithub, FaTwitter, FaYoutube} from 'react-icons/fa';
import photo from "../../images/Aby-landing.jpg"
import "./Landing.css";
import img from "../../images/24919.jpg";

class Landing extends Component {
    render() {
        return (
            <div>
                <img src={img} id="bg" alt="landing-image"/>
                <div className="landing-grid">
                    <div>
                        <img
                            src={photo}
                            //src="https://i.imgur.com/xHgzd7f.jpg"
                            alt="avatar"
                            className="avatar-img"
                        />
                    </div>
                    <div>
                        <div className="banner-text">
                            <h1>Full Stack Web Developer</h1>
                            <hr/>
                            <p>HTML/CSS | Bootstrap | JavaScript | React </p>
                            <p>NodeJS | Express | MongoDB | PostgreSQL</p>
                            <div className="social-links">
                                <div className="landing-icons">
                                    {/* LinkedIn */}
                                    <a href="https://www.linkedin.com/in/aby-babu-4b80a7155/" rel="noopener noreferrer"
                                       target="_blank">
                                        <div className="icon-svg">
                                            <FaLinkedinIn />
                                        </div>
                                    </a>
                                </div>
                                <div className="landing-icons">
                                    {/* Github */}
                                    <a href="https://github.com/abybabu5" rel="noopener noreferrer" target="_blank" style={{textDecoration: 'none'}} >
                                        <div className="icon-svg">
                                            <FaGithub />
                                        </div>
                                    </a>
                                </div>

                                <div className="landing-icons">
                                    {/* Twitter */}
                                    <a href="https://twitter.com/abybabu5" rel="noopener noreferrer" target="_blank"
                                       style={{textDecoration: 'none'}}>
                                        <div className="icon-svg">
                                            <FaTwitter/>
                                        </div>
                                    </a>
                                </div>
                                <div className="landing-icons">
                                    {/* Youtube */}
                                    <a href="https://www.youtube.com/channel/UChkNXg_OwCsNiDWgCw_WJFQ?view_as=subscriber"
                                       rel="noopener noreferrer" target="_blank" style={{textDecoration: 'none'}}>
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
