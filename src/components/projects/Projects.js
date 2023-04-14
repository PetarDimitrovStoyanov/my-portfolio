import React from "react";
import './Projects.scss';
import link from '../../assets/icons/up-right-from-square-solid.svg';

export default function Projects() {
    return (
        <section className="projects" id="my-projects">
            <div className="container">
                <h1 className="sub-title">Recent Projects</h1>
                <div className="project-list">
                    <article className="project">
                        <img src={require('../../assets/projects/portfolio-project.PNG')} alt="portfolio"/>
                        <div className="layer">
                            <h3 className="project-title">This portfolio</h3>
                            <p className="project-about">It represents me as a person and professional developer.</p>
                            <a href="#" className="project-reference">
                                <img src={link} alt="link" className="link-icon"/>
                            </a>
                        </div>
                    </article>
                    <article className="project">
                        <img src={require('../../assets/projects/drc-akkodis.PNG')} alt="portfolio"/>
                        <div className="layer">
                            <h3 className="project-title">DRC Akkodis</h3>
                            <p className="project-about">Web app for internal company use only that contains list of projects</p>
                            <a href="https://drc-akkodis.com/login" target="_blank" className="project-reference">
                                <img src={link} alt="link" className="link-icon"/>
                            </a>
                        </div>
                    </article>
                    <article className="project">
                        <img src={require('../../assets/projects/test.PNG')} alt="portfolio"/>
                        <div className="layer">
                            <h3 className="project-title">Storage system</h3>
                            <p className="project-about">Desktop application for issuing of payment notes.</p>
                            <a href="#" className="project-reference">
                                <img src={link} alt="link" className="link-icon"/>
                            </a>
                        </div>
                    </article>
                </div>
            </div>
        </section>
    );
}
