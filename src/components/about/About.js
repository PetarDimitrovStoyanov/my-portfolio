import React from "react";
import './About.scss';

export default function About() {

    function open(clazz) {
        Array.from(document.querySelectorAll('.active-link'))
            .forEach(element => element.classList.remove('active-link'));

        Array.from(document.querySelectorAll(`.${clazz}`))
            .forEach(element => element.classList.add('active-link'))
    }

    return (
        <section className="about">
            <div className="container">
                <div className="row">
                    <div className="about-col-1">
                        <img src={require('../../assets/official-hd.png')} alt="user"/>
                    </div>
                    <div className="about-col-2">
                        <h1 className="sub-title">About Me</h1>
                        <p>I am passionate about coding and like to find solutions to complex problems.
                            With approx of 2 years of experience in the field, I have developed a skillset
                            in frontend and backend code development, and I am always eager to learn and take on new
                            challenges. <br/>
                            My approach to development is analytical, and I believe that this is essential
                            for success. I am dedicated to delivering high-quality work (on time) that meets the
                            requirements while pushing the boundaries of what I can and know.
                            In my free time, I like to spend time learning new things and experimenting, which helps
                            to keep me inspired and motivated.
                            If you are looking for a person who has "fire" for doing things, do not leave when it is
                            hard, always give his best, and always strive to improve, I would love to hear from you.
                        </p>
                        <div className="tab-titles">
                            <p className="tab-links active-link skills" onClick={ () => open('skills')}>Skills</p>
                            <p className="tab-links experience" onClick={ () => open('experience')}>Experience</p>
                            <p className="tab-links education" onClick={ () => open('education')}>Education</p>
                        </div>
                        <div className="tab-contents active-link skills">
                            <ul>
                                <li className="tab-content-items"><span>Frontend Development using <br/> React, VueJs and Angular </span></li>
                                <li className="tab-content-items"><span>Backend Development using Java and Spring</span></li>
                                <li className="tab-content-items"><span>Working with databases - MySQL and MongoDB</span></li>
                                <li className="tab-content-items"><span>Source control system - Git</span></li>
                                <li className="tab-content-items"><span>Docker</span></li>
                                <li className="tab-content-items"><span>Kubernetes (beginner level)</span></li>
                                <li className="tab-content-items"><span>DevOps with AWS (beginner level)</span></li>
                            </ul>
                        </div>
                        <div className="tab-contents experience">
                            <ul>
                                <li className="tab-content-items"><span>Multiple projects <br/> for full time work and side clients (2+ years)</span></li>
                                <li className="tab-content-items"><span>Experimental projects (4+ years)</span></li>
                                <li className="tab-content-items"><span>Educational projects (4+ years)</span></li>
                                <li className="tab-content-items"><span>Projects assessment of students (1.5+ years) in SoftUni</span></li>
                            </ul>
                        </div>
                        <div className="tab-contents education">
                            <ul>
                                <li className="tab-content-items"><span>Primary education completed at the construction,<br/> architecture and geodesy high school</span></li>
                                <li className="tab-content-items"><span>Bachelor degree for marketing at <br/> the European College in Plovdiv</span></li>
                                <li className="tab-content-items"><span>Software Engineering, Full Stack Developer at SoftUni</span></li>
                                <li className="tab-content-items"><span>Many web development courses on LinkedIn, Udemy, etc.</span></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>

        </section>
    );
}
