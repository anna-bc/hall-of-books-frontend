import React from "react";
import { useReducer, useState } from "react";

import "./App.scss";

import AppRoutes from "../../AppRoutes";
import { User } from "../../models/User";
import { initialState, InitialStateType } from "../../state/InitialState";
import { StateContext } from "../../state/context/StateContext";
import stateReducer from "../../state/reducer/StateReducer";

import Navbar from "../Navbar/Navbar";

import SearchBar from "../SearchBar/SearchBar";




function App() {
  const [state, dispatch] = useReducer(stateReducer, initialState);

  return (
    <StateContext.Provider value={{state, dispatch}}>
      <div className="App">
        <div className="App_Header">
          <Navbar />
          <SearchBar />
        </div>
        <div className="App_Body">
          <AppRoutes />
        </div>
      </div>
    </StateContext.Provider>
  );
}

export default App;
