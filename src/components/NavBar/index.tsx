import React, { useState, useCallback } from "react";

import Image from "next/image";
import { Link } from "react-scroll";

import {
  Structure,
  Container,
  ContainerNav,
  ContainerLogo,
  Modal,
  Navigation,
  
} from "./styles";

import Logo from "../../assets/img/png/logo.png";
import HamburgerImg from "../../assets/img/svg/hamburger.svg";
import Close from "../../assets/img/svg/close.svg";

export default function NavBar() {
  const [check, setCheck] = useState<boolean>(false);
  const [hamburger, setHamburger] = useState(false);

  const handleclose = useCallback(() => {
    setHamburger(false);
  },[])

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
          <Modal onClick={handleclose}>
            <Navigation onClick={(e) => {
            e.stopPropagation();
          }}>
          <Link to="home"
            activeClass="active"
            spy={true}
            className="nav"
            smooth={true}
            offset={-200}
            duration={500}
            onClick={() => setCheck(false)}>Home</Link>
          <Link to="resume"
            activeClass="active"
            className="nav"
            spy={true}
            smooth={true}
            offset={-100}
            duration={500}
            onClick={() => setCheck(false)}>Resumo</Link>
          <Link to="projects"
            activeClass="active"
            className="nav"
            spy={true}
            smooth={true}
            offset={-100}
            duration={500}
            onClick={() => setCheck(false)}>Projetos</Link>
          <Link to="contacts"
            activeClass="active"
            className="nav"
            spy={true}
            smooth={true}
            offset={-100}
            duration={500}
            onClick={() => setCheck(false)}>Contato</Link>
        </Navigation>
          </Modal>
      }
    </Structure>
  );
}
