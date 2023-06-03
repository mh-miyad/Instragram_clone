import React from "react";
import { Outlet } from "react-router-dom";
import SideCom from "./components/SideBar/SideCom";

const App = () => {
  return (
    <div>
      <div className="flex justify-around">
        <div>
          <SideCom />
        </div>
        <div>
          {" "}
          <Outlet />
        </div>
        <div className="hidden md:block"> Coming Soon ... Popular Part </div>
      </div>
    </div>
  );
};

export default App;
