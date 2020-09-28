import React, {Component} from 'react';
import "./Navigation.css"
import {Link} from "react-router-dom";
import {FaGithub, FaLinkedinIn} from "react-icons/fa";
//import {FaBars} from "react-icons/all";

class Navigation extends Component {
    state = {burgerCheckBox: false}
    onCheckChange = (e) => {
        console.log(e.target.checked);
        this.setState({burgerCheckBox: e.target.checked})
    }
    closeMenu = () => {
        this.setState({burgerCheckBox: false});
    }

    render() {
        return (

            <div className="nav-div-container">
                <div className="spacer-title"></div>
                <Link style={{textDecoration: 'none', color: 'white'}} className="nav-div-head" to="/">
                    <div className="header-title-web">&lt;MyPortfolio/&gt;</div>
                </Link>
                <div className="spacer"></div>
                {/*<div className="hamburger-web"><label htmlFor="toggle"><FaBars/></label>*/}
                {/*    <input type="checkbox" id="toggle" checked={this.state.burgerCheckBox}*/}
                {/*           onChange={(e) => this.onCheckChange(e)}/>*/}
                {/*    <div className="menu-burger-web">*/}
                <div className="nav-div nav-div-title" onClick={this.closeMenu}>
                    <Link style={{textDecoration: 'none'}} to="/cv">
                        <div className="nav-cv">Resume</div>
                    </Link>
                </div>
                <div className="nav-div nav-div-title" onClick={this.closeMenu}>
                    <Link style={{textDecoration: 'none'}} to="/intro">
                        <div className="nav-cv">About me</div>
                    </Link>
                </div>
                <div className="nav-div nav-div-title" onClick={this.closeMenu}>
                    <Link style={{textDecoration: 'none'}} to="/projects">
                        <div className="nav-cv">Projects</div>
                    </Link>
                </div>
                <div className="nav-div nav-div-title" onClick={this.closeMenu}>
                    <Link style={{textDecoration: 'none'}} to="/contact">
                        <div className="nav-cv">Contact</div>
                    </Link>
                </div>
                <div className="nav-div nav-div-title">
                    <div className="">
                        {/* LinkedIn */}
                        <a href="https://www.linkedin.com/in/aby-babu-4b80a7155/"
                           rel="noopener noreferrer"
                           target="_blank">
                            <div className="icon-svg">
                                <FaLinkedinIn/>
                            </div>
                        </a>
                    </div>
                    <div className="">
                        {/* Github */}
                        <a href="https://github.com/abybabu5" rel="noopener noreferrer"
                           target="_blank" style={{textDecoration: 'none'}}>
                            <div className="icon-svg">
                                <FaGithub/>
                            </div>
                        </a>
                    </div>
                </div>
            </div>

        );
    }
}

export default Navigation;
