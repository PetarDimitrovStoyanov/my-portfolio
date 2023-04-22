import {useTranslation} from 'react-i18next';
import React from 'react';
import './NotFound.scss';

export default function NotFound() {
    const { t } = useTranslation();

    return (
        <section className="not-found-container">
            <div className="message">
                <p className="status-code">404</p>
                <h2 className="text">Sorry, the page you tried to reach is not found.</h2>
            </div>
            <button className="button">Back to the home page</button>
        </section>
    );
}
