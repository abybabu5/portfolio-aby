import React, {Component} from 'react';
import "./NavMob.css"
import {Link} from "react-router-dom";

class NavMob extends Component {
    state = {burgerCheckBox: false}
    closeMenu = () => {
        this.setState({burgerCheckBox: false});
    }
    onCheckChange = (e) => {
        this.setState({burgerCheckBox: e.target.checked})
    }

    render() {
        return (
            <div>
                <div className="menu-wrap">
                    <input type="checkbox" checked={this.state.burgerCheckBox}
                           onChange={(e) => this.onCheckChange(e)} className="toggler"/>
                    <div className="hamburger">
                        <div>

                        </div>
                    </div>
                    <div className="menu">
                        <div>
                            <div>
                                <ul>
                                    <li onClick={this.closeMenu}><Link style={{textDecoration: 'none', color: 'white'}}
                                                                       className="nav-div-head-mobile"
                                                                       to="/">
                                        <div className="header-title-mobile">&lt;MyPortfolio/&gt;</div>
                                    </Link></li>
                                    <li className="nav-div-mobile nav-div-title-mobile" onClick={this.closeMenu}><Link
                                        style={{textDecoration: 'none'}} to="/cv">
                                        <div className="nav-cv-mobile">CV</div>
                                    </Link></li>
                                    <li className="nav-div-mobile nav-div-title" onClick={this.closeMenu}><Link
                                        style={{textDecoration: 'none'}} to="/intro">
                                        <div className="nav-cv-mobile nav-cv-mobile-about-me">About me</div>
                                    </Link></li>
                                    <li className="nav-div-mobile nav-div-title-mobile" onClick={this.closeMenu}><Link
                                        style={{textDecoration: 'none'}} to="/projects">
                                        <div className="nav-cv-mobile">Projects</div>
                                    </Link></li>
                                    <li className="nav-div-mobile nav-div-title-mobile" onClick={this.closeMenu}><Link
                                        style={{textDecoration: 'none'}} to="/contact">
                                        <div className="nav-cv-mobile">Contact</div>
                                    </Link></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
            //
            //     <div className="showcase">
            // <div className="container showcase-inner">
            // <h1>Welcome</h1>
            // <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas maiores sint impedit delectus quam
            // molestiae explicabo cum facere ratione veritatis.</p>
            // <a href="#" className="btn">Read More</a>
            // </div>
            // </div>

        )
            ;
    }
}

export default NavMob;
