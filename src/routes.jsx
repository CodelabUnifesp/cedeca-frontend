import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { Login } from "./pages/Login";
import { Formulario } from "./pages/Formulario";

const Routes = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={ Login } />
      <Route path="/cadastro" component={ Formulario } />
    </Switch>
  </BrowserRouter>
);

export default Routes;
