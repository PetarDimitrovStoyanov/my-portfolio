import React, {useRef} from 'react';
import './BurgerMenu.scss';

import close from "../../assets/icons/close.svg";
import menu from "../../assets/icons/menu.svg";
import {useTranslation} from "react-i18next";

import enFlag from "../../assets/flags/gb.svg";
import bgFlag from "../../assets/flags/bg.svg";

import Flag from "../flag/Flag";
import {useNavigate} from "react-router-dom";

export default function BurgerMenu() {
    const {t} = useTranslation();
    const menuRef = useRef();
    const closeBtnRef = useRef();
    const openBtnRef = useRef();
    const navigate = useNavigate();
    const {i18n} = useTranslation('home');

    function toggleMenu(redirect) {
        menuRef.current.classList.toggle('active');
        closeBtnRef.current.classList.toggle('active');
        openBtnRef.current.classList.toggle('active');

        if (redirect === "redirect") {
            navigate(`/`);
        }
    }

    return (
        <section className="burger-menu">
            <ul className="burger-ul" ref={menuRef}>
                <li className="burger-li">
                    <a className="burger-nav-link" href="#my-projects" onClick={() => toggleMenu('redirect')}>
                        {t('header.recent-projects')}
                    </a>
                </li>
                <li className="burger-li">
                    <a className="burger-nav-link" href="#my-certificates" onClick={() => toggleMenu('redirect')}>
                        {t('header.my-certificates')}
                    </a>
                </li>
                <li className="burger-li">
                    <a className="burger-nav-link" href="#experience" onClick={() => toggleMenu('redirect')}>
                        {t('header.experience')}
                    </a>
                </li>
                <li className="burger-li">
                    <a className="burger-nav-link" href="#about-me" onClick={() => toggleMenu('redirect')}>
                        {t('header.about')}
                    </a>
                </li>
                <li className="burger-li">
                    <a className="burger-nav-link" href="#contact" onClick={() => toggleMenu('redirect')}>
                        {t('header.contact')}
                    </a>
                </li>
                <li className="burger-li languages">
                    {i18n.language !== 'en' ?
                        <Flag language="en" flag={enFlag}/>
                        : <Flag language="bg" flag={bgFlag}/>
                    }
                </li>
                <li className="burger-li close-wrapper">
                    <img
                        src={close}
                        alt="close"
                        className="menu-burger close"
                        ref={closeBtnRef}
                        onClick={() => toggleMenu('not-redirect')}
                    />
                </li>
            </ul>
            <img
                src={menu}
                alt="menu"
                className="menu-burger menu active"
                ref={openBtnRef}
                onClick={() => toggleMenu('not-redirect')}
            />
        </section>
    );
}
