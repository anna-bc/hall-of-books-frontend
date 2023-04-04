import { Dispatch, SetStateAction } from "react";
import LoginForm from "../components/LoginForm/LoginForm";
import LoginSuccess from "../components/LoginForm/LoginSuccess";
import { User } from "../models/User";

type LoginFormProps = {
  userData: User;
  setUserData: Dispatch<SetStateAction<User>>;
};

function LoginPage(props: LoginFormProps) {
  return (
    <>
      {!(props.userData.id >= 0) ? (
        <LoginForm userData={props.userData} setUserData={props.setUserData} />
      ) : (
        <LoginSuccess username={props.userData.username} />
      )}
    </>
  );
}

export default LoginPage;
