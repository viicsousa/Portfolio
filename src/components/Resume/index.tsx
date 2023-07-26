
import { ContainerResume, Title, Text, Tecnologias} from "./styles";

export default function Resume () {
  
  return (
    <ContainerResume id="resume">
      <Title>
        <h2>Sobre mim</h2>
        <div></div>
      </Title>
      <Text>
        <p>Olá! Meu nome é Victória. Sempre fui fascinada em tecnologia, principalmente em jogos. Comecei a estudar sobre lógica da programação no primeiro semestre de 2022 e a primeira linguagem que estudei foi Python. Ainda em 2022 fui selecionada pela Imã Learning para um curso FullStack. Quando terminei o curso comecei como desenvolvedora Web na Planning. </p>
        <p>Nos últimos meses além de estar me dedicando ao atual trabalho, tenho aperfeiçoado minhas capacidades, tanto Hard Skills quanto Soft Skills.</p>
        <p>Aqui estão algumas tecnologias com as quais tenho trabalhado recentemente:</p>
      </Text>
      <Tecnologias>
        <li>HTML</li>
        <li>CSS</li>
        <li>JavaScript</li>
        <li>React</li>
        <li>Next.js</li>
        <li>TypeScript</li>
      </Tecnologias>
    </ContainerResume>
  )
}