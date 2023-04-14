import React, {useState} from 'react';
import './SubmitForm.scss';

export default function SubmitForm() {

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

        if (Object.keys(errors).length === 0) {
            console.log(formData);
            // Here you can add your API calls
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
