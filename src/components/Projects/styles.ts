import styled from "styled-components";

export const ContainerProjects = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: center;
  flex-direction: column;
  background: #363636;
  width: 100%;
  padding: 5rem 10rem;
  @media (max-width: 870px){
    padding: 0 5rem 5rem 5rem;
  }
  @media (max-width: 590px) {
    padding: 0 3rem 3rem 3rem;
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

export const Cards = styled.div`
  display: flex;
  flex-wrap: wrap;
  color: #ffffff;
  opacity: 0.7;
  gap: 4rem;
`;

export const Card = styled.div`
  display: flex;
  text-align: justify;
  flex-direction: column;
  gap: 1rem;
  width: 22rem;
  @media (max-width: 400px) {
    width: 19rem;
  }
  

`;  

export const TypeProject = styled.div`
  font-size: 18px;
  color: #F27649;
`;

export const TitleProject = styled.div`
  font-weight: bold;
  font-size: 18px;
`;

export const Description = styled.div`
font-size: 16px; `;

export const Acess = styled.div`
  color: #F27649;
  text-decoration: underline;
  font-size: 14px;
  cursor: pointer;
  :hover {
    transform: scale(1.1);
    color: #F27649;
  }
`;

export const Links = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
`;