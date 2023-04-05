import { User } from "../../models/User";

function LoginSuccess(props: {
  username: string,
}) {
  return (
    <div>
      <h3>Already logged in with the username {props.username}</h3>
    </div>
  );
};

export default LoginSuccess;
