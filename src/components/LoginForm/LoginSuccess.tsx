import React from "react";
import { User } from "../../models/User";

function LoginSuccess(props: {
  username: string,
}) {
  return (
    <div className="LoginForm">
      <h4>Already logged in with the username {props.username}</h4>
    </div>
  );
};

export default LoginSuccess;
