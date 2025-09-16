const AboutUs = () => {
  return (
    <div className="min-h-screen bg-blue-perfect">
      {/* Header con cartel descriptivo simple como en Contact Us */}
      <div className="max-w-4xl mx-auto px-4 py-26 text-center">
        <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white barlow-condensed-bold mb-2 tracking-tight">
          About Us
        </h1>

        <p className="lg:text-lg text-xs sm:text-xs md:text-lg open-sans-light text-white">
          Professional plumbing services with quality work and fair prices. Your
          satisfaction is our commitment.
        </p>
      </div>

      <div className="max-w-7xl mx-auto px-4 pb-12">
        <div className="bg-white rounded-3xl p-8 shadow-2xl relative overflow-hidden">
          {/* Decorative elements */}
          <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-teal-100 to-blue-100 rounded-full -translate-y-12 translate-x-12 opacity-60"></div>
          <div className="absolute bottom-0 left-0 w-20 h-20 bg-gradient-to-tr from-teal-50 to-blue-50 rounded-full translate-y-10 -translate-x-10 opacity-40"></div>

          <div className="relative z-10">
            {/* Layout horizontal */}
            <div className="grid lg:grid-cols-2 gap-12 items-start">
              {/* Lado izquierdo - Información principal */}
              <div className="space-y-6">
                <div>
                  <h2 className="text-3xl font-bold text-blue-perfect mb-3 barlow-condensed-bold">
                    C&G Plumbing Solutions Multiservice
                  </h2>
                  <p className="text-lg text-gray-600 font-medium">
                    Your trusted plumbing partner in Miami
                  </p>
                </div>

                <div className="bg-gradient-to-r from-gray-50 to-gray-100 rounded-xl p-6">
                  <p className="text-gray-700 leading-relaxed">
                    Licensed, insured, and committed to quality work at fair
                    prices.
                    <span className="font-semibold text-blue-perfect">
                      {" "}
                      Your satisfaction is our priority.
                    </span>
                  </p>
                </div>

                <div>
                  <p className="text-gray-600 font-medium mb-4">
                    Ready to get started?
                  </p>
                  <a
                    href="tel:+17861234567"
                    className="inline-flex items-center space-x-2 bg-gradient-to-r from-teal-500 to-teal-600 hover:from-teal-600 hover:to-teal-700 text-white font-bold py-3 px-8 rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
                  >
                    <svg
                      className="w-5 h-5"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                      ></path>
                    </svg>
                    <span>Call: +1 786 123 4567</span>
                  </a>
                </div>
              </div>

              {/* Lado derecho - Features verticalmente alineadas */}
              <div className="flex flex-col justify-start space-y-4">
                <div className="flex items-center space-x-4 p-4 rounded-xl bg-gradient-to-r from-gray-50 to-white border border-gray-100">
                  <div className="w-12 h-12 bg-teal-500 rounded-full flex items-center justify-center flex-shrink-0">
                    <svg
                      className="w-6 h-6 text-white"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-4m-5 0H3m2 0h4M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
                      ></path>
                    </svg>
                  </div>
                  <div className="flex-1">
                    <h3 className="font-semibold text-gray-800">
                      Homes & Businesses
                    </h3>
                    <p className="text-gray-600 text-sm">
                      Reliable plumbing services
                    </p>
                  </div>
                </div>

                <div className="flex items-center space-x-4 p-4 rounded-xl bg-gradient-to-r from-gray-50 to-white border border-gray-100">
                  <div className="w-12 h-12 bg-blue-perfect rounded-full flex items-center justify-center flex-shrink-0">
                    <svg
                      className="w-6 h-6 text-white"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                      ></path>
                    </svg>
                  </div>
                  <div className="flex-1">
                    <h3 className="font-semibold text-gray-800">
                      24/7 Available
                    </h3>
                    <p className="text-gray-600 text-sm">
                      Emergency repairs anytime
                    </p>
                  </div>
                </div>

                <div className="flex items-center space-x-4 p-4 rounded-xl bg-gradient-to-r from-gray-50 to-white border border-gray-100">
                  <div className="w-12 h-12 bg-teal-500 rounded-full flex items-center justify-center flex-shrink-0">
                    <svg
                      className="w-6 h-6 text-white"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M3 5h12M9 3v2m1.048 9.5A18.022 18.022 0 016.412 9m6.088 9h7M11 21l5-10 5 10M12.751 5C11.783 10.77 8.07 15.61 3 18.129"
                      ></path>
                    </svg>
                  </div>
                  <div className="flex-1">
                    <h3 className="font-semibold text-gray-800">
                      Bilingual Service
                    </h3>
                    <p className="text-gray-600 text-sm">English and Spanish</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
