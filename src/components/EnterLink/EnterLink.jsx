import { Link } from "react-router-dom";
import styled from "styled-components";

const StyledLink = styled(Link)`
  padding: 5px 10px;
  border-radius: 4px;
  background-color: var(--color-accent);
`;

export default function EnterLink({ children, to }) {
  return <StyledLink to={to}>{children}</StyledLink>;
}
