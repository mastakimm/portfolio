import React, { useState, useEffect, useRef } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';

const Navbar = ({ sectionRefs }) => {
    const [isOpen, setIsOpen] = useState(false);
    const [activeSection, setActiveSection] = useState('home');
    const [isScrolling, setIsScrolling] = useState(false);
    const [targetSection, setTargetSection] = useState(null);
    const scrollTimeoutRef = useRef(null);
    const location = useLocation();
    const navigate = useNavigate();

    const sections = ['home', 'about', 'projects', 'contact'];

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    const handleSectionClick = (section) => {
        if (location.pathname !== '/') {
            setTargetSection(section);
            navigate('/');
        } else {
            scrollToSection(section);
        }
    };

    const scrollToSection = (section) => {
        setIsScrolling(true);
        setActiveSection(section);
        if (sectionRefs[section] && sectionRefs[section].current) {
            const scrollOptions = {
                behavior: 'smooth',
                block: 'start',
                inline: 'nearest'
            };

            if (section === 'contact') {
                window.scrollTo({
                    top: sectionRefs[section].current.offsetTop - 30,
                    behavior: 'smooth'
                });
            } else {
                sectionRefs[section].current.scrollIntoView(scrollOptions);
            }
        }

        clearTimeout(scrollTimeoutRef.current);
        scrollTimeoutRef.current = setTimeout(() => {
            setIsScrolling(false);
        }, 1000);
    };

    const handleScroll = () => {
        if (isScrolling) return;

        sections.forEach((section) => {
            const sectionElement = sectionRefs[section]?.current;
            if (sectionElement) {
                const rect = sectionElement.getBoundingClientRect();
                if (
                    (rect.top >= 0 && rect.top < window.innerHeight / 2) ||
                    (rect.bottom >= window.innerHeight / 2 && rect.bottom <= window.innerHeight)
                ) {
                    setActiveSection(section);
                }
            }
        });
    };

    useEffect(() => {
        const updateScrollListener = () => {
            if (location.pathname === '/') {
                window.addEventListener('scroll', handleScroll);
            } else {
                window.removeEventListener('scroll', handleScroll);
            }
        };

        updateScrollListener();

        return () => {
            window.removeEventListener('scroll', handleScroll);
            clearTimeout(scrollTimeoutRef.current);
        };
    }, [isScrolling, location.pathname]);

    useEffect(() => {
        if (location.pathname === '/' && targetSection) {
            setActiveSection(targetSection);
            setTimeout(() => {
                scrollToSection(targetSection);
                setTargetSection(null);
            }, 120);
        }
    }, [location.pathname, targetSection]);

    useEffect(() => {
        if (location.pathname === '/') {
            handleScroll();
        }
    }, [location.pathname]);

    return (
        <nav className="bg-white shadow-lg fixed top-0 w-full z-10 3xl:py-6">
            <div className="max-w-6xl mx-auto px-4">
                <div className="flex justify-between items-center">
                    <div className="flex items-center">
                        <Link
                            to="/"
                            onClick={() => handleSectionClick('home')}
                            className="flex items-center py-4 px-2 font-bold 3xl:text-xl"
                        >
                            ANTOINE FAWER
                        </Link>
                    </div>
                    <div className="hidden md:flex items-center space-x-1 3xl:space-x-8">
                        {sections.map((section) => (
                            <Link
                                key={section}
                                to="/"
                                onClick={() => handleSectionClick(section)}
                                className={`py-4 px-6 font-semibold 3xl:text-2xl ${
                                    activeSection === section ? 'text-black border-b-4 border-black' : 'text-gray-500 hover:text-black transition duration-300'
                                }`}
                            >
                                {section.charAt(0).toUpperCase() + section.slice(1)}
                            </Link>
                        ))}
                    </div>
                    <div className="md:hidden flex items-center">
                        <button
                            className={`menu ${isOpen ? 'opened' : ''}`}
                            onClick={toggleMenu}
                            aria-expanded={isOpen}
                            aria-label="Main Menu"
                        >
                            <svg
                                className="w-6 h-6 hover:text-blue-500 text-gray-500 3xl:w-10 3xl:h-10"
                                fill="none"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                viewBox="0 0 100 100"
                                stroke="currentColor"
                            >
                                <path className="line line1"
                                      d="M 20,29.000046 H 80.000231 C 80.000231,29.000046 94.498839,28.817352 94.532987,66.711331 94.543142,77.980673 90.966081,81.670246 85.259173,81.668997 79.552261,81.667751 75.000211,74.999942 75.000211,74.999942 L 25.000021,25.000058"/>
                                <path className="line line2" d="M 20,50 H 80"/>
                                <path className="line line3"
                                      d="M 20,70.999954 H 80.000231 C 80.000231,70.999954 94.498839,71.182648 94.532987,33.288669 94.543142,22.019327 90.966081,18.329754 85.259173,18.331003 79.552261,18.332249 75.000211,25.000058 75.000211,25.000058 L 25.000021,74.999942"/>
                            </svg>
                        </button>
                    </div>
                </div>
            </div>
            <div className={`mobile-menu ${isOpen ? 'open' : 'hidden'} md:hidden`}>
                {sections.map((section) => (
                    <Link
                        key={section}
                        to="/"
                        onClick={() => handleSectionClick(section)}
                        className={`block py-2 px-4 text-sm 3xl:text-lg text-center ${
                            activeSection === section ? 'bg-gray-200' : 'hover:bg-gray-200'
                        }`}
                    >
                        {section.charAt(0).toUpperCase() + section.slice(1)}
                    </Link>
                ))}
            </div>
        </nav>
    );
};

export default Navbar;
