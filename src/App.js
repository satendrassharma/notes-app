import React from "react";
import "./App.css";
import { Switch, Route } from "react-router-dom";
import Home from "./components/Home";
import Note from "./components/Note";

function App() {
  return (
    <div className="App">
      <header>Notes App</header>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/:id">
          <Note />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
