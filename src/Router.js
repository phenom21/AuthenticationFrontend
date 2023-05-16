import React, { useContext } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/layouts/Navbar";
import Home from "./components/layouts/Home";
import Register from "./components/layouts/Register";
import Login from "./components/layouts/Login";
import Customer from "./components/layouts/Customer";
import AuthContext from "./context/AuthContext";

export default function Router() {
  const {loggedIn} = useContext(AuthContext);
  console.log(`Router file ${loggedIn}`);
  return (
    <>
      <BrowserRouter>
      <Navbar/>
        <Routes>
          <Route exact path="/" element={<Home/>}/>
          {loggedIn == false && (<><Route exact path="/Register" element={<Register/>}/></>) }
          {loggedIn == false && (<><Route exact path="/Login" element={<Login/>}/></>)}
          {loggedIn == true && (<><Route exact path="/Customer" element={<Customer/>}/></>)}
          {/* <Route exact path="/Register" element={<Register/>}/>
          <Route exact path="/Login" element={<Login/>}/>
          <Route exact path="/Customer" element={<Customer/>}/> */}
        </Routes>
      </BrowserRouter>
    </>
  );
}
