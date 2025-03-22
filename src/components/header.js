import React, { useState } from "react";
import { getMenu } from "../utils/menu";
import { NavLink } from "react-router-dom";
import { useLocation, useNavigate } from "react-router";
import MenuIcon from "@mui/icons-material/Menu";
import List from '@mui/material/List';
import ListItem from "@mui/material/ListItem";
import Divider from '@mui/material/Divider';
import Drawer from "@mui/material/Drawer";
import logo from "../assets/gfb-logo.png";

import "../styles/header.scss";
import ScrollToTop from "../ScrollToTop";

const Header = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const [isExpanded] = useState(false);
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const activeMenuName = location.pathname;

  const handleScroll = () => {
    const offset = window.scrollY;
    if (offset > 100 && !scrolled) {
      setScrolled(true);
    } else if (offset < 100 && scrolled) {
      setScrolled(false);
    }
  };

  window.addEventListener("scroll", handleScroll);

  const list = () => {
    let userRoleMenu = getMenu("user");

    return (
      <div
        role="presentation"
        className="menu-container"
        onClick={(event) => toggleDrawer(event, false)}
        onKeyDown={(event) => toggleDrawer(event, false)}
      >
        <div className="logo">
          <p className="navbar-brand" onClick={() => navigate("/")}>
            <img src={logo} alt="logo" />
          </p>
        </div>
        <List>
          {userRoleMenu.map((userMenu, index) => (
            <ListItem button key={index}>
              <NavLink
                key={userMenu.link}
                className={`menu ${activeMenuName === `${userMenu.link}` ? "active-menu" : ""
                  }`}
                to={userMenu.link}
                exact={true}
              >
                {userMenu.name}
              </NavLink>
            </ListItem>
          ))}
        </List>
        <Divider />
      </div>
    );
  };

  const toggleDrawer = (event, open) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }
    setDrawerOpen(open);
  };

  const getAppMenu = (isExpanded, activeMenuName) => {
    let menu = [];
    let userRoleMenu = getMenu("user");

    userRoleMenu.forEach((userMenu) => {
      const { name, link } = userMenu;
      menu.push(
        <NavLink
          key={link}
          className={`menu ${activeMenuName === `${link}` ? "active-menu" : ""
            }`}
          to={link}
          exact={true}
        >
          {name}
        </NavLink>
      );
    });
    return (
      <div className={`menu-area collapsed ${isExpanded ? "is-expanded" : ""}`}>
        {menu}
      </div>
    );
  };

  let headerClassName = "header-menu-area";
  if (scrolled) {
    headerClassName += " fixed-header";
  }

  return (
    <>
      <ScrollToTop />
      <div className={headerClassName}>
        <div className="logo" onClick={() => navigate("/")}>
          <img src={logo} alt="logo" />
        </div>
        <Drawer
          open={drawerOpen}
          onClose={(event) => toggleDrawer(event, false)}
          className="menu-drawer"
        >
          {list()}
        </Drawer>
        {getAppMenu(isExpanded, activeMenuName)}

        <MenuIcon
          className="collapsible-menu-icon"
          onClick={(e) => toggleDrawer(e, true)}
        />
      </div>
    </>
  );
};

export default Header;
