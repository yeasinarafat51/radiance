import {
  FaArrowRight,
  FaCheckCircle,
} from "react-icons/fa";

import cotton from "../../imgas/diem1.jpg";
import denim from "../../imgas/diem2.jpg";
import linen from "../../imgas/fab1.jpg";
import polyester from "../../imgas/fab3.jpg";
import fleece from "../../imgas/fav5.jpg";
import canvas from "../../imgas/fav6.jpg";
import fab4 from "../../imgas/fab4.jpg";
import fav2 from "../../imgas/fav2.jpg";
import shirt1 from "../../imgas/shirt1.jpg";
import shirt2 from "../../imgas/shirt2.jpg";
import  shirt3 from "../../imgas/shirt3.jpg";


const fabrics = [
  {
    id: 1,
    name: "Denim Fabric",
    image: cotton,
    type: "Denim Collection",
  },
  {
    id: 2,
    name: "Stretch Denim",
    image: denim,
    type: "Fashion Denim",
  },
  {
    id: 3,
    name: "Cotton Twill Fabric",
    image: linen,
    type: "Garments Fabric",
  },
  {
    id: 4,
    name: "Polyester Fabric",
    image: polyester,
    type: "Industrial Textile",
  },
  {
    id: 5,
    name: "Printed Fashion Fabric",
    image: fleece,
    type: "Fashion Collection",
  },
  {
    id: 6,
    name: "Premium Woven Fabric",
    image: canvas,
    type: "Premium Textile",
  },
    {
    id: 7,
    name: "Embroidered Kurti",
  image: fab4,
  type: "Premium Ethnic",
  },
  {
    id: 8,
     name: "Designer Salwar Kameez",
  image: fav2,
  type: "Traditional Collection",
  },
 {
  id: 9,
  name: "Premium Oxford Shirt",
  image: shirt1,
  type: "Premium Collection",
},
{
  id: 10,
  name: "Business Dress Shirt",
  image: shirt2,
  type: "Corporate Wear",
},
{
  id: 11,
  name: "Casual Cotton Shirt",
  image: shirt3,
  type: "Casual Wear",
},
];

const FabricCollection = () => {
  return (
    <section className="py-24 bg-[#F8F5F0]">
      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}
        <div className="text-center mb-16">
          <p className="uppercase tracking-[8px] text-amber-600 font-semibold">
            Fabric Collection
          </p>

          <h2 className="text-5xl font-bold text-gray-900 mt-4">
            Premium Textile Collection
          </h2>

          <div className="w-24 h-1 bg-amber-600 mx-auto rounded-full mt-6"></div>

          <p className="max-w-3xl mx-auto mt-8 text-lg text-gray-600 leading-8">
            Explore our premium range of fabrics designed for garments,
            fashion, upholstery, and industrial applications.
          </p>
        </div>

        {/* Cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">

          {fabrics.map((item) => (
            <div
              key={item.id}
              className="group bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition duration-500"
            >
              <div className="overflow-hidden">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-full h-80 object-cover group-hover:scale-110 transition duration-700"
                />
              </div>

              <div className="p-8">

                <span className="inline-block bg-amber-100 text-amber-700 px-4 py-2 rounded-full text-sm font-medium">
                  {item.type}
                </span>

                <h3 className="text-2xl font-bold mt-5">
                  {item.name}
                </h3>

                {/* <p className="text-gray-600 mt-4 leading-7">
                  High-quality fabric manufactured with advanced technology,
                  ensuring durability, comfort, and international standards.
                </p> */}

                <ul className="mt-6 space-y-2 text-gray-700">
                  <li className="flex items-center gap-2">
                    <FaCheckCircle className="text-amber-600" />
                    Premium Quality
                  </li>

                  <li className="flex items-center gap-2">
                    <FaCheckCircle className="text-amber-600" />
                    Export Standard
                  </li>

                  <li className="flex items-center gap-2">
                    <FaCheckCircle className="text-amber-600" />
                    Eco-Friendly
                  </li>
                </ul>

                {/* <button className="mt-8 flex items-center gap-3 text-amber-700 font-semibold hover:gap-5 transition">
                  View Details
                  <FaArrowRight />
                </button> */}

              </div>
            </div>
          ))}

        </div>

      </div>
    </section>
  );
};

export default FabricCollection;