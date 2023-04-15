import React from "react";
import './Projects.scss';
import Project from "../../components/project/Project";
import {useTranslation} from "react-i18next";

export default function Projects() {
    const { t } = useTranslation();

    return (
        <section className="projects" id="my-projects">
            <div className="container">
                <h1 className="sub-title">{t('header.recent-projects')}</h1>
                <div className="project-list">
                    <Project
                        title={t('projects.project1.title')}
                        about={t('projects.project1.about')}
                        imgFileName="portfolio-project.PNG"
                    />
                    <Project
                        title={t('projects.project2.title')}
                        about={t('projects.project2.about')}
                        imgFileName="drc-akkodis.PNG"
                    />
                    <Project
                        title={t('projects.project3.title')}
                        about={t('projects.project3.about')}
                        imgFileName="test.PNG"
                    />
                </div>
            </div>
        </section>
    );
}
