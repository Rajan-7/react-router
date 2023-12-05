import React from "react";
import { Link, Outlet, useSearchParams } from "react-router-dom";

const NavList = () => {
  const [searchParams, setSearchParams] = useSearchParams({ n: 4 });
  const number = searchParams.get("n");

  return (
    <>
      <Link to="/contact/1">Contact 1</Link>
      <br />
      <Link to="/contact/2">Contact 2</Link>
      <br />
      <Link to={`/contact/${number}`}>Contact {number}</Link>
      <br />
      <Link to="/contact/new">New Contact</Link>
      <Outlet context={{ hello: "Friend" }} />
      <input
        type="number"
        value={number}
        onChange={(e) => setSearchParams({ n: e.target.value })}
      />
    </>
  );
};

export default NavList;
