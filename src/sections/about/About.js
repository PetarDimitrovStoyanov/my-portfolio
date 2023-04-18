import React from "react";
import './About.scss';
import {useTranslation} from "react-i18next";

export default function About() {
    const { t } = useTranslation();

    function open(clazz) {
        Array.from(document.querySelectorAll('.active-link'))
            .forEach(element => element.classList.remove('active-link'));

        Array.from(document.querySelectorAll(`.${clazz}`))
            .forEach(element => element.classList.add('active-link'))
    }

    return (
        <section className="about" id="about-me">
            <div className="container">
                <div className="row">
                    <div className="about-col-1 desktop img-container-layer">
                        <img src={require('../../assets/official-hd.png')} alt="user"/>
                    </div>
                    <div className="about-col-2">
                        <h1 className="sub-title">{t('header.about')}</h1>
                        <div className="about-col-1 small img-container-layer">
                            <img src={require('../../assets/official-hd.png')} alt="user"/>
                        </div>
                        <p>{t('about-me.description1')}
                            <br/>
                            {t('about-me.description2')}
                            <br/>
                            {t('about-me.description3')}
                            <br/>
                            {t('about-me.description4')}
                        </p>
                        <div className="tab-titles">
                            <p className="tab-links active-link skills" onClick={ () => open('skills')}>{t('about-me.tech-skills')}</p>
                            <p className="tab-links soft-skills" onClick={ () => open('soft-skills')}>{t('about-me.soft-skills')}</p>
                            <p className="tab-links experience" onClick={ () => open('experience')}>{t('about-me.experience')}</p>
                            <p className="tab-links education" onClick={ () => open('education')}>{t('about-me.education')}</p>
                        </div>
                        <div className="tab-contents active-link skills">
                            <ul>
                                <li className="tab-content-items"><span>Frontend Development {t('about-me.skill1.using')}
                                    <br/> React, VueJs {t('about-me.skill1.and')} Angular </span></li>
                                <li className="tab-content-items"><span>Backend Development {t('about-me.skill1.using')}
                                     Java {t('about-me.skill1.and')} Spring</span></li>
                                <li className="tab-content-items"><span>{t('about-me.skill1.working-database')}
                                    - MySQL {t('about-me.skill1.and')} MongoDB</span></li>
                                <li className="tab-content-items"><span>Source control system - Git</span></li>
                                <li className="tab-content-items"><span>Kubernetes ({t('about-me.skill1.beginner')}) and Docker</span></li>
                                <li className="tab-content-items"><span>{t('about-me.skill1.microservice')} ({t('about-me.skill1.beginner')})</span></li>
                                <li className="tab-content-items"><span>DevOps {t('about-me.skill1.with')} AWS ({t('about-me.skill1.beginner')})</span></li>
                            </ul>
                        </div>
                        <div className="tab-contents soft-skills">
                            <ul>
                                <li className="tab-content-items"><span>{t('about-me.soft-skills1.communication')}</span></li>
                                <li className="tab-content-items"><span>{t('about-me.soft-skills1.critical')}</span></li>
                                <li className="tab-content-items"><span>{t('about-me.soft-skills1.pressure')}</span></li>
                                <li className="tab-content-items"><span>{t('about-me.soft-skills1.ethic')}</span></li>
                                <li className="tab-content-items"><span>{t('about-me.soft-skills1.multitasking')}</span></li>
                                <li className="tab-content-items"><span>{t('about-me.soft-skills1.persist')}</span></li>
                                <li className="tab-content-items"><span>{t('about-me.soft-skills1.fast')}</span></li>
                            </ul>
                        </div>
                        <div className="tab-contents experience">
                            <ul>
                                <li className="tab-content-items"><span>{t('about-me.experience1.multiple-addition')}</span></li>
                                <li className="tab-content-items"><span>{t('about-me.experience1.projects')}</span></li>
                                <li className="tab-content-items"><span>
                                    {t('about-me.experience1.assessment')} <br/>
                                    {t('about-me.experience1.assessment2')}
                                </span></li>
                            </ul>
                        </div>
                        <div className="tab-contents education">
                            <ul>
                                <li className="tab-content-items"><span>{t('about-me.education1.primary')}<br/>
                                    {t('about-me.education1.primary-addition')}</span></li>
                                <li className="tab-content-items"><span>{t('about-me.education1.bachelor')} <br/>
                                    {t('about-me.education1.bachelor-addition')}</span></li>
                                <li className="tab-content-items"><span>{t('about-me.education1.software')}</span></li>
                                <li className="tab-content-items"><span>{t('about-me.education1.development')}</span></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>

        </section>
    );
}
