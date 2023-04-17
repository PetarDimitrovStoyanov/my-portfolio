import React, {useState} from 'react';
import './SubmitForm.scss';

import axios from "axios";
import * as SUBMIT_SERVICE from "../../service/submittingFormService"
import {useTranslation} from "react-i18next";
import Spinner from "../spinner/Spinner";

export default function SubmitForm() {
    const { t } = useTranslation();

    const [isLoading, setIsLoading] = useState(false);

    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });

    const [errors, setErrors] = useState({
        name: '',
        email: '',
        message: ''
    });

    const handleInputChange = (event) => {
        const {name, value} = event.target;

        setFormData((prevState) => ({
            ...prevState,
            [name]: value
        }));

        errors[`${name}`] = ''
        setErrors({...errors});
    }

    const doVerificationForm = () => {
        const newErrors = {};

        if (formData.name.trim() === '') {
            newErrors.name = t('submit-form.errors.name-required');
        }

        if (formData.email.trim() === '') {
            newErrors.email = t('submit-form.errors.email-required');
        } else if (!isValidEmail(formData.email)) {
            newErrors.email = t('submit-form.errors.email-invalid');
        }

        if (formData.message.trim() === '') {
            newErrors.message = t('submit-form.errors.message-required');
        }

        setErrors(newErrors);
    }

    const handleSubmit = (event) => {
        event.preventDefault();

        doVerificationForm();

        if (Object.keys(errors).length === 0 && !isLoading) {
            try {
                setIsLoading(true);
                axios.post('https://formsubmit.co/ajax/ee30ae227cc3c49eeaeffae2148aa1b1', formData, {
                    headers: {
                        'Content-Type': 'application/json',
                    },
                })
                    .then(() => {
                        setFormData({
                            name: '',
                            email: '',
                            message: ''
                        });
                        SUBMIT_SERVICE.showSuccessNotification(t('notifications.success-email'));
                    })
                    .catch((error) => {
                        SUBMIT_SERVICE.showErrorNotification(t('notifications.wrong'));
                        console.error(error)
                    })
                    .finally(() => setIsLoading(false));
            } catch (error) {
                console.error('Error submitting of email:', error);
            }

        }
    };

    const isValidEmail = (email) => {
        return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    };

    return (
        <form onSubmit={handleSubmit} className="form">
            {isLoading ? <Spinner/> : ''}
            <input
                type="text"
                name="name"
                value={formData.name}
                placeholder={t('submit-form.placeholders.your-name')}
                required
                onChange={handleInputChange}
            />
            {errors.name && <span className="error-message">{errors.name}</span>}
            <input
                type="email"
                name="email"
                placeholder={t('submit-form.placeholders.your-email')}
                required
                value={formData.email}
                onChange={handleInputChange}
            />
            {errors.email && <span className="error-message">{errors.email}</span>}
            <textarea
                name="message"
                rows="8"
                value={formData.message}
                placeholder={t('submit-form.placeholders.your-message')}
                required
                onChange={handleInputChange}
            />
            {errors.message && <span className="error-message">{errors.message}</span>}
            <div className="submit-button-wrapper">
                <button type="submit" className="btn">{t('buttons.submit')}</button>
            </div>
        </form>
    );
}
