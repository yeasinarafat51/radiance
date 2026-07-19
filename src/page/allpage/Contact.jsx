import {
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaEnvelope,
  FaGlobe,
  FaClock,
} from "react-icons/fa";

const Contact = () => {
  return (
    <section className="relative py-24 bg-[#F7F3EE] overflow-hidden">

      {/* Background */}
      <div className="absolute inset-0">
        <div className="absolute -top-40 -left-40 h-96 w-96 rounded-full bg-amber-200/20 blur-3xl"></div>
        <div className="absolute bottom-0 right-0 h-80 w-80 rounded-full bg-stone-300/30 blur-3xl"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-6">

        {/* Heading */}
        <div className="text-center mb-20">

          <p className="uppercase tracking-[8px] text-amber-700 font-semibold">
            Contact Us
          </p>

          <h2 className="text-5xl md:text-6xl font-bold text-gray-900 mt-4">
            Let's Work Together
          </h2>

          <div className="w-28 h-1 bg-amber-600 mx-auto mt-6 rounded-full"></div>

          <p className="text-gray-600 mt-8 max-w-3xl mx-auto text-lg leading-8">
            We manufacture premium leather products for brands and
            distributors worldwide. Contact us for OEM, wholesale and export
            inquiries.
          </p>

        </div>

        <div className="grid lg:grid-cols-5 gap-10">

          {/* Left Side */}
          <div className="lg:col-span-2 bg-[#111111] rounded-[35px] text-white p-10">

            <h3 className="text-3xl font-bold mb-10">
              Contact Information
            </h3>

            <div className="space-y-8">

              <div className="flex items-start gap-5">
                <div className="bg-amber-600 p-4 rounded-full">
                  <FaMapMarkerAlt />
                </div>

                <div>
                  <h4 className="font-semibold text-xl">
                    Factory Address
                  </h4>

                  <p className="text-gray-300 mt-2">
                    Hazaribagh Leather Industrial Area
                    <br />
                    Dhaka, Bangladesh
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-5">
                <div className="bg-amber-600 p-4 rounded-full">
                  <FaPhoneAlt />
                </div>

                <div>
                  <h4 className="font-semibold text-xl">
                    Phone
                  </h4>

                  <p className="text-gray-300 mt-2">
                    +880 17XXXXXXXX
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-5">
                <div className="bg-amber-600 p-4 rounded-full">
                  <FaEnvelope />
                </div>

                <div>
                  <h4 className="font-semibold text-xl">
                    Email
                  </h4>

                  <p className="text-gray-300 mt-2">
                    export@company.com
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-5">
                <div className="bg-amber-600 p-4 rounded-full">
                  <FaGlobe />
                </div>

                <div>
                  <h4 className="font-semibold text-xl">
                    Website
                  </h4>

                  <p className="text-gray-300 mt-2">
                    www.company.com
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-5">
                <div className="bg-amber-600 p-4 rounded-full">
                  <FaClock />
                </div>

                <div>
                  <h4 className="font-semibold text-xl">
                    Business Hours
                  </h4>

                  <p className="text-gray-300 mt-2">
                    Monday - Saturday
                    <br />
                    9:00 AM - 6:00 PM
                  </p>
                </div>
              </div>

            </div>
          </div>

          {/* Form */}
          <div className="lg:col-span-3 bg-white rounded-[35px] shadow-2xl p-10">

            <h3 className="text-3xl font-bold text-gray-900 mb-8">
              Send Your Inquiry
            </h3>

            <form className="space-y-6">

              <div className="grid md:grid-cols-2 gap-6">

                <input
                  type="text"
                  placeholder="Full Name"
                  className="border border-gray-300 rounded-xl p-4 focus:border-amber-600 focus:ring-2 focus:ring-amber-200 outline-none"
                />

                <input
                  type="email"
                  placeholder="Email Address"
                  className="border border-gray-300 rounded-xl p-4 focus:border-amber-600 focus:ring-2 focus:ring-amber-200 outline-none"
                />

              </div>

              <div className="grid md:grid-cols-2 gap-6">

                <input
                  type="text"
                  placeholder="Phone Number"
                  className="border border-gray-300 rounded-xl p-4 focus:border-amber-600 focus:ring-2 focus:ring-amber-200 outline-none"
                />

                <input
                  type="text"
                  placeholder="Company Name"
                  className="border border-gray-300 rounded-xl p-4 focus:border-amber-600 focus:ring-2 focus:ring-amber-200 outline-none"
                />

              </div>

              <textarea
                rows="6"
                placeholder="Tell us about your project..."
                className="w-full border border-gray-300 rounded-xl p-4 focus:border-amber-600 focus:ring-2 focus:ring-amber-200 outline-none"
              ></textarea>

              <button
                className="bg-[#8B5E3C] hover:bg-[#6F4E37] transition duration-300 text-white px-10 py-4 rounded-xl font-semibold text-lg shadow-lg"
              >
                Send Inquiry →
              </button>

            </form>

          </div>

        </div>
      </div>
    </section>
  );
};

export default Contact;