import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  background: #363636;

  width: 100%;
  padding: 0rem 10rem 6rem 10rem;
  @media (max-width: 870px) {
    padding: 0 5rem;
  }
  @media (max-width: 590px) {
    padding: 0 3rem;
  }
  @media (max-width: 415px) {
    padding: 2.5rem 1.5rem;
  }
  @media (max-width: 375px) {
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

export const Contacts = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  color: #fff;
  font-size: 1.5rem;
  padding-top: 0.7rem;
  gap: 5rem;
  opacity: 0.7;
  @media (max-width: 870px) {
    padding-bottom: 3rem;
  }
  @media (max-width: 670px) {
    gap: 3rem;
  }
`;
export const Contato = styled.div`
  display: flex;
  cursor: pointer;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  width: 11rem;
  gap: 0.5rem;
  :hover {
    transform: scale(1.1);
    color: none;
    opacity: 0.7;
  }
  a {
    color: #fff;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
  .img {
    color: #f27649;
    background-color: #323232;
    width: 4rem;
    height: 5rem;
    padding: 1rem;
    border-radius: 5px 20px 5px;
    @media (max-width: 870px) {
      width: 3rem;
      height: 4rem;
      padding: 0.8rem;
    }
  }

  h5 {
    font-size: 20px;
    padding-top: 0.4rem;
    font-weight: 700;
    @media (max-width: 870px) {
      font-size: 18px;
    }
  }
  span {
    font-size: 14px;
  }
`;
