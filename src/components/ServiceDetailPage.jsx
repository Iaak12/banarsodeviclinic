import { useParams, Link } from "react-router-dom";

const serviceDetails = {
  chiropractic: {
    title: "Chiropractic Therapy",
    description: `Chiropractic therapy is a manual approach to treating musculoskeletal issues.`,
    details: ["Spinal adjustments", "Posture improvement"],
    benefits: ["Pain relief", "Enhanced mobility"],
  },
  cupping: {
    title: "Cupping Therapy",
    description: `Cupping therapy uses suction to increase blood flow and relieve tension.`,
    details: ["Dry cupping", "Wet cupping"],
    benefits: ["Relaxation", "Improved circulation"],
  },
  // Add more services here
};

const ServiceDetailPage = () => {
  const { serviceId } = useParams();
  const service = serviceDetails[serviceId];

  if (!service) {
    return <div className="text-center text-red-500">Service not found!</div>;
  }

  return (
    <div className="min-h-screen px-5 md:px-10 lg:px-32 pt-20 md:pt-24">
      <h1 className="text-2xl md:text-4xl font-bold text-backgroundColor mb-4">
        {service.title}
      </h1>
      <p className="text-sm md:text-lg mb-6">{service.description}</p>
      {service.details && (
        <>
          <h2 className="text-lg md:text-2xl font-semibold mb-3">Details</h2>
          <ul className="list-disc list-inside space-y-2 text-sm md:text-base">
            {service.details.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </>
      )}
      <h2 className="text-lg md:text-2xl font-semibold mt-6 mb-3">Benefits</h2>
      <ul className="list-disc list-inside space-y-2 text-sm md:text-base">
        {service.benefits.map((benefit, index) => (
          <li key={index}>{benefit}</li>
        ))}
      </ul>
      <Link
        to="/services"
        className="inline-block mt-8 px-6 py-3 bg-backgroundColor text-white rounded-md hover:bg-hoverColor transition"
      >
        Back to Services
      </Link>
    </div>
  );
};

export default ServiceDetailPage;
