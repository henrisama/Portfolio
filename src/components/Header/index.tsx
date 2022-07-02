import React from "react";
import { Link } from "react-router-dom";
import Switch from "react-switch";
import { Nav } from "./style";

interface Props {
  toggleTheme(): void;
  checked: boolean;
}

const Header = ({ toggleTheme, checked }: Props) => {
  return (
    <Nav>
      <div>
        <Link to="/">Home</Link>
        <Link to="/projects">Projects</Link>
        <Link to="/resume">Resume</Link>
      </div>
      <div>
        <Switch
          onChange={toggleTheme}
          checked={checked}
          checkedIcon={false}
          uncheckedIcon={false}
          height={15}
          width={50}
          handleDiameter={30}
        />
      </div>
    </Nav>
  );
};

export default Header;
