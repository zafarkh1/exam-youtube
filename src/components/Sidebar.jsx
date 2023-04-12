import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";

import LeftNavMenuItem from "./SidebarItem";
import { categories } from "../utils/constants";
import { Context } from "../context/contextApi";
import { FiSettings } from "react-icons/fi";

import user1 from '../images/sidebar-1.png'
import user2 from '../images/sidebar-2.png'
import user3 from '../images/sidebar-3.png'
import user4 from "../images/sidebar-4.png";

import './leftnav.css'

const Sidebar = () => {
  const { selectedCategory, setSelectedCategory, mobileMenu } =
    useContext(Context);

  const navigate = useNavigate();

  const clickHandler = (name, type) => {
    switch (type) {
      case "category":
        return setSelectedCategory(name);
      case "home":
        return setSelectedCategory(name);
      case "menu":
        return false;
      default:
        break;
    }
  };

  return (
    <div
      className={`md:block w-[240px] overflow-y-auto h-full py-4 bg-white absolute md:relative z-10 translate-x-[-240px] md:translate-x-0 transition-all ${
        mobileMenu ? "translate-x-0" : ""
      }`}
    >
      <div className="flex px-5 flex-col">
        {categories.map((item) => {
          return (
            <React.Fragment key={item.name}>
              <LeftNavMenuItem
                text={item.type === "home" ? "Home" : item.name}
                icon={item.icon}
                action={() => {
                  clickHandler(item.name, item.type);
                  navigate("/");
                }}
                className={`${
                  selectedCategory === item.name ? "" : ""
                }`}
              />
              {item.divider && <hr className="my-5" />}
            </React.Fragment>
          );
        })}
        <div className="text-black px-3">
          <h1 className="my-1 text-[19px] font-bold mb-5">Subscriptions</h1>
          <ul>
            <li>
              <img src={user1} alt="" />
              Gussie Sing
            </li>
            <li>
              <img src={user2} alt="" />
              Nora Francis
            </li>
            <li>
              <img src={user3} alt="" />
              Belle Briggs
            </li>
            <li>
              <img src={user4} alt="" />
              Eunice Cortez
            </li>
          </ul>
        <hr className="my-5" />
          <div className="text-black flex items-center gap-4 mt-5">
            <FiSettings />
            Setting
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
