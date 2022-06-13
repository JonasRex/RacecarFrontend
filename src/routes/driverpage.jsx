import { useState, useEffect } from "react";
import { useParams, useNavigate, NavLink } from "react-router-dom";

import "../styles/Drivers.css";
import facade from "../facades/driverFacade";

const driverpage = () => {
  const { id } = useParams();
  const [drivers, setDrivers] = useState([]);

  useEffect(() => {
    const getDrivers = async () => {
      const driversFromServer = await facade.fetchDriversByCarID(id);
      setDrivers(driversFromServer);
    };

    getDrivers();
  }, []);

  return (
    <div>
      <h3>Drivers</h3>
      <table className="table-container">
        
        <thead>
          <tr>
            <th>Name</th>
            <th>Birth Year</th>
            <th>Experience</th>
            <th>Gender</th>
          </tr>
        </thead>

        <tbody>
          {drivers.map((driver) => (
            <tr key={driver.id}>
              <td>{driver.name}</td>
              <td>{driver.birthYear}</td>
              <td>{driver.experience}</td>
              <td>{driver.gender}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <NavLink to={"/cars"}>
        <button className="back-btn">Back</button>
      </NavLink>
    </div>
  );
};

export default driverpage;
