import { useState, useEffect } from "react";
import facade from "../facades/raceFacade";
import "../styles/Racepage.css";

const myraces = ({username}) => {
    const [races, setRaces] = useState([{ id:"1", name:"Roskilde Race", location:"Roskilde", date:"300722", duration:""}]);


    useEffect(() => {
        const getRaces = async () => {
          const racesFromServer = await facade.fetchDriversRaces(username);
          setRaces(racesFromServer);
        };
    
        getRaces();
      }, []);

  return (
    <div>
        <h1>My Races</h1>
        <table className="table-container">
        <thead>
          <tr>
          
            <th>Name</th>
            <th>Location</th>
            <th>Start Date</th>
            <th>Duration (Days)</th>
          </tr>
        </thead>

        <tbody>
          {races.map((race) => (
            <tr key={race.id}>
                <td>{race.name}</td>
                <td>{race.location}</td>
                <td>{race.date}</td>
                <td>{race.duration}</td>
            </tr> 
          ))}
        </tbody>
      </table>

    </div>
  )
}

export default myraces