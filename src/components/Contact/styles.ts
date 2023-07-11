import styled from "styled-components";

export const Container =styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: center;
  flex-direction: column;
  background: #363636;
  width: 100%;
  padding: 0rem 10rem;
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