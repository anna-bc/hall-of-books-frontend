import React from "react";
import { Dispatch, SetStateAction } from "react";
import { Route, Routes } from "react-router-dom";
import { Book } from "./models/Book";
import { User } from "./models/User";
import BookDetails from "./components/BookDetails/BookDetails";
import Main from "./components/Main/Main";
import LoginPage from "./pages/LoginPage";
import RegistrationPage from "./pages/RegistrationPage";


function AppRoutes(props: { book?: Book }){
  return (
    <Routes>
      <Route path={"/"} element={<Main />} />
      <Route
        path={"/login"}
        element={<LoginPage />}
      />
      <Route path={"/sign-up"} element={<RegistrationPage />} />
      <Route path={"/book/:id"} element={<BookDetails book={props.book} />} />
    </Routes>
  );
};

export default AppRoutes;
