import ProjectImage1 from '../assets/sections/project_section_project_1.png';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
const Carousel = () => {
    const settings = {
        dots: false,
        infinite: true,
        speed: 1000,
        slidesToShow: 3,
        slidesToScroll: 3
    };

    return (
        <div className="w-10/12 m-auto pb-40 pt-20">
            <div className="mt-20">
                <Slider {...settings}>
                {data.map((d) => (
                    <div className="h-[450px] text-black rounded-xl">
                        <div className="h-56 rounded-t-xl flex justify-center items-center">
                            <img src={d.projectHomeScreen} alt="" className="h-full w-full" />
                        </div>

                        <div className="flex flex-col justify-center items-center gap-4 p-4">
                            <p className="text-xl font-semibold">{d.projectTitle}</p>
                            <p className="pb-3">{d.projectDescription}</p>
                            <button
                                className="text-white text-lg px-6 py-1 bg-button-red font-bold rounded-lg transition duration-300 border border-gray-800 shadow-lg hover:bg-purple-400 flex items-center justify-center"
                                style={{
                                    fontFamily: 'Comfortaa, sans-serif',
                                    fontWeight: 'bold',
                                    letterSpacing: '0.05em',
                                }}
                            >Case Study</button>
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
]

export default Carousel;