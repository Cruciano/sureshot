import React from 'react';
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="bg-pink text-white p-4 font-xl flex justify-between">
      <h2 className="text-xl ml-8">
        <a href="/">Sure<span className="font-semibold">Shot</span></a>
      </h2>
      <nav className="mr-20">
        <Link to='/'>Home</Link>{" "}
        <Link to='/profile'>Profile</Link>
      </nav>
    </div>
  );
};

export default Header;