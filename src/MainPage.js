import React from "react";
import auth from "./Auth";
const MainPage = (props) => {
  return (
    <div>
      <h1>MainPage</h1>
      <button
        onClick={() => {
          auth.login();
          props.history.push("/");
        }}
      >
        Logout
      </button>
    </div>
  );
};

export default MainPage;
