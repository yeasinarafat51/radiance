import tanneryImg from "../../imgas/messkapor.jpg";
import {
  FaTint,
  FaLeaf,
  FaShieldAlt,
  FaRecycle,
} from "react-icons/fa";

const Tannery = () => {
  return (
    <section className="py-24 bg-[#111111] text-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">

        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* Content */}
          <div>

            <p className="uppercase tracking-[8px] text-amber-500 font-semibold">
              Tannery Division
            </p>

            <h2 className="text-5xl font-bold mt-5 leading-tight">
              From Raw Hide to
              <span className="text-amber-500"> Premium Leather</span>
            </h2>

            <div className="w-24 h-1 bg-amber-500 rounded-full mt-6"></div>

            <p className="text-gray-300 leading-8 text-lg mt-8">
              Our tannery combines traditional craftsmanship with advanced
              tanning technology to produce world-class leather. Every stage,
              from raw hide selection to finishing, follows strict quality
              control and environmentally responsible practices.
            </p>

            {/* Features */}

            <div className="grid sm:grid-cols-2 gap-6 mt-12">

              <div className="bg-[#1E1E1E] rounded-2xl p-6">
                <FaTint className="text-4xl text-amber-500 mb-4"/>
                <h3 className="text-xl font-bold">
                  Premium Raw Hides
                </h3>
                <p className="text-gray-400 mt-3">
                  Carefully selected hides from trusted suppliers.
                </p>
              </div>

              <div className="bg-[#1E1E1E] rounded-2xl p-6">
                <FaLeaf className="text-4xl text-amber-500 mb-4"/>
                <h3 className="text-xl font-bold">
                  Eco-Friendly Process
                </h3>
                <p className="text-gray-400 mt-3">
                  Sustainable tanning with reduced environmental impact.
                </p>
              </div>

              <div className="bg-[#1E1E1E] rounded-2xl p-6">
                <FaShieldAlt className="text-4xl text-amber-500 mb-4"/>
                <h3 className="text-xl font-bold">
                  Strict Quality Control
                </h3>
                <p className="text-gray-400 mt-3">
                  Every leather batch is carefully inspected.
                </p>
              </div>

              <div className="bg-[#1E1E1E] rounded-2xl p-6">
                <FaRecycle className="text-4xl text-amber-500 mb-4"/>
                <h3 className="text-xl font-bold">
                  Sustainable Production
                </h3>
                <p className="text-gray-400 mt-3">
                  Efficient water treatment and responsible manufacturing.
                </p>
              </div>

            </div>

            {/* Stats */}

            <div className="grid grid-cols-3 gap-8 mt-14">

              <div>
                <h2 className="text-4xl font-bold text-amber-500">
                  500+
                </h2>
                <p className="text-gray-400 mt-2">
                  Tons / Month
                </p>
              </div>

              <div>
                <h2 className="text-4xl font-bold text-amber-500">
                  30+
                </h2>
                <p className="text-gray-400 mt-2">
                  Export Markets
                </p>
              </div>

              <div>
                <h2 className="text-4xl font-bold text-amber-500">
                  ISO
                </h2>
                <p className="text-gray-400 mt-2">
                  Certified Quality
                </p>
              </div>

            </div>

          </div>

          {/* Image */}

          <div className="relative">

            <img
              src={tanneryImg}
              alt="Tannery"
              className="rounded-[30px] shadow-2xl h-[700px] w-full object-cover"
            />

            {/* Floating Card */}

            <div className="absolute bottom-8 left-8 bg-white text-gray-900 rounded-2xl p-6 shadow-xl">

              <h2 className="text-4xl font-bold text-amber-600">
                100%
              </h2>

              <p className="mt-2 font-medium">
                Premium Leather
                <br />
                International Standard
              </p>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
};

export default Tannery;