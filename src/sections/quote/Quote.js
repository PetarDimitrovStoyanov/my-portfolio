import React from 'react';
import './Quote.scss';
import {useTranslation} from "react-i18next";

export default function Quote (){
    const { t } = useTranslation();

    return (
        <section className="quote">
            <p className="text">{t('quote')}</p>
        </section>
    );
}
