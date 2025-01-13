import styled from "styled-components";

const StyledButton = styled.button`
  background-color: var(--color-accent);
  color: #fff;
  border-radius: 4px;
  padding: 5px 10px;
`;

export default function Button({ children }) {
  return <StyledButton>{children}</StyledButton>;
}
