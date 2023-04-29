import React from "react";
import SearchBar from "./SearchBar";
import { Link } from "react-router-dom";

function Header({ setSearchValue }) {
  return (
    <header>
      <span className="brand">Flipkart</span>
      <SearchBar setSearchValue={setSearchValue} />
      <ul className="menu">
        <Link to="/">   <li>Home</li>   </Link>
        <Link to="/cart">   <li>Cart</li>   </Link>
      </ul>
    </header>
  );
}

export default Header;