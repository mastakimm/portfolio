import React from 'react';
import ProjectImage1 from '../../assets/sections/project_section_project_1.png';
import YZ_main_screen from '../../assets/sections/smartmockups_lxohimdh.png';
import BrainMaster_main_screen from '../../assets/sections/smartmockups_brainMaster.png';

import Carousel from "./Carousel";
import CaseStudyButton from "../../assets/buttons/CaseStudyButton";


const project1 = {
    title: "YZ",
    description: "This page contains the case study of YZ ProjectDetails which includes the ProjectDetails Overview, Tools Used and Live Links to the official product.",
    backgroundImage: "../../assets/sections/home_section_background.jpg",
    image: "../../assets/sections/smartmockups_brainMaster.png",
    overview: "This is a brief description of the project. This is a brief description of the project.",
    tools: ["HTML", "CSS", "PHP", "LARAVEL", "REACTJS", "SQL", "GIT", "GITHUB"],
    url: "https://yz-epitech.eu",
    liveUrl: "https://yz-epitech.eu"
};

const project2 = {
    title: "BrainMaster",
    description: "This page contains the case study of BrainMaster ProjectDetails which includes the ProjectDetails Overview, Tools Used and Live Links to the official product.",
    backgroundImage: "../../assets/sections/home_section_background.jpg",
    image: "../../assets/sections/smartmockups_brainMaster.png",
    overview: "This is a brief description of the project. This is a brief description of the project.",
    tools: ["HTML", "CSS", "PHP", "SYMFONY", "SQL", "GIT", "GITHUB"],
    url: "https://github.com/mastakimm/BrainMaster/tree/master",
    liveUrl: "https://github.com/mastakimm/BrainMaster/tree/master"
};

const project3 = {
    title: "PeerAssist",
    description: "This page contains the case study of PeerAssist ProjectDetails which includes the ProjectDetails Overview, Tools Used and Live Links to the official product.",
    backgroundImage: "../../assets/sections/home_section_background.jpg",
    image: "../../assets/sections/project_section_project_1.png",
    overview: "This is a brief description of the PeerAssist. This is a brief description of the PeerAssist.",
    tools: ["HTML", "CSS", "PHP", "SYMFONY", "REACTJS", "SQL", "GIT", "GITHUB"],
    url: "https://example.com",
    liveUrl: "https://live.example.com"
};

const Projects = React.forwardRef((props, ref) => {
    return (
        <section id="projects" ref={ref} className="min-h-screen flex flex-col items-center justify-center">
            <h4
                className="text-center text-2xl 3xl:text-5xl sm:text-4xl md:text-3xl lg:text-3xl font-bold pt-20 border-b-2 border-black"
                style={{
                    fontFamily: 'Comfortaa, sans-serif',
                    maxWidth: '700px',
                    whiteSpace: 'pre-wrap',
                }}
            >
                PROJECTS
            </h4>
            <div
                className="p-4 pt-24 md:p-12 lg:p-20 xl:p-24 3xl:p-24 rounded-lg flex flex-col xl:flex-row items-center space-y-4 md:space-y-4 xl:space-x-48 3xl:space-x-64">
                <img
                    src={YZ_main_screen}
                    alt="YZ_main screen"
                    className="w-full md:w-3/4 lg:w-2/3 xl:w-5/12 2xl:w-5/12 3xl:w-5/12 rounded-lg"
                />
                <div className="md:w-9/12 text-gray-800 p-4 xxl:px-16 xl:pr-12 py-10">
                    <h3
                        className="text-2xl text-center sm:text-start md:text-start lg:text-start xl:text-start 2xl:text-start 3xl:text-start sm:text-3xl md:text-3xl 3xl:text-4xl font-bold mb-4">
                        YZ
                    </h3>
                    <p className="text-xl sm:text-xl md:text-2xl lg:text-xl xl:text-lg 3xl:text-3xl py-4">
                        YZ, a social network resembling Twitter, lets you share moments and engage with your community.
                        Stay informed and connected with YZ's user-friendly platform. Experience social networking at its best.
                    </p>
                    <div
                        className="flex justify-center items-center sm:block md:block lg:block xl:block 2xl:block 3xl:block">
                        <CaseStudyButton buttonText={"Case Study"} project={project1}/>
                    </div>
                </div>
            </div>

            <div
                className="p-4 pt-4 md:p-12 lg:p-20 xl:p-24 3xl:p-24 rounded-lg flex flex-col-reverse xl:flex-row items-center space-y-4 md:space-y-4 xl:space-x-48 3xl:space-x-64">
                <div className="md:w-9/12 text-gray-800 p-4 xxl:px-16 xl:pr-12 py-10">
                    <h3 className="text-2xl text-center sm:text-start md:text-start lg:text-start xl:text-start 2xl:text-start 3xl:text-start sm:text-3xl md:text-3xl 3xl:text-4xl font-bold mb-4">
                        BrainMaster
                    </h3>
                    <p className="text-xl sm:text-2xl md:text-2xl lg:text-xl xl:text-lg 3xl:text-3xl py-4">
                        BrainMaster is an interactive website designed to enhance your knowledge through engaging quizzes.
                        Challenge yourself, learn new facts, and expand your cultural understanding with BrainMaster's diverse range of topics.
                    </p>
                    <div
                        className="flex justify-center items-center sm:block md:block lg:block xl:block 2xl:block 3xl:block">
                        <CaseStudyButton buttonText={"Case Study"} project={project2}/>
                    </div>
                </div>
                <img
                    src={BrainMaster_main_screen}
                    alt="ProjectDetails 1"
                    className="w-full md:w-3/4 lg:w-2/3 xl:w-5/12 2xl:w-6/12 3xl:w-7/12  rounded-lg"
                />
            </div>
            <div
                className="p-4 pt-4 md:p-12 lg:p-20 xl:p-24 3xl:p-24 rounded-lg flex flex-col xl:flex-row items-center space-y-4 md:space-y-4 xl:space-x-48 3xl:space-x-64">
                <img
                    src={ProjectImage1}
                    alt="ProjectDetails 1"
                    className="w-full md:w-3/4 lg:w-2/3 xl:w-5/12 2xl:w-6/12 3xl:w-7/12 rounded-lg"
                />
                <div className="md:w-9/12 text-gray-800 p-4 xxl:px-16 xl:pr-12 py-10">
                    <h3
                        className="text-2xl text-center sm:text-start md:text-start lg:text-start xl:text-start 2xl:text-start 3xl:text-start sm:text-3xl md:text-3xl 3xl:text-4xl font-bold mb-4">
                        PeerAssist
                    </h3>
                    <p className="text-xl sm:text-2xl md:text-2xl lg:text-xl xl:text-lg 3xl:text-3xl py-4">
                        PeerAssist is designed to facilitate peer support among students. Take a ticket, receive help, and improve together.
                        Empowering students through collaborative assistance.
                    </p>
                    <div
                        className="flex justify-center items-center sm:block md:block lg:block xl:block 2xl:block 3xl:block">
                        <CaseStudyButton buttonText={"Case Study"} project={project3}/>
                    </div>
                </div>
            </div>
            <h4
                className="text-center text-3xl font-bold italic border-b-2 border-black pt-20"
                style={{
                    fontFamily: 'Comfortaa, sans-serif',
                    maxWidth: '700px',
                    whiteSpace: 'pre-wrap',
                }}
            >
                Additional Projects
            </h4>

            <Carousel/>
        </section>
    );
});

export default Projects;
