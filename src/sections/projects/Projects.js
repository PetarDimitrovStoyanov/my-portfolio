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
                        id={1}
                        title={t('projects.project1.title')}
                        about={t('projects.project1.about')}
                        url={t('projects.project1.modal.url')}
                        imgFileName="portfolio-project.PNG"
                    />
                    <Project
                        id={2}
                        title={t('projects.project2.title')}
                        about={t('projects.project2.about')}
                        url={t('projects.project2.modal.url')}
                        imgFileName="drc-akkodis.PNG"
                    />
                </div>
            </div>
        </section>
    );
}
