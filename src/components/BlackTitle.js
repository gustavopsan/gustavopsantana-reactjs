import React from "react";

import "../style/blackTitle.scss";

const BlackTitle = ({ children }) => {
    return (
        <h2 className="black-title">
            {children}
        </h2>
    );
}

export default BlackTitle;