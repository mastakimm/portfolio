import './App.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Navbar from "./components/Navbar";
import Home from "./components/home/Home";
import About from "./components/home/About";
import Projects from "./components/home/Projects";
import Contact from "./components/home/Contact";
import Footer from "./components/Footer";
import TwitterProject from "./components/projects/TwitterProject";
import QuizProject from "./components/projects/QuizProject";
import { useRef } from "react";

function App() {
    const homeRef = useRef(null);
    const aboutRef = useRef(null);
    const projectsRef = useRef(null);
    const contactRef = useRef(null);

    const sectionRefs = {
        home: homeRef,
        about: aboutRef,
        projects: projectsRef,
        contact: contactRef,
    };

    const router = createBrowserRouter([
        {
            path: '/',
            element: (
                <>
                    <Navbar sectionRefs={sectionRefs} />
                    <Home ref={homeRef} sectionRefs={sectionRefs} />
                    <About ref={aboutRef} sectionRefs={sectionRefs} />
                    <Projects ref={projectsRef} sectionRefs={sectionRefs} />
                    <Contact ref={contactRef} sectionRefs={sectionRefs} />
                    <Footer />
                </>
            ),
        },
        {
            path: '/case-study/1',
            element: (
                <>
                    <Navbar sectionRefs={sectionRefs} />
                    <TwitterProject />
                    <Footer />
                </>
            )
        },
        {
            path: '/case-study/2',
            element: (
                <>
                    <Navbar sectionRefs={sectionRefs} />
                    <QuizProject />
                    <Footer />
                </>
            )
        },
    ]);

    return (
        <RouterProvider router={router} />
    );
}

export default App;
