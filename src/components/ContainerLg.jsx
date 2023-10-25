import styled from "@emotion/styled";

const Container_Lg = styled.div`
  max-width: 1024px;
  padding: 0 16px;
  margin: auto;
`;

const ContainerLg = ({ children }) => {
  return <Container_Lg>{children}</Container_Lg>;
};

export default ContainerLg;
