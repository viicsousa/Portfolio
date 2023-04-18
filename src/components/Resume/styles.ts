import styled from "styled-components";

export const ContainerResume = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  background: #363636;
  width: 100%;
`;

export const Title = styled.div`
display: flex;
justify-content: flex-start;
align-items: center;
width: 100%;
padding-left: 10rem;
gap: 1rem;
  h2 {
    color: #F27649;
    font-weight: 700;
  }
  div {
    width: 15rem; /* Defina a largura do traço como desejar */
  height: 1px; /* Defina a altura do traço como desejar */
  border-bottom: 1px solid #fff;
  opacity: 0.2;
  }
`;

export const Text = styled.div`
padding: 1rem 10rem;
  p {
    color: #FFFFFF;
    opacity: 0.7;
    font-size: 18px;
    text-align: justify;
  }
`;

export const Tecnologias = styled.ul`
  color: #FFFFFF;
    opacity: 0.7;
    font-size: 18px;
    text-align: justify;
    list-style-type: square;
    
`;