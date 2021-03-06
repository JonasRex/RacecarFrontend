const URL = "https://www.rexdanorum.dk/tomcat/racecar";

function handleHttpErrors(res) {
  if (!res.ok) {
    return Promise.reject({ status: res.status, fullError: res.json() });
  }
  return res.json();
}

function carFacade() {
  
  const getToken = () => {
    return localStorage.getItem("jwtToken");
  };

  const fetchAllCars = () => {
    const options = makeOptions("GET", false); //True add's the token
    return fetch(URL + "/api/car", options).then(handleHttpErrors);
  };

  const createCar = (name, brand, make, year, sponsor, color) => {
    const options = makeOptions("POST", false, {
      name: name,
      brand: brand,
      make: make,
      year: year,
      sponsor: sponsor,
      color: color,
      driverDTOS: []
    });

    return fetch(URL + "/api/car", options)
      .then(handleHttpErrors)
      .then((res) => {
        setToken(res.token);
      });
  };

  const makeOptions = (method, addToken, body) => {
    var opts = {
      method: method,
      headers: {
        "Content-type": "application/json",
        Accept: "application/json",
      },
    };
    if (addToken && loggedIn()) {
      opts.headers["x-access-token"] = getToken();
    }
    if (body) {
      opts.body = JSON.stringify(body);
    }
    return opts;
  };
  return {
    makeOptions,
    getToken,
    fetchAllCars,
    createCar
  };
}
const facade = carFacade();
export default facade;
