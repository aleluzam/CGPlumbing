import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="text-white py-8" style={{ backgroundColor: "#2d7a70" }}>
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center md:text-left">
          <div>
            <h3 className="text-xl font-bold text-white mb-2">CG Plumbing</h3>
            <p className="text-sm mb-1" style={{ color: "#a8d5d0" }}>
              Professional plumbing services
            </p>
            <p className="text-sm" style={{ color: "#8cccc4" }}>
              📍 Miami & surrounding areas
            </p>
          </div>

          <div>
            <h4 className="font-semibold mb-2" style={{ color: "#a8d5d0" }}>
              Quick Links
            </h4>
            <div className="space-y-1 text-sm" style={{ color: "#8cccc4" }}>
              <div>
                <Link to="/contactus" className="hover:text-white">
                  Contact Us
                </Link>
              </div>
              <div>
                <Link to="/services" className="hover:text-white">
                  Services
                </Link>
              </div>
              <div>
                <Link to="/aboutus" className="hover:text-white">
                  About Us
                </Link>
              </div>
            </div>
          </div>

          <div>
            <h4 className="font-semibold mb-2" style={{ color: "#a8d5d0" }}>
              Contact
            </h4>
            <div className="space-y-1 text-sm" style={{ color: "#8cccc4" }}>
              <div>
                📞{" "}
                <a href="tel:+17868734513" className="hover:text-white">
                  +1 786-873-4513{" "}
                </a>
              </div>
              <div>
                📧{" "}
                <a
                  href="mailto:cgplumbingmultiservi@gmail.com"
                  className="hover:text-white"
                >
                  cgplumbingmultiservi@gmail.com{" "}
                </a>
              </div>
            </div>
          </div>
        </div>

        <div
          className="mt-6 pt-4 text-center"
          style={{ borderTop: "1px solid #3d6b63" }}
        >
          <p className="text-xs mb-3" style={{ color: "#6bc4ba" }}>
            Website created by{" "}
            <a
              href="https://github.com/aleluzam"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white underline"
            >
              Code Stick
            </a>
          </p>

          <div
            className="pt-3 text-sm"
            style={{ borderTop: "1px solid #4a7c73", color: "#6bc4ba" }}
          >
            © {new Date().getFullYear()} CG Plumbing - All rights reserved
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
