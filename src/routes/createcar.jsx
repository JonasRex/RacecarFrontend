import { useState } from "react";
import { useNavigate } from "react-router-dom";

import facade from "../facades/carFacade";

const createcar = () => {
    const init = { name: "", brand:"", make:"", year:"", sponsor:"", color:""};
    const [car, setCar] = useState(init);
  
    const navigate = useNavigate();
  
    const performCreateCar = (evt) => {
      evt.preventDefault();
      facade.createCar(car.name, car.brand, car.make, car.year, car.sponsor, car.color);
      setCar(init);
      navigate("/create");
    };
  

  
    const onChange = (evt) => {
        setCar({
        ...car,
        [evt.target.id]: evt.target.value,
      });
    };
  return (
    <div className="">
      <h2>Car</h2>
        <form onChange={onChange} className="">
          <div className="create-form-control">
            <input placeholder="Name" id="name" />
          </div>
        
          <div className="create-form-control">
            <input placeholder="Brand" id="brand" />
          </div>
          <div className="create-form-control">
            <input placeholder="Make" id="make" />
          </div>
          <div className="create-form-control">
            <input placeholder="Year" id="year" />
          </div>
          <div className="create-form-control">
            <input placeholder="Sponsor" id="sponsor" />
          </div>
          <div className="create-form-control">
            <input placeholder="color" id="color" />
          </div>
          
          <button onClick={performCreateCar} className="create-form-btn">
            Send
          </button>

        </form>
      </div>
  )
}

export default createcar