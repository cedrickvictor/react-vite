
// eslint-disable-next-line no-unused-vars
import React, { useEffect, useState } from "react";
import {
  BrowserRouter,
  Link,
  Routes,
  Route,
  NavLink
} from "react-router-dom";

import Home from "./Components/Home";
import About from "./Components/About";
import Contact from "./Components/Contact";
import Dashboard from "./Components/Dashboard";
import Login from "./Components/Login";
import Register from "./Components/Register";

import "./App.css";

function App() {
  const [theme, setTheme] = useState(() => {
    const savedTheme = localStorage.getItem("theme");
    return savedTheme === "dark" ? "dark" : "light";
  });

  useEffect(() => {
    localStorage.setItem("theme", theme);
  }, [theme]);

  return (
    <BrowserRouter>
      <div className="app" data-theme={theme}>
        <nav className="navbar">
          <Link to="/" className="logo">
            LEADING TVET
          </Link>

          <div className="nav-links">
            <NavLink to="/">Home</NavLink>
            <NavLink to="/about">About</NavLink>
            <NavLink to="/contact">Contact</NavLink>
            <NavLink to="/dashboard">Dashboard</NavLink>
            <NavLink to="/login">Login</NavLink>
            <NavLink to="/register" className="register-link">
              Register
            </NavLink>
            <button
              type="button"
              className="theme-toggle"
              onClick={() =>
                setTheme((currentTheme) =>
                  currentTheme === "light" ? "dark" : "light"
                )
              }
              aria-pressed={theme === "dark"}
            >
              Switch to {theme === "light" ? "dark" : "light"} mode
            </button>
          </div>
        </nav>

        <main className="main-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
          </Routes>
        </main>

        <footer className="footer">
          <p>© 2026 LEADING Management System</p>
        </footer>
      </div>
    </BrowserRouter>
  );
}

export default App;
