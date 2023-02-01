import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Context } from "../Context";
import { LoginForm } from "../Styles";

const Login = () => {
  const [auth, setAuth] = useState({
    username: "",
    password: "",
  });
  const [accs, setAccs] = useState([]);

  const { setUser } = useContext(Context);
  const navigate = useNavigate();

  useEffect(() => {
    localStorage.getItem("token") !== null && navigate("/");

    try {
      const Fetch = async () => {
        const users = await axios.get("https://dummyjson.com/users");

        setAccs(users.data.users[Math.floor(Math.random() * 29)]);
      };

      Fetch();
    } catch (err) {
      console.log(err);
    }
  }, []);

  const handleLogin = (name, value) => {
    setAuth((x) => ({ ...x, [name]: value.target.value }));
  };

  const Signin = async (e) => {
    e.preventDefault();

    try {
      const userData = await axios.post(
        "https://dummyjson.com/auth/login",
        auth
      );

      setUser(userData.data);
      localStorage.setItem("token", userData.data.token);
      localStorage.setItem("userid", userData.data.id);
      navigate("/");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <LoginForm>
      <form onSubmit={(e) => Signin(e)}>
        <input
          type="text"
          placeholder="Username"
          onChange={(e) => handleLogin("username", e)}
        />
        <input
          type="password"
          placeholder="Password"
          onChange={(e) => handleLogin("password", e)}
        />
        <button type="submit">Login</button>
        <small style={{ userSelect: "text" }}>
          <b>Example account:</b> <br />
          username: {accs.username} <br />
          password: {accs.password}
        </small>
      </form>
    </LoginForm>
  );
};

export default Login;
