import { useSelector } from "react-redux";
import H1 from "../../components/H1/H1";
import EnterLink from "../../components/EnterLink/EnterLink";
import Info from "./components/Info/Info";

export default function Profile() {
  const currentUser = useSelector((user) => user);

  return (
    <div>
      <H1>Профиль</H1>

      {currentUser ? (
        <Info />
      ) : (
        <div>
          Вы не авторизированы! {""}
          <EnterLink to="/login">Войти</EnterLink>
        </div>
      )}
    </div>
  );
}
