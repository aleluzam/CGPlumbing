import Foto1 from "../assets/images/Foto1.jpg";

const Services = () => {
  const elements = [
    {
      id: 1,
      name: "Residencial Plumbing",
      description:
        "Quality plumbing services for homes, ensuring comfort and functionality.",
      image: Foto1,
    },
    {
      id: 2,
      name: "Comercial Plumbing",
      description:
        "Comprehensive plumbing services designed for business, completed efficiently and professionally.",
      image: Foto1,
    },
    {
      id: 3,
      name: "24 Hours Emergency Services",
      description:
        "We handle repairs, installations and maintenance for your plumbing systems.",
      image: Foto1,
    },
  ];

  return (
    <div className="min-h-screen bg-blue-perfect px-7 py-5">
      <div className="flex flex-col items-center lg:gap-5">
        <div className="text-center mb-8 lg:mb-10">
          <h1 className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl barlow-condensed-bold  mb-2 text-white">
            Our Plumbing Services
          </h1>
          <h3 className="lg:text-lg text-xs sm:text-xs md:text-lg open-sans-light text-white">
            Expert plumbing solutions tailored to your home or business
          </h3>
        </div>

        <div className="w-full max-w-6xl">
          <div className="flex flex-col lg:flex-row gap-6 mb-3">
            {elements.map((element) => (
              <div
                key={element.id}
                className="flex-1 bg-white rounded-lg overflow-hidden shadow-lg"
              >
                <div className="h-70">
                  <img
                    src={element.image}
                    alt={element.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <h2 className="text-xl font-bold mb-3 text-gray-800">
                    {element.name}
                  </h2>
                  <p className="text-gray-600 text-sm">{element.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
