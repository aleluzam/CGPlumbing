const AboutUs = () => {
  return (
    <div className="min-h-screen bg-blue-perfect">
      {/* Header */}
      <div className="max-w-4xl mx-auto px-4 py-20 text-center">
        <h1 className="text-6xl md:text-7xl lg:text-7xl font-bold text-white barlow-condensed-bold mb-1">
          About Us
        </h1>
      </div>

      <div className="max-w-3xl mx-auto px-4 pb-16">
        <div className="bg-white rounded-2xl p-8 shadow-lg">
          <div className="text-lg text-gray-700 space-y-6 leading-relaxed">
            <p>
              <strong className="text-blue-perfect">
                C&G Plumbing Solutions Multiservice
              </strong>
              is your trusted plumbing partner in Miami. We provide reliable
              plumbing services for homes and businesses.
            </p>

            <p>
              Our experienced team handles everything from emergency repairs to
              installations. We're available 24/7 and serve customers in both
              English and Spanish.
            </p>

            <p>
              Licensed, insured, and committed to quality work at fair prices.
              Your satisfaction is our priority.
            </p>
          </div>

          <div className="text-center mt-8 pt-8 border-t border-gray-200">
            <p className="text-gray-600 mb-4">Ready to get started?</p>
            <div className="inline-block bg-teal-500 hover:bg-teal-600 text-white font-bold py-3 px-8 rounded-full transition-colors duration-300">
              Call: +1 786 123 4567
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
