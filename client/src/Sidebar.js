import React from "react";
import {
  BsCart3,
  BsGrid1X2Fill,
  BsFillArchiveFill,
  BsFillGrid3X3GapFill,
  BsPeopleFill,
  BsListCheck,
  BsMenuButtonWideFill,
  BsFillGearFill,
} from "react-icons/bs";
import { GiReceiveMoney, GiTakeMyMoney } from "react-icons/gi";
import { MdSavings } from "react-icons/md";
import { FaMoneyBillTrendUp } from "react-icons/fa6";

function Sidebar({ openSidebarToggle, OpenSidebar }) {
  return (
    <aside
      id="sidebar"
      className={openSidebarToggle ? "sidebar-responsive" : ""}
    >
      <div className="sidebar-title">
        <div className="sidebar-brand">
          <BsCart3 className="icon_header" /> Finances
        </div>
        <span className="icon close_icon" onClick={OpenSidebar}>
          X
        </span>
      </div>

      <ul className="sidebar-list">
        <li className="sidebar-list-item">
          <a href="">
            <BsGrid1X2Fill className="icon" /> Dashboard
          </a>
        </li>
        <li className="sidebar-list-item">
          <a href="">
            <GiReceiveMoney className="icon" /> Income
          </a>
        </li>
        <li className="sidebar-list-item">
          <a href="">
            <GiTakeMyMoney className="icon" /> Expenses
          </a>
        </li>
        <li className="sidebar-list-item">
          <a href="">
            <FaMoneyBillTrendUp className="icon" /> Investments
          </a>
        </li>
        <li className="sidebar-list-item">
          <a href="">
            <MdSavings className="icon" /> Savings
          </a>
        </li>
        <li className="sidebar-list-item">
          <a href="">
            <BsMenuButtonWideFill className="icon" /> Reports
          </a>
        </li>
        <li className="sidebar-list-item">
          <a href="">
            <BsFillGearFill className="icon" /> Setting
          </a>
        </li>
      </ul>
    </aside>
  );
}

export default Sidebar;
