import React, { useState, useEffect } from "react";

import Image from "next/image";
import Lottie from "react-lottie";

import {
  Structure,
  Container,
  Loading,
  ContainerNav,
  ContainerLogo,
  Navigation,
  Nav,
} from "./styles";

import Logo from "../../assets/img/png/logo.png";
import HamburgerImg from "../../assets/img/svg/hamburger.svg";
import Close from "../../assets/img/svg/close.svg";

export default function NavBar() {
  const [getLoading, setLoading] = useState<boolean>(true);
  const [hamburger, setHamburger] = useState(false);


  function timeOutSpinner() {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 200);
  }

  

  return (
    <Structure>
      <Container>
          <ContainerLogo>
            <Image src={Logo} alt="" height={40} />
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
