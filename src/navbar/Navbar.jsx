import { useState } from "react";
import { NavLink } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";
import logo from "../imgas/radiance.jpg";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Services", path: "/services" },
    { name: "Tannery", path: "/tannery" },
    { name: "Manufacturing Unit", path: "/manufacturing-unit" },
    { name: "Products", path: "/product" },
    { name: "Our Team", path: "/team" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <header className="sticky top-0 z-50 bg-white/90 backdrop-blur-md shadow-md">
      <div className="max-w-7xl mx-auto px-6">

        <div className="flex items-center justify-between h-48">

          {/* Logo */}
          <NavLink to="/" className="flex items-center gap-3">

            <img
              src={logo}
              alt="Radiance"
              className="w-full h-20  object-cover border-2 border-amber-600"
            />

            {/* <div>
              <h2 className="text-2xl font-bold text-gray-900">
                Radiance
              </h2>

              <p className="text-xs tracking-[3px] uppercase text-amber-600">
                Leather Industry
              </p>
            </div> */}

          </NavLink>

          {/* Desktop Menu */}
          <ul className="hidden lg:flex items-center gap-8">

            {navLinks.map((item) => (
              <li key={item.name}>
                <NavLink
                  to={item.path}
                  className={({ isActive }) =>
                    `relative font-medium transition duration-300
                    ${
                      isActive
                        ? "text-amber-600"
                        : "text-gray-700 hover:text-amber-600"
                    }`
                  }
                >
                  {({ isActive }) => (
                    <>
                      {item.name}

                      <span
                        className={`absolute left-0 -bottom-2 h-[2px] bg-amber-600 transition-all duration-300 ${
                          isActive ? "w-full" : "w-0 group-hover:w-full"
                        }`}
                      ></span>
                    </>
                  )}
                </NavLink>
              </li>
            ))}

            {/* Button */}

            <NavLink
              to="/contact"
              className="bg-amber-600 hover:bg-[#6F4E37] text-white px-7 py-3 rounded-full font-semibold transition duration-300 shadow-lg"
            >
              Get Quote
            </NavLink>

          </ul>

          {/* Mobile Icon */}

          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="lg:hidden text-3xl text-gray-800"
          >
            {menuOpen ? <FaTimes /> : <FaBars />}
          </button>

        </div>

      </div>

      {/* Mobile Menu */}

      <div
        className={`lg:hidden bg-white shadow-xl transition-all duration-500 overflow-hidden ${
          menuOpen ? "max-h-[600px]" : "max-h-0"
        }`}
      >

        <ul className="px-6 py-6 space-y-5">

          {navLinks.map((item) => (
            <li key={item.name}>
              <NavLink
                to={item.path}
                onClick={() => setMenuOpen(false)}
                className={({ isActive }) =>
                  isActive
                    ? "block text-amber-600 font-semibold"
                    : "block text-gray-700 hover:text-amber-600"
                }
              >
                {item.name}
              </NavLink>
            </li>
          ))}

          <NavLink
            to="/contact"
            onClick={() => setMenuOpen(false)}
            className="block text-center bg-amber-600 text-white py-3 rounded-full hover:bg-[#6F4E37] transition"
          >
            Get Quote
          </NavLink>

        </ul>

      </div>
    </header>
  );
};

export default Navbar;