// import {
//   FaFacebookF,
//   FaLinkedinIn,
//   FaTwitter,
// } from "react-icons/fa";

import team1 from "../../imgas/lether3.jpg";
import team2 from "../../imgas/lether3.jpg";
import team3 from "../../imgas/lether3.jpg";
import team4 from "../../imgas/lether3.jpg";

const teamMembers = [
  {
    id: 1,
    name: "Rakib",
    role: "Managing Director",
    image: team1,
  },
  {
    id: 2,
    name: "Shadat",
    role: "Production Manager",
    image: team2,
  },
  {
    id: 3,
    name: "Ismail",
    role: "Quality Control Head",
    image: team3,
  },
  {
    id: 4,
    name: "Mostafiz",
    role: "Export Manager",
    image: team4,
  },
];

const Team = () => {
  return (
    <section className="py-24 bg-[#111111] text-white">
      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}
        <div className="text-center mb-16">

          <p className="uppercase tracking-[8px] text-amber-500 font-semibold">
            Our Team
          </p>

          <h2 className="text-5xl font-bold mt-4">
            Meet Our Leadership
          </h2>

          <div className="w-24 h-1 bg-amber-500 mx-auto rounded-full mt-6"></div>

          <p className="max-w-3xl mx-auto mt-8 text-gray-300 text-lg leading-8">
            Behind every premium leather product is a dedicated team of
            experienced professionals committed to quality, innovation,
            and customer satisfaction.
          </p>

        </div>

        {/* Team Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">

          {teamMembers.map((member) => (

            <div
              key={member.id}
              className="group bg-[#1A1A1A] rounded-[28px] overflow-hidden shadow-lg hover:-translate-y-3 hover:shadow-2xl duration-500"
            >

              {/* Image */}
              <div className="overflow-hidden">
                <img
                  src={member.image}
                  alt={member.name}
                  className="h-96 w-full object-cover group-hover:scale-110 duration-700"
                />
              </div>

              {/* Content */}
              <div className="p-7 text-center">

                <h3 className="text-2xl font-bold">
                  {member.name}
                </h3>

                <p className="text-amber-500 mt-2">
                  {member.role}
                </p>

                <div className="w-12 h-[2px] bg-amber-500 mx-auto my-5"></div>

                {/* <div className="flex justify-center gap-4">

                  <a
                    href="#"
                    className="w-10 h-10 rounded-full bg-[#2B2B2B] flex items-center justify-center hover:bg-amber-600 transition"
                  >
                    <FaFacebookF />
                  </a>

                  <a
                    href="#"
                    className="w-10 h-10 rounded-full bg-[#2B2B2B] flex items-center justify-center hover:bg-amber-600 transition"
                  >
                    <FaLinkedinIn />
                  </a>

                  <a
                    href="#"
                    className="w-10 h-10 rounded-full bg-[#2B2B2B] flex items-center justify-center hover:bg-amber-600 transition"
                  >
                    <FaTwitter />
                  </a>

                </div> */}

              </div>

            </div>

          ))}

        </div>
      </div>
    </section>
  );
};

export default Team;