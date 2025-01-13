import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 25px;
`;
const UserLink = styled(Link)`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Icon = styled.img`
  width: 32px;
  border-radius: 50%;
  object-fit: cover;
`;

const LeaveButton = styled.button`
  font-weight: 700;
  background-color: var(--color-accent);
  border-radius: 4px;
  padding: 5px 10px;
`;

export default function User() {
  const dispatch = useDispatch();
  const avatarUrl = useSelector((user) => user.avatarUrl);

  const logout = () => {
    localStorage.removeItem("userId");
    dispatch({ type: "SET_USER", payload: null });
  };

  return (
    <Wrapper>
      <UserLink to="/profile">
        <Icon src={avatarUrl} alt="user icon" />
      </UserLink>

      <LeaveButton onClick={logout}>Выйти</LeaveButton>
    </Wrapper>
  );
}
