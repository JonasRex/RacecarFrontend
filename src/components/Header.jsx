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
        {/*===== Admin role only =====*/}
        {role == "admin" ? (
          <>
            <NavLink to="/admin/races">
              <button className="btn" type="button">
                Races
              </button>
            </NavLink>

            <NavLink to="/create">
              <button className="btn" type="button">
                Create
              </button>
            </NavLink>
            <NavLink to="/cars">
              <button className="btn" type="button">
                Cars
              </button>
            </NavLink>
          </>
        ) : null}

        {/*===== User role only =====*/}
        {role == "user" ? (
          <NavLink to="/races">
          <button className="btn" type="button">
            Races
          </button>
        </NavLink>
        ) : null}

        {/*===== Driver role only =====*/}

        {/*===== For all =====*/}

        

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
