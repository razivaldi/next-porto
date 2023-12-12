import React from "react";
import NavLink from "./NavLink";

const MenuOverlay = ({ links, closeNav }) => {
  return (
    <ul className="flex flex-col py-4 items-center md:hidden">
      {links.map((link, index) => (
        <li key={index}>
          <NavLink href={link.path} title={link.title} closeNav={closeNav} />
        </li>
      ))}
    </ul>
  );
};

export default MenuOverlay;
