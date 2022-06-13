import React from "react";
import SearchBox from "./SearchBox";
import "../styles/Header.css";
import { Outlet, NavLink, useNavigate } from "react-router-dom";

const Header = ({
  handleChange,
  loggedIn,
  role,
  setRole,
  setLoggedIn,
  facade,
}) => {
  const navigate = useNavigate();

  const logout = () => {
    facade.logout();
    setLoggedIn(false);
    setRole("");
    navigate("/");
  };

  return (
    <div>
      <header className="header-container">
       
        {role == "admin" ? (
          <NavLink to="/admin">
            <button className="btn" type="button">
              Admin
            </button>
          </NavLink>
        ) : null}
        {role == "user" ? (
          <NavLink to="/user">
            <button className="btn" type="button">
              User
            </button>
          </NavLink>
        ) : null}
        <NavLink to="/data">
          <button className="btn" type="button">
            Data
          </button>
        </NavLink>
        {!loggedIn ? (
          <NavLink to="/login">
            <button className="btn" type="button">
              Login
            </button>
          </NavLink>
        ) : (
          <button className="btn" onClick={logout}>
            Logout
          </button>
        )}
      </header>
      <Outlet />
    </div>
  );
};

export default Header;
