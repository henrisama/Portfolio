import React from "react";
import { Link } from "react-router-dom";
import Switch from "react-switch";
import { MenuIcon, Nav, NavLinks } from "./style";
import { HiMenu } from "react-icons/hi";

interface Props {
  toggleTheme(): void;
  checked: boolean;
}

const Header = ({ toggleTheme, checked }: Props) => {
  let isMenuOpend = false;

  const MenuBarHandler = () => {
    const nav = document.getElementById("nav") as HTMLDivElement;
    if (isMenuOpend) {
      nav.style.transform = "translateY(-130px)";
    } else {
      nav.style.transform = "translateY(0px)";
    }
    isMenuOpend = !isMenuOpend;
  };

  return (
    <Nav id="nav">
      <NavLinks>
        <div>
          <Link to="/Portfolio/">Home</Link>
        </div>
        <div>
          <Link to="/Portfolio/projects">Projects</Link>
        </div>
        <div>
          <a
            href="https://docs.google.com/document/d/14Py4FTF9mDoe_bqbLrIyO1_MvH-oE4pHsJiNOh2YOWs/edit?usp=sharing"
            target="_blank"
          >
            Resume
          </a>
        </div>
      </NavLinks>
      <div>
        <Switch
          onChange={toggleTheme}
          checked={checked}
          checkedIcon={false}
          uncheckedIcon={false}
          height={15}
          width={50}
          handleDiameter={30}
          onColor="#29335C"
        />
      </div>
      <MenuIcon>
        <HiMenu size={50} cursor="pointer" onClick={MenuBarHandler} />
      </MenuIcon>
    </Nav>
  );
};

export default Header;
