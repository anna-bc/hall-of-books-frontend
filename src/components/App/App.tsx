import { useState } from "react";
import SearchBar from "../SearchBar/SearchBar";
import LoginForm from "../LoginForm/LoginForm";
import Navbar from "../Navbar/Navbar";
import Main from '../Main/Main';
import LoginSuccess from "../LoginForm/LoginSuccess";
import { User } from "../../models/User";
import AppRoutes  from "../../AppRoutes";
import "./App.scss";

function App() {
  const [userData, setUserData] = useState<User>({
    id:-1,
    username: "",
    firstName: "",
    lastName: "",
    registrationDate: "",
  })

  return (
    <div className="App">
      <Navbar />
      <SearchBar />
      <AppRoutes userData={userData} setUserData={setUserData}  />
    </div>
  );
}

export default App;