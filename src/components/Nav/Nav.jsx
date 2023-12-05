import React from "react";
import { Route, Routes, NavLink, useLocation } from "react-router-dom";
import Home from "../Home";
import NotFound from "../NotFound";
import NavRoute from "./NavRoute";

const Nav = () => {
  const location = useLocation();
  // let element = useRoutes([
  //     {
  //         path:'/',
  //         element:<Home/>
  //     },
  //     {
  //         path:'*',
  //         element:<NotFound/>
  //     }
  // ])
  return (
    <>
      <Routes location="/contact">
        <Route path="/contact" element={<h1>React Router</h1>}></Route>
      </Routes>
      <nav>
        <ul>
          <li>
            <NavLink
              style={({ isActive }) => {
                return isActive ? { color: "red" } : {};
              }}
              to="/"
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/contact">Contact</NavLink>
          </li>
        </ul>
      </nav>
      {location.state}
      {/* {element} */}
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/contact/*" element={<NavRoute />} />
        <Route path="*" element={<NotFound />}></Route>
      </Routes>
    </>
  );
};

export default Nav;
