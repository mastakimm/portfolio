import React from 'react';
import ScrollToProjectsButton from '../assets/buttons/ScrollToPorjectButton';
import homeSectionBackgroundImage from '../assets/sections/home_section_background.jpg';

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
            <div className="text-black p-10 rounded-lg w-full max-w-4xl h-3/4">
                <h1
                    className="text-center text-4xl font-bold"
                    style={{ fontFamily: 'Comfortaa, sans-serif' }}
                >
                    <b>HEY, I'M ANTOINE FAWER</b>
                </h1>
                <h1
                    className="text-center text-2xl mt-4 py-12"
                    style={{ fontFamily: 'Comfortaa, sans-serif' }}
                >
                    A Fullstack Web Developer building your Websites and Web Applications that lead to
                    the success of your projects.
                </h1>
                <div className="flex justify-center items-center">
                    <ScrollToProjectsButton sectionRef={ sectionRefs.projects } buttonText={ "PROJECTS" } />
                </div>
            </div>
        </section>
    );
});

export default Home;
