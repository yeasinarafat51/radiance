import { FaFacebookF, FaLinkedinIn, FaInstagram, FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-[#111827] text-gray-300">
      <div className="max-w-7xl mx-auto px-6 py-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">

        {/* Company */}
        <div>
          <h2 className="text-2xl font-bold text-white mb-4">
            Leather<span className="text-amber-500">Craft</span>
          </h2>
          <p className="text-sm leading-7">
            We manufacture and export premium leather products worldwide.
            Our commitment is quality, sustainability, and customer
            satisfaction.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-xl font-semibold text-white mb-4">
            Quick Links
          </h3>
          <ul className="space-y-3">
            <li><a href="/" className="hover:text-amber-500">Home</a></li>
            <li><a href="/about" className="hover:text-amber-500">About Us</a></li>
            <li><a href="/products" className="hover:text-amber-500">Products</a></li>
            <li><a href="/contact" className="hover:text-amber-500">Contact</a></li>
          </ul>
        </div>

        {/* Products */}
        <div>
          <h3 className="text-xl font-semibold text-white mb-4">
            Products
          </h3>
          <ul className="space-y-3">
            <li>Leather Jackets</li>
            <li>Leather Bags</li>
            <li>Leather Wallets</li>
            <li>Leather Gloves</li>
            <li>Leather Shoes</li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h3 className="text-xl font-semibold text-white mb-4">
            Contact Us
          </h3>

          <p>📍 Dhaka, Bangladesh</p>
          <p className="mt-2">📞 +880 1712-345678</p>
          <p className="mt-2">✉ info@leathercraft.com</p>

          <div className="flex gap-4 mt-6">
            <a href="#" className="bg-gray-700 p-3 rounded-full hover:bg-amber-500 transition">
              <FaFacebookF />
            </a>
            <a href="#" className="bg-gray-700 p-3 rounded-full hover:bg-amber-500 transition">
              <FaLinkedinIn />
            </a>
            <a href="#" className="bg-gray-700 p-3 rounded-full hover:bg-amber-500 transition">
              <FaInstagram />
            </a>
            <a href="#" className="bg-gray-700 p-3 rounded-full hover:bg-amber-500 transition">
              <FaTwitter />
            </a>
          </div>
        </div>

      </div>

      {/* Bottom */}
      <div className="border-t border-gray-700">
        <div className="max-w-7xl mx-auto px-6 py-5 flex flex-col md:flex-row justify-between items-center text-sm">
          <p>
            © {new Date().getFullYear()} LeatherCraft. All Rights Reserved.
          </p>

          <div className="flex gap-6 mt-3 md:mt-0">
            <a href="#" className="hover:text-amber-500">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-amber-500">
              Terms & Conditions
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;