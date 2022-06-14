import { useState, useEffect } from "react";
import { Outlet, NavLink } from "react-router-dom";

import facade from "../facades/raceFacade";
import "../styles/Racepage.css";

const adminraces = () => {
  const [races, setRaces] = useState([
    {
      id: "1",
      name: "Roskilde Race",
      location: "Roskilde",
      date: "300722",
      duration: "",
    },
  ]);

  useEffect(() => {
    const getRaces = async () => {
      const racesFromServer = await facade.fetchAllRaces();
      setRaces(racesFromServer);
    };

    getRaces();
  }, []);





  const deleteRace = async (id, evt) => {
    evt.preventDefault();
    let res = await facade.deleteRace(id);
    setRaces(races.filter((race) => race.id !== id));
  };

  return (
    <div>
      <h1>Race Overview</h1>
      <table className="table-container">
        <thead>
          <tr>
            <th>Name</th>
            <th>Location</th>
            <th>Start Date</th>
            <th>Duration (Days)</th>
            <th></th>
            <th></th>
          </tr>
        </thead>

        <tbody>
          {races.map((race) => (
            <tr key={race.id}>
              <td>{race.name}</td>
              <td>{race.location}</td>
              <td>{race.date}</td>
              <td>{race.duration}</td>
              <td>
                <NavLink
                  to={`/edit/${race.id}/${race.name}/${race.location}/${race.date}/${race.duration}`}
                >
                  <button className="btn-block">Edit</button>
                </NavLink>
              </td>
              <td>
                <button onClick={(event) => deleteRace(race.id , event)} className="btn-block">
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default adminraces;
