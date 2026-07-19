import {
  FaArrowRight,
  FaStar,
} from "react-icons/fa";

import jacket from "../../imgas/handbagl.jpg";
import bag from "../../imgas/handbagl.jpg";
import wallet from  "../../imgas/handbagl.jpg";
import shoes from "../../imgas/handbagl.jpg";
import belt from "../../imgas/handbagl.jpg";
import gloves from "../../imgas/handbagl.jpg";

const products = [
  {
    id: 1,
    name: "Leather Jacket",
    image: jacket,
    category: "Outerwear",
  },
  {
    id: 2,
    name: "Leather Bag",
    image: bag,
    category: "Accessories",
  },
  {
    id: 3,
    name: "Leather Wallet",
    image: wallet,
    category: "Accessories",
  },
  {
    id: 4,
    name: "Leather Shoes",
    image: shoes,
    category: "Footwear",
  },
  {
    id: 5,
    name: "Leather Belt",
    image: belt,
    category: "Fashion",
  },
  {
    id: 6,
    name: "Leather Gloves",
    image: gloves,
    category: "Winter",
  },
];

const Products = () => {
  return (
    <section className="py-24 bg-[#F8F5F0]">
      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}
        <div className="text-center mb-16">

          <p className="uppercase tracking-[8px] text-amber-600 font-semibold">
            Our Products
          </p>

          <h2 className="text-5xl font-bold text-gray-900 mt-4">
            Premium Leather Collection
          </h2>

          <div className="w-24 h-1 bg-amber-600 rounded-full mx-auto mt-6"></div>

          <p className="max-w-3xl mx-auto mt-8 text-lg text-gray-600 leading-8">
            Explore our exclusive range of handcrafted leather products,
            designed with premium materials and world-class craftsmanship.
          </p>

        </div>

        {/* Products */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

          {products.map((item) => (

            <div
              key={item.id}
              className="group bg-white rounded-[30px] overflow-hidden shadow-lg hover:shadow-2xl duration-500"
            >

              <div className="overflow-hidden relative">

                <img
                  src={item.image}
                  alt={item.name}
                  className="h-96 w-full object-cover group-hover:scale-110 duration-700"
                />

                <span className="absolute top-5 left-5 bg-amber-600 text-white px-4 py-2 rounded-full text-sm">
                  {item.category}
                </span>

              </div>

              <div className="p-8">

                <div className="flex items-center gap-1 text-amber-500 mb-3">
                  <FaStar />
                  <FaStar />
                  <FaStar />
                  <FaStar />
                  <FaStar />
                </div>

                <h3 className="text-2xl font-bold">
                  {item.name}
                </h3>

                <p className="text-gray-500 leading-7 mt-4">
                  Crafted from premium genuine leather with exceptional
                  durability, elegance, and international quality standards.
                </p>

                <button className="mt-8 flex items-center gap-3 text-amber-700 font-semibold hover:gap-5 duration-300">
                  Explore Collection
                  <FaArrowRight />
                </button>

              </div>

            </div>

          ))}

        </div>

      </div>
    </section>
  );
};

export default Products;