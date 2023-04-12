import { AiFillGithub, AiOutlineWhatsApp } from 'react-icons/ai';
import { BsLinkedin } from 'react-icons/bs';

import { ContainerSociais} from "./styles";

export default function Sociais () {
  return (
    <ContainerSociais>
      <a href="https://www.linkedin.com/in/vict%C3%B3ria-vasconcelos-de-sousa-aguiar-28550392/" target='_blank'>
        <BsLinkedin className='linkedin'/>
      </a>
      <a href="https://github.com/viicsousa" target='_blank'>
        <AiFillGithub className="github"/>
      </a>
      <a href="https://wa.me/5562985797421" target='_blank'>
        <AiOutlineWhatsApp className='whatsapp'/>
      </a>
    </ContainerSociais>
  )
}