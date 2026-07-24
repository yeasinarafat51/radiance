import {
  FaStore,
  FaUsers,
  FaMapMarkerAlt,
  FaTruck,
} from "react-icons/fa";

const localBuyers = [
  "Le Reve",
  "Apex",
  "Lotto",
  "Bata",
  
];

const LocalBuyers = () => {
  return (
    <section className="py-24 bg-[#F8F5F0]">
      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}
        <div className="text-center mb-16">

          <p className="uppercase tracking-[8px] text-amber-600 font-semibold">
            Local Market
          </p>

          <h2 className="text-5xl font-bold text-gray-900 mt-4">
            Trusted by Local Buyers
          </h2>

          <div className="w-24 h-1 bg-amber-600 mx-auto rounded-full mt-6"></div>

          <p className="max-w-3xl mx-auto mt-8 text-lg text-gray-600 leading-8">
            We proudly supply premium leather products to retailers,
            wholesalers, and fashion businesses across Bangladesh.
          </p>

        </div>

        {/* Stats */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">

          <div className="bg-white rounded-3xl p-8 shadow-lg text-center">
            <FaStore className="text-5xl text-amber-600 mx-auto mb-5" />
            <h3 className="text-4xl font-bold">200+</h3>
            <p className="text-gray-500 mt-2">Retail Partners</p>
          </div>

          <div className="bg-white rounded-3xl p-8 shadow-lg text-center">
            <FaUsers className="text-5xl text-amber-600 mx-auto mb-5" />
            <h3 className="text-4xl font-bold">500+</h3>
            <p className="text-gray-500 mt-2">Business Clients</p>
          </div>

          <div className="bg-white rounded-3xl p-8 shadow-lg text-center">
            <FaMapMarkerAlt className="text-5xl text-amber-600 mx-auto mb-5" />
            <h3 className="text-4xl font-bold">64</h3>
            <p className="text-gray-500 mt-2">District Coverage</p>
          </div>

          <div className="bg-white rounded-3xl p-8 shadow-lg text-center">
            <FaTruck className="text-5xl text-amber-600 mx-auto mb-5" />
            <h3 className="text-4xl font-bold">Fast</h3>
            <p className="text-gray-500 mt-2">Nationwide Delivery</p>
          </div>

        </div>

        {/* Buyer List */}
        <div className="bg-white rounded-3xl shadow-xl p-10">

          <h3 className="text-3xl font-bold text-center mb-8">
            Our Retail Network
          </h3>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">

            {localBuyers.map((buyer, index) => (
              <div
                key={index}
                className="bg-gray-100 rounded-xl py-4 text-center font-medium hover:bg-amber-600 hover:text-white transition duration-300"
              >
                {buyer}
              </div>
            ))}

          </div>

        </div>

      </div>
    </section>
  );
};

export default LocalBuyers;