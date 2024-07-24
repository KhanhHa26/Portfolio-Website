import Link from "next/link";
import { Link as ScrollLink } from "react-scroll";

const NavLink = ({ href, title }) => {
  return (
    <ScrollLink
      to={href}
      smooth={true}
      duration={500}
      href={href}
      className="block py-2 pl-3 pr-4 text-white sm:text-xl rounded md-p:0 hover:text-pink-200 cursor-pointer"
    >
      {title}
    </ScrollLink>
  );
};
export default NavLink;
