import styled from "styled-components";

const StyledContainer = styled.div`
  max-width: 1220px;
  margin: 0 auto;
  padding: 0 15px;
`;
export default function Container({ children }) {
  return <StyledContainer>{children}</StyledContainer>;
}
