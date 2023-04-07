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
import Hamburger from "../../assets/animations/hamburger.json";

export default function NavBar() {
  const [getLoading, setLoading] = useState<boolean>(true);
  const [hamburger, setHamburger] = useState(false);

  const defaultHamburgerOptions = {
    loop: true,
    autoplay: true,
    animationData: Hamburger
  }

  function timeOutSpinner() {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 200);
  }

  useEffect(() => {
    function timeOutSpinner() {
      setLoading(true);
      setTimeout(() => {
        setLoading(false);
      }, 2000);
    }
  }, [])

  return (
    <Structure onLoad={timeOutSpinner}>
      {getLoading ? 
        <Loading>
          <Image src={Logo} alt="" height={50} className="logo"  />
        </Loading>: 
        false
      }
      <Container>
        <ContainerNav>
          <ContainerLogo>
            <Image src={Logo} alt="" height={40} />
          </ContainerLogo>
          <Lottie options={defaultHamburgerOptions}/>
          { hamburger && <Navigation>
            <Nav>Home</Nav>
            <Nav>Sobre</Nav>
            <Nav>Serviços</Nav>
            <Nav>Habilidades</Nav>
            <Nav>Projeto</Nav>
            <Nav>Contato</Nav>
          </Navigation>}
        </ContainerNav>
      </Container>
    </Structure>
  );
}
