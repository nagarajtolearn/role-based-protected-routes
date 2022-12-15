import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <nav>
        <ul className="navbar">
          <Link to={"/"}>Home</Link>
          <Link to={"/about"}>About</Link>
          <Link to={"/accounts"}>Accounts</Link>
          <Link to={"/admin"}>Admin</Link>
          <Link to={"/contacts"}>Contact</Link>
          <Link to={"/manager"}>Manager</Link>
        </ul>
      </nav>
    </>
  );
};

export default Navbar;
