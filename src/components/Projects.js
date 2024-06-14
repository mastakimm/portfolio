import React, { useState } from 'react';
import ProjectImage1 from '../assets/sections/project_section_project_1.png';
import ProjectImage2 from '../assets/sections/home_section_background.jpg';
import Carousel from "./Carousel";
import ScrollToPorjectButton from "../assets/buttons/ScrollToPorjectButton";
import CaseStudyButton from "../assets/buttons/CaseStudyButton";

const Projects = React.forwardRef((props, ref) => {
    const [images] = useState([
        ProjectImage1,
        ProjectImage2,
    ]);

    return (
        <section id="projects" ref={ref} className="min-h-screen flex flex-col items-center justify-center">
            <h4
                className="text-center text-2xl sm:text-4xl md:text-3xl lg:text-3xl font-bold pt-20 border-b-2 border-black"
                style={{
                    fontFamily: 'Comfortaa, sans-serif',
                    maxWidth: '700px',
                    whiteSpace: 'pre-wrap',
                }}
            >
                PROJECTS
            </h4>
            <div
                className="p-4 pt-24 md:p-12 lg:p-20 xl:p-24 2xl:p-24 rounded-lg flex flex-col xl:flex-row items-center space-y-4 md:space-y-4 xl:space-x-48 2xl:space-x-64">
                <img
                    src={ProjectImage1}
                    alt="Project 1"
                    className="w-full md:w-3/4 lg:w-2/3 xl:w-5/12 rounded-lg"
                />
                <div className="md:w-7/12 text-gray-800 p-4 xxl:px-16 xl:pr-12 py-24">
                    <h3 className="text-2xl sm:text-3xl md:text-3xl font-bold mb-4">Project Title</h3>
                    <p className="text-2xl sm:text-2xl md:text-2xl lg:text-xl xl:text-lg">
                        This is a brief description of the project. This is a brief description of the project. This is
                        a brief description of the project. This is a brief description of the project. This is a brief
                        description of the project.
                    </p>
                    <CaseStudyButton buttonText={"Case Study"}/>
                </div>
            </div>

            <div
                className="p-4 pt-24 pb-20 md:p-12 lg:p-20 xl:p-24 2xl:p-24 rounded-lg flex flex-col xl:flex-row items-center space-y-4 md:space-y-4 xl:space-x-48 2xl:space-x-64">
                <div className="md:w-7/12 text-gray-800 p-4 pl-10 xxl:px-16 xl:pr-12 py-24">
                    <h3 className="text-2xl sm:text-3xl md:text-3xl font-bold mb-4">Project Title</h3>
                    <p className="text-2xl sm:text-2xl md:text-2xl lg:text-xl xl:text-lg">
                        This is a brief description of the project. This is a brief description of the project. This is
                        a brief description of the project. This is a brief description of the project. This is a brief
                        description of the project.
                    </p>
                    <CaseStudyButton buttonText={"Case Study"}/>
                </div>
                <img
                    src={ProjectImage1}
                    alt="Project 1"
                    className="w-full md:w-3/4 lg:w-2/3 xl:w-5/12 rounded-lg"
                />
            </div>
            <div
                className="p-4 pt-24 pb-20 md:p-12 lg:p-20 xl:p-24 2xl:p-24 rounded-lg flex flex-col xl:flex-row items-center space-y-4 md:space-y-4 xl:space-x-48 2xl:space-x-64">
                <img
                    src={ProjectImage1}
                    alt="Project 1"
                    className="w-full md:w-3/4 lg:w-2/3 xl:w-5/12 rounded-lg"
                />
                <div className="md:w-7/12 text-gray-800 p-4 xxl:px-16 xl:pr-12 py-24">
                    <h3 className="text-2xl sm:text-3xl md:text-3xl font-bold mb-4">Project Title</h3>
                    <p className="text-2xl sm:text-2xl md:text-2xl lg:text-xl xl:text-lg">
                        This is a brief description of the project. This is a brief description of the project. This is
                        a brief description of the project. This is a brief description of the project. This is a brief
                        description of the project.
                    </p>
                    <CaseStudyButton buttonText={"Case Study"}/>
                </div>
            </div>
            <Carousel/>
        </section>
    );
});

export default Projects;
