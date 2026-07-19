import {
  FaIndustry,
  FaUsers,
  FaCogs,
  FaCheckCircle,
} from "react-icons/fa";

import factory from "../../imgas/manufaq.jpg";

const Manufacturing = () => {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}
        <div className="text-center mb-16">

          <p className="uppercase tracking-[8px] text-amber-600 font-semibold">
            Manufacturing Unit
          </p>

          <h2 className="text-5xl font-bold text-gray-900 mt-4">
            World Class Leather Manufacturing
          </h2>

          <div className="w-24 h-1 bg-amber-600 mx-auto rounded-full mt-6"></div>

          <p className="max-w-3xl mx-auto mt-8 text-lg text-gray-600 leading-8">
            Our state-of-the-art manufacturing facility combines skilled
            craftsmanship with advanced technology to produce premium leather
            products that meet international quality standards.
          </p>

        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* Image */}

          <div className="relative">

            <img
              src={factory}
              alt=""
              className="rounded-[30px] h-[620px] w-full object-cover shadow-2xl"
            />

            <div className="absolute bottom-8 left-8 bg-[#8B5E3C] text-white px-8 py-6 rounded-2xl shadow-xl">
              <h2 className="text-4xl font-bold">25+</h2>
              <p>Years Manufacturing Experience</p>
            </div>

          </div>

          {/* Content */}

          <div>

            <h3 className="text-4xl font-bold text-gray-900">
              Excellence in Every Production Stage
            </h3>

            <p className="text-gray-600 mt-8 leading-8 text-lg">
              Our manufacturing facility is equipped with modern machinery,
              highly skilled technicians, and strict quality control systems.
              From raw material selection to final finishing, every stage is
              carefully monitored to ensure premium quality.
            </p>

            <div className="grid sm:grid-cols-2 gap-6 mt-12">

              <div className="bg-[#F8F5F0] rounded-2xl p-6">

                <FaIndustry className="text-5xl text-amber-600 mb-4"/>

                <h4 className="font-bold text-xl">
                  Modern Factory
                </h4>

                <p className="text-gray-500 mt-3">
                  Advanced production facilities with international standards.
                </p>

              </div>

              <div className="bg-[#F8F5F0] rounded-2xl p-6">

                <FaUsers className="text-5xl text-amber-600 mb-4"/>

                <h4 className="font-bold text-xl">
                  Skilled Workforce
                </h4>

                <p className="text-gray-500 mt-3">
                  Experienced craftsmen ensuring precision and perfection.
                </p>

              </div>

              <div className="bg-[#F8F5F0] rounded-2xl p-6">

                <FaCogs className="text-5xl text-amber-600 mb-4"/>

                <h4 className="font-bold text-xl">
                  Advanced Machinery
                </h4>

                <p className="text-gray-500 mt-3">
                  Latest equipment for efficient manufacturing processes.
                </p>

              </div>

              <div className="bg-[#F8F5F0] rounded-2xl p-6">

                <FaCheckCircle className="text-5xl text-amber-600 mb-4"/>

                <h4 className="font-bold text-xl">
                  Quality Assurance
                </h4>

                <p className="text-gray-500 mt-3">
                  Every product undergoes rigorous quality inspection.
                </p>

              </div>

            </div>

            {/* Statistics */}

            <div className="grid grid-cols-3 gap-6 mt-14 text-center">

              <div>
                <h2 className="text-4xl font-bold text-amber-600">
                  50K+
                </h2>
                <p className="text-gray-500 mt-2">
                  Monthly Capacity
                </p>
              </div>

              <div>
                <h2 className="text-4xl font-bold text-amber-600">
                  30+
                </h2>
                <p className="text-gray-500 mt-2">
                  Export Countries
                </p>
              </div>

              <div>
                <h2 className="text-4xl font-bold text-amber-600">
                  200+
                </h2>
                <p className="text-gray-500 mt-2">
                  Skilled Workers
                </p>
              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
};

export default Manufacturing;