import React from 'react';
import './NavigationPanel.css';
import { Link } from 'react-router-dom';

const NavigationPanel = ({ children }) => {
    return (
        <div className="navigation-panel">
            <Link className='logo-button' to="/">
                <h2>webapp</h2>
            </Link>
            {children}
        </div>
    );
};

export default NavigationPanel;