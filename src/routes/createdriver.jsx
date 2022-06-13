import { useState } from "react";
import { useNavigate } from "react-router-dom";


import facade from "../facades/driverFacade";

const createdriver = () => {
  const init = { name: "", birthYear:"", experience:"", gender:"" };
    const [driver, setDriver] = useState(init);
  
    const navigate = useNavigate();
  
    const performCreateDriver = (evt) => {
      evt.preventDefault();
      facade.createDriver(driver.name, driver.birthYear, driver.experience, driver.gender);
      setDriver(init);
      navigate("/create");
    };
  

  
    const onChange = (evt) => {
      setDriver({
        ...driver,
        [evt.target.id]: evt.target.value,
      });
    };

  return (
    <div className="">
    <h2>Driver</h2>
      <form onChange={onChange} className="">
        <div className="create-form-control">
          <input placeholder="Name" id="name" />
        </div>
        <div className="create-form-control">
          <input placeholder="Birth Year" id="birthYear" />
        </div>
        <div className="create-form-control">
          <input placeholder="experience (pro / rookie)" id="experience" />
        </div>
        <div className="create-form-control">
          <input placeholder="Gender" id="gender" />
        </div>
        
        <button onClick={performCreateDriver} className="create-form-btn">
          Send
        </button>

      </form>
    </div>
  );
};

export default createdriver;
