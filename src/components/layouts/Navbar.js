import React, { useContext } from "react";
import { Link } from "react-router-dom";
import AuthContext from "../../context/AuthContext";
import Logout from "./Logout";

export default function Navbar() {
  const { loggedIn } = useContext(AuthContext);
  console.log(loggedIn);
  return (
    <div>
      <Link to="/">Home</Link>
      {/* <Link to="/Register">Register</Link>
      <Link to="/Login">Login</Link>
      <Link to="/Customer">Customer</Link> */}
      {loggedIn == false && (<><Link to="/Register">Register</Link></>)}
      {loggedIn == false && (<><Link to="/Login">Login</Link></>)}
      {loggedIn == true && (<><Link to="/Customer">Customer</Link></>)}
      {loggedIn == true && (<><Logout/></>)}
    </div>
  );
}
