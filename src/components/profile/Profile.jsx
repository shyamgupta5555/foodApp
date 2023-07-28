import React from "react";
import x from "../../assets/images/icons/profile.png";
import { AiOutlineCamera } from "react-icons/ai";
import { Navigate } from "react-router-dom";
import { useNavigate } from "react-router-dom";
function Profile() {
  const navigate = useNavigate();
  return (
    <div>
      <header className="section-t-space">
        <div className="custom-container">
          <div className="header-panel">
            <a href="profile.html">
              <i className="ri-arrow-left-s-line"></i>
            </a>
            <h2>Profile-Setting</h2>
          </div>
        </div>
      </header>

      <section>
        <div className="custom-container">
          <div className="profile-img">
            <img
              className="img-fluid img"
              src={x}
              alt="profile"
              style={{ width: "105px", height: "100px" }}
            />
            <AiOutlineCamera className="ri-camera-line camera"></AiOutlineCamera>
          </div>
        </div>
      </section>

      <section className="section-b-space">
        <div
          className="custom-container"
          style={{ width: "500px", height: "400px" }}
        >
          <form className="auth-form profile-form" target="_blank">
            <div className="form-group">
              <label
                className="form-label fw-semibold"
                style={{ marginLeft: "10px" }}
              >
                My Name
              </label>
              <div className="form-input mb-4">
                <input
                  style={{ width: "450px", margin: "5px 5px 15px 10px" }}
                  type="text"
                  className="form-control"
                  placeholder="Enter your name"
                />
              </div>
            </div>
            <div className="form-group">
              <label
                className="form-label fw-semibold"
                style={{ marginLeft: "10px" }}
              >
                Phone Number
              </label>
              <div className="form-input mb-4">
                <input
                  style={{ width: "450px", margin: "5px 5px 15px 10px" }}
                  type="text"
                  class="form-control"
                  placeholder="Enter phone number"
                />
              </div>
            </div>
            <div className="form-group">
              <label
                className="form-label fw-semibold"
                style={{ marginLeft: "10px" }}
              >
                Email
              </label>
              <div className="form-input mb-4">
                <input
                  style={{ width: "450px", margin: "5px 5px 15px 10px" }}
                  type="text"
                  className="form-control"
                  placeholder="Enter email"
                />
              </div>
            </div>
            <div className="form-group">
              <label
                className="form-label fw-semibold"
                style={{ marginLeft: "10px" }}
              >
                My Address
              </label>
              <div className="form-input mb-4">
                <textarea
                  style={{ width: "450px", margin: "5px 5px 0px 10px" }}
                  className="form-control"
                  rows="2"
                  placeholder="Enter address"
                ></textarea>
              </div>
            </div>
            <button
              className="btn theme-btn save-address w-100"
              onClick={() => {
                navigate("/");
              }}
              style={{ width: "250px", marginLeft: "110px" }}
            >
              {" "}
              Save
            </button>
          </form>
        </div>
      </section>
    </div>
  );
}

export default Profile;
