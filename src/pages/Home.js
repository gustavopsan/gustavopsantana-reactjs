import React from 'react';

import BlackTitle from '../components/BlackTitle';
import Container from '../components/Container';
import WhiteTitle from '../components/WhiteTitle';
import Button from '../components/Button';

import yellowPen from '../assets/img/yellow_pen.webp';
import blueWall from '../assets/img/blue_wall.webp';
import contactDesk from '../assets/img/contact-background.webp';

const Home = () =>{
  return (
    <main>
      <Container backgroundImage={yellowPen}>
        <WhiteTitle>
          Construímos seu site com a melhor e mais atual tecnologia do mercado!
        </WhiteTitle>
      </Container>
      <Container backgroundImage={blueWall}>
        <BlackTitle>
          Tiramos sua ideia do papel e a tornamos em algo que todos possam adimirar!
        </BlackTitle>
      </Container>
      <Container backgroundImage={contactDesk}>
        <WhiteTitle>
          Conheça nossos serviços: Entre em contato e saiba como podemos te ajudar!
        </WhiteTitle>
        <Button width={"250px"} onClick={goToContact}>
          Fale conosco
        </Button>
      </Container>
    </main>
  );
}

const goToContact = () => {
  window.location.href = "/contact";
}

export default Home;