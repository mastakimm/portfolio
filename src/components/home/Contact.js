import React, { useRef } from 'react';
import emailjs from 'emailjs-com';
import Swal from 'sweetalert2';
import contactSectionBackgroundImage from "../../assets/sections/contact_session_background.jpg";

const Contact = React.forwardRef((props, ref) => {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_mvjzokz', 'template_p63noeb', form.current, 'Uzn5fzG0-xuO3ARjc')
            .then((result) => {
                Swal.fire({
                    icon: 'success',
                    title: 'Message Sent',
                    text: `Thanks for your message !`,
                    confirmButtonText: 'Great!',
                    confirmButtonColor: '#e65952'
                });
            }, (error) => {
                Swal.fire({
                    icon: 'error',
                    title: 'Message Failed',
                    text: 'Failed to send the message, please try again.',
                    confirmButtonText: 'Great!',
                    confirmButtonColor: '#e65952'
                });
            });

        e.target.reset();
    };

    return (
        <section
            id="contact"
            ref={ref}
            className="sm:h-full flex items-center py-20 flex-col"
            style={{
                backgroundImage: `url(${contactSectionBackgroundImage})`,
                backgroundSize: "cover",
                backgroundPosition: 'center'
            }}
        >
            <div className="flex flex-col w-full max-w-2xl 3xl:pb-20 pb-10">
                <p
                    data-aos="zoom-in-up"
                    className="text-center text-2xl 2xl:text-3xl 3xl:text-4xl font-bold"
                    style={{ fontFamily: 'Roboto, sans-serif' }}
                >
                    Feel free to Contact me by submitting the form below and I will get back to you as soon as possible
                </p>
            </div>

            <div
                className="flex flex-col w-full max-w-2xl 3xl:max-w-5xl 3xl:h-6/6"
                data-aos="zoom-in-up"
            >
                <div
                    className="bg-gray-100 shadow-2xl p-10 rounded-lg w-full min-w-full max-w-2xl border-4 border-gray-100">
                    <form ref={form} onSubmit={sendEmail} className="flex flex-col space-y-4 3xl:space-y-10">
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