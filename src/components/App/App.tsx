import "./App.scss";
import SearchBar from "../SearchBar/SearchBar";
import LoginForm from "../LoginForm/LoginForm";
import Navbar from "../Navbar/Navbar";
import { useState } from "react";
import LoginSuccess from "../LoginForm/LoginSuccess";
import { User } from "../../model/User";

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
      {!(userData.id >= 0) ? (
        <LoginForm userData={userData} setUserData={setUserData} />
      ) : (
        <LoginSuccess />
      )}
    </div>
  );
}

export default App;
