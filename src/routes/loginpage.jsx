import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/Loginpage.css";
import facade from "../facades/apiFacade";

const loginpage = ({ login, loggedIn }) => {
  const init = { username: "", password: "" };
  const [loginCredentials, setLoginCredentials] = useState(init);

  const navigate = useNavigate();

  const performLogin = (evt) => {
    evt.preventDefault();
    login(loginCredentials.username, loginCredentials.password);
    if (loggedIn) navigate("/");
  };

  const performSignup = (evt) => {
    evt.preventDefault();
		navigate("/signup");
  };

  const onChange = (evt) => {
    setLoginCredentials({
      ...loginCredentials,
      [evt.target.id]: evt.target.value,
    });
  };

  return (
    <div className="login-box">
    <div className="login-wrapper">
      <h2>Login</h2>
      <form onChange={onChange} className="add-form">
        <div className="form-control">
          <input placeholder="User Name" id="username" />
        </div>
        <div className="form-control">
          <input type="password" placeholder="Password" id="password" />
        </div>
        <button onClick={performLogin} className="form-btn">
          Login
        </button>
        <p className="login-signup-text">Don't have an account?</p>
					<button className="login-singup-btn rmv-border" onClick={performSignup}>
						Signup here!
					</button>
      </form>
    </div>
    </div>
  );
};

export default loginpage;
