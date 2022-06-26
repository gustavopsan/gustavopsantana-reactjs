import React from "react";

import "../style/container.scss";

const Container = ({ children, backgroundImage }) => {
    return (
        <section className="container-element" style={{ backgroundImage: `url(${backgroundImage})` }}>
            {children}
        </section>
    )
}

export default Container;