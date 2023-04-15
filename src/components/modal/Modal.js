import React, {useEffect} from "react";
import ReactDom from "react-dom";

import './Modal.scss';
import {useTranslation} from "react-i18next";

export default function Modal(props) {
    const {t} = useTranslation();

    function getGithub() {
        return t(`projects.project${props.projectId}.modal.github`);
    }

    function getUrl() {
        return t(`projects.project${props.projectId}.modal.url`)
    }

    useEffect(() => {
        document.body.style.overflow = "hidden";

        return () => {
            document.body.style.overflow = "auto";
        };
    }, []);

    return ReactDom.createPortal(
        <div className={`background-layer`}>
            <div className="modal-container">
                <h3 className="modal-title">{t(`projects.project${props.projectId}.title`)}</h3>
                <p className="modal-details">
                    <span>{t(`modal.details`)}</span>
                    {t(`projects.project${props.projectId}.modal.details`)}
                </p>
                <p className="modal-technologies">
                    <span>{t(`modal.technologies`)}</span>
                    {t(`projects.project${props.projectId}.modal.technologies`)}
                </p>
                <p className="modal-contribution">
                    <span>{t(`modal.contribution`)}</span>
                    {t(`projects.project${props.projectId}.modal.contribution`)}
                </p>
                {getGithub().trim() !== "" ?
                    <p className="modal-github">
                        <span>{t(`modal.source`)}</span>
                        <a href={getGithub()} target="_blank">
                            {getGithub()}
                        </a>
                    </p> :
                    ''}
                {getUrl().trim() !== "" ?
                    <p className="modal-url">
                        <span>{t(`modal.url`)}</span>
                        <a href={getUrl()} target="_blank">
                            {getUrl()}
                        </a>
                    </p> :
                    ''
                }
                <button onClick={props.toggleModal} className="close-modal-button">{t(`modal.close`)}</button>
            </div>
        </div>,
        document.getElementById('root')
    );
}
