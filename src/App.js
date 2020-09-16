import React from "react";
import "./styles.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Loginpage from "./Dashboard";
import ProtectedRoute from "./ProtectedRoute";
import MainPage from "./MainPage";
export default function App() {
  return (
    <div className="App">
      <Router>
        <h1>Giri Aakula</h1>
        <Switch>
          <Route exact path="/" component={Loginpage} />
          <ProtectedRoute exact path="/dashboard" component={MainPage} />
        </Switch>
      </Router>
    </div>
  );
}
