import React from 'react';
import {Link} from "react-router-dom";
import "./ProjectsPage.scss";


const Spotify = (props) => {

    return (
        <div>
            <div className="container">
                <div className="row content-center align-items-center">
                    <div className="col-4 container-card">
                        <div className="card-container">
                            <img src={props.imgsrc} alt="coverImg1" className="card-img-top"
                                 style={{width: '100%'}}/>
                        </div>
                        <div className="card-body">
                            <h4 className="card-title">{props.title}</h4>
                            <hr/>
                            <div className="card-text-div">
                                <p className="card-text">{props.text}</p>
                            </div>
                            <hr/>
                            <div className="button-div">
                                <button className="btn-project"><Link to="/spotifyDemo" className="link-decoration">
                                    <div className="go-to-the-project">Go to the Project</div>
                                </Link></button>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Spotify;
