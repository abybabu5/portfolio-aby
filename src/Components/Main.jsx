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

class Main extends Component {
    state = {
        isMobile: window.innerWidth < 768
    }
    tools = {
        spotify: ["GitHub", "Trello", "Git"],
        capstone: ["GitHub"]
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
                                <Capstone/>
                            </Route>
                            <Route path="/linkedInDemo">
                                <LinkedInDemo/>
                            </Route>
                            <Route path="/Covid19trackerDemo">
                                <Covid19Demo/>
                            </Route>
                        </Switch>
                    </div>
                </Router>
            </>
        );
    }
}

export default Main;
