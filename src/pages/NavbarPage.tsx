import React, { useContext } from "react";
import Navbar from "../components/Navbar/Navbar";
import NavbarLoggedIn from "../components/Navbar/NavbarLoggedIn/NavbarLoggedIn";
import { StateContext } from "../state/context/StateContext";

function NavbarPage() {
    const  {state, dispatch} = useContext(StateContext);

  return (
    <div className="NavbarPage">
      {!state.isAuthenticated ? (<Navbar />) : (<NavbarLoggedIn />)}
    </div>
  )
};

export default NavbarPage;
