import { useEffect, useRef, useState } from "react";
import { useLocation } from "react-router-dom";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const location = useLocation();
  const [scrollToForm, setScrollToForm] = useState(false);
  const [message, setMessage] = useState(""); // For success/error feedback

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

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_o6jx1jd", // Service ID
        "template_a75bv9b", // Template ID
        form.current, // Form reference
        "1ZjJFEuVboqfjjDW8" // Public Key (User ID)
      )
      .then(
        () => {
          setMessage("Your message has been sent successfully!"); // Success feedback
          form.current.reset(); // Clear the form
        },
        (error) => {
          setMessage(
            `There was an error sending your message: ${error.text}` // Error feedback
          );
        }
      );
  };

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
              {/* Address */}
              <div className="flex items-center">
                <span className="text-xl text-backgroundColor font-bold mr-4">
                  📍
                </span>
                <p className="text-gray-700">
                  BANARSO DEVI CLINIC {"{SPINE X}"}<br />
                  56/7, Basement, Old Rajender Nagar, Opposite Grover
                  Mithaiwala<br />
                  New Delhi-110060.<br />
                  Nearest metro station - Karol Bagh.
                </p>
              </div>
              {/* Contact */}
              <div className="flex items-center">
                <span className="text-xl text-backgroundColor font-bold mr-4">
                  📞
                </span>
                <p className="text-gray-700">
                  +91 9953626323, +91 9891517051
                </p>
              </div>
              {/* Email */}
              <div className="flex items-center">
                <span className="text-xl text-backgroundColor font-bold mr-4">
                  📧
                </span>
                <p className="text-gray-700">
                  Gautambatrachiropractic@gmail.com
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
            {/* Feedback Message */}
            {message && (
              <p
                className={`text-center mt-4 p-2 rounded-md ${
                  message.includes("error")
                    ? "bg-red-100 text-red-600"
                    : "bg-green-100 text-green-600"
                }`}
              >
                {message}
              </p>
            )}
            <form ref={form} className="space-y-6" onSubmit={sendEmail}>
              {/* First Name */}
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
              {/* Last Name */}
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
              {/* Email Address */}
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
              {/* Phone Number */}
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
              {/* Message */}
              <div className="flex flex-col">
                <label
                  htmlFor="message"
                  className="text-sm font-medium text-gray-600"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  placeholder="Your Message"
                  className="mt-2 p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-backgroundColor h-24"
                  required
                ></textarea>
              </div>
              {/* Submit Button */}
              <button
                type="submit"
                className="w-full bg-backgroundColor text-white py-3 rounded-lg hover:bg-hoverColor transition duration-300"
              >
                Submit
              </button>
            </form>
          </div>
        </div>

        {/* Timetable Section */}
        <div className="mt-16">
          <h2 className="text-3xl font-semibold text-center text-backgroundColor">
            Timings
          </h2>
          <div className="mt-8 bg-white p-6 rounded-lg shadow-md">
            <table className="table-auto w-full text-left">
              <thead>
                <tr className="text-gray-700">
                  <th className="py-2 px-4 border-b-2">Day</th>
                  <th className="py-2 px-4 border-b-2">Timings</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="py-2 px-4 border-b">Monday</td>
                  <td className="py-2 px-4 border-b">
                    11am-2:30pm, 5:30pm-7:30pm
                  </td>
                </tr>
                <tr>
                  <td className="py-2 px-4 border-b">Tuesday</td>
                  <td className="py-2 px-4 border-b">11am-2:30pm</td>
                </tr>
                <tr>
                  <td className="py-2 px-4 border-b">Wednesday</td>
                  <td className="py-2 px-4 border-b">
                    11am-2:30pm, 5:30pm-7:30pm
                  </td>
                </tr>
                <tr>
                  <td className="py-2 px-4 border-b">Thursday</td>
                  <td className="py-2 px-4 border-b text-gray-500">OFF</td>
                </tr>
                <tr>
                  <td className="py-2 px-4 border-b">Friday</td>
                  <td className="py-2 px-4 border-b">
                    11am-2:30pm, 5:30pm-7:30pm
                  </td>
                </tr>
                <tr>
                  <td className="py-2 px-4 border-b">Saturday</td>
                  <td className="py-2 px-4 border-b">11am-3pm</td>
                </tr>
                <tr>
                  <td className="py-2 px-4 border-b">Sunday</td>
                  <td className="py-2 px-4 border-b">12pm-3pm</td>
                </tr>
              </tbody>
            </table>
            <p className="text-gray-600 mt-4 text-center">
              Direct walk-in, no appointment required as per timings mentioned.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
