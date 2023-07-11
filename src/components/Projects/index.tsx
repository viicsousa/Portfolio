import Image from "next/image";
import {
  ContainerProjects,
  Title,
  Cards,
  Card,
  TypeProject,
  TitleProject,
  Description,
  Acess,
  Links,
} from "./styles";
import { AiFillGithub } from "react-icons/ai";

export default function Projects() {
  return (
    <ContainerProjects id="projects">
      <Title>
        <h2>Projetos</h2>
        <div></div>
      </Title>
      <Cards>
        <Card>
          <TypeProject>Projeto pessoal</TypeProject>
          <TitleProject>Ladding page</TitleProject>
          <Description>
            Esse projeto é uma ladding page para divulgar coachs. Foi utilizado
            typescript e next. É detalhado os coachs e os valores, possuí também
            um formulário para contanto e mais informações.
          </Description>
          <Links>
            <a
              href="https://landing-page-blush-nine-75.vercel.app/"
              target="_blank"
            >
              {" "}
              <Acess>Ver projeto</Acess>
            </a>
            <a href="https://github.com/viicsousa/Landing-Page" target="_blank">
              <AiFillGithub className="github" />
            </a>
          </Links>
        </Card>
        <Card>
          <TypeProject>Projeto da Imã Learning</TypeProject>
          <TitleProject>DevModas</TitleProject>
          <Description>
            Esse projeto é uma loja de roupas e sapatos feito em grupo no curso
            da Imã Learning. É feito com react, PostgreSQL e redux. Pagina de
            loja completa com cadastro, carrinho, pagamento e as sessões de
            itens.{" "}
          </Description>
          <Links>
            <a
              href="https://effulgent-speculoos-4fd138.netlify.app/"
              target="_blank"
            >
              <Acess>Ver projeto</Acess>{" "}
            </a>
            <a
              href="https://github.com/viicsousa/hackadev-projeto-final"
              target="_blank"
            >
              <AiFillGithub className="github" />
            </a>
          </Links>
        </Card>
        <Card>
          <TypeProject>Projeto pessoal</TypeProject>
          <TitleProject>Configuração perfil</TitleProject>
          <Description>
            Esse projeto foi desenvolvido através dos desafios da Rocketseat
          </Description>
          <Links>
            <a
              href="https://profile-settings-eight.vercel.app/"
              target="_blank"
            >
              <Acess>Ver projeto</Acess>
            </a>
            <a
              href="https://github.com/viicsousa/profile-settings"
              target="_blank"
            >
              <AiFillGithub className="github" />
            </a>
          </Links>
        </Card>
      </Cards>
    </ContainerProjects>
  );
}
