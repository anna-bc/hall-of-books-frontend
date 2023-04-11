import { Dispatch, SetStateAction, useContext } from "react";

import LoginForm from "../components/LoginForm/LoginForm";
import LoginSuccess from "../components/LoginForm/LoginSuccess";

import { User } from "../models/User";

import { StateContext } from "../state/context/StateContext";


function LoginPage() {
  const { state, dispatch } = useContext(StateContext);
  return (
    <>
      {!state.isAuthenticated ? (
        <LoginForm state={state} dispatch={dispatch} />
      ) : (
        <LoginSuccess username={state.userIdentifier} />
      )}
    </>
  );
}

export default LoginPage;
