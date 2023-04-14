import React, {useRef} from 'react';
import './BurgerMenu.scss';

import close from "../../assets/icons/close.svg";
import menu from "../../assets/icons/menu.svg";

export default function BurgerMenu() {
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
                    <a className="burger-nav-link" href="#home" onClick={toggleMenu}>Home</a>
                </li>
                <li className="burger-li">
                    <a className="burger-nav-link" href="#about-me" onClick={toggleMenu}>About Me</a>
                </li>
                <li className="burger-li">
                    <a className="burger-nav-link" href="#my-certificates" onClick={toggleMenu}>My Certificates</a>
                </li>
                <li className="burger-li">
                    <a className="burger-nav-link" href="#my-projects" onClick={toggleMenu}>Recent Projects</a>
                </li>
                <li className="burger-li">
                    <a className="burger-nav-link" href="#contact" onClick={toggleMenu}>Contact</a>
                </li>
                <li className="burger-li">
                    <img src={close} alt="close" className="menu-burger close" ref={closeBtnRef} onClick={toggleMenu}/>
                </li>
            </ul>
            <img src={menu} alt="menu" className="menu-burger menu active" ref={openBtnRef} onClick={toggleMenu}/>
        </section>
    );
}
