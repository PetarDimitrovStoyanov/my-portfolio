import React from 'react';
import './Contact.scss';

import linkedin from '../../assets/icons/linkedin.svg';
import github from '../../assets/icons/square-github.svg';
import email from "../../assets/icons/envelope-solid.svg";
import phone from "../../assets/icons/phone-solid.svg";

import cv from '../../assets/cv/cv.pdf';

import SubmitForm from "../../components/submit-form/SubmitForm";
import * as SUBMIT_SERVICE from "../../service/submittingFormService";
import {useTranslation} from "react-i18next";

export default function Contact (){
    const { t } = useTranslation();

    function downloadCV() {
        try {
            const link = document.createElement('a');
            link.href = cv;
            link.download = 'cv.pdf';
            link.click();
            SUBMIT_SERVICE.showSuccessNotification(t('notifications.success-download'))
        } catch (error) {
            SUBMIT_SERVICE.showErrorNotification(t('notifications.error-download'));
            console.error(error)
        }
    }

    return (
        <section className="contact" id="contact">
            <div className="container">
                <div className="row">
                    <div className="contact-left">
                        <h1 className="sub-title">{t('header.contact')}</h1>
                        <span className="email">
                            <img src={email} alt="email" className="link-icon email"/>
                            <p>petar.dimitrov.stoyanov@gmail.com</p>
                        </span>
                        <span className='phone'>
                            <img src={phone} alt="phone" className="link-icon phone"/>
                            <a href="tel:+359 888 02 20 53">+359 888 02 20 53</a>
                        </span>
                        <div className="social-icons">
                            <a href="https://www.linkedin.com/in/petar-stoyanov-8576b6141/" target="_blank">
                                <img src={linkedin} alt="linkedin" className="link-icon linked-in"/>
                            </a>
                            <a href="https://github.com/PetarDimitrovStoyanov" target="_blank">
                                <img src={github} alt="github" className="link-icon github"/>
                            </a>
                        </div>
                        <button onClick={downloadCV} className="neon-btn">{t('buttons.download')}</button>
                    </div>
                    <div className="contact-right">
                        <SubmitForm />
                    </div>
                </div>
            </div>
        </section>
    );
}
