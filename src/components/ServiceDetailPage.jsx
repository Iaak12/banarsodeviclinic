import { useParams, Link } from "react-router-dom";

const serviceDetails = {
  chiropractic: {
    title: "Chiropractic Therapy",
    description: `
      Chiropractic is a type of alternative medicine that uses manual therapy to treat musculoskeletal issues, especially in the spine. Chiropractors use their hands to adjust the spine and other parts of the body to improve alignment and relieve pain.
      `,
    details: [
      "Examine and treat bones, muscles, and joints",
      "Perform spinal manipulations",
      "Use heat and ice",
      "Provide relaxation techniques",
      "Recommend exercise",
      "Offer nutritional counseling",
      "Provide dietary supplements",
    ],
    benefits: [
      "Back pain",
      "Neck pain",
      "Headaches",
      "Joint stiffness",
      "Hand or foot problems",
      "Arthritis",
      "Sciatica",
      "Muscle aches",
    ],
  },
  cupping: {
    title: "Cupping Therapy",
    description: `
      Cupping therapy is an ancient healing method that may ease back pain, neck pain, headaches, and other issues. It uses suction to pull on your skin and increase blood flow to the affected area. 
      `,
    details: [
      "Dry cupping: Uses heat to create suction on the skin.",
      "Running cupping: Involves moving cups to massage specific areas.",
      "Wet cupping: Lightly punctures the skin to release toxins.",
    ],
    benefits: [
      "Improved blood circulation",
      "Muscle relaxation",
      "Reduction of inflammation",
      "Relief from pain, including back and neck pain",
      "Improved skin health",
      "Faster recovery from injuries",
      "Support for respiratory and gastrointestinal conditions",
    ],
  },
  rehabilitationExercise: {
    title: "Rehabilitation Exercise",
    description: `
      Rehabilitation exercises are tailored programs aimed at restoring mobility, strength, and function after an injury or surgery.
      `,
    details: [
      "Custom exercise plans based on individual needs",
      "Strength-building exercises to improve muscle performance",
      "Stretching routines to enhance flexibility and reduce stiffness",
      "Postural training to correct alignment and balance",
      "Functional training to restore daily activity abilities",
    ],
    benefits: [
      "Improved mobility and flexibility",
      "Faster recovery after injuries or surgeries",
      "Reduction of chronic pain",
      "Enhanced muscle strength and endurance",
      "Prevention of future injuries",
    ],
  },
  dryNeedling: {
    title: "Dry Needling",
    description: `
      Dry needling is a targeted therapy using fine needles to release muscle knots, alleviate pain, and improve recovery.
      `,
    details: [
      "Insertion of thin needles into trigger points",
      "Reduction of muscle tension and knots",
      "Stimulation of blood flow and healing",
      "Release of chronic pain and stiffness",
    ],
    benefits: [
      "Relief of chronic pain",
      "Improved muscle function",
      "Reduced muscle tension and knots",
      "Faster recovery from injuries",
      "Increased range of motion",
    ],
  },
  manualTreatment: {
    title: "Manual Treatment",
    description: `
      Manual treatment involves skilled hands-on techniques to manipulate soft tissues and joints, relieving pain and improving function.
      `,
    details: [
      "Joint mobilization to restore movement",
      "Muscle stretching to improve flexibility",
      "Trigger point therapy to alleviate localized pain",
      "Soft tissue manipulation for tension relief",
      "Pain management through hands-on techniques",
    ],
    benefits: [
      "Improved joint mobility",
      "Reduction in pain and stiffness",
      "Enhanced blood flow and circulation",
      "Better muscle relaxation",
      "Increased physical performance",
    ],
  },
  scrapping: {
    title: "Scraping Therapy (Gua Sha)",
    description: `
      Scraping therapy, also known as Gua Sha, is a traditional technique involving gentle scraping of the skin to improve circulation and reduce inflammation.
      `,
    details: [
      "Use of smooth-edged tools for scraping",
      "Reduction of muscle tension and stiffness",
      "Improvement of blood flow to targeted areas",
      "Stimulation of lymphatic drainage for detoxification",
    ],
    benefits: [
      "Improved circulation",
      "Reduction of inflammation",
      "Relief from muscle tension and pain",
      "Enhanced mobility and flexibility",
      "Boost in natural healing processes",
    ],
  },
  // Add similar data for other services
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
