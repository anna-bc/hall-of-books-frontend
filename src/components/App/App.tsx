import "./App.scss";
import SearchBar from "../SearchBar/SearchBar";
import LoginForm from "../LoginForm/LoginForm";
import Navbar from "../Navbar/Navbar";
import { useState } from "react";
import LoginSuccess from "../LoginForm/LoginSuccess";
import { User } from "../../models/User";

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
