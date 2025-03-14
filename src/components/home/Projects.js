import React from 'react';
import YZ_main_screen from '../../assets/sections/projects/YZ_HomePage.png';
import BrainMaster_main_screen from '../../assets/sections/projects/BrainMaster_MainPage.png'

import Carousel from "./Carousel";
import CaseStudyButton from "../../assets/buttons/CaseStudyButton";


const YZ = {
    title: "YZ",
    description: "This page contains the case study of YZ ProjectDetails which includes the ProjectDetails Overview, Tools Used and Live Links to the official product.",
    backgroundImage: "../../assets/sections/home_section_background_rotated.jpg",
    image: "../../assets/sections/projects/YZ_HomePage.png",
    overview: "YZ is a dynamic platform where you can share ideas, follow interests, and engage in real-time conversations," +
        " keeping you informed and connected. Express yourself freely through posts, photos, videos," +
        " and reactions, and customize your feed by following accounts and hashtags that interest you. Stay updated with instant notifications about interactions," +
        " new followers, and trending topics.",
    tools: ["HTML", "CSS", "PHP", "LARAVEL", "REACTJS", "SQL", "GIT", "GITHUB"],
    liveUrl: "https://github.com/mastakimm/YZ",
    url: "https://github.com/mastakimm/YZ",
    githubUrl: "https://github.com/mastakimm/YZ",
};

const BrainMaster = {
    title: "BrainMaster",
    description: "This page contains the case study of BrainMaster ProjectDetails which includes the ProjectDetails Overview, Tools Used and Live Links to the official product.",
    backgroundImage: "../../assets/sections/home_section_background_rotated.jpg",
    image: "../../assets/sections/projects/BrainMaster_MainPage.png",
    overview:
        "BrainMaster is a platform that offers engaging quizzes across various categories like science, history, and pop culture, allowing users to test and expand their knowledge." +
        " It provides instant results and detailed feedback to help users track their progress and improve." +
        " Additionally, BrainMaster includes an admin panel for educators and content creators to analyze quiz performance and user engagement.",
    tools: ["HTML", "CSS", "PHP", "SYMFONY", "SQL", "GIT", "GITHUB"],
    url: "https://github.com/mastakimm/BrainMaster/tree/master",
    liveUrl: "https://github.com/mastakimm/BrainMaster/tree/master",
    githubUrl: "https://github.com/mastakimm/BrainMaster/tree/master"
};

const CompuTechMarket = {
    title: "CompuTechMarket",
    description: "This page contains the case study of CompuTechMarket which includes the ProjectDetails Overview, Tools Used and Links to the github repository.",
    backgroundImage: "../../assets/sections/home_section_background_rotated.jpg",
    image: "../../assets/sections/projects/computechmarket.webp",
    overview: "CompuTechMarket is a school project designed to simulate the development and operation of an e-commerce platform specializing in computer hardware and peripherals." +
        "This project serves as a practical learning experience in web development, database management, and e-commerce principles.",
    tools: ["HTML", "CSS", "JAVA", "SPRING", "ANGULAR", "SQL", "GIT", "GITHUB"],
    url: "https://github.com/mastakimm/CompuTechMarket",
    liveUrl: "https://github.com/mastakimm/CompuTechMarket",
    githubUrl: "https://github.com/mastakimm/CompuTechMarket"
};

