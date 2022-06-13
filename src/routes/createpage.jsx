import { Outlet, NavLink } from "react-router-dom";
import "../styles/Createpage.css";

const createpage = () => {


  return (
    <div>
      <h1>Create</h1>
      <div className="create-container">
        <NavLink to="/create/race">
          <button>New Race</button>
        </NavLink>
        <NavLink to="/create/car">
        <button>New Car</button>
        </NavLink>
        <NavLink to="/create/driver">
        <button>New Driver</button>
        </NavLink>
      </div>
      <div className="create-container">
      <Outlet />
      </div>
    </div>
  );
};

export default createpage;
