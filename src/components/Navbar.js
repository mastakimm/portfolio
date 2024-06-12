import React, { useState, useEffect, useRef } from 'react';

const Navbar = ({ sectionRefs }) => {
    const [isOpen, setIsOpen] = useState(false);
    const [activeSection, setActiveSection] = useState('home');
    const [isScrolling, setIsScrolling] = useState(false);
    const scrollTimeoutRef = useRef(null);

    const sections = ['home', 'about', 'projects', 'contact'];

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    const handleSectionClick = (section) => {
        setIsScrolling(true);
        setActiveSection(section);
        if (sectionRefs[section] && sectionRefs[section].current) {
            sectionRefs[section].current.scrollIntoView({ behavior: 'smooth' });
        }

        clearTimeout(scrollTimeoutRef.current);
        scrollTimeoutRef.current = setTimeout(() => {
            setIsScrolling(false);
        }, 1000);
    };

    const handleScroll = () => {
        if (isScrolling) return;

        sections.forEach((section) => {
            const sectionElement = sectionRefs[section].current;
            if (sectionElement) {
                const rect = sectionElement.getBoundingClientRect();
                if (rect.top >= 0 && rect.top < window.innerHeight / 2) {
                    setActiveSection(section);
                }
            }
        });
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
            clearTimeout(scrollTimeoutRef.current);
        };
    }, [isScrolling]);

    return (
        <nav className="bg-white shadow-lg fixed top-0 w-full z-10">
            <div className="max-w-6xl mx-auto px-4">
                <div className="flex justify-between items-center">
                    <div className="flex items-center">
                        <a href="/" className="flex items-center py-4 px-2">
                            <span className="font-bold text-black text-lg">ANTOINE FAWER</span>
                        </a>
                    </div>
                    <div className="hidden md:flex items-center space-x-1">
                        {sections.map((section) => (
                            <a
                                key={section}
                                href={`#${section}`}
                                className={`py-4 px-6 font-semibold ${
                                    activeSection === section ? 'text-black border-b-4 border-black' : 'text-gray-500 hover:text-black hover:underline transition duration-300'
                                }`}
                                onClick={(e) => {
                                    e.preventDefault();
                                    handleSectionClick(section);
                                }}
                            >
                                {section.charAt(0).toUpperCase() + section.slice(1)}
                            </a>
                        ))}
                    </div>
                    <div className="md:hidden flex items-center">
                        <button className="outline-none mobile-menu-button" onClick={toggleMenu}>
                            <svg
                                className="w-6 h-6 text-gray-500 hover:text-blue-500"
                                fill="none"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path d="M4 6h16M4 12h16m-7 6h7"></path>
                            </svg>
                        </button>
                    </div>
                </div>
            </div>
            <div className={`mobile-menu ${isOpen ? '' : 'hidden'} md:hidden`}>
                {sections.map((section) => (
                    <a
                        key={section}
                        href={`#${section}`}
                        className={`block py-2 px-4 text-sm ${
                            activeSection === section ? 'bg-gray-200' : 'hover:bg-gray-200'
                        }`}
                        onClick={(e) => {
                            e.preventDefault();
                            handleSectionClick(section);
                        }}
                    >
                        {section.charAt(0).toUpperCase() + section.slice(1)}
                    </a>
                ))}
            </div>
        </nav>
    );
};

export default Navbar;
