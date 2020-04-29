import React, {Component} from 'react';
import img from "../../images/24919.jpg";
import {FaSkype, FaTelegram, MdEmail, MdPhoneAndroid} from "react-icons/all";
import avatar from "../../images/avatar.png"
import "./Contact.css"


class Contact extends Component {
    render() {
        return (
            <div>
                <img src={img} id="bg" alt="landing-image"/>
                <div className="container contact-container">
                    <div className="row content-center align-items-center top-margin">
                        <div className="col-9">
                        <div className="textFont-contact">
                            <img src={avatar} className="aby-foto-two" alt=""/>
                                <div className="contact-icons-div">
                                    <div className="col-3 contact-title">
                                        Contact Me
                                    </div>
                                <div className="contact-icons"><MdPhoneAndroid/><div className="contact-text">+393246945616</div></div>
                                <div className="contact-icons"><MdEmail/><div className="contact-text">abybabu5(at)gmail.com</div></div>
                                <div className="contact-icons"><FaTelegram/><div className="contact-text">@abybabu</div></div>
                                <div className="contact-icons"><FaSkype/><div className="contact-text">aby.babu1990</div></div>
                                </div>
                            </div>
                    </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Contact;
