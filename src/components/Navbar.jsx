import { useState } from "react";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import { Link, useNavigate } from "react-router-dom";

const Navbar = () => {
  const [menu, setMenu] = useState(false);
  const navigate = useNavigate();

  const handleChange = () => {
    setMenu(!menu);
  };

  const closeMenu = () => {
    setMenu(false);
  };

  const handleContactClick = () => {
    navigate("/contact", { state: { scrollToForm: true } });
    setMenu(false); // Close menu if mobile
  };

  return (
    <div className="fixed w-full z-20 bg-backgroundColor text-white shadow-lg">
      <div className="flex flex-row justify-between p-5 md:px-32 px-5">
        <Link to="/" className="text-2xl font-semibold">
          BanarsoDeviClinic
        </Link>

        <nav className="hidden lg:flex flex-row items-center text-lg font-medium gap-8">
          <Link to="/" className="hover:text-hoverColor transition-all">
            Home
          </Link>
          <Link to="/about" className="hover:text-hoverColor transition-all">
            About Us
          </Link>
          <Link to="/services" className="hover:text-hoverColor transition-all">
            Services
          </Link>
          <Link to="/doctors" className="hover:text-hoverColor transition-all">
            Doctors
          </Link>
          <Link to="/blogs" className="hover:text-hoverColor transition-all">
            Blog
          </Link>
        </nav>

        <div className="hidden lg:flex">
          <button
            className="bg-brightColor px-4 py-2 rounded-md hover:bg-hoverColor transition duration-300"
            onClick={handleContactClick}
          >
            Contact Us
          </button>
        </div>

        {/* Mobile Menu Toggle */}
        <div className="lg:hidden flex items-center">
          {menu ? (
            <AiOutlineClose size={28} onClick={handleChange} />
          ) : (
            <AiOutlineMenu size={28} onClick={handleChange} />
          )}
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`${
          menu ? "translate-x-0" : "-translate-x-full"
        } lg:hidden flex flex-col absolute bg-backgroundColor text-white left-0 top-16 font-semibold text-center pt-8 pb-4 gap-8 w-full transition-transform duration-300`}
      >
        <Link to="/" className="hover:text-hoverColor" onClick={closeMenu}>
          Home
        </Link>
        <Link to="/about" className="hover:text-hoverColor" onClick={closeMenu}>
          About Us
        </Link>
        <Link
          to="/services"
          className="hover:text-hoverColor"
          onClick={closeMenu}
        >
          Services
        </Link>
        <Link
          to="/doctors"
          className="hover:text-hoverColor"
          onClick={closeMenu}
        >
          Doctors
        </Link>
        <Link to="/blogs" className="hover:text-hoverColor" onClick={closeMenu}>
          Blog
        </Link>
        <button
          className="bg-brightColor px-4 py-2 rounded-md hover:bg-hoverColor transition duration-300"
          onClick={handleContactClick}
        >
          Contact Us
        </button>
      </div>
    </div>
  );
};

export default Navbar;
