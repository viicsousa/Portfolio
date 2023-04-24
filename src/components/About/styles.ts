import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: #363636;
  width: 100%;

`;

export const TextAbout = styled.div`
  padding: 1rem 3rem;
  display: flex;
  align-items: flex-start;
  justify-content: center;
  flex-direction: column;
  text-align: left;
  padding: 10rem;
  flex-wrap: wrap;
  @media (max-width: 870px) {
    padding: 5rem;
  }
  @media (max-width: 590px) {
    padding: 5rem 3rem 2rem;
  }
  @media (max-width: 415px) {
    padding: 5rem 1.5rem 1rem;
  }
  @media (max-width: 375px){
    padding: 5rem 1.5rem 1rem;
  }
  
`;

export const Title = styled.div`
  color: #F27649;
  font-size: 16px;
  opacity: 0.8;
  @media (max-width: 515px) {
    font-size: 14px;
  }
  @media (max-width: 375px){
    font-size: 12px;
  }
`;

export const Name = styled.span`
  color: #FFFFFF;
  -webkit-text-stroke-width: 0.9px;
  -webkit-text-stroke-color: #F27649;
  font-weight: bold;
  font-size: 51px;
  padding-top: 0.5rem;
  opacity: 0.;
  @media (max-width: 1300px) {
    font-size: 42px;
  }
  @media (max-width: 515px) {
    font-size: 32px;
  }
  @media (max-width: 375px){
    font-size: 28px;
  }
  
`;

export const Dev = styled.div`
  color: #FFFFFF;
  -webkit-text-stroke-width: 0.9px;
  -webkit-text-stroke-color: #F27649;
  font-weight: bold;
  font-size: 40px;
  opacity: 0.5;
  @media (max-width: 1300px) {
    font-size: 30px;
  }
  @media (max-width: 515px) {
    font-size: 20px;
  }
  @media (max-width: 375px){
    font-size: 18px;
  }
`;
export const Aboutme = styled.div`
  color: #FFFFFF;
  opacity: 0.5;
  font-size: 16px;
  @media (max-width: 515px) {
    font-size: 14px;
  }
  @media (max-width: 375px){
    font-size: 12px;
  }
`;

export const ContainerInfo = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 2rem 0;
  gap: 3rem;
  @media (max-width: 375px){
    gap: 2rem;
    padding: 1.5rem 0;
  }
`;

export const Button = styled.button`
  margin-top: 10px;
        position: relative;
        overflow: hidden;
        display: inline-block;
        font-size: 13px;
        font-weight: 700;
        text-transform: uppercase;
        letter-spacing: 0.05em;
        line-height: 52px;
        outline: none !important;
        cursor: pointer;
        padding: 0 40px;
        transition: all 0.7s cubic-bezier(0.3, 0, 0.3, 1);
        border: 2px solid #000;
        background: transparent;
        box-shadow: 5px 5px rgb(0 0 0 / 20%);
        border-radius: 56px;
        color: #fff;
        border-color: #a3a5a7;
        box-shadow: 5px 5px rgb(255 255 255 / 10%);
        &:hover {
          background: #F27649;
        }
        @media (max-width: 515px) {
          font-size: 11px;
          padding: 0 25px;
          line-height: 42px;
  }
  @media (max-width: 375px){
    font-size: 10px;
    padding: 0 18px;
          line-height: 40px;
  }
      
`;

export const ImgAbout = styled.div`
  @media (max-width: 1060px) {
    display: none;
  }
`;