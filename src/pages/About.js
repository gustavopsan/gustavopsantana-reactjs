import React from "react";

import Container from "../components/Container";
import Aligner from "../components/Aligner";
import WhiteTitle from "../components/WhiteTitle";
import WhiteSubtitle from "../components/WhiteSubtitle";
import { SmallText, Text } from "../components/Text";
import Image from "../components/Image";

import about_background from "../assets/img/about-bg.webp";
import logoMW from "../assets/img/mw.svg";
import logoAR from "../assets/img/Logo-arede.svg";

const About = () => {
    return (
        <Container backgroundImage={about_background}>
            <Image src={require("../assets/img/dev-img.jpg")} alt="Developer Image" className="rounded-image" />
            <Aligner horizontal>
                <Aligner vertical>
                    <WhiteTitle>Sobre Mim</WhiteTitle>
                    <Text color="#f2f2f2">
                        Olá! Me chamo Gustavo P. Santana e sou um Desenvolvedor Web. Estou à procura de novas oportunidades na programação, a fim de colocar meus conhecimentos em prática.
                    </Text>
                </Aligner>
                <Aligner vertical>
                    <WhiteTitle>Minhas Habilidades</WhiteTitle>
                    <Text color="#f2f2f2">
                        Trabalho diariamente com o objetivo de desenvolver soluções que possam melhorar a qualidade de vida dos usuários. Usando HTML5, CSS3, JavaScript, ReactJS, NodeJS, ExpressJS, MongoDB, MySQL, Git, GitHub, etc. bem como outros frameworks e bibliotecas.
                    </Text>
                </Aligner>
            </Aligner>

            <WhiteTitle>Minhas Experiências</WhiteTitle>
            
            <Image src={logoMW} alt="Experiance Image" className="logo-image"/>

            <WhiteSubtitle>Suporte Técnico (CLT)</WhiteSubtitle>
            <SmallText color="#F2F2F2">Período: Setembro/2020 - Março/2021</SmallText>
            <SmallText color="#f2f2f2">
                Atuando na criação e manutenção de ambientes integrado ASP.Net + IIS + SQL Server, também agindo na comunicação entre cliente e equipe interna. Atuando em tarefas relacionadas com ferramentas como Robocopy, SQL Server Management Studio, dentre outras.
            </SmallText>

            <WhiteSubtitle>Desenvolvedor Web Frontend (CLT)</WhiteSubtitle>
            <SmallText color="#F2F2F2">Período: Março/2021 - Abril/2022</SmallText>
            <SmallText color="#f2f2f2">
                Atuando na criação e manutenção de interfaces gráficas para portais de notícias, criação de novas páginas e novas lógicas de funcionamento (Javascript) das mesmas, reescrita de código legado (jQuery para JS Vanilla), implantação, manutenção e consumo de serviços em Node.js para funções dos sites clientes.
            </SmallText>
            
            <Image src={logoAR} alt="Experiance Image" className="logo-image"/>
            <WhiteSubtitle>Desenvolvedor Web Frontend (PJ)</WhiteSubtitle>
            <SmallText color="#F2F2F2">Período: Abril/2022 - Atualmente</SmallText>
            <SmallText color="#f2f2f2">
                Atuando na criação e manutenção de interfaces gráficas para o Portal <a href="https://arede.info" target="_blank" rel="nofollow noreferrer" className="link-arede">aRede.info</a>, criação de novas páginas e novas lógicas de funcionamento (Javascript) das mesmas, implantação, manutenção e consumo de serviços em Node.js em deteminadas funções do portal.
            </SmallText>
        </Container>
    );
}

export default About;