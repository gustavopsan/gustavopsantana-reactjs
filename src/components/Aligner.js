import React from "react";

import "../style/aligner.scss";

const Aligner = ({ children, vertical, horizontal, center }) => {

    return (
        <div className={
            [
                horizontal ? "aligner-horizontal" : "",
                vertical ? "aligner-vertical" : "",
                center ? "aligner-center" : ""
            ].join(" ")
        }>
            {children}
        </div>
    )
}

export default Aligner;