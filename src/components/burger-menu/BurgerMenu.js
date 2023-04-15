import React, {useRef} from 'react';
import './BurgerMenu.scss';

import close from "../../assets/icons/close.svg";
import menu from "../../assets/icons/menu.svg";
import {useTranslation} from "react-i18next";

import enFlag from "../../assets/flags/gb.svg";
import bgFlag from "../../assets/flags/bg.svg";

import Flag from "../flag/Flag";

export default function BurgerMenu() {
    const { t } = useTranslation();
    const menuRef = useRef();
    const closeBtnRef = useRef();
    const openBtnRef = useRef();

    function toggleMenu() {
        menuRef.current.classList.toggle('active');
        closeBtnRef.current.classList.toggle('active');
        openBtnRef.current.classList.toggle('active');
    }

    return (
        <section className="burger-menu">
            <ul className="burger-ul" ref={menuRef}>
                <li className="burger-li">
                    <a className="burger-nav-link" href="#about-me" onClick={toggleMenu}>{t('header.about')}</a>
                </li>
                <li className="burger-li">
                    <a className="burger-nav-link" href="#my-certificates" onClick={toggleMenu}>{t('header.my-certificates')}</a>
                </li>
                <li className="burger-li">
                    <a className="burger-nav-link" href="#my-projects" onClick={toggleMenu}>{t('header.recent-projects')}</a>
                </li>
                <li className="burger-li">
                    <a className="burger-nav-link" href="#contact" onClick={toggleMenu}>{t('header.contact')}</a>
                </li>
                <li className="burger-li languages">
                    <Flag language="bg" flag={bgFlag} />
                    <Flag language="en" flag={enFlag} />
                </li>
                <li className="burger-li">
                    <img src={close} alt="close" className="menu-burger close" ref={closeBtnRef} onClick={toggleMenu}/>
                </li>
            </ul>
            <img src={menu} alt="menu" className="menu-burger menu active" ref={openBtnRef} onClick={toggleMenu}/>
        </section>
    );
}
