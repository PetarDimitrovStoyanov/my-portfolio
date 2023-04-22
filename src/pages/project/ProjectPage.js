import React, {useEffect, useState, useRef} from "react";
import {useTranslation} from "react-i18next";
import {useNavigate} from "react-router-dom";
import {projects} from "../../data/projects";
import {useParams} from "react-router-dom"

import './ProjectPage.scss';
import * as SUBMIT_SERVICE from "../../service/submittingFormService";

export default function ProjectPage() {
    const {t} = useTranslation();
    const navigate = useNavigate();
    const params = useParams();
    const {i18n} = useTranslation('home');
    const [project, setProject] = useState();
    const imgRef = useRef(null);

    useEffect(() => {
        validateProjectId();
        const foundProject = [...projects].find(project => project.id === Number(params.id));
        setProject({...foundProject});
    }, []);

    function validateProjectId() {
        const validIds = [...projects].map(project => project.id + "");
        if (!validIds.includes(params.id)) {
            navigate("/not-found");
        }
    }

    function getTranslation() {
        let translations = [...project.translations];
        return translations.find(translation => translation.language === i18n.language);
    }

    function copyUrl() {
        const element = document.createElement('input'), text = window.location.href;

        document.body.appendChild(element);
        element.value = text;
        element.select();
        document.execCommand('copy');
        document.body.removeChild(element);
        SUBMIT_SERVICE.showSuccessNotification("The url was copied successfully.");
    }


    return project ? (
        <section className="project-page-container">
            <div className="image-wrapper" ref={imgRef}>
                <img className="image" src={require(`../../assets/projects/${project.imageName}`)} alt="image"/>
                <div className="title-container">
                    <h2 className="title">{project.title}</h2>
                    <div className="references">
                        {project.url
                            ? <a href={project.url} target="_blank">{t('project-page.visit')}</a>
                            : ''}
                        {project['backend-git-url']
                            ? <a href={project['backend-git-url']} target="_blank">{t('project-page.b-git')}</a>
                            : ''}
                        {project['frontend-git-url']
                            ? <a href={project['frontend-git-url']} target="_blank">{t('project-page.f-git')}</a>
                            : ''}
                    </div>
                </div>
            </div>
            <div className="grid-container">
                <header className="header-project">
                    <p className="about-text">
                        {getTranslation().about} <br/> {project.private ? <span className="private">{t('project-page.private')}</span> : ''}
                    </p>
                </header>
                <div className="content-project">
                    <div className="info">
                        <h5 className="attribute-title-h6">{t('project-page.further')}:</h5>
                        <p>{getTranslation().details['more-info']}</p>
                    </div>
                    <div className="contribution">
                        <h5 className="attribute-title-h6">{t('project-page.contribution')}:</h5>
                        <p>{getTranslation().details.contribution}</p>
                    </div>
                </div>
                <aside className="project-aside">
                    <div className="project-aside-wrapper">
                        <div className="tools">
                            <h5 className="attribute-title-h6">{t('project-page.tools')}</h5>
                            <div className="frontend">
                                <span className="attribute-title-h5">{t('project-page.frontend')}:</span>
                                <span className="attribute">
                                    {project['technologies-and-tools']['frontend'].map(item => item.name).join(', ')}
                                </span>
                            </div>
                            <div className="backend">
                                <span className="attribute-title-h5">{t('project-page.backend')}:</span>
                                <span className="attribute">
                                    {project['technologies-and-tools']['backend'].map(item => item.name).join(', ')}
                                </span>
                            </div>
                            <div className="other">
                                <span className="attribute-title-h5">{t('project-page.other')}:</span>
                                <span className="attribute">
                                    {project['technologies-and-tools']['other'].map(item => item.name).join(', ')}
                                </span>
                            </div>
                        </div>
                        <div className="infrastructure">
                            <h5 className="attribute-title-h6">{t('project-page.infrastructure')}:</h5>
                            <ppan
                                className="attribute">{project['infrastructures'].map(item => item.name).join(', ')}</ppan>
                        </div>
                        <div className="dependencies">
                            <h5 className="attribute-title-h6">{t('project-page.dependencies')}:</h5>
                            <div className="frontend-dep">
                                <span className="attribute-title-h5">{t('project-page.frontend')}:</span>
                                <ppan className="attribute">
                                    {project['technologies-and-tools']['frontend-dependencies']
                                        .map(dependency => dependency.name).join(', ')}
                                </ppan>
                            </div>
                            <div className="backend-dep">
                                <span className="attribute-title-h5">{t('project-page.backend')}:</span>
                                <ppan className="attribute">
                                    {project['technologies-and-tools']['backend-dependencies']
                                        .map(dependency => dependency.name).join(', ')}
                                </ppan>
                            </div>
                        </div>
                    </div>
                </aside>
                <footer className="footer-aside">
                    <button className="copy" onClick={copyUrl}>{t('project-page.copy')}</button>
                </footer>
            </div>
        </section>
    ) : '';
}
