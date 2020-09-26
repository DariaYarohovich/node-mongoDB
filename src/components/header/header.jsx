import React from "react";
import { NavLink } from "react-router-dom";
import "./header.css"

export const Header = React.memo(({ isAuth, onLogout }) => {
  let navItems = (
    <ul className="header">
      <li>
        <NavLink to="/products" className="nav-item">
          Products
        </NavLink>
      </li>
      <li>
        <NavLink to="/product/add" className="nav-item">
          Add Product
        </NavLink>
      </li>
      <li>
        <button type="button" onClick={onLogout} className="logout-btn">
          Logout
        </button>
      </li>
    </ul>
  );

  if (!isAuth) {
    navItems = (
      <ul className="header">
        <li>
          <NavLink to="/auth" className="nav-item">
            Login
          </NavLink>
        </li>
        <li>
          <NavLink to="/signup" className="nav-item">
            Sign Up
          </NavLink>
        </li>
      </ul>
    );
  }
  return (
    <header>
      <nav>{navItems}</nav>
    </header>
  );
});
