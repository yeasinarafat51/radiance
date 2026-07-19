import tenarry from "../../../../imgas/messkapor.jpg";
import lea from "../../../../imgas/lether1.jpg";
import jama from "../../../../imgas/ladiasjama.jpg";
import Card from "./Card";

const cardData = [
  {
    image: tenarry,
    title: "Leather Manufacturing",
    description:
      "We manufacture premium quality leather products using advanced technology and international quality standards.",
  },
  {
    image: lea,
    title: "Tannery",
    description:
      "Our tannery ensures environmentally friendly processing while maintaining the highest product quality.",
  },
  {
    image: jama,
    title: "Export",
    description:
      "We export leather and leather goods to various countries around the world with trusted quality.",
  },
];

const Ourservice = () => {
  return (
    <section className="max-w-7xl mx-auto px-5 py-20">
      <h1 className="text-4xl font-bold text-center mb-12">
        Our Services
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {cardData.map((item, index) => (
          <Card
            key={index}
            image={item.image}
            title={item.title}
            description={item.description}
          />
        ))}
      </div>
    </section>
  );
};

export default Ourservice;