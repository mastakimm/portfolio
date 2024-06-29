import ProjectImage1 from '../../assets/sections/boat-4395122_1280.jpg';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
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
        <div className="w-11/12 m-auto pb-20 md:pb-24 pt-16 ">
            <div className="mt-10 md:mt-20">
                <Slider {...settings}>
                    {data.map((d) => (
                        <div key={d.id} className="min-h-[450px] xl:min-h-[500px] text-black rounded-xl flex flex-col">
                            <div className="h-50 md:h-56 3xl:h-80 rounded-t-xl flex justify-center items-center">
                                <img src={d.projectHomeScreen} alt={d.projectTitle} className="h-full object-contain rounded" />
                            </div>

                            <div className="flex flex-col justify-center items-center gap-2 md:gap-4 p-2 md:p-8 flex-grow pb-8">
                                <p className="text-xl sm:text-3xl md:text-xl 3xl:text-3xl font-semibold py-6">{d.projectTitle}</p>
                                <p className="pb-2 md:pb-3 text-lg sm:text-xl md:text-base 3xl:text-2xl text-center">{d.projectDescription}</p>
                                <button
                                    className="text-white text-sm md:text-lg px-6 py-3 bg-button-red font-bold rounded-lg transition duration-300 border border-gray-800 shadow-lg hover:bg-purple-400 flex items-center justify-center sm:text-xl sm:py-2 sm:px-6 3xl:text-2xl 3xl:py-3 3xl:px-6"
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