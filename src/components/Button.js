import React from "react";

import "../style/button.scss";

const Button = ({ children, onClick, width }) => {

    if (width) {
        return (
            <button className="button-contact" style={{ width: width }} onClick={onClick}>
                {children}
            </button>
        );
    } else {
        return (
            <button className="button-contact" onClick={onClick}>
                {children}
            </button>
        );
    }
}

export default Button;