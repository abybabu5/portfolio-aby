import React, {Component} from 'react';
import {Switch, Route, BrowserRouter as Router} from 'react-router-dom';
import Landing from "./LadingPage/Landing";
import Intro from "./Intro/Intro"
import Contact from "./Contact/Contact";
import CV from "./Resume/CV";
import Navigation from "./NavBar/Navigation";
import ProjectsPage from "./Projects/ProjectsPage";
import SpotifyDemo from "./Projects/SpotifyDemo";
import Capstone from "./Projects/CapstoneDemo";
import LinkedInDemo from "./Projects/LinkedInDemo";

class Main extends Component {
    render() {
        return (
            <>
                <Router>
                    <div className="main-container">
                        <Navigation/>
                        <Switch>
                            <Route exact path="/"><Landing/></Route>
                            <Route path="/intro"><Intro/></Route>
                            <Route path="/contact"><Contact/></Route>
                            <Route path="/cv"><CV/></Route>
                            <Route path="/projects"><ProjectsPage/></Route>
                            <Route path="/spotifyDemo"><SpotifyDemo/></Route>
                            <Route path="/capstoneDemo"><Capstone/></Route>
                            <Route path="/linkedInDemo"><LinkedInDemo/></Route>

                        </Switch>
                    </div>
                </Router>
            </>
        );
    }
}

export default Main;
