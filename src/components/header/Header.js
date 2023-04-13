import React from 'react';
import './Header.scss';

export default function Header() {
    return (
        <section className="header">
            <div className="container">
                <nav className="navigation">
                    <div className="logo">
                        <p className="portfolio"> Portfolio </p>
                        <span className="name">Petar Stoyanov</span>
                    </div>

                    <ul>
                        <li className="list-item"><a className="nav-link" href="">Home</a></li>
                        <li className="list-item"><a className="nav-link" href="">About</a></li>
                        <li className="list-item"><a className="nav-link" href="">Certificates</a></li>
                        <li className="list-item"><a className="nav-link" href="">Portfolio</a></li>
                        <li className="list-item"><a className="nav-link" href="">Contact</a></li>
                    </ul>
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
