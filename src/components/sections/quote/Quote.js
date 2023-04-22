import React from 'react';
import './Quote.scss';
import {useTranslation} from "react-i18next";

export default function Quote (){
    const { t } = useTranslation();
    const {i18n} = useTranslation('home');

    return (
        <section className={`quote`}>
            <p className={`text ${i18n.language === "bg" ? 'bulgarian' : ''}`}>{t('quote')}</p>
        </section>
    );
}
