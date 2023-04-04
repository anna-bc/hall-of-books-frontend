import { useState } from "react";
import SearchBar from "../SearchBar/SearchBar";
import LoginForm from "../LoginForm/LoginForm";
import Navbar from "../Navbar/Navbar";
import Main from '../Main/Main';
import LoginSuccess from "../LoginForm/LoginSuccess";
import { User } from "../../models/User";
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
      <div className="App__Header">
        <Navbar />
        <SearchBar />
      </div>
      <div className="App__Body">
        <Main />
        {!(userData.id >= 0) ? (
          <LoginForm userData={userData} setUserData={setUserData} />
        ) : (
          <LoginSuccess />
        )}
      </div>
    </div>
  );
}

export default App;