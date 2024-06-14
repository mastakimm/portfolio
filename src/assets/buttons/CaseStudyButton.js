import React from 'react';

const CaseStudyButton = ({ sectionRef, buttonText }) => {

    return (
        <button
            className="bg-button-red text-white font-bold py-4 px-12 rounded-lg transition duration-300 mt-4 border border-gray-800 shadow-lg hover:bg-purple-400 flex items-center justify-center"
            style={{
                fontFamily: 'Comfortaa, sans-serif',
                fontWeight: 'bold',
                letterSpacing: '0.05em',
            }}
        >
            {buttonText}
        </button>
    );
};

export default CaseStudyButton;
