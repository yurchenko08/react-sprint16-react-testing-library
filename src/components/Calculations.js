import { useState } from "react";

function Calculations() {
  const [result, setResult] = useState(0);
  const [first, setFirst] = useState(0);
  const [second, setSecond] = useState(0);
  const [operation, setOperation] = useState("+");

  return (
    <div className="card" style={{ width: "18rem", margin: "10px 0" }}>
      <div className="card-body">
        <h5 className="card-title">Result</h5>
        <h4 className="card-text">{result}</h4>
        <div className="input-group mb-3">
          <input
            type="number"
            value={first}
            onInput={(e) => setFirst(parseInt(e.target.value))}
            className="form-control"
            aria-label="first number"
          />
          <button
            className="btn btn-outline-secondary dropdown-toggle"
            type="button"
            data-bs-toggle="dropdown"
            aria-expanded="false"
            aria-label="operation"
          >
            {operation}
          </button>
          <ul className="dropdown-menu dropdown-menu-end">
            <li>
              <div className="dropdown-item" onClick={() => setOperation("+")}>
                +
              </div>
            </li>
            <li>
              <div className="dropdown-item" onClick={() => setOperation("-")}>
                -
              </div>
            </li>
          </ul>
          <input
            type="number"
            value={second}
            onInput={(e) => setSecond(parseInt(e.target.value))}
            className="form-control"
            aria-label="second number"
          />
        </div>

        <div
          role="button"
          style={{ display: "block" }}
          className="btn btn-outline-primary"
          onClick={() =>
            setResult(operation === "+" ? first + second : first - second)
          }
        >
          Evaluate
        </div>
      </div>
    </div>
  );
}

export default Calculations;
