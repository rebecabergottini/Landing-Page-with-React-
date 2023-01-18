import React from "react";

//create your first component
const Navbar = () => {
  return (
<nav className="navbar navbar-expand-lg navbar-dark bg-dark">
  <div className="container">
<a className="navbar-brand" href="#">
            Start Bootstrap
          </a>
          <button class="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar">
      <span class="navbar-toggler-icon"></span>
    </button>

  <div className="collapse navbar-collapse" id="navbarSupportedContent">
  <ul className="navbar-nav ms-auto">
      <li className="nav-item active">
        <a className="nav-link" href="#">Home <span class="sr-only"></span></a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="#">About</a>
      </li>
      <li className="nav-item dropdown">
        <a className="nav-link dropdown" href="#">
          Services
        </a>
        </li>
        <li className="nav-item dropdown">
        <a className="nav-link dropdown" href="#">
          Contact
        </a>
        </li>
    </ul>
  </div>
  </div>
</nav>
)};

export default Navbar;