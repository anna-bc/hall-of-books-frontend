import React, { useContext, useEffect } from "react";
import { Actions } from "../../state/actions/Actions";
import { StateContext } from "../../state/context/StateContext";

import "./Logout.scss";

function Logout() {
  const { state, dispatch } = useContext(StateContext);

  useEffect(() => {
    console.log(state.token);
    fetch("https://localhost:8000/logout", {
      headers: { Authorization: `Bearer ${state.token}` },
    })
      .then((res) => res.json())
      .then((content) => {
        console.log(content);
        if (content.success === true) {
          dispatch({
            type: Actions.setIsAuthenticated,
            payload: { isAuthenticated: false },
          });
          dispatch({
            type: Actions.setToken,
            payload: { token: '' },
          });
          dispatch({
            type: Actions.setUserIdentifier,
            payload: { userIdentifier: '' },
          });

          localStorage.removeItem('state');
        }
        if (content.success == false) {
            console.log(content.message);
        }
      });
  }, []);

  return (
    <div className="Logout">
        {!state.isAuthenticated ? (<h4>Successfully logged out!</h4>) : 
        (<h4>Couldn't log out user { state.userIdentifier }</h4>)}
    </div>
  );
}

export default Logout;
