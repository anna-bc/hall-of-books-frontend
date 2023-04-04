import { Dispatch, SetStateAction } from "react";
import { Route, Routes } from "react-router-dom";
import LoginForm from "./components/LoginForm/LoginForm";
import Main from "./components/Main/Main";
import { User } from "./models/User";

function AppRoutes(props: {
  userData: User,
  setUserData: Dispatch<SetStateAction<User>>,
}) {
  return (
    <Routes>
      <Route path={"/"} element={<Main />} />
      <Route
        path={"/login"}
        element={<LoginForm userData={props.userData} setUserData={props.setUserData} />}
      />
    </Routes>
  );
};

export default AppRoutes;
