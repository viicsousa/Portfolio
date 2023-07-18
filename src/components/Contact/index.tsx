import { AiFillGithub, AiOutlineWhatsApp } from 'react-icons/ai';
import { BsLinkedin } from 'react-icons/bs';
import { BsFillEnvelopeFill } from 'react-icons/bs';
import { Container, Title, Contacts, Contato } from "./styles";

export default function Contact() {
  return (
    <Container>
      <Title><h2>Contato</h2>
      <div></div></Title>
      <Contacts>
        <Contato>
          <BsFillEnvelopeFill/>
          <h5>E-mail</h5>
          <span>victoria.vasconcelos@hotmail.com</span></Contato>
        <Contato>
          <AiOutlineWhatsApp/>
          <h5>Telefone</h5>
          <span>(62) 985797421</span></Contato>
          <Contato>
          <AiFillGithub/>
          <h5>Github</h5>
          <span>@viicsousa</span></Contato>
        <Contato>
          <BsLinkedin/>
          <h5>Linkedin</h5></Contato>
       
      </Contacts>
    </Container>
  )
}