import {
  FaTshirt,
  FaLeaf,
  FaCertificate,
  FaIndustry,
} from "react-icons/fa";

import fabricImg from "../../imgas/fav5.jpg";

const fabrics = [
  {
    id: 1,
    title: "Premium Cotton",
    description:
      "Soft, breathable, and durable cotton fabric for premium garments.",
    icon: <FaTshirt />,
  },
  {
    id: 2,
    title: "Eco-Friendly Materials",
    description:
      "Sustainably sourced fabrics produced with environmentally responsible practices.",
    icon: <FaLeaf />,
  },
  {
    id: 3,
    title: "Certified Quality",
    description:
      "Every fabric passes strict quality inspection to meet international standards.",
    icon: <FaCertificate />,
  },
  {
    id: 4,
    title: "Advanced Manufacturing",
    description:
      "Produced using modern textile technology for consistent quality and performance.",
    icon: <FaIndustry />,
  },
];

const Fabric = () => {
  return (
    <section className="py-24 bg-[#F8F5F0]">
      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}
        <div className="text-center mb-16">
          <p className="uppercase tracking-[8px] text-amber-600 font-semibold">
            Fabric Collection
          </p>

          <h2 className="text-5xl font-bold text-gray-900 mt-4">
            Premium Textile Materials
          </h2>

          <div className="w-24 h-1 bg-amber-600 rounded-full mx-auto mt-6"></div>

          <p className="max-w-3xl mx-auto mt-8 text-lg text-gray-600 leading-8">
            We source and manufacture premium-quality fabrics for fashion,
            garments, and industrial applications with international quality
            standards.
          </p>
        </div>

        {/* Content */}
        <div className="grid lg:grid-cols-2 gap-14 items-center">

          {/* Image */}
          <div>
            <img
              src={fabricImg}
              alt="Fabric"
              className="w-full h-[300px] sm:h-[450px] lg:h-[650px] object-cover rounded-[30px] shadow-2xl"
            />
          </div>

          {/* Features */}
          <div className="grid gap-6">

            {fabrics.map((item) => (
              <div
                key={item.id}
                className="bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl hover:-translate-y-2 transition duration-300 flex gap-5"
              >
                <div className="w-16 h-16 rounded-full bg-amber-100 text-amber-600 flex items-center justify-center text-3xl">
                  {item.icon}
                </div>

                <div>
                  <h3 className="text-2xl font-bold text-gray-900">
                    {item.title}
                  </h3>

                  <p className="text-gray-600 leading-7 mt-3">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}

          </div>

        </div>

        {/* Statistics */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-20">

          <div className="bg-white rounded-3xl shadow-lg p-8 text-center">
            <h2 className="text-4xl font-bold text-amber-600">50+</h2>
            <p className="mt-3 text-gray-500">Fabric Types</p>
          </div>

          <div className="bg-white rounded-3xl shadow-lg p-8 text-center">
            <h2 className="text-4xl font-bold text-amber-600">100%</h2>
            <p className="mt-3 text-gray-500">Quality Tested</p>
          </div>

          <div className="bg-white rounded-3xl shadow-lg p-8 text-center">
            <h2 className="text-4xl font-bold text-amber-600">15+</h2>
            <p className="mt-3 text-gray-500">Export Countries</p>
          </div>

          <div className="bg-white rounded-3xl shadow-lg p-8 text-center">
            <h2 className="text-4xl font-bold text-amber-600">24/7</h2>
            <p className="mt-3 text-gray-500">Customer Support</p>
          </div>

        </div>

      </div>
    </section>
  );
};

export default Fabric;