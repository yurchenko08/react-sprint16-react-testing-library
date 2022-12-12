import React from "react";

function NavItem({ isActive, onClick, children }) {
  return (
    <li className="nav-item" onClick={onClick}>
      <div role="button" className={`nav-link ${isActive ? " active" : ""}`}>
        {children}
      </div>
    </li>
  );
}

export default NavItem;
