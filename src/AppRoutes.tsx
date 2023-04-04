import { Dispatch, SetStateAction } from "react";
import { Route, Routes } from "react-router-dom";
import Main from "./components/Main/Main";
import { User } from "./models/User";
import LoginPage from "./pages/LoginPage";


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
    </Routes>
  );
};

export default AppRoutes;
