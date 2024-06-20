import React from 'react';
import ProjectImage1 from '../../assets/sections/project_section_project_1.png';
import Carousel from "./Carousel";
import CaseStudyButton from "../../assets/buttons/CaseStudyButton";

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
                    src={ProjectImage1}
                    alt="Project 1"
                    className="w-full md:w-3/4 lg:w-2/3 xl:w-5/12 rounded-lg"
                />
                <div className="md:w-9/12 text-gray-800 p-4 xxl:px-16 xl:pr-12 py-10">
                    <h3
                        className="text-2xl text-center sm:text-start md:text-start lg:text-start xl:text-start 2xl:text-start 3xl:text-start sm:text-3xl md:text-3xl 3xl:text-4xl font-bold mb-4">
                        Project Title
                    </h3>
                    <p className="text-xl sm:text-xl md:text-2xl lg:text-xl xl:text-lg 3xl:text-3xl py-4">
                        This is a brief description of the project. This is a brief description of the project. This is
                        a brief description of the project. This is a brief description of the project. This is a brief
                        description of the project.
                    </p>
                    <div
                        className="flex justify-center items-center sm:block md:block lg:block xl:block 2xl:block 3xl:block">
                        <CaseStudyButton buttonText={"Case Study"}/>
                    </div>
                </div>
            </div>

            <div
                className="p-4 pt-4 md:p-12 lg:p-20 xl:p-24 3xl:p-24 rounded-lg flex flex-col-reverse xl:flex-row items-center space-y-4 md:space-y-4 xl:space-x-48 3xl:space-x-64">
                <div className="md:w-9/12 text-gray-800 p-4 xxl:px-16 xl:pr-12 py-10">
                    <h3 className="text-2xl text-center sm:text-start md:text-start lg:text-start xl:text-start 2xl:text-start 3xl:text-start sm:text-3xl md:text-3xl 3xl:text-4xl font-bold mb-4">Project
                        Title</h3>
                    <p className="text-xl sm:text-2xl md:text-2xl lg:text-xl xl:text-lg 3xl:text-3xl py-4">
                        This is a brief description of the project. This is a brief description of the project. This is
                        a brief description of the project. This is a brief description of the project. This is a brief
                        description of the project.
                    </p>
                    <div
                        className="flex justify-center items-center sm:block md:block lg:block xl:block 2xl:block 3xl:block">
                        <CaseStudyButton buttonText={"Case Study"}/>
                    </div>
                </div>
                <img
                    src={ProjectImage1}
                    alt="Project 1"
                    className="w-full md:w-3/4 lg:w-2/3 xl:w-5/12 rounded-lg"
                />
            </div>
            <div
                className="p-4 pt-4 md:p-12 lg:p-20 xl:p-24 3xl:p-24 rounded-lg flex flex-col xl:flex-row items-center space-y-4 md:space-y-4 xl:space-x-48 3xl:space-x-64">
                <img
                    src={ProjectImage1}
                    alt="Project 1"
                    className="w-full md:w-3/4 lg:w-2/3 xl:w-5/12 rounded-lg"
                />
                <div className="md:w-9/12 text-gray-800 p-4 xxl:px-16 xl:pr-12 py-10">
                    <h3
                        className="text-2xl text-center sm:text-start md:text-start lg:text-start xl:text-start 2xl:text-start 3xl:text-start sm:text-3xl md:text-3xl 3xl:text-4xl font-bold mb-4">
                        Project Title
                    </h3>
                    <p className="text-xl sm:text-2xl md:text-2xl lg:text-xl xl:text-lg 3xl:text-3xl py-4">
                        This is a brief description of the project. This is a brief description of the project. This is
                        a brief description of the project. This is a brief description of the project. This is a brief
                        description of the project.
                    </p>
                    <div
                        className="flex justify-center items-center sm:block md:block lg:block xl:block 2xl:block 3xl:block">
                        <CaseStudyButton buttonText={"Case Study"}/>
                    </div>
                </div>
            </div>
            <div
                className="p-4 pt-4 pb-20 md:p-12 lg:p-20 xl:p-24 3xl:p-24 rounded-lg flex flex-col-reverse xl:flex-row items-center space-y-4 md:space-y-4 xl:space-x-48 3xl:space-x-64">
                <div className="md:w-9/12 text-gray-800 p-4 xl:pr-12 py-10">
                    <h3
                        className="text-2xl text-center sm:text-start md:text-start lg:text-start xl:text-start 2xl:text-start 3xl:text-start sm:text-3xl md:text-3xl 3xl:text-4xl font-bold mb-4">
                        Project Title
                    </h3>
                    <p className="text-xl sm:text-2xl md:text-2xl lg:text-xl xl:text-lg 3xl:text-3xl py-4">
                        This is a brief description of the project. This is a brief description of the project. This is
                        a brief description of the project. This is a brief description of the project. This is a brief
                        description of the project.
                    </p>
                    <div
                        className="flex justify-center items-center sm:block md:block lg:block xl:block 2xl:block 3xl:block">
                        <CaseStudyButton buttonText={"Case Study"}/>
                    </div>
                </div>
                <img
                    src={ProjectImage1}
                    alt="Project 1"
                    className="w-full md:w-3/4 lg:w-2/3 xl:w-5/12 rounded-lg"
                />
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
