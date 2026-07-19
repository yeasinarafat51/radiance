import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";
import logo from '../imgas/radiance.jpg'

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Services", path: "/services" },
    { name: "Tannery", path: "/tannery" },
    { name: "Manufacturing Unit", path: "/manufacturing-unit" },
    { name: "Contact", path: "/contact" },
    { name: "Product", path: "/product" },
    { name: "Our Team", path: "/team" },
  ];

  return (
    <nav className="bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-5">
        <div className="flex justify-between items-center h-16">

          {/* Logo */}
          <h1 className="text-2xl font-bold text-emerald-600">
            Radiance
          </h1>
          {/* <img
  src={logo}
  alt="Logo"
  className="h-12 w-auto"
/> */}

          {/* Desktop Menu */}
          <ul className="hidden md:flex items-center gap-8">
            {navLinks.map((item) => (
              <li key={item.name}>
                <NavLink
                  to={item.path}
                  className={({ isActive }) =>
                    isActive
                      ? "text-blue-600 font-bold border-b-2 border-blue-600 pb-1"
                      : "text-gray-700 font-semibold hover:text-blue-600 transition duration-300"
                  }
                >
                  {item.name}
                </NavLink>
              </li>
            ))}

            {/* <button className="bg-blue-600 text-white px-5 py-2 rounded-lg hover:bg-blue-700 transition">
              Our Team
            </button> */}
          </ul>

          {/* Mobile Icon */}
          <div
            className="md:hidden text-2xl cursor-pointer"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? <FaTimes /> : <FaBars />}
          </div>
        </div>

        {/* Mobile Menu */}
        <div
          className={`md:hidden overflow-hidden transition-all duration-300 ${
            menuOpen ? "max-h-96 py-4" : "max-h-0"
          }`}
        >
          <ul className="flex flex-col gap-4">
            {navLinks.map((item) => (
              <li key={item.name}>
                <NavLink
                  to={item.path}
                  onClick={() => setMenuOpen(false)}
                  className={({ isActive }) =>
                    isActive
                      ? "block text-blue-600 font-bold"
                      : "block text-gray-700 hover:text-blue-600"
                  }
                >
                  {item.name}
                </NavLink>
              </li>
            ))}

            {/* <button  className="bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700">
             <Link to="/team"> Our Team</Link>
            </button> */}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;