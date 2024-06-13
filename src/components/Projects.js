import React from 'react';
import ProjectImage from "../assets/sections/project_section_project_1.png";

const Projects = React.forwardRef((props, ref) => {
    return (
        <section id="projects" ref={ref}
                 className="min-h-screen flex flex-col items-center justify-center">
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
                    src={ProjectImage}
                    alt="Project 1"
                    className="w-full md:w-3/4 lg:w-2/3 xl:w-5/12 rounded-lg"
                />
                <div className="md:w-7/12 text-gray-800 p-4 xxl:px-16 xl:pr-12 py-24">
                    <h3 className="text-2xl sm:text-3xl md:text-3xl font-bold mb-4">Project Title</h3>
                    <p className="text-2xl sm:text-2xl md:text-2xl lg:text:xl xl:text-lg">
                        This is a brief description of the project. This is a brief description of the project. This is
                        a
                        brief description of the project. This is a brief description of the project. This is a brief
                        description of the project.
                    </p>
                </div>
            </div>
            <div
                className="p-4 pt-12 md:p-12 lg:p-20 xl:p-24 2xl:p-24 rounded-lg flex flex-col xl:flex-row items-center space-y-4 md:space-y-4 xl:space-x-48 2xl:space-x-64">
                <img
                    src={ProjectImage}
                    alt="Project 1"
                    className="w-full md:w-3/4 lg:w-3/4 xl:w-5/12 rounded-lg"
                />
                <div className="md:w-7/12 text-gray-800 p-4 xxl:px-16 xl:pr-12 py-24">
                    <h3 className="text-2xl sm:text-3xl md:text-3xl font-bold mb-4">Project Title</h3>
                    <p className="text-2xl sm:text-2xl md:text-2xl lg:text:xl xl:text-lg">
                        This is a brief description of the project. This is a brief description of the project. This is
                        a
                        brief description of the project. This is a brief description of the project. This is a brief
                        description of the project.
                    </p>
                </div>
            </div>
            <div
                className="p-4 pt-12 md:p-12 lg:p-20 xl:p-24 2xl:p-24 rounded-lg flex flex-col xl:flex-row items-center space-y-4 md:space-y-4 xl:space-x-48 2xl:space-x-64">
                <img
                    src={ProjectImage}
                    alt="Project 1"
                    className="w-full md:w-3/4 lg:w-3/4 xl:w-5/12 rounded-lg"
                />
                <div className="md:w-7/12 text-gray-800 p-4 xxl:px-16 xl:pr-12 py-24">
                    <h3 className="text-2xl sm:text-3xl md:text-3xl font-bold mb-4">Project Title</h3>
                    <p className="text-2xl sm:text-2xl md:text-2xl lg:text:xl xl:text-lg">
                        This is a brief description of the project. This is a brief description of the project. This is
                        a
                        brief description of the project. This is a brief description of the project. This is a brief
                        description of the project.
                    </p>
                </div>
            </div>
            <div
                className="p-4 pt-12 md:p-12 lg:p-20 xl:p-24 2xl:p-24 rounded-lg flex flex-col xl:flex-row items-center space-y-4 md:space-y-4 xl:space-x-48 2xl:space-x-64">
                <img
                    src={ProjectImage}
                    alt="Project 1"
                    className="w-full md:w-3/4 lg:w-3/4 xl:w-5/12 rounded-lg"
                />
                <div className="md:w-7/12 text-gray-800 p-4 xxl:px-16 xl:pr-12 py-24">
                    <h3 className="text-2xl sm:text-3xl md:text-3xl font-bold mb-4">Project Title</h3>
                    <p className="text-2xl sm:text-2xl md:text-2xl lg:text:xl xl:text-lg">
                        This is a brief description of the project. This is a brief description of the project. This is
                        a
                        brief description of the project. This is a brief description of the project. This is a brief
                        description of the project.
                    </p>
                </div>
            </div>
        </section>
    );
});

export default Projects;
