import React, { useState } from "react";

import Image from "next/image";
import Lottie from "react-lottie";

import {
  Structure,
  Container,
  ContainerNav,
  ContainerLogo,
  Navigation,
  Nav,
} from "./styles";

import Logo from "../../assets/img/png/logo.png";
import HamburgerImg from "../../assets/img/svg/hamburger.svg";
import Close from "../../assets/img/svg/close.svg";

export default function NavBar() {
  const [hamburger, setHamburger] = useState(false);

  return (
    <Structure>
      <Container>
          <ContainerLogo>
            <Image src={Logo} alt="" height={48} />
          </ContainerLogo>
          <ContainerNav onClick={()=> setHamburger(!hamburger)}>
            {hamburger ? (<Image src={Close} alt="" id="close"/>) : (<Image src={HamburgerImg} alt="" id="hamburger"/>)}
          </ContainerNav>
      </Container>
        {hamburger && 
        <Navigation>
          <Nav>Home</Nav>
          <Nav>Resumo</Nav>
          <Nav>Habilidades</Nav>
          <Nav>Portfolio</Nav>
          <Nav>Contato</Nav>
        </Navigation>
      }
    </Structure>
  );
}
