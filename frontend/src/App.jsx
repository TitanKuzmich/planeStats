import "./App.css";
import { useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import CatalogScreen from "./pages/CatalogScreen";
import PlaneScreen from "./pages/PlaneScreen";
import LibScreen from "./pages/LibScreen";

function App() {
  return (
    <Router>
      <Navbar/>
      <main className="app">
        <Switch>
          <Route exact path="/" component={CatalogScreen} />
          <Route exact path="/planes/:id" component={PlaneScreen} />
          <Route exact path="/lib" component={LibScreen} />
        </Switch>
      </main>
    </Router>
  );
}

export default App;
