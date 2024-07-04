import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Footer from "../Footer";

const ProjectDetails = () => {
    const location = useLocation();
    const { project } = location.state || {};

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    if (!project) {
        return <div>Project not found</div>;
    }

    return (
        <>
            <section
                className="min-h-screen flex items-center justify-center flex-col"
                style={{
                    backgroundImage: `url(${process.env.PUBLIC_URL + project.backgroundImage})`,
                    backgroundSize: "cover",
                    backgroundPosition: 'center'
                }}
            >
                <div className="text-black p-10 pt-36 sm:pt-0 md:pt-0 lg:pt-0 xl:pt-0 2xl:pt-0 3xl:pt-0 rounded-lg w-full max-w-4xl h-4/4">
                    <h1
                        className="text-center text-4xl 3xl:text-7xl font-bold"
                        style={{ fontFamily: 'Comfortaa, sans-serif' }}
                    >
                        <b>{project.title}</b>
                    </h1>
                    <h1
                        className="text-center text-2xl 3xl:text-4xl 3xl:tracking-wide mt-4 pt-10"
                        style={{ fontFamily: 'Comfortaa, sans-serif' }}
                    >
                        {project.description}
                    </h1>
                </div>
                <div className="flex justify-center items-center">
                    <button
                        className="shake bg-button-red text-white font-bold py-4 px-24 rounded-lg transition duration-300 mt-4 shadow-lg flex items-center justify-center 3xl:text-2xl 3xl:py-6 3xl:px-40"
                        style={{
                            fontFamily: 'Comfortaa, sans-serif',
                            fontWeight: 'bold',
                            letterSpacing: '0.05em',
                            width: '310px'
                        }}
                        onClick={() => window.location.href = project.liveUrl || project.githubUrl}
                    >
                        Project Link
                    </button>
                </div>
            </section>
            <section className="min-h-screen py-16 3xl:py-48 flex flex-col items-center">
                <div className="flex flex-col justify-center items-center w-full pt-24">
                    <img
                        src={project.image}
                        alt={project.title}
                        className="w-full md:w-8/12 lg:w-9/12 xl:w-6/12 3xl:w-1/2 rounded-lg"
                    />
                </div>
                <div className="w-3/4 pt-28 md:px-12 lg:px-20 xl:px-24 3xl:px-24 rounded-lg flex flex-col">
                    <h3 className="text-2xl justify-start sm:text-3xl md:text-3xl 3xl:text-4xl font-bold">
                        Project Overview
                    </h3>
                    <p className="text-xl sm:text-xl md:text-2xl lg:text-xl xl:text-xl 3xl:text-3xl pt-4 justify-start"
                       dangerouslySetInnerHTML={{ __html: project.overview }}>
                    </p>
                    <div className="w-full lg:w-10/12 flex flex-col py-10">
                        <h3 className="text-2xl justify-start sm:text-3xl md:text-3xl 3xl:text-4xl font-bold pb-4 pt-10">
                            Tools Used
                        </h3>
                        <div className="rounded-lg w-full flex flex-wrap gap-4 justify-start">
                            {project.tools.map((tool, index) => (
                                <span
                                    key={index}
                                    className="skill bg-gray-200 rounded-lg shadow-lg px-4 py-3 xl-px-6 xl:py-3 3xl:py-6 text-center overflow-hidden 3xl:text-2xl"
                                    style={{
                                        fontFamily: 'Comfortaa, sans-serif',
                                        maxWidth: '700px',
                                        whiteSpace: 'nowrap'
                                    }}
                                >
                                    {tool}
                                </span>
                            ))}
                        </div>
                    </div>
                </div>
                <div className="w-3/4 pb-20 md:px-12 lg:px-20 xl:px-24 3xl:px-24 rounded-lg block 3xl:space-y-8 pt-10">
                    <h4 className="text-left text-3xl 3xl:text-4xl font-bold mb-6 lg:mb-6 lg:self-start lg:mt-0">
                        Links
                    </h4>
                    {/*<button
                        className="bg-button-black text-white rounded py-3 mr-2"
                        style={{
                            fontFamily: 'Comfortaa, sans-serif',
                            fontWeight: 'bold',
                            letterSpacing: '0.05em',
                            width: '120px'
                        }}
                        onClick={() => window.history.back()}
                    >
                        Go Back
                    </button>*/}
                    {project.githubUrl && (
                        <button
                            className="bg-button-black text-white rounded shadow py-3 mr-2"
                            style={{
                                fontFamily: 'Comfortaa, sans-serif',
                                fontWeight: 'bold',
                                letterSpacing: '0.05em',
                                width: '120px'
                            }}
                            onClick={() => window.open(project.githubUrl)}
                        >
                            GitHub
                        </button>
                    )}
                    {project.liveUrl && (
                        <button
                            className="bg-button-red text-white rounded shadow py-3"
                            style={{
                                fontFamily: 'Comfortaa, sans-serif',
                                fontWeight: 'bold',
                                letterSpacing: '0.05em',
                                width: '120px'
                            }}
                            onClick={() => window.open(project.liveUrl)}
                        >
                            Live
                        </button>
                    )}
                </div>
            </section>
            <Footer />
        </>
    );
}

export default ProjectDetails;
