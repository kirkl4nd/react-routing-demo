import React from 'react';
import './NavigationButton.css';
import { Link, useLocation } from 'react-router-dom';

function NavigationButton({ text, to }) {
    const location = useLocation();
    const isSelected = location.pathname === to;
    return (
        <Link className={`navigation-button ${isSelected ? 'selected' : ''}`} to={to} >
            {text}
        </Link>
    );
};

export default NavigationButton;
