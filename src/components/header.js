import React from 'react';
import { Link } from "react-router-dom";
import accountIcon from "../assets/icons/account.svg";

const Header = () => {
  return (
    <div className="bg-pink text-white px-8 font-xl flex justify-between items-center h-[65px]">
      <h2 className="text-xl ml-8">
        <a href="/">Sure<span className="font-semibold">Shot</span></a>
      </h2>
      <nav className="mr-20 flex items-center gap-x-6 relative">
        <Link to='/'>Home</Link>
        <div className="profile">
          <img
            className="block h-[30]px w-[30px]"
            src={accountIcon}
            alt="account"
          />
          <div className="profile-menu shadow-sh-pink">
            <a>My profile</a>
            <a>Log out</a>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Header;