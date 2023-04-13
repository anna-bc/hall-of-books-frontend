import { Dispatch, SyntheticEvent, useState } from "react";

import { AiOutlineUser } from "react-icons/ai";
import { RiLockPasswordLine } from "react-icons/ri";

import "./LoginForm.scss";

import { InitialStateType } from "../../state/InitialState";
import { Actions, ActionType } from "../../state/actions/Actions";
import { Book } from "../../models/Book";

type LoginFormProps = {
  state: InitialStateType;
  dispatch: Dispatch<ActionType>;
};

function LoginForm(props: LoginFormProps) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  async function handleLogin(e: SyntheticEvent) {
    e.preventDefault();

    const response = await fetch("https://localhost:8000/login", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ username: username, password: password }),
    });
    const content = await response.json();
    console.log(content.user.borrowedBooks);
    props.dispatch({
      type: Actions.setUserIdentifier,
      payload: { userIdentifier: content.user.username },
    });
    props.dispatch({
      type: Actions.setIsAuthenticated,
      payload: { isAuthenticated: true },
    });
    props.dispatch({
      type: Actions.setToken,
      payload: { token: content.token },
    });
    props.dispatch({
      type: Actions.setBorrowedList,
      payload: { borrowedList: content.user.borrowedBooks.map((book : Book) => book.id) },
    });
    props.dispatch({
      type: Actions.setFavoritesList,
      payload: {
        favoritesList: content.user.favorites.map((book: Book) => book.id),
      },
    });
    console.log(props.state.borrowedList);
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
