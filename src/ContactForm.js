import React, { useState } from 'react';
import axios from 'axios';
import './ContactForm.css';

function ContactForm() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });
    const [isSubmitted, setIsSubmitted] = useState(false);

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await axios.post('http://localhost:5000/api/contact', formData);
            setIsSubmitted(true);  
            setTimeout(() => setIsSubmitted(false), 4000); 
            setFormData({ name: '', email: '', message: '' });
        } catch (error) {
            alert("Error sending message.");
        }
    };

    return (
        <div className="contact-form">
            {isSubmitted ? (
                <div className="thank-you-animation">
                    <h2>Thank You!</h2>
                    <p>Your message has been successfully sent.</p>
                </div>
            ) : (
                <>
                    <h2>Contact Us</h2>
                    <form onSubmit={handleSubmit}>
                        <input
                            type="text"
                            name="name"
                            placeholder="Your Name"
                            value={formData.name}
                            onChange={handleChange}
                            required
                        />
                        <input
                            type="email"
                            name="email"
                            placeholder="Your Email"
                            value={formData.email}
                            onChange={handleChange}
                            required
                        />
                        <textarea
                            name="message"
                            placeholder="Your Message"
                            value={formData.message}
                            onChange={handleChange}
                            required
                        ></textarea>
                        <button type="submit">Send Message</button>
                    </form>
                </>
            )}
        </div>
    );
}

export default ContactForm;

