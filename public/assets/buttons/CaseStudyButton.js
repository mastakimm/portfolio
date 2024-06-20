import React from 'react';
import { useNavigate } from 'react-router-dom';

const CaseStudyButton = ({ buttonText, project }) => {
    const navigate = useNavigate();

    const handleClick = () => {
        navigate('/case-study', { state: { project } });
    };

    return (
        <button
            className="bg-button-red text-white font-bold py-4 px-12 rounded-lg transition duration-300 mt-4 border border-gray-800 shadow-lg hover:bg-purple-400 flex items-center justify-center 3xl:text-2xl"
            style={{
                fontFamily: 'Comfortaa, sans-serif',
                fontWeight: 'bold',
                letterSpacing: '0.05em',
            }}
            onClick={handleClick}
        >
            {buttonText}
        </button>
    );
};

export default CaseStudyButton;
