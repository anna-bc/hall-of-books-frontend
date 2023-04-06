import { useState } from "react";
import SearchBar from "../SearchBar/SearchBar";
import Navbar from "../Navbar/Navbar";
import { User } from "../../models/User";
import AppRoutes  from "../../AppRoutes";
import "./App.scss";
import React from "react";

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
      <div className="App_Header">
        <Navbar />
        <SearchBar />
      </div>
      <div className="App_Body">
        <AppRoutes userData={userData} setUserData={setUserData} />
      </div>
    </div>
  );
}

export default App;