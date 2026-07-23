import {
  FaGlobeAsia,
  FaShip,
  FaHandshake,
  FaAward,
} from "react-icons/fa";

const buyers = [
  "Aldagal leather",
  "Bags Ksa",
  "Le tanneur",
  "Leather World GmbH",
  "Nordic Leather Group",
  "Prime Accessories Co.",
  "Elite Fashion Imports",
  "Urban Leather Solutions",
  "International Leather Hub",
  "Native Dubai",
  "Modern Leather Supply",
  "Global Fashion Partners",
];

const Interbuyer = () => {
  return (
    <section className="py-24 bg-[#111111] text-white">
      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}
        <div className="text-center mb-16">

          <p className="uppercase tracking-[8px] text-amber-500 font-semibold">
            Global Presence
          </p>

          <h2 className="text-5xl font-bold mt-4">
            Trusted by International Buyers
          </h2>

          <div className="w-24 h-1 bg-amber-500 mx-auto rounded-full mt-6"></div>

          <p className="max-w-3xl mx-auto mt-8 text-gray-300 text-lg leading-8">
            We proudly export premium leather products to customers around the
            world, maintaining international quality standards and reliable
            delivery.
          </p>

        </div>

        {/* Stats */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">

          <div className="bg-[#1B1B1B] rounded-3xl p-8 text-center hover:-translate-y-2 transition">
            <FaGlobeAsia className="text-5xl text-amber-500 mx-auto mb-5" />
            <h3 className="text-4xl font-bold">15+</h3>
            <p className="text-gray-400 mt-2">Export Countries</p>
          </div>

          <div className="bg-[#1B1B1B] rounded-3xl p-8 text-center hover:-translate-y-2 transition">
            <FaHandshake className="text-5xl text-amber-500 mx-auto mb-5" />
            <h3 className="text-4xl font-bold">50+</h3>
            <p className="text-gray-400 mt-2">Global Buyers</p>
          </div>

          <div className="bg-[#1B1B1B] rounded-3xl p-8 text-center hover:-translate-y-2 transition">
            <FaShip className="text-5xl text-amber-500 mx-auto mb-5" />
            <h3 className="text-4xl font-bold">10+</h3>
            <p className="text-gray-400 mt-2">Years Export Experience</p>
          </div>

          <div className="bg-[#1B1B1B] rounded-3xl p-8 text-center hover:-translate-y-2 transition">
            <FaAward className="text-5xl text-amber-500 mx-auto mb-5" />
            <h3 className="text-4xl font-bold">ISO</h3>
            <p className="text-gray-400 mt-2">Certified Quality</p>
          </div>

        </div>

        {/* Countries */}
        <div className="bg-[#1B1B1B] rounded-3xl p-10">

          <h3 className="text-3xl font-bold text-center mb-8">
            Our Buyers
          </h3>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">

            {buyers.map((country, index) => (
              <div
                key={index}
                className="bg-[#2A2A2A] rounded-xl py-4 text-center hover:bg-amber-600 transition duration-300"
              >
                {country}
              </div>
            ))}

          </div>

        </div>

      </div>
    </section>
  );
};

export default Interbuyer;