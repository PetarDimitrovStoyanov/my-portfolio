import React from 'react';
import i18n from "i18next";

import './Flag.scss';

export default function Flag(props) {

    function changeLanguage(language) {
        i18n.changeLanguage(language);
    }

    return (
        <span onClick={() => changeLanguage(props.language)} className="flag-container">
            <img src={props.flag} alt={props.language} className="flag"/>
        </span>
    );
}
