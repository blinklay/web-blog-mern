import { useSelector } from "react-redux";

export default function Info() {
  const currentUser = useSelector((user) => user);

  return (
    <>
      <div>Почта: {currentUser.email}</div>
    </>
  );
}
