import React from 'react';
import './Contact.scss';

import linkedin from '../../assets/icons/linkedin.svg';
import github from '../../assets/icons/square-github.svg';
import email from "../../assets/icons/envelope-solid.svg";
import phone from "../../assets/icons/phone-solid.svg";

import SubmitForm from "../../components/submit-form/SubmitForm";
import {useTranslation} from "react-i18next";

import * as cvService from '../../service/cvDownloadService';

export default function Contact(){
    const { t } = useTranslation();

    function downloadCV() {
        cvService.download(t('notifications.success-download'), t('notifications.error-download'));
    }

    return (
        <section className="contact" id="contact">
            <div className="container">
                <div className="row">
                    <div className="contact-left">
                        <h1 className="sub-title">{t('header.contact')}</h1>
                        <span className="email">
                            <img src={email} alt="email" className="link-icon email"/>
                            <a href="mailto:petar.dimitrov.stoyanov@gmail.com">petar.dimitrov.stoyanov@gmail.com</a>
                        </span>
                        <span className='phone'>
                            <img src={phone} alt="phone" className="link-icon phone"/>
                            <a href="tel:+359 888 02 20 53">+359 888 02 20 53</a>
                        </span>
                        <div className="social-icons">
                            <a href="https://www.linkedin.com/in/petar-dimitrov-stoyanov/" target="_blank">
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
