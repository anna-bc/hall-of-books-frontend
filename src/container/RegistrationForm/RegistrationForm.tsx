import React, { useState } from "react";
import { BsPen } from "react-icons/bs"
import { AiOutlineUser } from "react-icons/ai";
import { RiLockPasswordLine } from "react-icons/ri";
import "./RegistrationForm.scss";

function RegistrationForm() {
  const [user, setUser] = useState({
    id: 0,
    username: "",
    firstName: "",
    lastName: "",
    password: "",
  });

  return (
    <div className="RegistrationForm">
      <h3>Sign up</h3>
      <form className="RegistrationForm__form">
        <div className="RegistrationForm__form__inputs">
          <div className="RegistrationForm__form__wrapper">
            <AiOutlineUser />
            <input
              className="RegistrationForm__form__input"
              type="text"
              name="username"
              placeholder="Username"
              onChange={(e) =>
                setUser({
                  ...user,
                  username: (e.target as HTMLInputElement).value,
                })
              }
            ></input>
          </div>
        <div className="RegistrationForm__form__wrapper">
            <BsPen />
            <input
            className="RegistrationForm__form__input"
            type="password"
            name="password"
            placeholder="Password"
            onChange={(e) =>
              setUser({
                ...user,
                password: (e.target as HTMLInputElement).value,
              })
            }
          ></input>
          </div>
          <div className="RegistrationForm__form__wrapper">
            <BsPen />
          <input
            className="RegistrationForm__form__input"
            type="text"
            name="firstName"
            placeholder="First Name"
            onChange={(e) =>
              setUser({
                ...user,
                firstName: (e.target as HTMLInputElement).value,
              })
            }
          ></input>
          </div>
          <div className="RegistrationForm__form__wrapper">
            <RiLockPasswordLine />
            <input
              className="RegistrationForm__form__input"
              type="text"
              name="lastName"
              placeholder="Last Name"
              onChange={(e) =>
                setUser({
                  ...user,
                  lastName: (e.target as HTMLInputElement).value,
                })
              }
            ></input>
          </div>
        </div>
        <input
          className="RegistrationForm__form__input RegistrationForm__form__input-button"
          type="submit"
          value="Sign Up"
        ></input>
      </form>
    </div>
  );
}

export default RegistrationForm;
