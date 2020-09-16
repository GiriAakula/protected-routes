import React from "react";
import auth from "./Auth";
const Dashboard = (props) => {
  return (
    <div>
      <h1>Dashboard</h1>
      <button
        onClick={() => {
          auth.login();
          props.history.push("/dashboard");
        }}
      >
        Login
      </button>
    </div>
  );
};

export default Dashboard;
