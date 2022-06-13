const URL = "https://www.rexdanorum.dk/tomcat/racecar";

function handleHttpErrors(res) {
  if (!res.ok) {
    return Promise.reject({ status: res.status, fullError: res.json() });
  }
  return res.json();
}

function driverFacade() {
  
  const getToken = () => {
    return localStorage.getItem("jwtToken");
  };



  const fetchAllDrivers = () => {
    const options = makeOptions("GET", false); //True add's the token
    return fetch(URL + "/api/driver", options).then(handleHttpErrors);
  };

  const fetchDriversByCarID = (id) => {
    const options = makeOptions("GET", false); //True add's the token
    return fetch(URL + `/api/driver/car/${id}`, options).then(handleHttpErrors);
  };

  const createDriver = (name, birthYear, experience, gender) => {
    const options = makeOptions("POST", false, {
      name: name,
      birthYear: birthYear,
      experience: experience,
      gender: gender
    });

    return fetch(URL + "/api/driver", options)
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
    fetchAllDrivers,
    fetchDriversByCarID,
    createDriver
  };
}
const facade = driverFacade();
export default facade;
