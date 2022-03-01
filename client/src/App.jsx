import { useState } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Main from "./components/Main";
import NavBar from "./components/NavBar";
import SideBar from "./components/SideBar";
import Landing from "./pages/Landing";

function App() {
  return (
    <div className="App bg-[#863a91] h-full flex justify-between">
      <Router>
        <Switch>
          <Route path="/main">
            <SideBar />
            <div className="w-full overflow-hidden">
              <NavBar />
              <Main />
            </div>
          </Route>
          <Route exact path="/">
            <Landing />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
