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
                    +880 1811157441
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
                    radianceleather@gmail.com
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
                    www.radianceletherbd.vercel.app
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
                    Everyday
                    <br />
                    24 Hours
                  </p>
                </div>
              </div>

            </div>
          </div>

          {/* Form */}
          {/* Google Map */}

<div className="lg:col-span-3 bg-white rounded-[35px] shadow-2xl overflow-hidden">

    <div className="p-8">

        <h3 className="text-3xl font-bold text-gray-900">
            Find Our Location
        </h3>

        <p className="text-gray-500 mt-3">
            Visit our manufacturing facility or contact our export office.
        </p>

    </div>

    <iframe
        title="Google Map"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d587.6671024903488!2d90.3682858490274!3d23.7323711047347!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755bf0035f269ff%3A0x5e65889775568c17!2sLeather%20Solid%20Waste%20Management%20Lab!5e1!3m2!1sen!2sbd!4v1784727275985!5m2!1sen!2sbd" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="strict-origin-when-cross-origin"
        width="100%"
        height="520"
        style={{ border: 0 }}
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
    ></iframe>

</div>

        </div>
      </div>
    </section>
  );
};

export default Contact;