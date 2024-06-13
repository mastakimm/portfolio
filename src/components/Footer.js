import {LinkedinSvg} from "../assets/footer/linkedin_svg";
import {GithubSvg} from "../assets/footer/github_svg";

const Footer = () => {
    return (
        <>
            <div className="bg-black flex flex-col lg:flex-row">
                <div className="p-4 sm:p-12 md:p-16 lg:p-20 xl:p-24 2xl:p-24 w-full lg:w-1/2 flex flex-col items-center justify-center">
                    <h4 className="text-center text-white font-bold pb-12">
                        ANTOINE FAWER
                    </h4>

                    <h4 className="text-center text-white whitespace-pre-wrap">
                        A Fullstack Web Developer building your Websites

                        <br className="xl:block hidden"/>

                        and Web Applications that lead to the success of your projects.
                    </h4>
                </div>
                <div className="p-10 w-full lg:w-1/2 flex flex-col items-center justify-center">
                    <h4 className="text-center text-white font-bold pb-12">
                        SOCIAL
                    </h4>
                    <h4 className="text-center text-white font-bold flex flex-row">
                        <span className="mx-2">
                            <LinkedinSvg/>
                        </span>
                        <span className="mx-2">
                            <GithubSvg/>
                        </span>
                    </h4>
                </div>
            </div>
            <div className="w-full bg-black">
                <hr className="border-gray-500"/>
                <div className="py-4 text-center text-white">
                    &copy; {new Date().getFullYear()} Antoine Fawer. All rights reserved.
                </div>
            </div>
        </>

)
}

export default Footer;