const Projects = React.forwardRef((props, ref) => {
    return (
        <section id="projects" ref={ref} className="min-h-screen flex flex-col items-center justify-center">
            <h4
                className="pb-16 text-center text-2xl 3xl:text-6xl sm:text-4xl md:text-4xl lg:text-5xl font-bold pt-20"
                data-aos="fade-in"
                style={{
                    fontFamily: 'Roboto, sans-serif',
                    maxWidth: '700px',
                    whiteSpace: 'pre-wrap',
                }}
            >
                PROJECTS
            </h4>
            <div
                className="p-4 pt-24 md:p-12 lg:p-20 xl:p-24 3xl:p-24 flex flex-col xl:flex-row items-center space-y-4 md:space-y-4 xl:space-x-48 3xl:space-x-64">
                <img
                    src={YZ_main_screen}
                    alt="YZ_main screen"
                    data-aos="zoom-in-up"
                    className="customShadow w-full md:w-3/4 lg:w-3/4 xl:w-6/12 2xl:w-5/12 3xl:w-5/12 rounded-lg"
                />
                <div
                    className="md:w-9/12 text-gray-800 p-4 xxl:px-16 xl:pr-12 py-10"
                    data-aos="zoom-up"
                >
                    <h3
                        className="text-2xl text-center sm:text-start md:text-start lg:text-start xl:text-start 2xl:text-start 3xl:text-start sm:text-3xl md:text-3xl 3xl:text-4xl font-bold mb-4">
                        YZ
                    </h3>
                    <p className="text-xl sm:text-xl md:text-2xl lg:text-xl xl:text-lg 3xl:text-3xl py-4 text-justify">
                        YZ, a social network resembling Twitter, lets you share moments and engage with your community.
                        Stay informed and connected with YZ's user-friendly platform. Experience social networking at
                        its best.
                    </p>
                    <div
                        className="flex justify-center items-center sm:block md:block lg:block xl:block 2xl:block 3xl:block">
                        <CaseStudyButton buttonText={"Case Study"} project={YZ}/>
                    </div>
                </div>
            </div>

            <div
                className="bg-gray-100 p-4 pt-4 md:p-12 lg:p-20 xl:p-24 3xl:p-24 flex flex-col-reverse xl:flex-row items-center space-y-4 md:space-y-4 xl:space-x-48 3xl:space-x-64">
                <div
                    className="md:w-9/12 text-gray-800 p-4 xxl:px-16 xl:pr-12 py-10"
                    data-aos="zoom-up"
                >
                    <h3 className="text-2xl text-center sm:text-start md:text-start lg:text-start xl:text-start 2xl:text-start 3xl:text-start sm:text-3xl md:text-3xl 3xl:text-4xl font-bold mb-4">
                        BrainMaster
                    </h3>
                    <p className="text-xl sm:text-2xl md:text-2xl lg:text-xl xl:text-lg 3xl:text-3xl py-4 text-justify">
                        BrainMaster is an interactive website designed to enhance your knowledge through engaging
                        quizzes.
                        Challenge yourself, learn new facts, and expand your cultural understanding with BrainMaster's
                        diverse range of topics.
                    </p>
                    <div
                        className="flex justify-center items-center sm:block md:block lg:block xl:block 2xl:block 3xl:block">
                        <CaseStudyButton buttonText={"Case Study"} project={BrainMaster}/>
                    </div>
                </div>
                <img
                    src={BrainMaster_main_screen}
                    alt="ProjectDetails 1"
                    data-aos="zoom-in-up"
                    className="customShadow w-full md:w-3/4 lg:w-3/4 xl:w-6/12 2xl:w-5/12 3xl:w-5/12 rounded-lg"

                />
            </div>
            <div
                className="bg-gray-200 p-4 pt-4 md:p-12 lg:p-20 xl:p-24 3xl:p-24 flex flex-col xl:flex-row items-center space-y-4 md:space-y-4 xl:space-x-48 3xl:space-x-64">
                <img
                    src={CompuTechMarket.image}
                    alt="ProjectDetails 1"
                    data-aos="zoom-in-up"
                    className="customShadow w-full md:w-3/4 lg:w-3/4 xl:w-6/12 2xl:w-5/12 3xl:w-5/12 rounded-lg"
                />
                <div
                    className="md:w-9/12 text-gray-800 p-4 xxl:px-16 xl:pr-12 py-10"
                    data-aos="zoom-up"
                >
                    <h3
                        className="text-2xl text-center sm:text-start md:text-start lg:text-start xl:text-start 2xl:text-start 3xl:text-start sm:text-3xl md:text-3xl 3xl:text-4xl font-bold mb-4">
                        CompuTechMarket
                    </h3>
                    <p className="text-xl sm:text-2xl md:text-2xl lg:text-xl xl:text-lg 3xl:text-3xl py-4 text-justify">
                        CompuTechMarket offers a wide range of computers, components, and accessories.
                        Build your dream PC or upgrade your setup.
                    </p>
                    <div
                        className="flex justify-center items-center sm:block md:block lg:block xl:block 2xl:block 3xl:block">
                        <CaseStudyButton buttonText={"Case Study"} project={CompuTechMarket}/>
                    </div>
                </div>
            </div>
            <h4
                className="text-center text-4xl font-bold italic border-b-2 border-black pt-20"
                style={{
                    fontFamily: 'Roboto, sans-serif',
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
