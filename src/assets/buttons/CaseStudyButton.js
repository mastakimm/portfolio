import React from 'react';
import { useNavigate } from 'react-router-dom';

const CaseStudyButton = ({ buttonText, project }) => {
    const navigate = useNavigate();

    const handleClick = () => {
        navigate('/case-study', { state: { project } });
    };

    return (
        <button
            className="bg-button-red text-white font-bold py-4 px-10 rounded-lg transition duration-300 mt-4 shadow-lg flex items-center justify-center 3xl:text-2xl 3xl:py-6 3xl:px-12 4xl:text-3xl 4xl:py-6 4xl:px-12 5xl:text-4xl 5xl:py-14 5xl:px-24"
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
