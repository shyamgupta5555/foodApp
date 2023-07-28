import React from 'react'
import { RiMenuLine, RiArrowDownSLine } from 'react-icons/ri';

function Header() {
  return  (
    <header className="section-t-space">
    <div className="custom-container">
      <div className="header">
        <div className="head-content">
          <button className="sidebar-btn" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasLeft">
            <RiMenuLine /> {/* Use the React Icon component for the menu icon */}
          </button>
          <div className="header-location">
            <a href="#location" data-bs-toggle="modal">
              <h2>Ontario, Canada</h2>
              <RiArrowDownSLine className="d-arrow" /> {/* Use the React Icon component for the arrow icon */}
            </a>
          </div>
        </div>
      </div>
    </div>
  </header>
  );
}

export default Header
