import React, {Component} from 'react';
import img from "../../images/working-pattern-internet-abstract-1089438.jpg";
import {FaLinkedinIn, FaGithub, FaTwitter, FaYoutube} from 'react-icons/fa';
/// import 'bootstrap/dist/css/bootstrap.min.css';
import "./Landing.css";

class Landing extends Component {
    render() {
        return (
            <div>
                <img src={img} id="bg" alt="landing-image"/>
                <div className="landing-grid">
                    <div>
                        <img
                            src= "https://media-exp1.licdn.com/dms/image/C5603AQFFoeaG2n8k2w/profile-displayphoto-shrink_200_200/0?e=1592438400&v=beta&t=HcaNmjyl8Ym9Dbe-9hztPz34EdgR7_-eqRMIs6XBGeA"
                            //src="https://i.imgur.com/xHgzd7f.jpg"
                            alt="avatar"
                            className="avatar-img"
                        />
                        <div className="banner-text">
                          <h1>Full Stack Web Developer</h1>
                            <hr/>
                            <p>HTML/CSS | Bootstrap | JavaScript | React </p>
                            <p>NodeJS | Express | MongoDB | PostgreSQL</p>
                            <div className="social-links">
                                <div className="landing-icons">
                                    {/* LinkedIn */}
                                    <a href="https://www.linkedin.com/in/aby-babu-4b80a7155/" rel="noopener noreferrer" target="_blank" >
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
                                    <a href="http://google.com" rel="noopener noreferrer" target="_blank" style={{textDecoration: 'none'}} >
                                        <div className="icon-svg">
                                            <FaTwitter />
                                        </div>
                                    </a>
                                </div>
                                <div className="landing-icons">
                                    {/* Youtube */}
                                    <a href="http://google.com" rel="noopener noreferrer" target="_blank" style={{textDecoration: 'none'}} >
                                        <div className="icon-svg">
                                        <FaYoutube />
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
