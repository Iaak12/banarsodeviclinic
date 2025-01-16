import { Link } from "react-router-dom";
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-backgroundColor text-white py-8">
      <div className="container mx-auto px-5 md:px-32">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Column 1: About Section */}
          <div>
            <h2 className="text-lg font-semibold mb-4">BanarsoDeviClinic</h2>
            <p className="text-sm leading-6">
              Your trusted health partner offering top-notch medical services
              with a team of experienced doctors. We’re committed to your
              well-being and health.
            </p>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h2 className="text-lg font-semibold mb-4">Quick Links</h2>
            <ul className="text-sm space-y-2">
              <li>
                <Link to="/" className="hover:text-hoverColor">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about" className="hover:text-hoverColor">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/services" className="hover:text-hoverColor">
                  Services
                </Link>
              </li>
              <li>
                <Link to="/doctors" className="hover:text-hoverColor">
                  Doctors
                </Link>
              </li>
              <li>
                <Link to="/blogs" className="hover:text-hoverColor">
                  Blog
                </Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-hoverColor">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Social Media */}
          <div>
            <h2 className="text-lg font-semibold mb-4">Follow Us</h2>
            <p className="text-sm mb-4">Stay connected through social media:</p>
            <div className="flex space-x-4">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-hoverColor"
              >
                <FaFacebook size={24} />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-hoverColor"
              >
                <FaTwitter size={24} />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-hoverColor"
              >
                <FaInstagram size={24} />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-hoverColor"
              >
                <FaLinkedin size={24} />
              </a>
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="mt-8 text-center text-sm border-t border-gray-700 pt-4">
          <p>&copy; {new Date().getFullYear()} BanarsoDeviClinic. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
