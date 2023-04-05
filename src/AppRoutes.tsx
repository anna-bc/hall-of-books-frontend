import { Dispatch, SetStateAction } from "react";
import { Route, Routes } from "react-router-dom";
import BookDetails from "./components/BookDetails/BookDetails";
import Main from "./components/Main/Main";
import { Book } from "./models/Book";
import { User } from "./models/User";
import LoginPage from "./pages/LoginPage";

type BookCardProps = {
  book: Book
}

function AppRoutes(props: {
  userData: User,
  setUserData: Dispatch<SetStateAction<User>>,
}, { book }: BookCardProps) {
  return (
    <Routes>
      <Route path={"/"} element={<Main />} />
      <Route
        path={"/login"}
        element={<LoginPage userData={props.userData} setUserData={props.setUserData} />}
      />
      <Route path={"/book/:id"} element={<BookDetails book={ book} />} />
    </Routes>
  );
};

export default AppRoutes;
