import React from 'react';
import './LoadingScreen.css';
import LoadingSVG from '../../assets/svg/LoadingSvg';

function LoadingScreen() {
    return (
        <div className="loading-container">
            <LoadingSVG />
        </div>
    );
}

export default LoadingScreen;