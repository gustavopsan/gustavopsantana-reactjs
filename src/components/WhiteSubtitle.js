import React from "react";

import "../style/whiteSubtitle.scss";

const WhiteSubtitle = ({ children }) => {
    return (
        <h3 className="white-subtitle">
            {children}
        </h3>
    );
}

export default WhiteSubtitle;