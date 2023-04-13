import {  useContext, useEffect  } from "react";
import LoginForm from "../components/LoginForm/LoginForm";
import { useNavigate } from "react-router-dom"; 
import { StateContext } from "../state/context/StateContext";
import Main from "../components/Main/Main";

function LoginPage() {
  const { state, dispatch } = useContext(StateContext);
  const navigate = useNavigate(); 

    useEffect(() => {
    if (state.isAuthenticated) {
      navigate("/");
      }
  }, [state.isAuthenticated, navigate]);

  return (
    <>
      {!state.isAuthenticated ? (
        <LoginForm state={state} dispatch={dispatch} />
      ) : (
        <Main />
      )}
    </>
  );
}

export default LoginPage;
