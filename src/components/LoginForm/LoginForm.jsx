import styled from "styled-components";
import Button from "../Button/Button";
import { server } from "../../bff/server";
import { useState } from "react";
import { useDispatch } from "react-redux";

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 25px;
`;

const FormRow = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
`;

const FormLabel = styled.label``;

const FormInput = styled.input`
  background-color: transparent;
  font-size: 18px;
  padding: 5px;
  border: none;
  border-bottom: 1px solid var(--color-accent);
  outline: none;
  color: inherit;
`;

export default function LoginForm() {
  const [serverError, setServerError] = useState(null);
  const dispatch = useDispatch();

  const auth = async (e) => {
    e.preventDefault();
    setServerError(null);

    const { email, password } = e.target;

    try {
      const currentUser = await server.login(email.value, password.value);
      dispatch({ type: "SET_USER", payload: currentUser });
    } catch ({ error }) {
      setServerError(error);
      console.log(error);
    }
  };

  return (
    <Form onSubmit={auth}>
      <FormRow>
        <FormLabel htmlFor="email">Почта:</FormLabel>
        <FormInput
          name="email"
          id="email"
          type="text"
          placeholder="example@exa.org"
        />
      </FormRow>

      <FormRow>
        <FormLabel htmlFor="password">Пароль:</FormLabel>
        <FormInput name="password" id="password" type="password" />
      </FormRow>

      <Button>Войти</Button>
    </Form>
  );
}
