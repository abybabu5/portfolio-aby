import React, {Component} from 'react';
import "./LandingTerminal.scss"
import {Link} from "react-router-dom";
import img from "../../images/24919.jpg";
import photo from "../../images/Aby-landing (3).jpg";

class LandingTerminal extends Component {
    render() {
        return (
            <div>
                <div id="terminal">
                    <div id={'header'}>
                     <span>

                     </span>
                        <span>

                     </span>
                        <span>

                     </span>
                    </div>
                    <div id="body">

                        <p>Front End Web Developer &spades; <span>_</span></p>
                        <div id="txt">

                        </div>
                        <div className="card">
                            <div className="card__left">
                                <div className="card-top-left__btn">Aby Babu</div>
                                <div className="card-left-middle__content"><Link to="/intro"><img
                                    style={{borderRadius: "50%", width: "150px", height: "150px"}} src={photo} alt=""/></Link>
                                </div>

                            </div>
                            <div>
                                <p className="intro-text">[
                                    "HTML/CSS",<br/> "Bootstrap",<br/> "Sass",<br/> "JavaScript",<br/> "React" ]</p>
                            </div>


                        </div>
                    </div>
                </div>
                {/*<div className="card-artist__type">*/}
                {/*    <p>Javascript Enthusiast</p>*/}
                {/*    <br/>*/}
                {/*    <p>Technology addict</p>*/}
                {/*</div>*/}
            </div>
        );
    }
}

export default LandingTerminal;
