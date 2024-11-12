import React from "react";

export const NavBar = () => {
    return (
        <div>
             <nav className="navbar navbar-expand-lg navbar-success p-2 text-dark bg-opacity-10">
      <div className="container-half">
          <ul className="navbar-nav justify-content-center mb-lg-0 ">
            <li className="nav-item pe-4">
              <a className="nav-link active" aria-current="page" href="#">Home</a>
            </li>
            <li className="nav-item pe-4">
              <a className="nav-link" href="#">About</a>
            </li>
            <li className="nav-item pe-4">
              <a className="nav-link" href="#">Solutions</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">Products</a>
            </li>
          </ul>
      </div>
          <button className="btn btn-  contact-btn">Contact</button>
    </nav>
        </div>
    )
}