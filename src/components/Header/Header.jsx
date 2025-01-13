import { Link, NavLink } from "react-router-dom";
import styled from "styled-components";
import EnterLink from "../EnterLink/EnterLink";
import Container from "../Container/Container";
import User from "./components/User/User";
import { server } from "../../bff/server";
import { useDispatch, useSelector } from "react-redux";

const StyledHeader = styled.header`
  background-color: var(--color-background-header);
  padding: 20px 0;
`;

const List = styled.ul`
  display: flex;
  align-items: center;
  gap: 25px;
`;

const Item = styled.li``;
const Wrapper = styled.div`
  display: flex;
  gap: 20px;
  align-items: center;
  justify-content: space-between;
`;

const Icon = styled.img`
  width: 18px;
`;

const StyledNavLink = styled(NavLink)`
  display: flex;
  align-items: center;
  gap: 10px;
`;

const Logo = styled(Link)`
  display: flex;
  align-items: center;
  justify-content: center;
  max-width: 35px;
  object-fit: contain;
`;

export default function Header() {
  const currentUser = useSelector((user) => user);

  return (
    <StyledHeader>
      <Container>
        <Wrapper>
          <Logo to="/">
            <img src="./public/icons/logo.png" alt="" />
          </Logo>

          <List>
            <Item>
              <StyledNavLink to="/search">
                <Icon src="./public/icons/search.png" alt="search icon" />
                Поиск
              </StyledNavLink>
            </Item>

            <Item>
              <StyledNavLink to="/post-create">
                <Icon src="./public/icons/pen.png" alt="pen icon" />
                Написать статью
              </StyledNavLink>
            </Item>
          </List>

          {currentUser ? <User /> : <EnterLink to="/login">Войти</EnterLink>}
        </Wrapper>
      </Container>
    </StyledHeader>
  );
}
