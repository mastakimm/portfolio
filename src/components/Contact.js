import React, { useRef } from 'react';
import emailjs from 'emailjs-com';
import contactSectionBackgroundImage from "../assets/sections/contact_session_background.jpg";

const Contact = React.forwardRef((props, ref) => {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_mvjzokz', 'template_p63noeb', form.current, 'Uzn5fzG0-xuO3ARjc')
            .then((result) => {
                console.log(result.text);
                alert('Message sent successfully!');
            }, (error) => {
                console.log(error.text);
                alert('Failed to send the message, please try again');
            });

        e.target.reset();
    };

    return (
        <section
            id="contact"
            ref={ref}
            className="min-h-screen flex items-center justify-center p-20"
            style={{
                backgroundImage: `url(${contactSectionBackgroundImage})`,
                backgroundSize: "cover",
                backgroundPosition: 'center'
            }}
        >
            <div className="flex flex-col w-full max-w-2xl">
                <h4
                    className="text-3xl font-bold text-center pb-10"
                    style={{ fontFamily: 'Comfortaa, sans-serif' }}
                >
                    CONTACT
                </h4>
                {/*         Pour le <p> Mettre la même couleur que le background image (pipette)        */}
                <p

                    className="text-center text-2xl font-bold pb-10"
                    style={{ fontFamily: 'Comfortaa, sans-serif' }}
                >
                    Feel free to Contact me by submitting the form below and I will get back to you as soon as possible
                </p>
                <div className="bg-gray-100 shadow-2xl p-10 rounded-lg w-full max-w-2xl border-4 border-gray-100">
                    <form ref={form} onSubmit={sendEmail} className="flex flex-col space-y-6">
                        <label className="text-xl">Name</label>
                        <input
                            type="text"
                            name="from_name"
                            placeholder="Your Name"
                            className="p-4 rounded-lg bg-gray-100 border border-gray-700 text-lg"
                            required
                        />
                        <label className="text-xl">Email</label>
                        <input
                            type="email"
                            name="user_email"
                            placeholder="Your Email"
                            className="p-4 rounded-lg bg-gray-100 border border-gray-700 text-lg"
                            required
                        />
                        <label className="text-xl">Message</label>
                        <textarea
                            name="message"
                            placeholder="Your Message"
                            className="p-4 rounded-lg bg-gray-100 border border-gray-700 text-lg"
                            rows="6"
                            required
                        />
                        <button
                            type="submit"
                            className="bg-button-red hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-lg text-lg"
                        >
                            Send
                        </button>
                    </form>
                </div>
            </div>
        </section>
    );
});

export default Contact;