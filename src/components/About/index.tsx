import Lottie from "react-lottie";

import { Container, TextAbout, Title, Name, Dev, Aboutme, Social, ImgAbout } from "./styles";
import Computer from "../../assets/animations/computer.json";
import Linkedin from "../../assets/animations//linkedin.json";
import Github from "../../assets/animations/github.json";
import Sociais from "../Sociais";

export default function About() {
  const defaultOptionsComputerAnimation = {
    loop: true,
    autoplay: true,
    animationData: Computer,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };
  const defaultOptionsLinkedinAnimation = {
    loop: true,
    autoplay: true,
    animationData: Linkedin,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  const defaultOptionsGithubAnimation = {
    loop: true,
    autoplay: true,
    animationData: Github,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };
  return (
    <Container>
      <TextAbout>
        <Title>Olá, meu nome é</Title>
        <Name>VICTÓRIA VASCONCELOS.</Name>
        <Dev>Eu sou desenvolvedora web.</Dev>
        <Aboutme>Possuo 1 ano de experiência como desenvolvedora web, utilizando as principais tecnologias do mercado.</Aboutme>
        <Sociais/>
      </TextAbout>
      <ImgAbout>
        <Lottie options={defaultOptionsComputerAnimation} />
      </ImgAbout>
    </Container>
  );
}
