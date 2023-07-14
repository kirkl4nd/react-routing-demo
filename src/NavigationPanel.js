import React from 'react';
import './NavigationPanel.css';

const NavigationPanel = ({ children }) => {
    return (
        <div className="navigation-panel">
            <h2>webapp</h2>
            {children}
        </div>
    );
};

export default NavigationPanel;