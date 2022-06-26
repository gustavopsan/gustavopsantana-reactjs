import React from "react";

import { ReactComponent as LogoGithub } from "../assets/img/github.svg";
import { ReactComponent as LogoInstagram } from "../assets/img/instagram.svg";
import { ReactComponent as LogoLinkedin } from "../assets/img/linkedin.svg";

import "../style/footer.scss";

const Footer = () => {
    return (
        <>
            <footer className="footer-icons">
                <span>
                    <a href="https://github.com/gustavopsan" target="_blank" rel="nofollow noreferrer" aria-label="Github">
                        <LogoGithub />
                    </a>
                    <a href="https://instagram.com/gustavopsantana4" target="_blank" rel="nofollow noreferrer"  aria-label="Instagram">
                        <LogoInstagram />
                    </a>
                    <a href="https://www.linkedin.com/in/gustavo-p-santana/" target="_blank" rel="nofollow noreferrer" aria-label="Linkedin">
                        <LogoLinkedin />
                    </a>
                </span>
            </footer>
            <footer className="footer-message">
                <span>
                    Todos os direitos reservados © 2022 Gustavo P. Santana
                </span>
            </footer>
        </>
    )
}

export default Footer;