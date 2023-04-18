import cv from "../assets/cv/cv.pdf";
import {logEvent} from "../analythics";
import * as SUBMIT_SERVICE from "./submittingFormService";

export function download(messageSuccess, messageFailure) {
    try {
        const link = document.createElement('a');
        link.href = cv;
        link.download = 'cv.pdf';
        link.click();
        logEvent('button', 'download_cv');
        SUBMIT_SERVICE.showSuccessNotification(messageSuccess)
    } catch (error) {
        SUBMIT_SERVICE.showErrorNotification(messageFailure);
        console.error(error)
    }
}
