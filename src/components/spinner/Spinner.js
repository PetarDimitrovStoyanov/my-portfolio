import React from 'react';
import './Spinner.scss';
import ReactDom from "react-dom";

export default function Spinner() {
    return ReactDom.createPortal(
        <div className="background-layer-spinner">
            <svg className="svg">
                <circle cx="70" cy="70" r="70" className="circle"></circle>
            </svg>
        </div>,
        document.getElementById('root')
    );
}
