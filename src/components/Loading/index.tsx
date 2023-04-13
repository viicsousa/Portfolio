import Image from "next/image";

import {ContainerLoading} from "./styles";

import Logo from "../../assets/img/png/logo.png";

export default function Loading () {
  return (
    <ContainerLoading>
      <Image src={Logo} alt="" id="logo" height={70}/>
    </ContainerLoading>
  )
}