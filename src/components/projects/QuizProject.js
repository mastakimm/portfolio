import React from 'react';
import homeSectionBackgroundImage from "../../assets/sections/home_section_background.jpg";
import SendToProjectUrl from "../../assets/buttons/SendToProjectUrl";
import ProjectImage1 from "../../assets/sections/project_section_project_1.png";

const QuizProject = () => {

    return (
        <>
            <section
                className="min-h-screen flex items-center justify-center flex-col"
                style={{
                    backgroundImage: `url(${homeSectionBackgroundImage})`,
                    backgroundSize: "cover",
                    backgroundPosition: 'center'
                }}
            >
                <div
                    className="text-black p-10 pt-36 sm:pt-0 md:pt-0 lg:pt-0 xl:pt-0 2xl:pt-0 3xl:pt-0 rounded-lg w-full max-w-4xl h-4/4">
                    <h1
                        className="text-center text-4xl 3xl:text-7xl font-bold"
                        style={{fontFamily: 'Comfortaa, sans-serif'}}
                    >
                        <b>BrainMaster</b>
                    </h1>
                    <h1
                        className="text-center text-2xl 3xl:text-4xl 3xl:tracking-wide mt-4 pt-10"
                        style={{fontFamily: 'Comfortaa, sans-serif'}}
                    >
                        This page contains the case study of BrainMaster Project which includes the Project
                        Overview,
                        Tools Used and Live Links to the official product.
                    </h1>
                </div>
                <div className="flex justify-center items-center">
                    <SendToProjectUrl/>
                </div>
            </section>
            <section className="bg-gray-100 min-h-screen py-16 3xl:py-48 flex flex-col items-center">
                <div
                    className="flex flex-col justify-center items-center w-full pt-24 h-[650px]">
                    <img
                        src={ProjectImage1}
                        alt="Project 1"
                        className="w-full md:w-8/12 lg:w-9/12 xl:w-6/12 3xl:w-1/2 rounded-lg"
                    />
                </div>
                <div
                    className="w-3/4 pt-28 md:px-12 lg:px-20 xl:px-24 3xl:px-24 rounded-lg flex flex-col space-y-4 md:space-y-4 xl:space-y-6 3xl:space-y-8">
                    <h3 className="text-2xl justify-start sm:text-3xl md:text-3xl 3xl:text-4xl font-bold py-4">
                        Project Overview
                    </h3>
                    <p className="text-xl sm:text-xl md:text-2xl lg:text-xl xl:text-xl 3xl:text-3xl py-4 justify-start">
                        This is a brief description of the project. This is a brief description of the project. This
                        is a brief description of the project. This is a brief description of the project. This is a
                        brief description of the project.
                        <br/><br/>
                        This is a brief description of the project. This is a brief description of the project. This
                        is a brief description of the project. This is a brief description of the project. This is a
                        brief description of the project.
                        <br/><br/>
                        This is a brief description of the project. This is a brief description of the project. This
                        is a brief description of the project. This is a brief description of the project. This is a
                        brief description of the project.
                        <br/><br/>
                        This is a brief description of the project. This is a brief description of the project. This
                        is a brief description of the project. This is a brief description of the project. This is a
                        brief description of the project.
                        <br/><br/>
                        This is a brief description of the project. This is a brief description of the project. This
                        is a brief description of the project. This is a brief description of the project. This is a
                        brief description of the project.
                    </p>
                    <div className="w-full lg:w-10/12 flex flex-col py-20">
                        <h4 className="text-left text-3xl 3xl:text-4xl font-bold mb-6 lg:mb-6 lg:self-start lg:mt-0">
                            Tools Used
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
                            ].map((skill, index) => (
                                <span
                                    key={index}
                                    className="skill bg-gray-200 rounded-lg shadow-lg px-4 py-3 xl-px-6 xl:py-3 3xl:py-6 text-center overflow-hidden 3xl:text-2xl"
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
                <div
                    className="w-3/4 pb-20 md:px-12 lg:px-20 xl:px-24 3xl:px-24 rounded-lg block 3xl:space-y-8">
                    <h4 className="text-left text-3xl 3xl:text-4xl font-bold mb-6 lg:mb-6 lg:self-start lg:mt-0">
                        See Live
                    </h4>
                    <button
                        className="bg-button-red text-white rounded py-3 mr-2"
                        style={{
                            fontFamily: 'Comfortaa, sans-serif',
                            fontWeight: 'bold',
                            letterSpacing: '0.05em',
                            width: '120px'
                        }}
                    >
                        Back
                    </button>
                    <button
                        className="bg-button-red text-white rounded shadow py-3"
                        style={{
                            fontFamily: 'Comfortaa, sans-serif',
                            fontWeight: 'bold',
                            letterSpacing: '0.05em',
                            width: '120px'
                        }}
                    >
                        Live
                    </button>
                </div>

            </section>


        </>
);
}

export default QuizProject;