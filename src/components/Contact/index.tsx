import { Container, Title, Contacts, Contato } from "./styles";

export default function Contact() {
  return (
    <Container>
      <Title><h2>Contato</h2>
      <div></div></Title>
      <Contacts>
        <Contato></Contato>
        <Contato></Contato>
        <Contato></Contato>
        <Contato></Contato>
      </Contacts>
    </Container>
  )
}