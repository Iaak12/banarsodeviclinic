import { Link } from "react-scroll";
import { FaFacebook, FaInstagram, FaYoutube, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <div className=" bg-backgroundColor text-white rounded-t-3xl mt-8 md:mt-0">
      <div className="flex flex-col md:flex-row justify-between p-8 md:px-32 px-5">
        <div className=" w-full md:w-1/4">
          <h1 className=" font-semibold text-xl pb-4">BanarsoDeviClinic</h1>
          <p className=" text-sm">
            Our team of dedicated doctors, each specializing in unique fields
            such as chiropractic therapy, rehabilitation exercises, dry needling, manual treatment, scrapping,
            and more.
          </p>
        </div>
        <div>
          <h1 className=" font-medium text-xl pb-4 pt-5 md:pt-0">About Us</h1>
          <nav className=" flex flex-col gap-2">
            <Link
              to="about"
              spy={true}
              smooth={true}
              duration={500}
              className=" hover:text-hoverColor transition-all cursor-pointer"
            >
              About
            </Link>
            <Link
              to="services"
              spy={true}
              smooth={true}
              duration={500}
              className=" hover:text-hoverColor transition-all cursor-pointer"
            >
              Services
            </Link>
            <Link
              to="doctors"
              spy={true}
              smooth={true}
              duration={500}
              className=" hover:text-hoverColor transition-all cursor-pointer"
            >
              Doctors
            </Link>
          </nav>
        </div>
        <div>
          <h1 className=" font-medium text-xl pb-4 pt-5 md:pt-0">Services</h1>
          <nav className=" flex flex-col gap-2">
            <Link
              to="services"
              spy={true}
              smooth={true}
              duration={500}
              className=" hover:text-hoverColor transition-all cursor-pointer"
            >
              Cupping
            </Link>
            <Link
              to="services"
              spy={true}
              smooth={true}
              duration={500}
              className=" hover:text-hoverColor transition-all cursor-pointer"
            >
              Chiropractic therapy
            </Link>
            <Link
              to="services"
              spy={true}
              smooth={true}
              duration={500}
              className=" hover:text-hoverColor transition-all cursor-pointer"
            >
              Manual Treatment
            </Link>
          </nav>
        </div>
        <div className=" w-full md:w-1/4">
          <h1 className=" font-medium text-xl pb-4 pt-5 md:pt-0">Contact Us</h1>
          <nav className=" flex flex-col gap-2">
            <Link to="/" spy={true} smooth={true} duration={500}>
              123 Elm Street, Suite 456 Springfield, IL 62701 United States
            </Link>
            <Link to="/" spy={true} smooth={true} duration={500}>
              support@care.com
            </Link>
            <Link to="/" spy={true} smooth={true} duration={500}>
              +123-456-7890
            </Link>
          </nav>
        </div>
      </div>
      {/* Social Media Section */}
      <div className="flex justify-center items-center gap-4 py-4 border-t border-gray-700">
        <a
          href="https://www.facebook.com/gautam.batra.5/reels/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-white hover:text-hoverColor transition-all text-2xl"
        >
          <FaFacebook />
        </a>
        <a
          href="https://www.instagram.com/gautambatrachiropractic/?hl=en"
          target="_blank"
          rel="noopener noreferrer"
          className="text-white hover:text-hoverColor transition-all text-2xl"
        >
          <FaInstagram />
        </a>
        <a
          href="https://www.linkedin.com/in/gautam-batra-2b6a61129/?originalSubdomain=in"
          target="_blank"
          rel="noopener noreferrer"
          className="text-white hover:text-hoverColor transition-all text-2xl"
        >
          <FaLinkedin />
        </a>
        <a
          href="https://www.youtube.com/@gautambatrachiropractic"
          target="_blank"
          rel="noopener noreferrer"
          className="text-white hover:text-hoverColor transition-all text-2xl"
        >
          <FaYoutube />
        </a>
      </div>
      <div>
        <p className=" text-center py-4">
          @copyright developed by
          <span className=" text-hoverColor"> Md. Ayaz</span> | All
          rights reserved
        </p>
      </div>
    </div>
  );
};

export default Footer;
