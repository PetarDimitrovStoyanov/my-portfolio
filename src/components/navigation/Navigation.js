import Flag from "../flag/Flag";
import enFlag from "../../assets/flags/gb.svg";
import bgFlag from "../../assets/flags/bg.svg";
import BurgerMenu from "../burger-menu/BurgerMenu";
import React from "react";
import './Navigation.scss';

import * as cvService from "../../service/cvDownloadService";
import {useTranslation} from "react-i18next";
import {useNavigate} from "react-router-dom";


export default function Navigation() {
    const {i18n} = useTranslation('home');
    const {t} = useTranslation();
    const navigate = useNavigate();

    function download() {
        cvService.download(t('notifications.success-download'), t('notifications.error-download'));
    }

    return (
        <div className="container-nav">
            <nav className="navigation">
                <div className="logo" onClick={() => navigate(`/`)}>
                    <p className="portfolio"> Portfolio </p>
                    <span className="name">Petar Stoyanov</span>
                </div>

                <ul className="ul-container">
                    <li className="list-item">
                        <a className="nav-link" href="#my-projects" onClick={()=> navigate(`/`)}>
                            {t('header.recent-projects')}
                        </a>
                    </li>
                    <li className="list-item">
                        <a className="nav-link" href="#my-certificates" onClick={()=> navigate(`/`)}>
                            {t('header.my-certificates')}
                        </a>
                    </li>
                    <li className="list-item">
                        <a className="nav-link" href="#experience" onClick={()=> navigate(`/`)}>
                            {t('header.experience')}
                        </a>
                    </li>
                    <li className="list-item">
                        <a className="nav-link" href="#about-me" onClick={()=> navigate(`/`)}>
                            {t('header.about')}
                        </a>
                    </li>
                    <li className="list-item">
                        <a className="nav-link" href="#contact" onClick={()=> navigate(`/`)}>
                            {t('header.contact')}
                        </a>
                    </li>
                    <li className="list-item">
                        <a className="nav-link cv" onClick={download}>CV</a>
                    </li>
                    <li className="list-item languages">
                        {i18n.language !== 'en'
                            ? <Flag language="en" flag={enFlag}/>
                            : <Flag language="bg" flag={bgFlag}/>
                        }
                    </li>
                </ul>
                <BurgerMenu/>
            </nav>
        </div>
    )
}
