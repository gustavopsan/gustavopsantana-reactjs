import React from "react";
import Menu from "./Menu";

import "../style/header.scss";
import { ReactComponent as Logo } from "../assets/img/Logo-gustavo-2.svg";

const Header = () => {
    return (
        <header className="header-element">
            <div>
                <Logo/>
                <Menu/>
            </div>
        </header>
    );
}

export default Header;