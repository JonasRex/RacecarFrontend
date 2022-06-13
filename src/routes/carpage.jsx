import { Outlet, NavLink } from "react-router-dom";
import { useState, useEffect } from "react";
import facade from "../facades/carFacade";

import "../styles/Createpage.css";

const carpage = () => {
  const [cars, setCars] = useState([]);

  useEffect(() => {
    const getCars = async () => {
      const carsFromServer = await facade.fetchAllCars();
      setCars(carsFromServer);
    };

    getCars();
  }, []);

  return (
    <div>
      <table className="table-container">
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Brand</th>
            <th>Drivers</th>
          </tr>
        </thead>

        <tbody>
          {cars.map((car) => (
            <tr key={car.id}>
              <td>{car.id}</td>
              <td>{car.name}</td>
              <td>{car.brand}</td>
              <td>
                <NavLink
                  to={`/cars/drivers/${car.id}`}
                >
                  <button className="btn-block">View</button>
                </NavLink>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <Outlet />
    </div>
  );
};

export default carpage;
