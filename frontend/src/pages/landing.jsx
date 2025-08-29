import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import "../App.css";

export default function LandingPage() {
  const router = useNavigate();

  return (
    <div className="landingPageContainer">
      <nav className="navbar navbar-expand-md px-3">
        <div className="container-fluid">
          <h2 className="navbar-brand text-white">Apna Video Call</h2>

          <button
            className="navbar-toggler bg-light"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          {/* Links */}
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto gap-3">
              <li
                className="nav-item text-white"
                style={{ cursor: "pointer" }}
                onClick={() => router("/ram04")}
              >
                Join as Guest
              </li>
              <li
                className="nav-item text-white"
                style={{ cursor: "pointer" }}
                onClick={() => router("/auth")}
              >
                Register
              </li>
              <li>
                <div
                  role="button"
                  className="btn btn-warning rounded-pill px-3"
                  onClick={() => router("/auth")}
                >
                  Login
                </div>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      <div className="container-fluid landingMainContainer myDiv">
        <div className="row align-items-center">
          <div className="col-12 col-md-6 text-center text-md-start">
            <h1>
              <span style={{ color: "#FF9839" }}>Connect</span> with your loved ones
            </h1>
            <p>Cover a distance by Apna Video Call</p>
            <div role="button" className="btn btn-warning rounded-pill px-4 py-2 mt-3">
              <Link to="/auth" className="text-white text-decoration-none">
                Get Started
              </Link>
            </div>
          </div>

          <div className="col-12 col-md-6 text-center mt-4 mt-md-0">
            <img
              src="/mobile3.png"
              alt="mobile"
              className="img-fluid"
              style={{ maxHeight: "70vh" }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
