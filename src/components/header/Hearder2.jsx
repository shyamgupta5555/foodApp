import React, { useState } from "react";
import {
  AiOutlineHome,
  AiOutlineSearch,
  AiOutlineShoppingCart,
} from "react-icons/ai";
import { FaUserCircle } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

function Header2() {
  const [activeItem, setActiveItem] = useState(0);
  const navigate = useNavigate();

  const handleItemClick = (index) => {
    setActiveItem(index);
  };


  const profileCheckout = () => {
    navigate("/profile");
  };

  const homeCheckout = () => {
    navigate("/");
  };

  const searchCheckout = () => {
    navigate("/search");
  };
  const cartCheckout = () => {
    navigate("/cart");
  };
  
  return (
    <div className="navbar-menu" style={{ borderRadius: "20px" }}>
      <ul style={{ cursor: "pointer" }}>
        <li
          className={activeItem === 0 ? "active" : ""}
          onClick={() => handleItemClick(0)}
        >
          <div
            className="icon"
            onClick={homeCheckout}
            style={{ fontSize: "30px", cursor: "pointer" }}
          >
            <AiOutlineHome />
          </div>
          <span className="active">Home</span>
        </li>

        <li
          className={activeItem === 1 ? "active" : ""}
          onClick={() => handleItemClick(1)}
        >
          <div
            className="icon"
            onClick={searchCheckout}
          >
            <AiOutlineSearch style={{ fontSize: "30px" }} />
          </div>
          <span>Offer</span>
        </li>

        <li
          className={activeItem === 2 ? "active" : ""}
          onClick={() => handleItemClick(2)}
        >
          <div
            className="icon"
            onClick={cartCheckout}
            style={{ fontSize: "30px" }}
          >
            <AiOutlineShoppingCart />
          </div>
          <span>Cart</span>
        </li>

        <li
          className={activeItem === 3 ? "active" : ""}
          onClick={() => handleItemClick(3)}
        >
          <div
            className="icon"
            onClick={profileCheckout}
            style={{ fontSize: "30px" }}
          >
            <FaUserCircle />
          </div>
          <span>Profile</span>
        </li>
      </ul>
    </div>
  );
}

export default Header2;
