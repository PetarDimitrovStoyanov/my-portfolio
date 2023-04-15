import React from 'react';
import './Header.scss';
import BurgerMenu from "../../components/burger-menu/BurgerMenu";
import { useTranslation} from 'react-i18next';

import enFlag from "../../assets/flags/gb.svg";
import bgFlag from "../../assets/flags/bg.svg";

import Flag from "../../components/flag/Flag";

export default function Header() {
    const { t } = useTranslation();

    return (
        <section className="header" id="home">
            <div className="container">
                <nav className="navigation">
                    <div className="logo">
                        <p className="portfolio"> Portfolio </p>
                        <span className="name">Petar Stoyanov</span>
                    </div>

                    <ul className="ul-container">
                        <li className="list-item">
                            <a className="nav-link" href="#about-me">{t('header.about')}</a>
                        </li>
                        <li className="list-item">
                            <a className="nav-link" href="#my-certificates">{t('header.my-certificates')}</a>
                        </li>
                        <li className="list-item">
                            <a className="nav-link" href="#my-projects">{t('header.recent-projects')}</a>
                        </li>
                        <li className="list-item">
                            <a className="nav-link" href="#contact">{t('header.contact')}</a>
                        </li>
                        <li className="list-item languages">
                            <Flag language="bg" flag={bgFlag} />
                            <Flag language="en" flag={enFlag} />
                        </li>
                    </ul>
                    <BurgerMenu />
                </nav>
                <div className="header-text">
                    <div>
                        <span className="special big">&lt;</span>
                        <span>Fullstack developer</span>
                        <span className="special small">&#47;</span>
                        <span className="special big">&gt;</span>
                    </div>
                    <h1>{t('header.hello')}<br/> {t('header.i-am')}
                        <span className="special">{t('header.petar')}</span>
                        {t('header.stoyanov')}
                    </h1>
                </div>
            </div>
        </section>
    );
}
