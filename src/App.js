import React, { useEffect, useState } from "react";
import { Route, Switch } from "react-router-dom";
import BootsBasicForm from "./components/bootstrap/BootsBasicForm";
import BootsNaveBar from "./components/bootstrap/BootsNaveBar";
//import Registration from "./components/TestComponents/Registration";
//import BasicForm from "./components/forms/basicForm";
//import Login from "./components/forms/Login";
//import "./components/TestForms/Form.css";
//import TestForm from "./components/TestForms/TestForm";

//import LoginForm from "./components/TestComponents/LoginForm";
import PrivateRoute from "./components/ReactRouter/PrivateRoute";
import "bootstrap/dist/css/bootstrap.min.css";
import "./index.css";
import BootsTable from "./components/bootstrap/BootsTable";
import BootsHome from "./components/bootstrap/BootsHome";

const App = () => {
  const [auth, setAuth] = useState(localStorage.getItem("token"));
  useEffect(() => {
    localStorage.getItem("token") ? setAuth(true) : setAuth(false);
    console.log("EFFECT", !!localStorage.getItem("token"));
  }, [localStorage.getItem("token")]);

  return (
    <>
      <BootsNaveBar auth={auth} setAuth={setAuth} />
      <Switch>
        <PrivateRoute exact path="/home" component={BootsHome} />
        <Route
          exact
          path="/"
          render={() => <BootsBasicForm setAuth={setAuth} />}
        />
        <PrivateRoute exact path="/users" component={BootsTable} />

        {/* <Route exact path="/home" component={Login} />
      <Route path="/" component={BasicForm} /> */}
      </Switch>
    </>
  );
};

export default App;