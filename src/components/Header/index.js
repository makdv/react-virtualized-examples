import React, { useEffect, useState } from "react";
import { number, func } from "prop-types";
import {
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownMenu,
  DropdownItem,
  DropdownToggle
} from "reactstrap";
import classnames from "classnames";
import { tabs } from "../../utils";
import reactLogo from "../../images/logo.svg";
import { ReactComponent as GithubLogo } from "../../images/github.svg";
import "./Header.scss";

const Header = ({ activeTab, toggle }) => {
  const [isDropdown, setIsDropdown] = useState();
  const onResize = () =>
    window.innerWidth > 900
      ? setIsDropdown(false)
      : setIsDropdown(true);

  useEffect(() => {
    onResize();
    window.addEventListener("resize", onResize);
    return () => {
      window.removeEventListener("resize", onResize);
    };
  }, []);

  return (
    <header className="App-header">
      <div className="App-header__left">
        <img src={reactLogo} className="App-header__logo-image" alt="logo" />
        { !isDropdown && <div className="App-header__logo-label">RV Grids</div>}
        {isDropdown ? (
          <UncontrolledDropdown
            setActiveFromChild
          >
            <DropdownToggle caret>{tabs[activeTab - 1].title}</DropdownToggle>
            <DropdownMenu>
              {tabs.map((tab, index) => (
                <DropdownItem
                  key={tab.title}
                  onClick={() => {
                    toggle(index + 1);
                  }}
                >
                  {tab.title}
                </DropdownItem>
              ))}
            </DropdownMenu>
          </UncontrolledDropdown>
        ) : (
          <Nav tabs>
            {tabs.map((tab, index) => (
              <NavItem key={index}>
                <NavLink
                  className={classnames({ active: activeTab === index + 1 })}
                  onClick={() => {
                    toggle(index + 1);
                  }}
                >
                  {tab.title}
                </NavLink>
                <span className="nav-item__border-bottom" />
              </NavItem>
            ))}
          </Nav>
        )}
      </div>
      <a
        href="https://github.com/makdv/react-virtualized-examples"
        target="_blank"
        rel="noopener noreferrer"
      >
        <GithubLogo />
      </a>
    </header>
  );
};

Header.propTypes = {
  activeTab: number.isRequired,
  toggle: func.isRequired
};

export default Header;
