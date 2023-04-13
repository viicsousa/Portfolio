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
  
  
`;

export const Title = styled.div`
  color: #FFFFFF;
  font-size: 15px;
  opacity: 0.5;
`;

export const Name = styled.span`
color: #FFFFFF;
  -webkit-text-stroke-width: 0.9px;
  -webkit-text-stroke-color: #6318d9;
  font-weight: bold;
  font-size: 51px;
  padding-top: 0.5rem;
  opacity: 0.;
  
`;

export const Dev = styled.div`
  color: #FFFFFF;
  -webkit-text-stroke-width: 0.9px;
  -webkit-text-stroke-color: #6318d9;
  font-weight: bold;
  font-size: 40px;
  opacity: 0.5;
`;
export const Aboutme = styled.div`
  color: #FFFFFF;
  opacity: 0.5;
  font-size: 16px;
`;

export const ContainerInfo = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 2rem 0;
  gap: 3rem;
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
          background: #29a587;
        }
      
`;

export const ImgAbout = styled.div``;