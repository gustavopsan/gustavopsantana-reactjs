import React from "react";

import "../style/whiteTitle.scss";

const WhiteTitle = ({ children }) => {
    return (
        <h2 className="white-title">
            {children}
        </h2>
    );
}

export default WhiteTitle;