import styled from "styled-components";

export const ContainerLoading = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background: #323232;
  width: 100%;
  height: 100%;
  position: fixed;
  z-index: 3;

  #logo {
    animation: loading 2s linear infinite;
    @keyframes loading {
      100% {
        transform: rotate(360deg);
      }
    }
  }
`;