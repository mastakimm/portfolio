import React from 'react';
import 'aos/dist/aos.css';
import ScrollToProjectsButton from '../../assets/buttons/ScrollToPorjectButton';
import homeSectionBackgroundImage from '../../assets/sections/home_section_background.jpg';

const Home = React.forwardRef((props, ref) => {
    const { sectionRefs } = props;

    return (
        <section
            id="home"
            ref={ref}
            className="min-h-screen flex items-center justify-center"
            style={{
                backgroundImage: `url(${homeSectionBackgroundImage})`,
                backgroundSize: "cover",
                backgroundPosition: 'center'
            }}
        >
            <div data-aos="fade-up"
                 className="text-black p-10 pt-36 sm:pt-0 md:pt-0 lg:pt-0 xl:pt-0 2xl:pt-0 3xl:pt-0 4xl:pt-0 5xl:pt-0 rounded-lg w-full max-w-4xl h-3/4">
                <h1
                    className="text-center text-2xl 3xl:text-3xl 4xl:text-4xl 4xl:tracking-widest 5xl:text-5xl 5xl:tracking-widest font-bold"
                    style={{fontFamily: 'Roboto, sans-serif'}}
                >
                    HEY THERE, I'M
                </h1>
                <h1
                    className="text-center text-6xl 3xl:text-7xl 4xl:text-8xl 4xl:tracking-widest 5xl:text-9xl 5xl:tracking-widest font-bold pt-4"
                    style={{fontFamily: 'Roboto, sans-serif'}}
                >
                    ANTOINE FAWER,
                </h1>
                {/*<h1
                    className="text-center text-6xl 3xl:text-7xl 4xl:text-8xl 4xl:tracking-widest 5xl:text-9xl 5xl:tracking-widest font-bold"
                    style={{fontFamily: 'Roboto, sans-serif'}}
                >
                    <b>HEY THERE, I'M ANTOINE FAWER,</b>
                </h1>*/}
                <h1
                    className="text-center text-2xl 3xl:text-4xl 3xl:tracking-wide 4xl:text-5xl 4xl:tracking-widest 5xl:text-4x6 5xl:tracking-widest mt-4 py-12"
                    style={{fontFamily: 'Comfortaa, sans-serif'}}
                >
                    A Fullstack Web Developer dedicated to developing websites and web applications
                    that contribute to the success of your projects.
                </h1>
                <div className="flex justify-center items-center">
                    <ScrollToProjectsButton sectionRef={sectionRefs.projects} buttonText={"PROJECTS"}/>
                </div>
            </div>
        </section>
    );
});

export default Home;
