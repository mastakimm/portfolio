import ProjectImage1 from '../assets/sections/project_section_project_1.png';
import ProjectImage2 from '../assets/sections/home_section_background.jpg';
import ProjectImage3 from '../assets/sections/contact_session_background.jpg';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
const Carousel = () => {
    const settings = {
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 3
    };

    return (
        <div className="w-3/4 m-auto pb-20">
            <div className="mt-20">
                <Slider {...settings}>
                {data.map((d) => (
                    <div className="bg-white h-[450px] text-black rounded-xl">
                        <div className="h-56 rounded-t-xl flex justify-center items-center">
                            <img src={d.projectHomeScreen} alt="" className="h-full w-full" />
                        </div>

                        <div className="flex flex-col justify-center items-center gap-4 p-4">
                            <p className="text-xl font-semibold">{d.projectTitle}</p>
                            <p>{d.projectDescription}</p>
                            <button className="bg-indigo-500 text-white text-lg px-6 py-1 rounded-xl">Read More</button>
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
        projectDescription: `That's the project description blabla blablabla blabla and blablabla`
    },
    {
        projectTitle: `Project Title`,
        projectHomeScreen: ProjectImage2,
        projectDescription: `That's the project description blabla blablabla blabla and blablabla`
    },
    {
        projectTitle: `Project Title`,
        projectHomeScreen: ProjectImage3,
        projectDescription: `That's the project description blabla blablabla blabla and blablabla`
    },
    {
        projectTitle: `Project Title`,
        projectHomeScreen: ProjectImage1,
        projectDescription: `That's the project description blabla blablabla blabla and blablabla`
    },
    {
        projectTitle: `Project Title`,
        projectHomeScreen: ProjectImage2,
        projectDescription: `That's the project description blabla blablabla blabla and blablabla`
    },
    {
        projectTitle: `Project Title`,
        projectHomeScreen: ProjectImage3,
        projectDescription: `That's the project description blabla blablabla blabla and blablabla`
    },
]

export default Carousel;