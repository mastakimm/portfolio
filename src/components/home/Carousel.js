import ProjectImage1 from '../../assets/sections/boat-4395122_1280.jpg';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import React from "react";
const Carousel = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 1000,
        slidesToShow: 3,
        slidesToScroll: 3,
        arrows: false,

        responsive: [
            {
                /*      responsive tailwind breakpoint : sm     */
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    initialSlide: 1
                },
            },
            {
                /*      responsive tailwind breakpoint : lg     */
                breakpoint: 1280,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    initialSlide: 1
                },
            }
            ],
    };

    return (
        <div className="w-11/12 m-auto pb-32 md:pb-24">
            <div
                className="mt-10 md:mt-20"
                data-aos="fade-out"
            >
                <Slider {...settings}>
                    {data.map((d) => (
                        <div key={d.id} className="min-h-[450px] xl:min-h-[500px] text-black rounded-xl flex flex-col">
                            <div className="h-88 md:h-88 3xl:h-96 rounded-lg flex justify-center items-center">
                                <img src={d.projectHomeScreen} alt={d.projectTitle}
                                     className="h-full w-full object-contain rounded"/>
                            </div>

                            <div
                                className="flex flex-col justify-center items-center gap-2 md:gap-4 p-2 md:p-8 flex-grow pb-8">
                                <p className="text-2xl sm:text-3xl md:text-3xl lg:text-2xl xl:text-2xl 3xl:text-4xl font-semibold py-6">{d.projectTitle}</p>
                                <p className="pb-2 md:pb-3 text-lg md:text-xl lg:text-xl xl:text-lg 3xl:text-2xl text-justify">{d.projectDescription}</p>
                                <button
                                    className="text-white text-sm md:text-lg px-6 py-3 bg-button-red font-bold rounded-lg transition duration-300 shadow-lg flex items-center justify-center sm:text-xl sm:py-2 sm:px-6 3xl:text-2xl 3xl:py-3 3xl:px-6"
                                    style={{
                                        fontFamily: 'Comfortaa, sans-serif',
                                        fontWeight: 'bold',
                                        letterSpacing: '0.05em',
                                    }}
                                >
                                    Case Study
                                </button>
                            </div>
                        </div>
                    ))}
                </Slider>
            </div>
        </div>
    )
}

const data = [
    {
        projectTitle: `Project Title`,
        projectHomeScreen: ProjectImage1,
        projectDescription: `This is a brief description of the project. This is a brief description of the project. This is
            a brief description of the project. This is a brief description of the project. This is a brief
            description of the project.`
    },
    {
        projectTitle: `Project Title`,
        projectHomeScreen: ProjectImage1,
        projectDescription: `This is a brief description of the project. This is a brief description of the project. This is
            a brief description of the project. This is a brief description of the project. This is a brief
            description of the project.`
    },
    {
        projectTitle: `Project Title`,
        projectHomeScreen: ProjectImage1,
        projectDescription: `This is a brief description of the project. This is a brief description of the project. This is
            a brief description of the project. This is a brief description of the project. This is a brief
            description of the project.`    },
    {
        projectTitle: `Project Title`,
        projectHomeScreen: ProjectImage1,
        projectDescription: `This is a brief description of the project. This is a brief description of the project. This is
            a brief description of the project. This is a brief description of the project. This is a brief
            description of the project.`    },
    {
        projectTitle: `Project Title`,
        projectHomeScreen: ProjectImage1,
        projectDescription: `This is a brief description of the project. This is a brief description of the project. This is
            a brief description of the project. This is a brief description of the project. This is a brief
            description of the project.`    },
    {
        projectTitle: `Project Title`,
        projectHomeScreen: ProjectImage1,
        projectDescription: `This is a brief description of the project. This is a brief description of the project. This is
            a brief description of the project. This is a brief description of the project. This is a brief
            description of the project.`    },
    {
        projectTitle: `Project Title`,
        projectHomeScreen: ProjectImage1,
        projectDescription: `This is a brief description of the project. This is a brief description of the project. This is
            a brief description of the project. This is a brief description of the project. This is a brief
            description of the project.`    },
]

export default Carousel;