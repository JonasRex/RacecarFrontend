import { useState } from "react";
import { useNavigate } from "react-router-dom";


import facade from "../facades/raceFacade";

const createrace = () => {
    const init = { name: "", location:"", date:"", duration:"" };
    const [raceCredentials, setRaceCredentials] = useState(init);
  
    const navigate = useNavigate();
  
    const performCreateRace = (evt) => {
      evt.preventDefault();
      facade.createRace(raceCredentials.name, raceCredentials.location, raceCredentials.date, raceCredentials.duration);
      setRaceCredentials(init);
      navigate("/create");
    };
  

  
    const onChange = (evt) => {
        setRaceCredentials({
        ...raceCredentials,
        [evt.target.id]: evt.target.value,
      });
    };


  return (
    
      <div className="">
      <h2>Race</h2>
        <form onChange={onChange} className="">
          <div className="create-form-control">
            <input placeholder="Name" id="name" />
          </div>
        
          <div className="create-form-control">
            <input placeholder="Location" id="location" />
          </div>
          <div className="create-form-control">
            <input placeholder="Start Date (DDMMYY)" id="date" />
          </div>
          <div className="create-form-control">
            <input placeholder="Duration(Days)" id="duration" />
          </div>
          
          <button onClick={performCreateRace} className="create-form-btn">
            Send
          </button>

        </form>
      </div>
     
  )
}

export default createrace