import '../../scss/main.scss';

import { useRef } from "react";
import emailjs from "@emailjs/browser";

import Footer from '../navigation/Footer';

export default function Contact() {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs
            .sendForm(
                "service_nutxt4k",
                "template_9v1guwb",
                form.current,
                "hkLQCqalS8BVWo60A"
            )
            .then(
                (result) => {
                    console.log(result.text);
                },
                (error) => {
                    console.log(error.text);
                }
            );
        e.target.reset();
    }

    return (
        <>
            <div className="contact">
                <h2>Get in touch!</h2>
                <form ref={form} onSubmit={sendEmail}>
                    <div className="input">
                        <div className="form">
                            <label>Name</label>
                            <input type="text" name="user_name" placeholder="Type your name" required />
                        </div>
                    </div>
                    <div className="form">
                        <label>Email</label>
                        <input type="email" name="user_email" placeholder="Email address" required />
                    </div>
                    <div className='form'>
                        <label>Message</label>
                        <textarea name="message" cols="30" rows="8" placeholder='How can I help you today?' required/>
                    </div>
                    <div className=" submit">
                        <input type="submit" value="Send"/>
                    </div>
                </form>
            </div>
            <Footer />
        </>
    )
}