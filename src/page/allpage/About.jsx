import aboutImg from "../../imgas/acevent.jpg";
import { FaAward, FaGlobeAsia, FaIndustry, FaUsers } from "react-icons/fa";

const About = () => {
  return (
    <section className="bg-[#F8F5F0] py-24">
      <div className="max-w-7xl mx-auto px-6">

        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* Image */}
          <div className="relative">

            <img
              src={aboutImg}
              alt=""
              className="rounded-[30px] shadow-2xl w-full h-[650px] object-cover"
            />

            {/* Experience Card */}
            <div className="absolute bottom-8 -right-8 bg-[#8B5E3C] text-white p-8 rounded-3xl shadow-xl">

              <h2 className="text-5xl font-bold">10+</h2>

              <p className="mt-2 text-lg">
                Years of
                <br />
                Excellence
              </p>

            </div>

          </div>

          {/* Content */}
          <div>

            <p className="uppercase tracking-[7px] text-amber-700 font-semibold">
              About Us
            </p>

            <h2 className="text-5xl font-bold text-gray-900 mt-5 leading-tight">
              Crafting Premium Leather
              <br />
              For The World
            </h2>

            <div className="w-24 h-1 bg-amber-600 rounded-full mt-6"></div>

            <p className="text-gray-600 text-lg leading-9 mt-8">
              We are a trusted leather manufacturer and exporter committed to
              producing world-class leather goods. Combining traditional
              craftsmanship with advanced manufacturing technology, we deliver
              premium quality products to global brands across Europe, North
              America, the Middle East, and Asia.
            </p>

            <p className="text-gray-600 text-lg leading-9 mt-6">
              Every product is carefully inspected to ensure exceptional
              durability, elegance, and sustainability. Our mission is to build
              long-term partnerships by delivering quality beyond expectations.
            </p>

            {/* Features */}
            <div className="grid grid-cols-2 gap-6 mt-12">

              <div className="bg-white rounded-2xl p-6 shadow-lg">
                <FaAward className="text-4xl text-amber-600 mb-4" />
                <h3 className="font-bold text-xl">Premium Quality</h3>
                <p className="text-gray-500 mt-2">
                  Finest genuine leather products.
                </p>
              </div>

              <div className="bg-white rounded-2xl p-6 shadow-lg">
                <FaGlobeAsia className="text-4xl text-amber-600 mb-4" />
                <h3 className="font-bold text-xl">Worldwide Export</h3>
                <p className="text-gray-500 mt-2">
                  Delivering across international markets.
                </p>
              </div>

              <div className="bg-white rounded-2xl p-6 shadow-lg">
                <FaIndustry className="text-4xl text-amber-600 mb-4" />
                <h3 className="font-bold text-xl">Modern Factory</h3>
                <p className="text-gray-500 mt-2">
                  Advanced production technology.
                </p>
              </div>

              <div className="bg-white rounded-2xl p-6 shadow-lg">
                <FaUsers className="text-4xl text-amber-600 mb-4" />
                <h3 className="font-bold text-xl">Expert Team</h3>
                <p className="text-gray-500 mt-2">
                  Skilled professionals with decades of experience.
                </p>
              </div>

            </div>

            {/* Button */}
            <button className="mt-12 bg-[#8B5E3C] hover:bg-[#6F4E37] transition px-10 py-4 rounded-xl text-white text-lg font-semibold shadow-lg">
              Learn More →
            </button>

          </div>

        </div>

      </div>
    </section>
  );
};

export default About;