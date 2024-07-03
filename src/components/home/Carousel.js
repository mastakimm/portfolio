import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import React from "react";
import CaseStudyButton from "../../assets/buttons/CaseStudyButton";

import ProjectImage1 from '../../assets/sections/boat-4395122_1280.jpg';

import Battleship from '../../assets/sections/battleship_BoardScreen.png';
import ConnectFour from '../../assets/sections/ConnectFour_MainScreen.png';

const ConnectFourData = {
    title: "ConnectFour",
    description: "This page contains the case study of ConnectFour ProjectDetails which includes the ProjectDetails Overview, Tools Used and Live Links to the official product.",
    backgroundImage: "../../assets/sections/home_section_background.jpg",
    image: "../../assets/sections/ConnectFour_MainScreen.png",
    overview: "Connect4 is a classic two-player connection game where players take turns dropping colored discs into a vertical grid." +
        " The objective is to be the first to form a horizontal, vertical, or diagonal line of four of one's own discs." +
        " This project is a digital implementation of the game, developed with a user-friendly interface and robust game logic.",
    tools: ["HTML", "CSS", "JS", "GIT", "GITHUB"],
    url: "https://github.com/mastakimm/connect4/",
    liveUrl: "https://github.com/mastakimm/connect4/"
};

const battleshipData = {
    title: "Battleship",
    description: "This page contains the case study of ConnectFour ProjectDetails which includes the ProjectDetails Overview, Tools Used and Live Links to the official product.",
    backgroundImage: "../../assets/sections/home_section_background.jpg",
    image: "../../assets/sections/battleship_BoardScreen.png",
    overview: "Battleship is a classic two-player game where players take turns guessing the locations of the opponent's ships on a grid. " +
        "The objective is to sink all of the opponent's ships by correctly guessing their locations. " +
        "This project is a digital implementation of the game, featuring a user-friendly interface and strategic gameplay elements.<br><br>" +
        "This project involves taking over and completing an unfinished codebase left by a previous developer.<br>" +
        "The main tasks include debugging and finishing the implementation.",
    tools: ["HTML", "CSS", "JS", "POO", "GIT", "GITHUB"],
    url: "https://github.com/mastakimm/connect4/",
    liveUrl: "https://github.com/mastakimm/connect4/"
};

const data = [
    {
        id: 1,
        projectTitle: `Connect Four`,
        projectHomeScreen: ConnectFour,
        projectDescription: `Connect4 is a classic two-player connection game where players take turns dropping colored discs into a vertical grid.
        The objective is to be the first to form a horizontal, vertical, or diagonal line of four of one's own discs.`,
        projectData: ConnectFourData
    },
    {
        id: 2,
        projectTitle: `Battleship`,
        projectHomeScreen: Battleship,
        projectDescription: `This project involves taking over and completing an unfinished codebase left by a previous developer.
        The main tasks include debugging and finishing the implementation.`,
        projectData: battleshipData
    },
    {
        id: 3,
        projectTitle: `Connect Four`,
        projectHomeScreen: ConnectFour,
        projectDescription: `Connect4 is a classic two-player connection game where players take turns dropping colored discs into a vertical grid.
        The objective is to be the first to form a horizontal, vertical, or diagonal line of four of one's own discs.`,
        projectData: ConnectFourData
    },
    {
        id: 4,
        projectTitle: `Battleship`,
        projectHomeScreen: Battleship,
        projectDescription: `This project involves taking over and completing an unfinished codebase left by a previous developer.
        The main tasks include debugging and finishing the implementation.`,
        projectData: battleshipData
    },
    {
        id: 5,
        projectTitle: `Connect Four`,
        projectHomeScreen: ConnectFour,
        projectDescription: `Connect4 is a classic two-player connection game where players take turns dropping colored discs into a vertical grid.
        The objective is to be the first to form a horizontal, vertical, or diagonal line of four of one's own discs.`,
        projectData: ConnectFourData
    },
    {
        id: 6,
        projectTitle: `Battleship`,
        projectHomeScreen: Battleship,
        projectDescription: `This project involves taking over and completing an unfinished codebase left by a previous developer.
        The main tasks include debugging and finishing the implementation.`,
        projectData: battleshipData
    },
];


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
            <div className="mt-10 md:mt-20" data-aos="fade-out">
                <Slider {...settings}>
                    {data.map((d) => (
                        <div key={d.id} className="min-h-[450px] xl:min-h-[500px] text-black rounded-xl flex flex-col">
                            <div className="h-88 md:h-88 3xl:h-96 rounded-lg flex justify-center items-center">
                                <img src={d.projectHomeScreen} alt={d.projectTitle} className="h-full w-full object-contain rounded" />
                            </div>
                            <div className="flex flex-col justify-center items-center gap-2 md:gap-4 p-2 md:p-8 flex-grow pb-8">
                                <p className="text-2xl sm:text-3xl md:text-3xl lg:text-2xl xl:text-2xl 3xl:text-4xl font-semibold py-6">{d.projectTitle}</p>
                                <p className="pb-2 md:pb-3 text-lg md:text-xl lg:text-xl xl:text-lg 3xl:text-2xl text-justify">{d.projectDescription}</p>
                                <CaseStudyButton buttonText={"Case Study"} project={d.projectData} />
                            </div>
                        </div>
                    ))}
                </Slider>
            </div>
        </div>
    );
}

export default Carousel;