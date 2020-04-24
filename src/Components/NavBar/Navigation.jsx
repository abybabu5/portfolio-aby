import React, {Component} from 'react';
import "./Navigation.css"
import {Link} from "react-router-dom";

class Navigation extends Component {
    render() {
        return (

                <div className="nav-div-container">
                    <Link style={{textDecoration: 'none', color: 'white'}} to="/">
                        <div className="header-title">&lt;MyPortfolio/&gt;</div>
                    </Link>
                    <div className="spacer"></div>
                    <div className="nav-div">
                        <Link style={{textDecoration: 'none'}} to="/cv">
                            <div className="nav-cv">CV</div>
                        </Link>
                    </div>
                    <div className="nav-div">
                        <Link style={{textDecoration: 'none'}} to="/intro">
                            <div className="nav-cv">About me</div>
                        </Link>
                    </div>
                    <div className="nav-div">
                        <Link style={{textDecoration: 'none'}} to="/projects">
                            <div className="nav-cv">Projects</div>
                        </Link>
                    </div>
                    <div className="nav-div">
                        <Link style={{textDecoration: 'none'}} to="/contact">
                            <div className="nav-cv">Contact</div>
                        </Link>
                    </div>
                </div>

        );
    }
}

export default Navigation;
