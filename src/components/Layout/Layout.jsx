import { NavLink } from "react-router-dom";
import styled from "styled-components";

const StyledHeader = styled.header`
  background-color: var(--color-background-header);
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 20px;
  padding: 20px 0;
`;

const List = styled.ul`
  display: flex;
  align-items: center;
  gap: 15px;
`;

const Item = styled.li``;

export default function Layout() {
  return (
    <>
      <StyledHeader>
        <List>
          <Item>
            <NavLink>Поиск</NavLink>
          </Item>

          <Item>
            <NavLink>Yfgbcfnm cnfnm.</NavLink>
          </Item>
        </List>
      </StyledHeader>
    </>
  );
}
