import React from "react";
import { useState, useEffect } from "react";
import "./App.css";
import { LoginRegister, Register } from "./pages";
import Jobs from "./pages/Jobs";
import JobsDetail from "./pages/JobsDetail";
import { BrowserRouter, Switch, Route, Link } from "react-router-dom";

function App() {
  const [login, setLogin] = useState(true);

  const userLogin = (param) => {
    setLogin(param);
  };

  useEffect(() => {
    // if(login === true){
    //   setLogin(false)
    // }
  }, [login]);
  return (
    <BrowserRouter>
      <Switch>
        {login ? (
          <>
            <Route path="/jobs" component={Jobs} />
            <Route path="/jobs-detail/:id" component={JobsDetail} />
          </>
        ) : (
          <>
            <Route path="/login">
              <LoginRegister userLogin={userLogin} />
            </Route>
            <Route path="/register" component={Register} />
          </>
        )}
      </Switch>
    </BrowserRouter>
  );
}

export default App;
