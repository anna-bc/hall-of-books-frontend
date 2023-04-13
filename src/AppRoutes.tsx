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
import Logout from "./components/Logout/Logout";
import UserProfile from "./components/UserProfile/UserProfile";


function AppRoutes(props: { book?: Book }){
  return (
    <Routes>
      <Route path={"/"} element={<Main />} />
      <Route path="/search/:search" element={<SearchedBooks />} />
      <Route
        path={"/login"}
        element={<LoginPage />}
      />
      <Route path={"/logout"} element={<Logout />} />
      <Route path={"/sign-up"} element={<RegistrationPage />} />
      <Route path={"/book/:id"} element={<BookDetails book={props.book} />} />
      <Route path={"/search"} element={<Err404Page error={"invalidInput"} />} />
      <Route path={"/user"} element={<UserProfile/>} />
    </Routes>
  );
};

export default AppRoutes;
