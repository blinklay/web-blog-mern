import styled from "styled-components";

const StyledLoader = styled.div`
  height: 35px;
  width: 35px;
  border-radius: 50%;
  border: 5px solid transparent;
  border-top-color: var(--color-accent);
  border-bottom-color: var(--color-accent);
  animation: spin 1s infinite ease-in;

  @keyframes spin {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;

export default function Loader() {
  return <StyledLoader></StyledLoader>;
}
