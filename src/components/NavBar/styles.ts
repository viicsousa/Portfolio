import styled from "styled-components";

export const Structure = styled.div`
  position: relative;
`;

export const Container = styled.div`
  display: flex;
  align-items: center;
  position: fixed;
  justify-content: space-between;
  height: 3.5rem;
  background-color: #323232;
  padding: 0 1rem;
  width: 100%;
  z-index: 3;
  #logo {
    height: 7rem;
    width: 7rem;
  }
  @media (max-width: 500px) {
    padding: 0;
  }
`;

export const Loading = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background: #323232;
  width: 100%;
  height: 100%;
  position: fixed;
  z-index: 3;

  .logo {
    animation: loading 2s linear infinite;
    @keyframes loading {
      100% {
        transform: rotate(360deg);
      }
    }
  }
`;

export const ContainerNav = styled.div`
  padding: 0;
  display: flex;
  align-items: center;
  gap: 0.8rem;
  cursor: pointer;
  #hamburger {
    height: 1.5rem;
  }
  #close {
    height: 1.5rem;
  }
  div {
    display: flex;
  }
`;
export const ContainerLogo = styled.div`
  display: flex;
`;

export const Modal = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  position: fixed;
  z-index: 3;
`;

export const Navigation = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: absolute;
  background-color: #323232;
  top: 3rem;
  right: 0;
  padding: 1.5rem 4.5rem 2.5rem;
  gap: 0.9rem;
  animation-duration: 2s ;
  animation-name: slidein;
  z-index: 3;
  .nav {
    font-size: 20px;
  color: white;
  cursor: pointer;
  :hover {
    color:#F27649;
  }
  @media (max-width: 500px) {
    font-size: 18px;
  }
  }
  @keyframes slidein {
    from {
      top: 0;
    }
    to {
      top: 3rem;
    }
    
  }
  @media (max-width: 500px) {
    padding: 1rem 3rem 2rem;
  }
`;


