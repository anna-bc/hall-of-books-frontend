import React from "react";
import { Dispatch, SetStateAction } from "react";
import { Route, Routes } from "react-router-dom";
import Main from "./components/Main/Main";
import RegistrationForm from "./container/RegistrationForm/RegistrationForm";
import { User } from "./models/User";
import LoginPage from "./pages/LoginPage";
import RegistrationPage from "./pages/RegistrationPage";


function AppRoutes(props: {
  userData: User,
  setUserData: Dispatch<SetStateAction<User>>,
}) {
  return (
    <Routes>
      <Route path={"/"} element={<Main />} />
      <Route
        path={"/login"}
        element={<LoginPage userData={props.userData} setUserData={props.setUserData} />}
      />
      <Route path={"/sign-up"} element={<RegistrationPage />} />
    </Routes>
  );
};

export default AppRoutes;
