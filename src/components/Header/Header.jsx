import React from "react";
import "./_header.scss";
import { FaBars } from "react-icons/fa";
import { AiOutlineSearch } from "react-icons/ai";
import { MdNotifications, MdApps } from "react-icons/md";

const Header = ({ handToggleSidebar }) => {
  return (
    <div className="header">
      <FaBars
        className="header__menu"
        size={26}
        onClick={() => handToggleSidebar()}
      />
      <img
        src="https://upload.wikimedia.org/wikipedia/commons/e/ef/Youtube_logo.png?20220706172052"
        alt="logo"
        className="header__logo"
      />
      <form>
        <input type="text" placeholder="Search..." />
        <button type="submit">
          <AiOutlineSearch size={22} />
        </button>
      </form>
      <div className="header__icons">
        <MdNotifications size={28} />
        <MdApps size={28} />
        <img
          src="https://cdn4.iconfinder.com/data/icons/avatars-xmas-giveaway/128/batman_hero_avatar_comics-512.png"
          alt="A"
        />
      </div>
    </div>
  );
};

export default Header;
