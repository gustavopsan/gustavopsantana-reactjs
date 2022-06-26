import React from "react";

import "../style/menu.scss"

const Menu = () => {
    return (
        <nav className="header-menu">
            <ul>
                <li>
                    <a href="/">
                        Home
                    </a>
                </li>
                <li>
                    <a href="/portifolio">
                        Portifólio
                    </a>
                </li>
                <li>
                    <a href="/about">
                        Sobre
                    </a>
                </li>
                <li>
                    <a href="/contact">
                        Contato
                    </a>
                </li>
            </ul>
        </nav>
    );
}

export default Menu;