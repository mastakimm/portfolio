import React from 'react';
import ScrollToPorjectButton from "../assets/buttons/ScrollToPorjectButton";

const About = React.forwardRef((props, ref) => {
    const { sectionRefs } = props;

    return (
        <section
            id="about"
            ref={ref}
            className="bg-gray-100 min-h-screen flex flex-col items-center justify-start pt-16 pb-16 2xl:pt-48"
        >
            <div className="flex items-center justify-center w-full p-10">
                <h4
                    className="text-center text-2xl 2xl:text-5xl sm:text-4xl md:text-3xl lg:text-3xl border-b-2 border-black"
                    style={{
                        fontFamily: 'Comfortaa, sans-serif',
                        maxWidth: '700px',
                        whiteSpace: 'pre-wrap'
                    }}
                >
                    <b>ABOUT ME</b>
                </h4>
            </div>
            <div className="flex items-center justify-center w-full pt-10 pb-16 p-8">
                <h4
                    className="text-center text-2xl 2xl:text-4xl 2xl:tracking-wide"
                    style={{
                        fontFamily: 'Comfortaa, sans-serif',
                        maxWidth: '700px',
                        whiteSpace: 'pre-wrap'
                    }}
                >
                    Here you will find more information about me, what I do, and my current skills mostly in terms of
                    programming and technology
                </h4>
            </div>
            <div className="w-full flex flex-col lg:flex-row items-start justify-center">
                <div className="p-10 w-full lg:w-1/2 flex flex-col items-center justify-start">
                    <div className="lg:pl-16 w-full lg:w-10/12 flex flex-col">
                        <h4
                            className="text-left text-2xl 2xl:text-4xl font-bold mb-6 lg:mb-6 lg:self-start lg:mt-0"
                            style={{
                                fontFamily: 'Comfortaa, sans-serif',
                                maxWidth: '700px',
                                whiteSpace: 'pre-wrap',
                            }}
                        >
                            Get to know me!
                        </h4>
                        <p
                            className="text-1xl 2xl:text-2xl pb-5"
                            style={{
                                fontFamily: 'Comfortaa, sans-serif',
                                maxWidth: '700px',
                                whiteSpace: 'pre-wrap',
                            }}
                        >

                            I'm a <b className="italic">FullStack Web Developer</b> building and managing your Websites and Web
                            Applications that leads to the success of the overall product. Check out some of my work in
                            the <b className="italic">Projects</b> section.

                            <br/><br/>

                            Some Blablabla about me, like i love racquet sports and blablabla blabalablablabla blabalablablabla blabalablablabla blabalablablabla blabalablablabla blabala

                            <br/><br/>

                            I'm open to <b className="italic">Job</b> opportunities where I can contribute, learn and grow. If you have a good
                            opportunity that matches my skills and experience then don't hesitate to <b className="italic">Contact</b> me.

                        </p>
                        <ScrollToPorjectButton buttonText={"Contact"} sectionRef={sectionRefs.contact}/>
                    </div>
                </div>
                <div className="p-10 w-full lg:w-1/2 flex flex-col items-start justify-start">
                    <div className="lg:pl-16 w-full lg:w-10/12 flex flex-col">
                        <h4
                            className="text-left text-2xl 2xl:text-4xl font-bold mb-6 lg:mb-6 lg:self-start lg:mt-0"
                            style={{
                                fontFamily: 'Comfortaa, sans-serif',
                                maxWidth: '700px',
                                whiteSpace: 'pre-wrap',
                            }}
                        >
                            My Skills
                        </h4>
                        <div className="rounded-lg w-full flex flex-wrap gap-4 justify-start">
                            {[
                                "HTML",
                                "CSS",
                                "PHP",
                                "SYMFONY",
                                "LARAVEL",
                                "JS",
                                "SQL",
                                "NOSQL",
                                "WORDPRESS",
                                "SEO",
                                "TERMINAL",
                                "REACT",
                                "TAILWIND",
                                "GIT",
                                "GITHUB",
                            ].map((skill, index) => (
                                <span
                                    key={index}
                                    className="bg-gray-200 rounded-lg shadow-lg px-4 py-2 2xl:py-6 text-center overflow-hidden 2xl:text-3xl"
                                    style={{
                                        fontFamily: 'Comfortaa, sans-serif',
                                        maxWidth: '700px',
                                        whiteSpace: 'nowrap'
                                    }}
                                >
                                    {skill}
                                </span>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
});

export default About;