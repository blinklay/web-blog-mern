import styled from "styled-components";

const StyledTitle = styled.h1`
  font-weight: 700;
  font-size: 32px;
  padding-bottom: 5px;
  border-bottom: 2px solid var(--color-accent);
  display: inline-block;
`;

export default function H1({ children }) {
  return <StyledTitle>{children}</StyledTitle>;
}
