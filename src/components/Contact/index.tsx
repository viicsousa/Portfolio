import { AiFillGithub, AiOutlineWhatsApp } from 'react-icons/ai';
import { BsLinkedin } from 'react-icons/bs';
import { BsFillEnvelopeFill } from 'react-icons/bs';
import { Container, Title, Contacts, Contato } from "./styles";

export default function Contact() {
  return (
    <Container id='contacts'>
      <Title><h2>Contato</h2>
      <div></div></Title>
      <Contacts>
        <Contato>
          <a href="mailto:victoria.vasconcelos@hotmail.com" target='_blank'><BsFillEnvelopeFill className='img'/>
          <h5>E-mail</h5>
          <span>victoria.vasconcelos@hotmail.com</span></a>
        </Contato>
        <Contato>
          <a href="https://wa.me/5562985797421" target='_blank'> <AiOutlineWhatsApp className='img'/>
          <h5>Telefone</h5>
          <span>(62) 985797421</span></a>
          </Contato>
          <Contato>
          <a href="https://github.com/viicsousa" target='_blank'>
          <AiFillGithub className='img'/>
          <h5>Github</h5>
          <span>@viicsousa</span>
          </a>
          </Contato>
        <Contato>
          <a href="https://www.linkedin.com/in/vict%C3%B3ria-vasconcelos-de-sousa-aguiar-28550392/" target='_blank'>
          <BsLinkedin className='img'/>
          <h5>Linkedin</h5>
          </a>
         </Contato>
       
      </Contacts>
    </Container>
  )
}