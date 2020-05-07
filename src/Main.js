import React, {Component} from 'react';
import {Switch, Route, BrowserRouter as Router} from 'react-router-dom';
import Landing from "./Components/LadingPage/Landing";
import Intro from "./Components/Intro/Intro"
import Contact from "./Components/Contact/Contact";
import CV from "./Components/Resume/CV";
import Navigation from "./Components/NavBar/Navigation";
import NavMob from "./Components/NavBar/NavMob"
import ProjectsPage from "./Components/Projects/ProjectsPage";
import img from "./images/24919.jpg";
import data from "./Data/Data.json"
import Demo from "./Components/Demo/Demo";

class Main extends Component {
    state = {
        isMobile: window.innerWidth < 768
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
                        {this.state.isMobile ? <NavMob/> : <Navigation/>}
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
                                {data.map(p => {
                                    return (
                                        <Route path={p.route}>
                                            <Demo
                                                videoLink={p.videoLink} repoUrl={p.repoUrl} liveUrl={p.liveUrl}
                                                title={p.title} tools={p.tools} text={p.text}/>
                                        </Route>
                                    )
                                })
                                }
                            </Switch>
                        </div>
                    </div>
                </Router>
            </>
        );
    }
}

export default Main;
