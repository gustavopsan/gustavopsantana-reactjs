import React from "react";

import "../style/text.scss";

export const Text = ({ children, color }) => {
    return (
        <p className="text-element" style={{ color: `${color}` }}>
            {children}
        </p>
    );
}

export const SmallText = ({ children, color }) => {
    return (
        <p className="small-text-element" style={{ color: `${color}` }}>
            {children}
        </p>
    );
}