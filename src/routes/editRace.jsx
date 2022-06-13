import { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";

import facade from "../facades/raceFacade";

const editRace = () => {
  const { id, na, loc, da, dura } = useParams();
  const navigate = useNavigate();

  const [race, setRace] = useState({
    name: na,
    location: loc,
    date: da,
    duration: dura,
  });


  const onSubmit = (e) => {
    e.preventDefault();

    // TODO: more checks

    facade.editRace(id, race.name, race.location, race.date, race.duration);
    navigate("/admin/races");
  };

  const onChange = (evt) => {
    setRace({
      ...race,
      [evt.target.id]: evt.target.value,
    });
  };

  return (
    <div className="create-container">
      <h2>Change Race</h2>
      <form onChange={onChange} className="">
        <div className="create-form-control">
          <input value={race.name} placeholder="Name" id="name" />
        </div>

        <div className="create-form-control">
          <input
            value={race.location}
            placeholder="Location"
            id="location"
          />
        </div>
        <div className="create-form-control">
          <input value={race.date} placeholder="Start Date (DDMMYY)" id="date" />
        </div>
        <div className="create-form-control">
          <input
            value={race.duration}
            placeholder="Duration(Days)"
            id="duration"
          />
        </div>

        <button onClick={onSubmit} className="create-form-btn">
          Send
        </button>
      </form>
    </div>
  );
};

export default editRace;
