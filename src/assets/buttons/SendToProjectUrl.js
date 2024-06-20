import React from 'react';

const CaseStudyButton = ({ onClick }) => {

    return (
        <button
            className="shake bg-button-red text-white font-bold py-4 px-24 rounded-lg transition duration-300 mt-4 border border-gray-800 shadow-lg hover:bg-purple-400 flex items-center justify-center 3xl:text-2xl 3xl:py-6 3xl:px-40"
            style={{
                fontFamily: 'Comfortaa, sans-serif',
                fontWeight: 'bold',
                letterSpacing: '0.05em',
                width: '310px'
            }}
        >
            Project Link
        </button>
    );
};

export default CaseStudyButton;
