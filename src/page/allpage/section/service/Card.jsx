const Card = ({ image, title, description }) => {
  return (
    <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
      {/* Image */}
      <img
        src={image}
        alt={title}
        className="w-full h-60 object-cover"
      />

      {/* Content */}
      <div className="p-6">
        <h2 className="text-2xl font-bold text-gray-800">
          {title}
        </h2>

        <p className="text-gray-600 mt-3 leading-7">
          {description}
        </p>

        <button className="mt-5 bg-emerald-600 text-white px-5 py-2 rounded-lg hover:bg-emerald-700 transition">
          Read More
        </button>
      </div>
    </div>
  );
};

export default Card;