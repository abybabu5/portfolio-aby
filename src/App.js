import React, {Component} from 'react';
import './App.css';
import Landing from "./Components/LadingPage/Landing";
import Navigation from "./Components/NavBar/Navigation";


class App extends Component {
    render() {
        return (
            <div>
                <Navigation/>
                <Landing/>
            </div>

        );
    }
}

export default App;
