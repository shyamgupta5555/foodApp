import React from "react";
import Header from "../header/Header";
Header;
import Banner from "../Banner/Banner";
import FoodCategories from "../category/Category";
import ProductBox from "../prodects/ProductBox";
import Header2 from "../header/Hearder2"

function Menu() {
  return (
    <div style={{ border: "2px solid black" }}>
      <Header />
      <Header2/>

      <Banner />
      <FoodCategories />
      <ProductBox />

    </div>
  );
}

export default Menu;
