const { default: Link } = require("next/link");

const NavLink = ({ href, title, closeNav }) => {
  return (
    <Link
      href={href}
      className="block py-2 pl-3 pr-4 text-[#ADB7BE] sm:text-xl rounded md:p-0 hover:scale-105 hover:text-white"
      onClick={closeNav}
    >
      {title}
    </Link>
  );
};

export default NavLink;
