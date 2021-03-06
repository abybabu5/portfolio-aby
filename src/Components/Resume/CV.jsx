import React, {Component} from 'react';
import "./CV.scss";
import img from "../../images/24919.jpg";
import cvPhoto from "../../images/aby_cv_photo.jpg"
import {
    AiOutlineRead,
    FaFacebookSquare, FaLinkedin,
    FaMapMarkerAlt,
    FaMobileAlt, FaMusic,
    FaTwitterSquare,
    FaYoutubeSquare,
    FiGlobe, GiPlantsAndAnimals, MdCardTravel,
    MdEmail,
} from "react-icons/all";
import {Link} from "react-router-dom";


class CV extends Component {
    render() {
        return (
            <div className="main-cv-div">
                <img src={img} id="bg" alt="landing-image"/>
                <div className="container-cv">
                    <div className="resume">
                        <div className="resume_left">
                            <div className="resume_profile">
                                <img
                                    src={cvPhoto}
                                    alt="profile_pic"/>
                            </div>
                            <div className="resume_content">
                                <div className="resume_item resume_info">
                                    <div className="title-div">
                                        <p className="bold">Aby Babu</p>
                                        <p className="regular">Full Stack Web Developer</p>
                                    </div>
                                    <ul>
                                        <li>
                                            <div className="icon">
                                                <FaMapMarkerAlt/>
                                            </div>
                                            <div className="data">
                                                Via Padova 204, Milan <br/> Italy
                                            </div>
                                        </li>
                                        <li>
                                            <div className="icon">
                                                <FaMobileAlt/>
                                            </div>
                                            <div className="data">
                                                +393 246945616
                                            </div>
                                        </li>
                                        <li>
                                            <div className="icon">
                                                <MdEmail/>
                                            </div>
                                            <div className="data">
                                                abyitahse(at)gmail.com
                                            </div>
                                        </li>
                                        <li>
                                            <div className="icon">
                                                <FiGlobe/>
                                            </div>
                                            <div className="data">
                                                <Link className="data-web" to="/" target="_blank"
                                                      style={{textDecoration: "none"}}>www.abybabu.it</Link>
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                                <div className="resume_item resume_skills">
                                    <div className="title">
                                        <p className="bold">skills</p>
                                    </div>
                                    <ul>
                                        <li>
                                            <div className="skill_name">
                                                HTML
                                            </div>
                                            <div className="skill_progress">
                                                <span style={{width: '80%'}}></span>
                                            </div>
                                            <div className="skill_per">80%</div>
                                        </li>
                                        <li>
                                            <div className="skill_name">
                                                CSS
                                            </div>
                                            <div className="skill_progress">
                                                <span style={{width: '70%'}}></span>
                                            </div>
                                            <div className="skill_per">70%</div>
                                        </li>
                                        <li>
                                            <div className="skill_name">
                                                SASS
                                            </div>
                                            <div className="skill_progress">
                                                <span style={{width: '90%'}}></span>
                                            </div>
                                            <div className="skill_per">90%</div>
                                        </li>
                                        <li>
                                            <div className="skill_name">
                                                JS
                                            </div>
                                            <div className="skill_progress">
                                                <span style={{width: '60%'}}></span>
                                            </div>
                                            <div className="skill_per">60%</div>
                                        </li>
                                        <li>
                                            <div className="skill_name">
                                                JQUERY
                                            </div>
                                            <div className="skill_progress">
                                                <span style={{width: '88%'}}></span>
                                            </div>
                                            <div className="skill_per">88%</div>
                                        </li>
                                    </ul>
                                </div>
                                <div className="resume_item resume_social">
                                    <div className="title">
                                        <p className="bold">Social</p>
                                    </div>
                                    <ul>
                                        <li>
                                            <div className="icon">
                                                <FaFacebookSquare/>
                                            </div>
                                            <div className="data">
                                                <p className="semi-bold">Facebook</p>
                                                <p>aby.babu.925</p>
                                            </div>
                                        </li>
                                        <li>
                                            <div className="icon">
                                                <FaTwitterSquare/>
                                            </div>
                                            <div className="data">
                                                <p className="semi-bold">Twitter</p>
                                                <p>abybabu5</p>
                                            </div>
                                        </li>
                                        <li>
                                            <div className="icon">
                                                <FaYoutubeSquare/>
                                            </div>
                                            <div className="data">
                                                <p className="semi-bold">Youtube</p>
                                                <p>abybabu5</p>
                                            </div>
                                        </li>
                                        <li>
                                            <div className="icon">
                                                <FaLinkedin/>
                                            </div>
                                            <div className="data">
                                                <p className="semi-bold">Linkedin</p>
                                                <p>aby-babu-4b80a7155</p>
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="resume_right">
                            <div className="resume_item resume_about">
                                <div className="title">
                                    <p className="bold">INTRODUCTION</p>
                                </div>
                                <p className="semi-bold">Presently Iam working in <b> RetApps Srl</b> as a Frontend
                                    developer. I have completed MERN Full stack development course
                                    (Batch Oct19) from
                                    StriveSchool, Berlin.</p>
                                {/*and presently I am working in the IT field as a translator. Before I worked in Health & Safety*/}
                                {/*management field for different projects in India and in the Emirates.*/}
                            </div>
                            <div className="resume_item resume_work">
                                <div className="title">
                                    <p className="bold">Work Experience</p>
                                </div>
                                <ul>
                                    <li>
                                        <p className="semi-bold"><b>Frontend developer @ RetApps Srl</b>
                                        </p>
                                        <div className="date">06/07/2020- present</div>
                                        <div className="info">

                                            <p className="semi-bold">Smart commerce sector as ReactJs developer
                                            </p>
                                            <p>
                                                <div className="resume_item resume_work">
                                                    <p className="semi-bold"><b>Student @ Strive School</b>
                                                        <div className="date">2019 - 2020</div>
                                                    </p>
                                                    <p className="semi-bold">I have been learning MERN full-stack
                                                        development
                                                        and during the course, we developed several
                                                        different web applications as a team as well as an individual.
                                                    </p>
                                                    <p>
                                                        <div className="bold-title"><b>-Spotify Mock-up</b></div>
                                                        An individual project built using reactjs, where you can listen,
                                                        search
                                                        for songs/artist/albums/artist
                                                        page & post a review with the rating.
                                                        <div className="bold-title"><b>-Linkedin Mock-up</b></div>
                                                        An individual project built using reactjs and redux where you
                                                        can log in
                                                        / register & create your profile,
                                                        add a post, react on other user's posts, chat with other users,
                                                        etc.
                                                        <div className="bold-title"><b> -Ideal Place to Work</b></div>
                                                        Capstone Team project- App made in reactjs where you can search
                                                        for a
                                                        cafe, coworking space, etc
                                                        for working purposes. You can rate a place and filter places by
                                                        fields
                                                        like Google Service, Strong WiFi,
                                                        etc.
                                                        <div className="bold-title"><b>-COVID19 Dashboard (a personal
                                                            project
                                                            which I am presently
                                                            working on)</b></div>
                                                        A simple dashboard with data-tables maps and graphs, app made in
                                                        reactjs
                                                        using different APIs to
                                                        get the world info and exported .json file from the public repo
                                                        of Dept.
                                                        of Civil Protection Italy to get the
                                                        regions and provinces.
                                                    </p>
                                                </div>
                                            </p>
                                        </div>
                                    </li>
                                    {/*<li>*/}
                                    {/*    <div className="date">2015 - 2016</div>*/}
                                    {/*    <div className="info">*/}
                                    {/*        <p className="semi-bold">Translator @ DH9 Srls, Rome</p>*/}
                                    {/*        <p className="semi-bold">Frameworks and translation of web applications IOS,*/}
                                    {/*            Android*/}
                                    {/*            etc.</p>*/}
                                    {/*    </div>*/}
                                    {/*</li>*/}
                                    {/*<li>*/}
                                    {/*    <div className="date">2013 - 2014</div>*/}
                                    {/*    <div className="info">*/}
                                    {/*        <p className="semi-bold">HSE Officer @ Danway EME, UAE</p>*/}
                                    {/*        <p className="semi-bold">Advise the Contractors on Safety Measures.*/}
                                    {/*            -Inspect the worksite for safety contraventions and rectify any unsafe conditions and*/}
                                    {/*            unsafe actions.*/}
                                    {/*            -Correcting unsafe practices at the work site.*/}
                                    {/*            -Conducting safety Induction to the new workers and training the contractors to conduct*/}
                                    {/*            the Toolbox*/}
                                    {/*            talk for their workers in the Worksite.*/}
                                    {/*            -Investigations of accidents and dangerous occurrences at the work site.*/}
                                    {/*            -Internal Safety Auditing and assisting external safety auditors.*/}
                                    {/*            -Passing all relevant risk information to Contractors and Designers.*/}
                                    {/*            -Carried out "Hazard Identification and Risk Assessment (HIRA)" for selected jobs and*/}
                                    {/*            PTW system.*/}
                                    {/*            -Conducting Mock drills and training, Check-list preparation.*/}
                                    {/*            -Participate in daily production meetings to update the Team Safety section with*/}
                                    {/*            construction site*/}
                                    {/*            management.*/}
                                    {/*            -Preparation of daily, weekly, monthly HSE reports & HSE annual report.</p>*/}
                                    {/*    </div>*/}
                                    {/*</li>*/}
                                    {/*<li>*/}
                                    {/*    <div className="date">2009 - 2013</div>*/}
                                    {/*    <div className="info">*/}
                                    {/*        <p className="semi-bold">HSE Officer @ INDUSTRIAL FIRE AND SAFETY SERVICES PVT LTD, Baroda*/}
                                    {/*            (India) </p>*/}
                                    {/*        <p className="semi-bold">Advise the Contractors on Safety Measures.*/}
                                    {/*            -Inspect the worksite for safety contraventions and rectify any unsafe conditions and*/}
                                    {/*            unsafe actions.*/}
                                    {/*            -Correcting unsafe practices in the work site.-Conducting safety Induction to the new*/}
                                    {/*            workers and*/}
                                    {/*            training the contractors to conduct the Toolbox talk for their workers in the Worksite.*/}
                                    {/*            -Preparation of Job safety analysis for selected jobs- JSA*/}
                                    {/*            -Participate in daily production meetings to update the Team Safety section with*/}
                                    {/*            construction site management*/}
                                    {/*            -investigations of accidents and dangerous occurrences at the worksite.*/}
                                    {/*        </p>*/}
                                    {/*    </div>*/}
                                    {/*</li>*/}
                                </ul>
                            </div>
                            <div className="resume_item resume_education">
                                <div className="title">
                                    <p className="bold">Education</p>
                                </div>
                                <ul>
                                    <li>
                                        <div className="date">2019 - 2020</div>
                                        <div className="info">
                                            <p className="semi-bold">Strive School</p>
                                            <p>MERN Full Stack Development</p>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="date">2019</div>
                                        <div className="info">
                                            <p className="semi-bold">AISF- Italia</p>
                                            <p>Privacy Officer GDPR 679/16</p>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="date">2018</div>
                                        <div className="info">
                                            <p className="semi-bold">ALISON- United Kingdom</p>
                                            <p>General Data Protection Regulation (GDPR)</p>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="date">2018</div>
                                        <div className="info">
                                            <p className="semi-bold">CPD- United Kingdom</p>
                                            <p>Data Protection Regulation (GDPR)</p>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                            <div className="resume_item resume_hobby">
                                <div className="title">
                                    <p className="bold">Hobby</p>
                                    <br/>
                                </div>
                                <ul>
                                    <li className="hobby-icons">
                                        <FaMusic/>
                                    </li>
                                    <li className="hobby-icons">
                                        <MdCardTravel/>
                                    </li>
                                    <li className="hobby-icons">
                                        <AiOutlineRead/>
                                    </li>
                                    <li className="hobby-icons">
                                        <GiPlantsAndAnimals/>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default CV;
