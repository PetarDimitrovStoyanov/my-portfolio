import React from 'react';
import './Header.scss';
import BurgerMenu from "../burger-menu/BurgerMenu";

export default function Header() {
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
                            <a className="nav-link" href="#home">Home</a>
                        </li>
                        <li className="list-item">
                            <a className="nav-link" href="#about-me">About Me</a>
                        </li>
                        <li className="list-item">
                            <a className="nav-link" href="#my-certificates">My Certificates</a>
                        </li>
                        <li className="list-item">
                            <a className="nav-link" href="#my-projects">Recent Projects</a>
                        </li>
                        <li className="list-item">
                            <a className="nav-link" href="#contact">Contact</a>
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
                    <h1>Hello, <br/> I'm <span className="special">Petar</span> Stoyanov</h1>
                </div>
            </div>
        </section>
    );
}
