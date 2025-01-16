import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

const Contact = () => {
  const location = useLocation();
  const [scrollToForm, setScrollToForm] = useState(false);

  useEffect(() => {
    if (location.state?.scrollToForm) {
      setScrollToForm(true);
    }
  }, [location.state]);

  useEffect(() => {
    if (scrollToForm) {
      document
        .getElementById("contact-form")
        ?.scrollIntoView({ behavior: "smooth" });
    }
  }, [scrollToForm]);

  return (
    <div className="min-h-screen bg-gray-100 text-gray-800 pt-16">
      {/* Hero Section */}
      <div className="bg-backgroundColor text-white py-12 px-6 text-center">
        <h1 className="text-4xl font-bold">Contact Us</h1>
        <p className="mt-4 text-lg">
          Feel free to reach out to us for appointments, queries, or any other
          information.
        </p>
      </div>

      {/* Main Section */}
      <div className="container mx-auto py-12 px-6 md:px-12 lg:px-20">
        <div className="flex flex-col md:flex-row gap-12 items-start">
          {/* Get In Touch Section */}
          <div className="flex-1">
            <h2 className="text-3xl font-semibold">Get In Touch</h2>
            <p className="mt-4 text-gray-600">
              Have any questions or concerns? We’re always ready to help! Send
              us an email or call us.
            </p>
            <div className="mt-6 space-y-4">
              <div className="flex items-center">
                <span className="text-xl text-backgroundColor font-bold mr-4">
                  📞
                </span>
                <p className="text-gray-700">+91 12345 67890</p>
              </div>
              <div className="flex items-center">
                <span className="text-xl text-backgroundColor font-bold mr-4">
                  📧
                </span>
                <p className="text-gray-700">contact@banarsodeviclinic.com</p>
              </div>
              <div className="flex items-center">
                <span className="text-xl text-backgroundColor font-bold mr-4">
                  📍
                </span>
                <p className="text-gray-700">
                  123 Clinic Road, Your City, India
                </p>
              </div>
            </div>
          </div>

          {/* Contact Form Section */}
          <div
            className="flex-1 bg-white p-6 rounded-lg shadow-md w-full md:w-auto"
            id="contact-form"
          >
            <h3 className="text-2xl font-semibold text-backgroundColor text-center">
              Book an Appointment
            </h3>
            <form
              className="space-y-6"
              onSubmit={(e) => {
                e.preventDefault(); // Prevent default form submission
                alert("Form submitted successfully!");
              }}
            >
              <div className="flex flex-col">
                <label
                  htmlFor="firstName"
                  className="text-sm font-medium text-gray-600"
                >
                  First Name
                </label>
                <input
                  type="text"
                  id="firstName"
                  name="firstName"
                  placeholder="Your First Name"
                  className="mt-2 p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-backgroundColor"
                  required
                />
              </div>
              <div className="flex flex-col">
                <label
                  htmlFor="lastName"
                  className="text-sm font-medium text-gray-600"
                >
                  Last Name
                </label>
                <input
                  type="text"
                  id="lastName"
                  name="lastName"
                  placeholder="Your Last Name"
                  className="mt-2 p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-backgroundColor"
                  required
                />
              </div>
              <div className="flex flex-col">
                <label
                  htmlFor="email"
                  className="text-sm font-medium text-gray-600"
                >
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="Your Email Address"
                  className="mt-2 p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-backgroundColor"
                  required
                />
              </div>
              <div className="flex flex-col">
                <label
                  htmlFor="phone"
                  className="text-sm font-medium text-gray-600"
                >
                  Phone Number
                </label>
                <input
                  type="text"
                  id="phone"
                  name="phone"
                  placeholder="Your Phone Number"
                  className="mt-2 p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-backgroundColor"
                  required
                />
              </div>
              <button
                type="submit"
                className="w-full bg-backgroundColor text-white py-3 rounded-lg hover:bg-hoverColor transition duration-300"
              >
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
