import React, {useEffect} from "react";
import ReactDom from "react-dom";

import './Modal.scss';
import {useTranslation} from "react-i18next";

export default function Modal(props) {
    const {t} = useTranslation();

    useEffect(() => {
        document.body.style.overflow = "hidden";

        return () => {
            document.body.style.overflow = "auto";
        };
    }, []);

    return ReactDom.createPortal(
        <div className={`background-layer`}>
            <div className="modal-container">
                {props.text}
                <button onClick={props.toggleModal} className="close-modal-button">{t(`modal.close`)}</button>
            </div>
        </div>,
        document.getElementById('root')
    );
}
