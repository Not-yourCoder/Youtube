import React from "react";
import "./_sidebar.scss";
import {
  MdExitToApp,
  MdHistory,
  MdHome,
  MdLibraryAdd,
  MdSentimentDissatisfied,
  MdSubscriptions,
  MdThumbUp,
} from "react-icons/md";

const Sidebar = ({ sidebar, handToggleSidebar }) => {
  return (
    <nav
      className={sidebar ? "sidebar openSidebarinMobileView" : "sidebar"}
      onClick={() => handToggleSidebar(false)}
    >
      <li>
        <MdHome size={23} />
        <span>Home</span>
      </li>
      <li>
        <MdSubscriptions size={23} />
        <span>Subscriptions</span>
      </li>
      <li>
        <MdThumbUp size={23} />
        <span>Liked Videos</span>
      </li>
      <li>
        <MdLibraryAdd size={23} />
        <span>Library</span>
      </li>
      <li>
        <MdHistory size={23} />
        <span>History</span>
      </li>
      <li>
        <MdSentimentDissatisfied size={23} />
        <span>Something</span>
      </li>
      <hr />
      <li>
        <MdExitToApp size={23} />
        <span>Log Out</span>
      </li>
      <hr />
    </nav>
  );
};

export default Sidebar;
