const URL = "https://www.rexdanorum.dk/tomcat/racecar";

function handleHttpErrors(res) {
  if (!res.ok) {
    return Promise.reject({ status: res.status, fullError: res.json() });
  }
  return res.json();
}

function raceFacade() {
  
  const getToken = () => {
    return localStorage.getItem("jwtToken");
  };

  const fetchAllRaces = () => {
    const options = makeOptions("GET", false); //True add's the token
    return fetch(URL + "/api/race", options).then(handleHttpErrors);
  };

  const fetchDriversRaces = (username) => {
    const options = makeOptions("GET", false); //True add's the token
    return fetch(URL + `/api/race/driver/${username}`, options).then(handleHttpErrors);
  };

  

  const createRace = (name, location, date, duration) => {
    const options = makeOptions("POST", false, {
      name: name,
      location: location,
      date: date,
      duration: duration,
      carDTOs: []
    });

    return fetch(URL + "/api/race", options)
      .then(handleHttpErrors)
      .then((res) => {
        setToken(res.token);
      });
  };


  const editRace = (id, name, location, date, duration) => {
    const options = makeOptions("PUT", false, {
      name: name,
      location: location,
      date: date,
      duration: duration,
      carDTOs: []
    });

    return fetch(URL + `/api/race/${id}`, options)
      .then(handleHttpErrors)
      .then((res) => {
        setToken(res.token);
      });
  };

  const deleteRace = (id) => {
    const options = makeOptions("DELETE", false); //True add's the token
    return fetch(URL + `/api/race/${id}`, options).then(handleHttpErrors);
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
    fetchAllRaces,
    createRace,
    editRace,
    deleteRace,
    fetchDriversRaces
  };
}
const facade = raceFacade();
export default facade;
