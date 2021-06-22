import "./App.css";
import { useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

// Components
import Navbar from "./components/Navbar";
import SideDrawer from "./components/SideDrawer";
import Backdrop from "./components/Backdrop";
// Screens
import CatalogScreen from "./screens/CatalogScreen";
import PlaneScreen from "./screens/PlaneScreen";
import LibScreen from "./screens/LibScreen";

function App() {
  const [sideToggle, setSideToggle] = useState(false);

  return (
    <Router>
      <Navbar click={() => setSideToggle(true)} />
      <SideDrawer show={sideToggle} click={() => setSideToggle(false)} />
      <Backdrop show={sideToggle} click={() => setSideToggle(false)} />
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
