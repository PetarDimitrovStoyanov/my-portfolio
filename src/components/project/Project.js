import React, {useEffect} from "react";
import './Project.scss';
import link from "../../assets/icons/up-right-from-square-solid.svg";
import {useTranslation} from "react-i18next";
import {useNavigate} from "react-router-dom";

export default function Project(props) {
    const {i18n} = useTranslation('home');
    const navigate = useNavigate();
    const {t} = useTranslation();

    useEffect(() => {
        Array.from(document.querySelectorAll('.open-project'))
            .filter((element, index) => index % 2 !== 0)
            .forEach(button => {
                button.classList.add('align-left');
            })
    }, [])

    function getProjectTranslation(project) {
        let translations = [...project.translations];
        return translations.filter(translation => translation.language === i18n.language)[0];
    }

    function openProject(projectId) {
        navigate(`/projects/${projectId}`)
    }

    function visitProject(project) {
        if (project.url) {
            window.open(project.url, '_blank');
        } else {
            openProject(project.id)
        }
    }

    return (
        <article className="project-wrapper">
            <div className="left">
                <div className="content">
                    <h2 className="title-project">{props.project.title}</h2>
                    <p>{getProjectTranslation(props.project).about}</p>
                </div>
                <button className="open-project" onClick={() => openProject(props.project.id)}>
                    {t('projects.read-more')}
                </button>
            </div>
            <div className="project right" onClick={() => visitProject(props.project)}>
                <img
                    src={require(`../../assets/projects/${props.project.imageName}`)}
                    alt="portfolio"
                    className="project-img"
                />
                <div className="layer">
                    {
                        props.project.url ?
                            <>
                                <h3 className="project-visit">{t('projects.visit')}</h3>
                                <div className="button-container">
                                    {props.project.url.trim() !== '' ?
                                        <a href="" className="project-reference" target="_blank">
                                            <img src={link} alt="link" className="link-icon"/>
                                        </a>
                                        : ''
                                    }
                                </div>
                            </>
                            :
                            <h3 className="project-visit">{t('projects.read-more')}</h3>
                    }
                </div>
            </div>
        </article>
    );
}
