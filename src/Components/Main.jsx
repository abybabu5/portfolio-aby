import React, {Component} from 'react';
import {Switch, Route, BrowserRouter as Router} from 'react-router-dom';
import Landing from "./LadingPage/Landing";
import Intro from "./Intro/Intro"
import Contact from "./Contact/Contact";
import CV from "./Resume/CV";
import Navigation from "./NavBar/Navigation";
import Nav from "./NavBar/Nav"
import ProjectsPage from "./Projects/ProjectsPage";
import SpotifyDemo from "./Projects/SpotifyDemo";
import Capstone from "./Projects/CapstoneDemo";
import LinkedInDemo from "./Projects/LinkedInDemo";
import Covid19Demo from "./Projects/Covid19Demo";
import img from "../images/24919.jpg";

class Main extends Component {
    state = {
        isMobile: window.innerWidth < 768
    }
    tools = {
        spotify: ["GitHub", "Trello", "Git", "Postman", "Heroku", "ReactJS", "HTML/CSS", "Bootstrap", "PHPStorm"],
        capstone: ["GitHub", "Trello", "Git", "Postman", "Heroku", "ReactJS", "HTML/CSS", "Bootstrap", "PHPStorm"],
        linkedin: ["GitHub", "Trello", "Git", "Postman", "Heroku", "ReactJS", "Redux", "HTML/CSS", "Bootstrap", "PHPStorm"],
        covid19: ["GitHub", "Trello", "Git", "Postman", "Heroku", "ReactJS", "HTML/CSS", "Bootstrap", "PHPStorm"]
    }

    constructor() {
        super();
        window.addEventListener("resize", (e) => {
            this.setState({isMobile: e.target.innerWidth < 768});
        });
    }

    render() {
        return (
            <>
                <Router>

                    <div className="main-container">
                        {this.state.isMobile ? <Nav/> : <Navigation/>}
                        <img src={img} id="bg" alt="landing-image"/>
                        <div>
                            <Switch>
                                <Route exact path="/">
                                    <Landing/>
                                </Route>
                                <Route path="/intro">
                                    <Intro/>
                                </Route>
                                <Route path="/contact">
                                    <Contact/>
                                </Route>
                                <Route path="/cv">
                                    <CV/>
                                </Route>
                                <Route path="/projects">
                                    <ProjectsPage pageClass="spotify-page"/>
                                </Route>
                                <Route path="/spotifyDemo">
                                    <SpotifyDemo
                                        videoLink="https://www.loom.com/embed/7538b2cdeaec4c9a94f734b76f55a69e"
                                        title="Spotify Mock up" tools={this.tools.spotify}/>
                                </Route>
                                <Route path="/capstoneDemo">
                                    <Capstone
                                        videoLink="https://www.loom.com/embed/1163a84522394128bce74557af3c14da"
                                        title="Ideal Place to Work FE" tools={this.tools.capstone}/>
                                </Route>
                                <Route path="/linkedInDemo">
                                    <LinkedInDemo
                                        videoLink="https://www.loom.com/embed/b0f08e65b6d1415e8cad051511763dab"
                                        title="LinkedIn Mock-up FE" tools={this.tools.linkedin}/>
                                </Route>
                                <Route path="/Covid19trackerDemo">
                                    <Covid19Demo
                                        videoLink="https://www.loom.com/embed/c3d532b7a42a44c2a3540d92180452b2"
                                        title="COVID19 TRACKER ITALY 2020" tools={this.tools.covid19}/>
                                </Route>
                            </Switch>
                        </div>
                    </div>
                </Router>
            </>
        );
    }
}

export default Main;
