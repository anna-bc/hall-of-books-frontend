import React, { useEffect } from "react";
import { useReducer, useState } from "react";

import "./App.scss";

import AppRoutes from "../../AppRoutes";
import { User } from "../../models/User";
import NavbarPage from "../../pages/NavbarPage";
import { initialState, InitialStateType } from "../../state/InitialState";
import { StateContext } from "../../state/context/StateContext";
import stateReducer from "../../state/reducer/StateReducer";
import SearchBar from "../SearchBar/SearchBar";
import { Actions } from "../../state/actions/Actions";
import { Book } from "../../models/Book";

function App() {
  const [state, dispatch] = useReducer(stateReducer, initialState);

  useEffect(() => {
    let storage = localStorage.getItem("state");
    if (storage) {
      let stateFromStorage = JSON.parse(storage);
      dispatch({
        type: Actions.setUserIdentifier,
        payload: { userIdentifier: stateFromStorage.userIdentifier },
      });
      dispatch({
        type: Actions.setIsAuthenticated,
        payload: { isAuthenticated: stateFromStorage.isAuthenticated },
      });
      dispatch({
        type: Actions.setToken,
        payload: { token: stateFromStorage.token },
      });

      if (stateFromStorage.isAuthenticated === true) {
        fetch(`https://localhost:8000/my/borrowed`, {
          headers: {
            Authorization: `Bearer ${stateFromStorage.token}`,
          },
        })
          .then((res) => res.json())
          .then((content) => {
            let borrowedList = content.borrowed.map((book: Book) => book.id);
            dispatch({
              type: Actions.setBorrowedList,
              payload: {
                borrowedList: borrowedList,
              },
            });
          });

        fetch(`https://localhost:8000/my/favorites`, {
          headers: {
            Authorization: `Bearer ${stateFromStorage.token}`,
          },
        })
          .then((res) => res.json())
          .then((content) => {
            let favoritesList = content.favorites.map((book: Book) => book.id);
            dispatch({
              type: Actions.setFavoritesList,
              payload: {
                favoritesList: favoritesList,
              },
            });
          });
      }
    }
  }, []);

  return (
    <StateContext.Provider value={{ state, dispatch }}>
      <div className="App">
        <div className="App_Header">
          <NavbarPage />
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
