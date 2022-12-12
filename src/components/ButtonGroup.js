import { useState } from "react";

function ButtonGroup() {
  const [selected, setSelected] = useState("left");

  return (
    <div
      className="card"
      style={{ width: "18rem", margin: "10px 0" }}
      data-testid="button-group"
    >
      <div className="card-body">
        <h5 className="card-title">Align</h5>
        <p className="card-text" align={selected} data-testid="text">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat.
        </p>
        <div
          className="btn-group"
          role="group"
          aria-label="Basic mixed styles example"
        >
          <input
            type="radio"
            className="btn-check"
            name="options-outlined"
            id="success-outlined"
            checked={selected === "left"}
            onChange={() => setSelected("left")}
          />
          <label className="btn btn-outline-success" htmlFor="success-outlined">
            left
          </label>
          <input
            type="radio"
            className="btn-check"
            name="options-outlined"
            id="warning-outlined"
            checked={selected === "center"}
            onChange={() => setSelected("center")}
          />
          <label className="btn btn-outline-warning" htmlFor="warning-outlined">
            center
          </label>
          <input
            type="radio"
            className="btn-check"
            name="options-outlined"
            id="danger-outlined"
            checked={selected === "right"}
            onChange={() => setSelected("right")}
          />
          <label className="btn btn-outline-danger" htmlFor="danger-outlined">
            right
          </label>
        </div>
      </div>
    </div>
  );
}

export default ButtonGroup;
