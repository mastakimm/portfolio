import './App.css';
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import {useRef} from "react";
import Footer from "./components/Footer";

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

    return (
        <div>
            <Navbar sectionRefs={ sectionRefs } />
            <Home ref={homeRef} sectionRefs={ sectionRefs } />
            <About ref={aboutRef} sectionRefs={ sectionRefs } />
            <Projects ref={projectsRef} sectionRefs={ sectionRefs } />
            <Contact ref={contactRef} sectionRefs={sectionRefs} />
            <Footer />
        </div>
    );
}

export default App;
