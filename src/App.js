import React, { useState, useEffect, useRef } from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom';
import Navbar from "./components/Navbar";
import Home from "./components/home/Home";
import About from "./components/home/About";
import Projects from "./components/home/Projects";
import Contact from "./components/home/Contact";
import Footer from "./components/Footer";
import ProjectDetails from "./components/projects/ProjectDetails";
import LoadingScreen from "./components/loading/LoadingScreen";

function App() {
    const [isLoading, setIsLoading] = useState(true);  // Initialize to true
    const location = useLocation();
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

    useEffect(() => {
        const handleLoading = () => {
            setIsLoading(true);
            const timer = setTimeout(() => {
                setIsLoading(false);
            }, 2000);
            return () => clearTimeout(timer);
        };

        handleLoading();
    }, [location.pathname]);

    return (
        <div>
            {isLoading && <LoadingScreen />}
            <Navbar sectionRefs={sectionRefs} />
            {!isLoading && (
                <Routes>
                    <Route path="/" element={
                        <>
                            <Home ref={homeRef} sectionRefs={sectionRefs} />
                            <About ref={aboutRef} sectionRefs={sectionRefs} />
                            <Projects ref={projectsRef} sectionRefs={sectionRefs} />
                            <Contact ref={contactRef} sectionRefs={sectionRefs} />
                            <Footer />
                        </>
                    } />
                    <Route path="/case-study" element={<ProjectDetails />} />
                </Routes>
            )}
        </div>
    );
}

function AppWrapper() {
    return (
        <Router>
            <App />
        </Router>
    );
}

export default AppWrapper;
