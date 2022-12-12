import { useState } from "react";
import "./App.css";
import ButtonGroup from "./ButtonGroup";
import Calculations from "./Calculations";
import ImageCard from "./ImageCard";
import NavItem from "./NavItem";

function App() {
  const [active, setActive] = useState("Picture");

  return (
    <div className="App">
      <ul className="nav nav-tabs">
        <NavItem
          isActive={active === "Picture"}
          onClick={() => setActive("Picture")}
        >
          Picture
        </NavItem>
        <NavItem
          isActive={active === "Calculations"}
          onClick={(e) => {
            setActive("Calculations");
          }}
        >
          Calculations
        </NavItem>
        <NavItem
          isActive={active === "Group"}
          onClick={() => setActive("Group")}
        >
          Group
        </NavItem>
      </ul>
      {active === "Picture" && <ImageCard />}
      {active === "Calculations" && <Calculations />}
      {active === "Group" && <ButtonGroup />}
    </div>
  );
}

export default App;
