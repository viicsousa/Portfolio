import { ContainerProjects, Title, Cards, Card, TypeProject, TitleProject, Description, Acess} from "./styles";

export default function Projects () {
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
          <Description>Esse projeto é uma ladding page para divulgar coachs. Foi utilizado typescript e next. É detalhado os coachs e os valores, possuí também um formulário para contanto e mais informações.</Description>
          <Acess>Ver projeto</Acess>
        </Card>
        <Card>
          <TypeProject>Projeto da Imã Learning</TypeProject>
          <TitleProject>DevModas</TitleProject>
          <Description>Esse projeto é uma loja de roupas e sapatos feito em grupo no curso da Imã Learning. É feito com react, PostgreSQL e redux. Pagina de loja completa com cadastro, carrinho, pagamento e as sessões de itens. </Description>
          <Acess>Ver projeto</Acess>
        </Card>
      </Cards>
    </ContainerProjects>
  )
}