import React from "react";
import { Dispatch, SetStateAction } from "react";
import { Route, Routes } from "react-router-dom";
import { Book } from "./models/Book";
import { User } from "./models/User";
import BookDetails from "./components/BookDetails/BookDetails";
import Main from "./components/Main/Main";
import LoginPage from "./pages/LoginPage";
import RegistrationPage from "./pages/RegistrationPage";
import SearchedBooks from "./pages/SearchedBooks/SearchedBooks";
import Err404Page from "./pages/Err404/Err404page";


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
      <Route path={"/search"} element={<Err404Page error={"invalidInput"} />} />
    </Routes>
  );
};

export default AppRoutes;
