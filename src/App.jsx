import React from "react";
import { Outlet } from "react-router-dom";
import SideCom from "./components/SideBar/SideCom";

const App = () => {
  return (
    <div>
      <div className="flex  justify-between">
        <div>
          <SideCom />
        </div>
        <div>
          {" "}
          <Outlet />
        </div>
        <div> Coming Soon ... Popular Part </div>
      </div>
    </div>
  );
};

export default App;
