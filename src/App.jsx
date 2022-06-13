import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./styles/App.css";
import User from "./routes/user";
import Admin from "./routes/admin";
import Data from "./routes/data";
import Login from "./routes/loginpage";
import Signup from "./routes/signuppage";
import RacePage from "./routes/racepage";
import CarPage from "./routes/carpage";
import DriverPage from "./routes/driverpage";
import CreatePage from "./routes/createpage";
import CreateRace from "./routes/createrace";
import CreateCar from "./routes/createcar";
import CreateDriver from "./routes/createdriver";
import AdminRaces from "./routes/adminraces";
import EditRace from "./routes/editRace";
import MyRaces from "./routes/myraces";

import Header from "./components/Header";
import jwt_decode from "jwt-decode";

import facade from "./facades/apiFacade";

function App() {
  const [loggedIn, setLoggedIn] = useState(false);
  const [user, setUser] = useState("");
  const [role, setRole] = useState("");

  const signup = async (user, pass, pass2, firstname, lastname, email) => {
    const res = await facade.signup(
      user,
      pass,
      pass2,
      firstname,
      lastname,
      email
    );
    setLoggedIn(true);

    let token = facade.getToken();
    let decoded = jwt_decode(token);
    setRole(decoded.roles);
    setUser(decoded.username);
  };

  const login = async (user, pass) => {
    const res = await facade.login(user, pass);
    //const data = await res.json();
    setLoggedIn(true);

    let token = facade.getToken();
    let decoded = jwt_decode(token);
    setRole(decoded.roles);
    setUser(decoded.username);
  };

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Header
                  loggedIn={loggedIn}
                  setLoggedIn={setLoggedIn}
                  role={role}
                  setRole={setRole}
                  facade={facade}
                />
                <div className="frontpage-container">
                  <h1>TrackMania</h1>
                  <h2>Worldclass Racing tracker</h2>
                  <img src="https://techonomy.com/wp-content/uploads/2019/09/Racetrack1-1.jpg.webp" />
                  <h2>Exam project by cph-jh559</h2>
                </div>
                
              </>
            }
          >
            <Route path="user" element={<User />} />
            <Route path="admin" element={<Admin facade={facade} />} />
            <Route path="data" element={<Data />} />

            <Route path="races" element={<RacePage />} />

            <Route path="myraces" element={<MyRaces username={user} />} />

            <Route path="admin/races" element={<AdminRaces />} />

            <Route path="cars" element={<CarPage />}>
              <Route index element={<h2>Click to see assigned Drivers</h2>} />
              <Route path="drivers/:id" element={<DriverPage />} />
            </Route>

            <Route path="create" element={<CreatePage />}>
              <Route index element={<h2>What do you want to create?</h2>} />
              <Route path="race" element={<CreateRace />} />
              <Route path="car" element={<CreateCar />} />
              <Route path="driver" element={<CreateDriver />} />
            </Route>

            <Route
              path="login"
              element={<Login login={login} loggedIn={loggedIn} />}
            />
            <Route
              path="signup"
              element={<Signup signup={signup} loggedIn={loggedIn} />}
            />

            <Route path="/edit/:id/:na/:loc/:da/:dura" element={<EditRace />} />

            <Route
              path="*"
              element={
                <main style={{ padding: "1rem" }}>
                  <p>There's nothing here!</p>
                </main>
              }
            />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
