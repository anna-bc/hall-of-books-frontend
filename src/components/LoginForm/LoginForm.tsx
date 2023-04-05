import React from "react";
import { Dispatch, FormEvent, SetStateAction, SyntheticEvent, useState } from "react";
import { AiOutlineUser } from "react-icons/ai";
import { RiLockPasswordLine } from "react-icons/ri";
import { User } from "../../models/User";
import "./LoginForm.scss"

type LoginFormProps = {
  userData: User;
  setUserData: Dispatch<SetStateAction<User>>;
};

function LoginForm(props: LoginFormProps) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  async function handleLogin(e: SyntheticEvent) {
    e.preventDefault();
    
    const response = await fetch("https://localhost:8000/login", {
        method: "POST",
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ 'username': username, 'password': password })
    });
    const content = await response.json();
    console.log(content);
    props.setUserData({
      ...props.userData,
      id: 1,
      username: content.user.username,
      firstName: content.user.firstName,
      lastName: content.user.lastName,
      registrationDate: content.user.registrationDate,
    });
  }

  return (
    <div className="LoginForm">
      <h3>Login</h3>
      <form className="LoginForm__form" onSubmit={handleLogin}>
        <div className="LoginForm__form__inputs">
          <div className="LoginForm__form__wrapper">
            <AiOutlineUser />
            <input
              className="LoginForm__form__input"
              type="text"
              name="username"
              placeholder="Username"
              onChange={(e) =>
                setUsername((e.target as HTMLInputElement).value)
              }
            ></input>
          </div>
          <div className="LoginForm__form__wrapper">
            <RiLockPasswordLine />
            <input
              className="LoginForm__form__input"
              type="password"
              name="password"
              placeholder="Password"
              onChange={(e) =>
                setPassword((e.target as HTMLInputElement).value)
              }
            ></input>
          </div>
        </div>
        <input
          className="LoginForm__form__input LoginForm__form__input-button"
          type="submit"
          value="Login"
        ></input>
      </form>
    </div>
  );
}

export default LoginForm;
