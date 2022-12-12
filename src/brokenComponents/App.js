import { useState } from "react";
import "./App.css";
import ButtonGroup from "./ButtonGroup";
import Calculations from "./Calculations";
import ImageCard from "./ImageCard";
import NavItem from "./NavItem";

// Mistakes: 
// 1. Text on one of the tabs
// 2. One of the components does not hide
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
            setActive("Calculatons");
          }}
        >
          Calculations
        </NavItem>
        <NavItem
          isActive={active === "Groupp"}
          onClick={() => setActive("Group")}
        >
          Group
        </NavItem>
      </ul>
      {active === "Picture" && <ImageCard />}
      {active === "Calculations" && <Calculations />}
      <ButtonGroup />
    </div>
  );
}

export default App;
