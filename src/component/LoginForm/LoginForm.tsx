import { Dispatch, FormEvent, SetStateAction, SyntheticEvent, useState } from "react";
import { User } from "../../model/User";

type LoginFormProps = {
  userData: User;
  setUserData: Dispatch<SetStateAction<User>>,
}

function LoginForm(props : LoginFormProps) {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

  async function handleLogin(e : SyntheticEvent) {
    e.preventDefault();
    
    const response = await fetch("http://localhost:8000/login", {
        method: "POST",
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ 'username': username, 'password': password })
    });
    const content = await response.json();
    console.log(content);
    props.setUserData({...props.userData , id: 1, 
        username: content.user.username, 
        firstName: content.user.firstName, 
        lastName: content.user.lastName, 
        registrationDate: content.user.registrationDate });
  }

  return (
    <div className="LoginForm">
      <h3>Login</h3>
      <form onSubmit={handleLogin}>
        <label>
          Username:
          <input type="text" name="username" onChange={e => setUsername((e.target as HTMLInputElement).value)}></input>
        </label>
        <label>
          Password:
          <input type="password" name="password" onChange={e => setPassword((e.target as HTMLInputElement).value)}></input>
        </label>
        <input type="submit" value="Login"></input>
      </form>
    </div>
  );
}

export default LoginForm;
