import React from 'react';
import './Header.scss';
import {useTranslation} from 'react-i18next';

export default function Header() {

    const { t } = useTranslation();

    return (
        <section className="header" id="home">
            <div className="container">
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
