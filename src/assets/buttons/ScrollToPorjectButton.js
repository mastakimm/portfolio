import React from 'react';

const ScrollToSectionButton = ({ sectionRef, buttonText }) => {
    const scrollToSection = () => {
        if (sectionRef && sectionRef.current) {
            sectionRef.current.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <button
            onClick={scrollToSection}
            className="shake bg-button-red text-white font-bold py-4 px-24 rounded-lg transition duration-300 mt-4 border border-gray-800 shadow-lg hover:bg-purple-400 flex items-center justify-center 3xl:text-2xl 3xl:py-6 3xl:px-40 4xl:text-3xl 4xl:py-10 4xl:px-56 5xl:text-4xl 5xl:py-14 5xl:px-72"
            style={{
                fontFamily: 'Comfortaa, sans-serif',
                fontWeight: 'bold',
                letterSpacing: '0.05em',
                width: '150px'
            }}
        >
            {buttonText}
        </button>
    );
};

export default ScrollToSectionButton;
