import React from 'react';
import ProjectImage from "../assets/sections/project_section_project_1.png"

const Projects = React.forwardRef((props, ref) => {
    return (
        <section id="projects" ref={ref} className="min-h-screen flex flex-col items-center justify-center">
            <h4
                className="text-center text-3xl font-bold pt-20 border-b-2 border-black"
                style={{
                    fontFamily: 'Comfortaa, sans-serif',
                    maxWidth: '700px',
                    whiteSpace: 'pre-wrap',
                }}
            >
                PROJECTS
            </h4>
            <div
                className="p-20 pt-32 rounded-lg flex flex-col md:flex-row items-center space-y-4 md:space-y-0 md:space-x-4">
                <img
                    src={ProjectImage}
                    alt="Project 1"
                    className="w-full md:w-1/2 rounded-lg max-w-xl"
                />
                <div className="md:w-1/2 text-gray-800">
                    <h3 className="text-2xl font-bold mb-4">Project Title</h3>
                    <p className="text-lg">
                        This is a brief description of the project.
                    </p>
                </div>
            </div>
            <div
                className="p-20 rounded-lg flex flex-col md:flex-row items-center space-y-4 md:space-y-0 md:space-x-4">
                <img
                    src={ProjectImage}
                    alt="Project 1"
                    className="w-full md:w-1/2 rounded-lg"
                />
                <div className="md:w-1/2 text-gray-800">
                    <h3 className="text-2xl font-bold mb-4">Project Title</h3>
                    <p className="text-lg">
                        This is a brief description of the project.
                    </p>
                </div>
            </div>
            <div
                className="p-20 rounded-lg flex flex-col md:flex-row items-center space-y-4 md:space-y-0 md:space-x-4">
                <img
                    src={ProjectImage}
                    alt="Project 1"
                    className="w-full md:w-1/2 rounded-lg"
                />
                <div className="md:w-1/2 text-gray-800">
                    <h3 className="text-2xl font-bold mb-4">Project Title</h3>
                    <p className="text-lg">
                        This is a brief description of the project.
                    </p>
                </div>
            </div>
            <div
                className="p-20 rounded-lg flex flex-col md:flex-row items-center space-y-4 md:space-y-0 md:space-x-4">
                <img
                    src={ProjectImage}
                    alt="Project 1"
                    className="w-full md:w-1/2 rounded-lg"
                />
                <div className="md:w-1/2 text-gray-800">
                    <h3 className="text-2xl font-bold mb-4">Project Title</h3>
                    <p className="text-lg">
                        This is a brief description of the project.
                    </p>
                </div>
            </div>
        </section>
    );
});

export default Projects;
