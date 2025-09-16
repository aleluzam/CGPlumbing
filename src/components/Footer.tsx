const Footer = () => {
  return (
    <footer className="text-white py-8" style={{ backgroundColor: "#2d7a70" }}>
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center md:text-left">
          <div>
            <h3 className="text-xl font-bold text-white mb-2">CG Plumbing</h3>
            <p className="text-sm" style={{ color: "#a8d5d0" }}>
              Professional plumbing services
            </p>
          </div>

          <div>
            <h4 className="font-semibold mb-2" style={{ color: "#a8d5d0" }}>
              Contact
            </h4>
            <div className="space-y-1 text-sm" style={{ color: "#8cccc4" }}>
              <div>
                📞{" "}
                <a href="tel:+1234567890" className="hover:text-white">
                  +1 (234) 567-8900
                </a>
              </div>
              <div>
                📧{" "}
                <a
                  href="mailto:info@cgplumbing.com"
                  className="hover:text-white"
                >
                  info@cgplumbing.com
                </a>
              </div>
            </div>
          </div>

          <div>
            <h4 className="font-semibold mb-2" style={{ color: "#a8d5d0" }}>
              Web Development
            </h4>
            <p className="text-xs" style={{ color: "#8cccc4" }}>
              Website created by{" "}
              <a
                href="https://github.com/aleluzam"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white underline"
              >
                Alejandro Luzardo
              </a>
            </p>
          </div>
        </div>

        <div
          className="mt-6 pt-4 text-center text-sm"
          style={{ borderTop: "1px solid #3d6b63", color: "#6bc4ba" }}
        >
          © {new Date().getFullYear()} CG Plumbing - All rights reserved
        </div>
      </div>
    </footer>
  );
};

export default Footer;
