import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  background: rgba(0, 0, 0, 0.8);

`;

export const ContainerAbout = styled.div`
  display: flex;
  align-items: center;
  #imgbackground {
    position: absolute;
    z-index: -1;
    border: 1px solid rgba(0, 0, 0, 0.7);

  }
`;