import React from "react";
import './ContentPanel.css';

const ContentPanel = ({ children }) => {
    return (
        <div className="content-panel">
            {children}
        </div>
    );
};

export default ContentPanel;