import React from 'react';
import './Footer.scss';
import {useLocation} from "react-router-dom";

export default function Footer (){
    const location = useLocation();

    function isNotFoundPage() {
       return !location.pathname.includes('/projects') && location.pathname.length > 1
    }

    return (
        <section className={`footer position ${isNotFoundPage() ? 'not-found-page' : ''}`}>
            <p className="copyright">Copyright © Made by Petar Stoyanov</p>
        </section>
    );
}
