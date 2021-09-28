import { useState } from "react";
import { useHistory } from "react-router";

const Login = () => {
  const history = useHistory();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleUsername = (e) => {
    setUsername(e.target.value);
  };

  const handlePassword = (e) => {
    setPassword(e.target.value);
  };

  const handleSignIn = (e) => {
    e.preventDefault();
    fetchUserDetails();
  };

  const fetchUserDetails = async () => {
    const url = "https://fakestoreapi.com/users";
    const response = await fetch(url);
    const userInfo = await response.json();
    const authenticatedUser = authenticateUser(userInfo);
    if (authenticatedUser.length !== 0) {
      history.push("/");
    }
  };

  const authenticateUser = (userInfo) => {
    const authenticatedUser = userInfo.filter((user) => {
      return user.username === username && user.password === password;
    });
    return authenticatedUser;
  };
  return (
    <div>
      <form>
        <label>Username</label>
        <input value={username} onChange={handleUsername}></input>
        <label>Password</label>
        <input value={password} onChange={handlePassword}></input>
        <button type="submit" onClick={handleSignIn}>
          Sign In
        </button>
      </form>
    </div>
  );
};

export default Login;
