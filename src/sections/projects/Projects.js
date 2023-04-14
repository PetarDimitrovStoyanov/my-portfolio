import React from "react";
import './Projects.scss';
import Project from "../../components/project/Project";

export default function Projects() {
    return (
        <section className="projects" id="my-projects">
            <div className="container">
                <h1 className="sub-title">Recent Projects</h1>
                <div className="project-list">
                    <Project
                        title="This portfolio"
                        about="It represents me as a person and professional developer."
                        imgFileName="portfolio-project.PNG"
                    />
                    <Project
                        title="DRC Akkodis"
                        about="Web app for internal company use only that contains list of projects"
                        imgFileName="drc-akkodis.PNG"
                    />
                    <Project
                        title="Storage system"
                        about="Desktop application for issuing of payment notes."
                        imgFileName="test.PNG"
                    />
                </div>
            </div>
        </section>
    );
}
