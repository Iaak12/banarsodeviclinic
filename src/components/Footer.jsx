import { Link } from "react-router-dom";
import { FaFacebook, FaInstagram, FaLinkedin, FaWhatsapp, FaYoutube } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-backgroundColor text-white py-10">
      <div className="container mx-auto px-5 md:px-32">
        {/* Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Column 1: About Section */}
          <div>
            <h2 className="text-lg font-semibold mb-4">Banarso Devi Clinic</h2>
            <p className="text-sm leading-6">
              Your trusted health partner offering top-notch medical services
              with a team of experienced doctors. We’re committed to your
              well-being and health.
            </p>
          </div>

          {/* Column 2: Address Section */}
          <div>
            <h2 className="text-lg font-semibold mb-4">Contact Information</h2>
            <p className="text-sm leading-6">
              <strong>Address:</strong> <br />
              BANARSO DEVI CLINIC {`{SPINE X}`} <br />
              56/7, Basement, Old Rajender Nagar, 
              Opposite Grover Mithaiwala
              New Delhi-110060.
              <span className="mt-2 block">Nearest Metro Station: Karol Bagh</span>
            </p>
            <p className="text-sm mt-4">
              <strong>Phone:</strong> <br />
              <a href="tel:9953626323" className="hover:text-hoverColor">9953626323</a>, <a href="tel:9891517051" className="hover:text-hoverColor">9891517051</a>
            </p>
          </div>

          {/* Column 3: Quick Links */}
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

          {/* Column 4: Social Media */}
          <div>
            <h2 className="text-lg font-semibold mb-4">Follow Us</h2>
            <p className="text-sm mb-4">Stay connected through social media:</p>
            <div className="flex space-x-4">
              <a
                href="https://www.facebook.com/gautam.batra.5/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-hoverColor"
              >
                <FaFacebook size={24} />
              </a>
              <a
                href="https://www.instagram.com/gautambatrachiropractic/?hl=en"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-hoverColor"
              >
                <FaInstagram size={24} />
              </a>
              <a
                href="https://www.linkedin.com/in/gautam-batra-2b6a61129/?originalSubdomain=in"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-hoverColor"
              >
                <FaLinkedin size={24} />
              </a>
              <a
                href="https://www.youtube.com/channel/UC3epKEMJF_V8nCdir_Kim8A"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-red-500"
              >
                <FaYoutube size={24} />
              </a>
              <a
                href="https://wa.me/919953626323"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-green-500"
              >
                <FaWhatsapp size={24} />
              </a>
            </div>
          </div>
        </div>

        {/* Footer Bottom Section */}
        <div className="mt-8 text-center text-sm border-t border-gray-700 pt-4">
  <p>
    &copy; {new Date().getFullYear()} BanarsoDeviClinic. All rights reserved. Developed by{' '}
    <a 
      href="https://kumarsoft.in/" 
      className="hover:text-orange-500 transition-colors duration-300"
    >
      Kumarsoft
    </a>
  </p>
</div>

      </div>
    </footer>
  );
};

export default Footer;
