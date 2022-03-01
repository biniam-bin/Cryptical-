import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

////////////////////////////////////////////////////////Import Components///////////////////////////////////////////////
import Shop from "../pages/Shop";
import Category from "../pages/Category";
import Profile from "../pages/Profile";
import Dashboard from "../pages/Dashboard";
import NavBar from "./NavBar";
////////////////////////////////////////////////////////Import Components///////////////////////////////////////////////

const Main = () => {
  return (
    <div className="bg-blak w-full  text-white">
      <Switch>
        <Route exact path="/main/shop">
          <Shop />
        </Route>
        <Route exact path="/main/category">
          <Category />
        </Route>
        <Route exact path="/main/profile">
          <Profile />
        </Route>
        <Route exact path="/main/dashboard">
          <Dashboard />
        </Route>
      </Switch>
    </div>
  );
};

export default Main;
