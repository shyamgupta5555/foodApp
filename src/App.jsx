import { useState } from "react";
import { Routes, BrowserRouter, Route } from "react-router-dom";
import "./App.css";
import Menu from "./components/Menu/Menu";
import SearchSection from "./components/Search/Search";
import Cart from "./components/cart/Cart";
import Profile from "./components/profile/Profile";
import Header2 from "./components/header/Hearder2";

function App() {
  return (
    <>
      <BrowserRouter>
        <Header2 />
        <Routes>
          <Route path="/" element={<Menu />} />
          <Route path="/search" element={<SearchSection />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/profile" element={<Profile />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
