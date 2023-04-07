import { useState } from "react";

import Image from "next/image";

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

export default function NavBar() {
  const [getLoading, setLoading] = useState<boolean>(true);

  function timeOutSpinner() {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }

  return (
    <Structure onLoad={timeOutSpinner}>
      {getLoading ? (
        <Loading>
          <Image src={Logo} alt="" height={50} className="logo" />
        </Loading>
      ) : (
        false
      )}
      <Container>
        <ContainerNav>
          <ContainerLogo>
            <Image src={Logo} alt="" height={40} />
          </ContainerLogo>
          <Navigation>
            <Nav>Home</Nav>
            <Nav>Sobre</Nav>
            <Nav>Serviços</Nav>
            <Nav>Habilidades</Nav>
            <Nav>Projeto</Nav>
            <Nav>Contato</Nav>
          </Navigation>
        </ContainerNav>
      </Container>
    </Structure>
  );
}
