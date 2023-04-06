import React from "react";
import { Dispatch, SetStateAction } from "react";
import { Route, Routes } from "react-router-dom";
import { Book } from "./models/Book";
import { User } from "./models/User";
import BookDetails from "./components/BookDetails/BookDetails";
import Main from "./components/Main/Main";
import LoginPage from "./pages/LoginPage";
import RegistrationPage from "./pages/RegistrationPage";
import SearchedBooks from "./pages/SearchedBooks";


function AppRoutes(props: { userData: User, setUserData: Dispatch<SetStateAction<User>>, book?: Book }){
  return (
    <Routes>
      <Route path={"/"} element={<Main />} />
      <Route path="/search/:search" element={<SearchedBooks />} />
      <Route
        path={"/login"}
        element={<LoginPage userData={props.userData} setUserData={props.setUserData} />}
      />
      <Route path={"/sign-up"} element={<RegistrationPage />} />
      <Route path={"/book/:id"} element={<BookDetails book={props.book} />} />
    </Routes>
  );
};

export default AppRoutes;
