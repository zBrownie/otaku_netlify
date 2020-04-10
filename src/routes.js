import React from "react";

import { BrowserRouter, Switch, Route } from "react-router-dom";
import Home from "./pages/Home";
import Header from "./components/Header";
import Login from "./pages/Authetication/Login";
import Register from "./pages/Authetication/Register";
import List from "./pages/List";
import Admin from "./pages/Gerencia/Admin";
import RegisterAnime from "./pages/Gerencia/RegisterAnime";
import EditAnime from "./pages/Gerencia/EditAnime";

const Routes = () => (
  <BrowserRouter>
    <Header />
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/login" component={Login} />
      <Route exact path="/register" component={Register} />
      <Route exact path="/list" component={List} />
      <Route exact path="/admin" component={Admin} />
      <Route exact path="/anime/register" component={RegisterAnime} />
      <Route exact path="/anime/edit" component={EditAnime} />
    </Switch>
  </BrowserRouter>
);

export default Routes;
