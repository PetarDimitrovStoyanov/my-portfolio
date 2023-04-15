import React, {useState} from 'react';
import './SubmitForm.scss';

import axios from "axios";
import * as SUBMIT_SERVICE from "../../service/submittingFormService"

export default function SubmitForm() {

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
            newErrors.name = 'Name is required';
        }

        if (formData.email.trim() === '') {
            newErrors.email = 'Email is required';
        } else if (!isValidEmail(formData.email)) {
            newErrors.email = 'Email is invalid';
        }

        if (formData.message.trim() === '') {
            newErrors.message = 'Message is required';
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
                        SUBMIT_SERVICE.showSuccessNotification('Your email has been sent successfully.');
                    })
                    .catch((error) => {
                        SUBMIT_SERVICE.showErrorNotification('Oops, something went wrong.');
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
            <input
                type="text"
                name="name"
                value={formData.name}
                placeholder="Your name"
                required
                onChange={handleInputChange}
            />
            {errors.name && <span className="error-message">{errors.name}</span>}
            <input
                type="email"
                name="email"
                placeholder="Your email"
                required
                value={formData.email}
                onChange={handleInputChange}
            />
            {errors.email && <span className="error-message">{errors.email}</span>}
            <textarea
                name="message"
                rows="8"
                value={formData.message}
                placeholder="Your message"
                required
                onChange={handleInputChange}
            />
            {errors.message && <span className="error-message">{errors.message}</span>}
            <div className="submit-button-wrapper">
                <button type="submit" className="btn">Submit</button>
            </div>
        </form>
    );
}
