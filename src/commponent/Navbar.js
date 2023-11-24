import React, { useState } from "react";
import "./Navbar.css";

const Navbar = ({ onSearch }) => {
  //for search
  const [searchInput, setSearchInput] = useState("");

  const handleSearch = () => {
    onSearch(searchInput);
  };
  //----------------
  return (
    <div className="navbar">
      <div className="logo">BookHaven</div>
      <nav>
        <ul>
          <li>
            <a href="/">Home</a>
          </li>
          <li>
            <a href="about">About</a>
          </li>
          <li>
            <a href="service">Services</a>
          </li>
          <li>
            <a href="contact">Contact</a>
          </li>
        </ul>

        <div className="search-bar">
          <input
            type="text"
            placeholder="Search for books"
            value={searchInput}
            onChange={(e) => setSearchInput(e.target.value)}
          />
          <button onClick={handleSearch}>Search</button>
        </div>

        <style jsx>{`
          nav {
            display: flex;
            justify-content: space-between;
            align-items: center;
            padding: 10px;
            background-color: #333;
            color: white;
          }

          a {
            text-decoration: none;
            color: white;
          }

          .search-bar {
            display: flex;
            gap: 10px;
          }

          input {
            padding: 5px;
            margin-top: 15px;
          }

          button {
            padding: 5px 10px;
            background-color: #4caf50;
            color: white;
            border: none;
            cursor: pointer;
            margin-bottom: 13px;
          }

          button:hover {
            background-color: #45a049;
          }
        `}</style>
      </nav>
    </div>
  );
};

export default Navbar;




