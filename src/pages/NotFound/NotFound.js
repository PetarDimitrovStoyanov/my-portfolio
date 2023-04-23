import {useTranslation} from 'react-i18next';
import React from 'react';
import './NotFound.scss';
import {useNavigate} from "react-router-dom";

export default function NotFound() {
    const { t } = useTranslation();
    const navigate = useNavigate();

    return (
        <section className="not-found-container">
            <div className="message">
                <p className="status-code">404</p>
                <h2 className="text">{t('not-found.message')}</h2>
            </div>
            <button className="button" onClick={() => navigate('/')}>{t('not-found.back')}</button>
        </section>
    );
}
