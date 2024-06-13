import React, { useState } from 'react';
import ProjectImage1 from '../assets/sections/project_section_project_1.png';
import ProjectImage2 from '../assets/sections/home_section_background.jpg';
import { Carousel, IconButton } from '@material-tailwind/react';
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/outline';

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
            <div className="p-4 pt-24 md:p-12 lg:p-20 xl:p-24 2xl:p-24 rounded-lg flex flex-col xl:flex-row items-center space-y-4 md:space-y-4 xl:space-x-48 2xl:space-x-64">
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
                </div>
            </div>
            <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 w-full">
                <Carousel
                    className="w-full h-96"
                    prevArrow={({ handlePrev }) => (
                        <IconButton
                            variant="text"
                            color="gray"
                            size="lg"
                            onClick={handlePrev}
                            className="!absolute top-2/4 -translate-y-2/4 left-4"
                        >
                            <ChevronLeftIcon className="w-6 h-6" />
                        </IconButton>
                    )}
                    nextArrow={({ handleNext }) => (
                        <IconButton
                            variant="text"
                            color="gray"
                            size="lg"
                            onClick={handleNext}
                            className="!absolute top-2/4 -translate-y-2/4 !right-4"
                        >
                            <ChevronRightIcon className="w-6 h-6" />
                        </IconButton>
                    )}
                >
                    {images.map((image, index) => (
                        <div key={index} className="w-full h-full">
                            <img src={image} alt={`Slide ${index}`} className="w-full h-full object-cover" />
                        </div>
                    ))}
                </Carousel>
            </div>
        </section>
    );
});

export default Projects;
