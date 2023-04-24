import styled from "styled-components";

export const ContainerResume = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: center;
  flex-direction: column;
  background: #363636;
  width: 100%;
  padding: 1rem 10rem;
  @media (max-width: 870px){
    padding: 0 5rem;
  }
  @media (max-width: 590px) {
    padding: 0 3rem;
  }
  @media (max-width: 415px) {
    padding: 2.5rem 1.5rem;
  }
  @media (max-width: 375px){
    padding: 2rem 1.5rem;
  }
`;

export const Title = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  width: 100%;
  gap: 1rem;
  h2 {
    color: #f27649;
    font-weight: 700;
  }
  div {
    width: 15rem; /* Defina a largura do traço como desejar */
    height: 1px; /* Defina a altura do traço como desejar */
    border-bottom: 1px solid #fff;
    opacity: 0.2;
    @media (max-width: 515px) {
      width: 10rem;
    }
    @media (max-width: 352px) {
      width: 8rem;
    }
  }
  
`;

export const Text = styled.div`

  p {
    color: #ffffff;
    opacity: 0.7;
    font-size: 18px;
    text-align: justify;
    @media (max-width: 515px) {
    font-size: 14px;
  }
  @media (max-width: 375px){
    font-size: 12px;
  }
  }
`;

export const Tecnologias = styled.ul`
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  height: 7rem;
  font-size: 18px;
  text-align: justify;
  list-style: none;
  @media (max-width: 515px) {
    height: 6rem;
    }
  li {
    margin: 5px 0;
    padding-right: 35px;
    color: #ffffff;
    opacity: 0.7;
    font-size: 14px;
    @media (max-width: 515px) {
      font-size: 10px;
    }
  }

  li:before {
    content: "";
    display: inline-block;
    width: 8px;
    height: 8px;
    margin-right: 5px;
    background-color: #f27649; /* define a cor do marcador */
    border-radius: 7%;
  }
`;
