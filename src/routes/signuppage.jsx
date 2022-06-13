import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/Loginpage.css";

const signuppage = ({signup, loggedIn}) => {
    const init = { username: "", password: "", password2:"", firstname:"", lastname:"", email:"" };
    const [signupCredentials, setSignupCredentials] = useState(init);
  
    const navigate = useNavigate();
  
    const performSignup = (evt) => {
      evt.preventDefault();
      signup(signupCredentials.username, signupCredentials.password, signupCredentials.password2, signupCredentials.firstname, signupCredentials.lastname, signupCredentials.email);
      setSignupCredentials(init);
      if (loggedIn) navigate("/");
    };
  

  
    const onChange = (evt) => {
      setSignupCredentials({
        ...signupCredentials,
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
          <div className="form-control">
            <input type="password" placeholder="Repeat Password" id="password2" />
          </div>
          <div className="form-control">
            <input placeholder="First Name" id="firstname" />
          </div>
          <div className="form-control">
            <input placeholder="Last Name" id="lastname" />
          </div>
          <div className="form-control">
            <input placeholder="Email" id="email" />
          </div>
          
          <button onClick={performSignup} className="form-btn">
            Signup
          </button>

        </form>
      </div>
      </div>
    );
  };

export default signuppage