import React, { useRef } from "react";
import emailjs from "@emailjs/browser";

const ContactForm = () => {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm(
            "service_3bv5fz4",   // Get this from EmailJS
            "template_llepcdc",  // Get this from EmailJS
            form.current,
            "WPWFKNXHUDpN0Khhg"    // Get this from EmailJS
        )
            .then((result) => {
                alert("Message sent!");      // Success message
                e.target.reset();
            }, (error) => {
                alert("Failed to send message."); // Error message
            });
    };

    return (
        <div>
            <form ref={form} onSubmit={sendEmail}>
                <input className="w-16 h-7 border " type="text" name="user_name" placeholder="Your Name" required />
                <input className="w-16 h-7 border "type="email" name="user_email" placeholder="Your Email" required />
                <textarea className="w-32 h-20 border" name="message" placeholder="Your Message" required />
                <button type="submit">Send</button>
            </form>
            <a
                href="https://wa.me/8801778856421?text=Hi%20I%20just%20visited%20your%20portfolio!"
                target="_blank"
                rel="noopener noreferrer"
            >
                Message Me on WhatsApp
            </a>

        </div>

    );
};

export default ContactForm;
