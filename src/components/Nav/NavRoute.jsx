import React from "react";
import { Route, Routes } from "react-router-dom";
import Contact from "../Contact";
import ContactList from "../ContactList";
import ContactNew from "../ContactNew";
import NavList from "./NavList";

const NavRoute = () => {
  return (
    <>
      <Routes>
        <Route element={<NavList />}>
          <Route index element={<Contact />}></Route>
          <Route path=":id" element={<ContactList />}></Route>
          <Route path="new" element={<ContactNew />}></Route>
        </Route>
      </Routes>
    </>
  );
};

export default NavRoute;
