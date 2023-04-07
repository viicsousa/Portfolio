import styled from "styled-components";

export const Structure = styled.div``;

export const Container = styled.div`
  display: flex;
  align-items: center;
  height: 4rem;
  background-color: #323232;
  width: 100%;
  #logo {
    height: 7rem;
    width: 7rem;
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
  display: flex;
  align-content: center;
  justify-content: space-between;
  width: 100%;
  padding: 0 2rem;

`; 
export const ContainerLogo = styled.div`
  display: flex;
  color: #7dce82;
`;

export const Navigation = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  `;

  export const Nav = styled.text`
    color: #66c4c8;
  
  `;

