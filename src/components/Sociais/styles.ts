import styled from "styled-components";

export const ContainerSociais = styled.div`
  display: flex;
  color: #fff;
  font-size: 1.5rem;
  padding-top: 0.7rem;
  .linkedin,
  .github,
  .whatsapp {
    margin-right: 15px;
    transition: all 0.3s;
    cursor: pointer;
    opacity: 0.7;
    &:hover {
      color: #F27649;
    }}
`;