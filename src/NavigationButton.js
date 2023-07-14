import React from 'react';
import './NavigationButton.css';

const NavigationButton = ({ text }) => {
    return (
        <button className="navigation-button">
            {text}
        </button>
    );
};

export default NavigationButton;
