"use client";

import Link from "next/link";
import NavLink from "./NavLink";

const navLinks = [
  {
    title: "About",
    path: "about",
  },
  {
    title: "Projects",
    path: "projects",
  },
  {
    title: "Contact",
    path: "contact",
  },
];

const NavBar = () => {
  return (
    <nav>
      <div className="flex flex-wrap items-center justify-between mx-auto p-3 py-2">
        <Link href={"/"} className="text-xl text-white font-semibold">
          Khanh Ha Nguyen
        </Link>
        <div className="menu block md:w-auto" id="navbar">
          <ul className="flex p-4 md:p-0 md:flex-row md:space-x-8 mt-0">
            {navLinks.map((link, index) => (
              <li key={index}>
                <NavLink href={link.path} title={link.title} />
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
