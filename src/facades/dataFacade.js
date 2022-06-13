const URL = "http://localhost:8080/devops_starter_war_exploded";

function handleHttpErrors(res) {
  if (!res.ok) {
    return Promise.reject({ status: res.status, fullError: res.json() });
  }
  return res.json();
}

function dataFacade() {
  
  const getToken = () => {
    return localStorage.getItem("jwtToken");
  };

  const fetchQuote = () => {
    const options = makeOptions("GET", false); //True add's the token
    return fetch(URL + "/api/data/quote", options).then(handleHttpErrors);
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
    fetchQuote
  };
}
const facade = dataFacade();
export default facade;
