import { useParams, Link } from "react-router-dom";

const serviceDetails = {
  chiropractic: {
    title: "Chiropractic Therapy",
    description: `Chiropractic is a type of alternative medicine that uses manual therapy to treat musculoskeletal issues, especially in the spine. Chiropractors use their hands to adjust the spine and other parts of the body to improve alignment and relieve pain. 
What does a chiropractor do? 
Examine and treat bones, muscles, and joints
Perform spinal manipulations
Use heat and ice
Provide relaxation techniques
Recommend exercise
Offer nutritional counseling
Provide dietary supplements
What conditions can chiropractic help with? 
Back pain
Neck pain
Headaches
Joint stiffness
Hand or foot problems
Arthritis
Sciatica
Muscle aches
Healing after an accident or whiplash
How does chiropractic work?
Chiropractic is based on the idea that the body can heal itself. Chiropractors aim to correct alignment issues and support the body's natural healing process. 
Is chiropractic painful?
Chiropractic adjustments are usually not painful, but you might feel mild pressure or hear a popping sound.`,
    details: ["Spinal adjustments", "Posture improvement"],
    benefits: ["Pain relief", "Enhanced mobility"],
  },
  cupping: {
    title: "Cupping Therapy",
    description: `What is cupping therapy?
Cupping therapy is an ancient healing technique that some people use to ease pain. A provider places cups on your back, stomach, arms, legs or other parts of your body. A vacuum or suction force inside the cup pulls your skin upward.What should I expect after cupping?
The suction force from cupping breaks open tiny blood vessels called capillaries under your skin. You'll have red, round cupping therapy marks that should fade in a week or two. Although these marks will look like bruises, they're not true bruises that injure muscle fibers.
How do healthcare providers perform cupping?
There are different ways to do cupping. The steps vary slightly depending on the chosen method. Your provider will leave the cups in place for several minutes. Some treatments involve briefly moving the cups to stretch and massage the area.
How do healthcare providers perform cupping?
There are different ways to do cupping. The steps vary slightly depending on the chosen method. Your provider will leave the cups in place for several minutes. Some treatments involve briefly moving the cups to stretch and massage the area.

Cupping methods include:

Dry: Your provider heats the inside of each cup. The traditional method involves setting an alcohol-soaked cotton ball aflame. The heat sends oxygen out of the cup, creating a vacuum. A more modern approach involves using a suction device to remove air from the cups. The vacuum force pulls your skin up into the cup.
Running: This is like dry cupping. But before beginning, your provider will apply lotion or oil to your skin. Once they place the cups, they'll gently move them in different directions over the affected area of your body.
Bleeding: Your provider uses a needle to lightly puncture your skin before placing the cups. This allows for the release of toxins through the suctioned blood captured in the cup.
Depending on the treatment, your provider may place multiple cups on your skin. On average, providers use between three and five cups, though they might use up to seven. It's uncommon to get more than seven cups in a single treatment.
What does cupping therapy do?
Cupping uses suction to draw blood to or away from specific areas of your body. People mostly use cupping to relieve conditions that cause pain. Some people say it also helps with chronic (ongoing) health issues. Cupping may ease symptoms of:

Arthritis, including rheumatoid arthritis.
Back pain, neck pain, knee pain and shoulder pain.
Asthma and other breathing issues.
Carpal tunnel syndrome.
Gastrointestinal (GI) disorders like irritable bowel disease (IBD).
Headaches and migraines.
High blood pressure (hypertension).
`,
    details: ["Dry cupping", "Wet cupping"],
    benefits: ["Relaxation", "Improved circulation"],
  },
  // Add more services here
  rehabilitationExercise: {
    title: "Rehabilitation Exercise",
    description: `
      Rehabilitation exercises are customized programs designed to restore mobility, strength, and function after an injury, surgery, or muscle strain. These exercises focus on improving flexibility, strength, and stability, ultimately aiding in recovery.
      
      What does a rehabilitation exercise program involve? 
      - Custom exercise plans based on individual needs
      - Strength-building exercises
      - Stretching routines to enhance flexibility
      - Postural training
      - Functional exercises for restoring daily activities

      What conditions can rehabilitation exercise help with? 
      - Post-surgery recovery
      - Chronic pain
      - Muscle weakness
      - Joint stiffness
      - Posture problems
      - Sports injuries

      How do rehabilitation exercises work?
      Rehabilitation exercises work by targeting specific muscle groups to improve mobility, strength, and function. By following a structured program, patients can recover faster and reduce the risk of future injuries.

      Are rehabilitation exercises painful?
      Most exercises should not cause pain. If there is discomfort, it may be part of the healing process, but exercises should be modified to avoid injury.
    `,
    details: ["Customized exercise plans", "Strength and flexibility building", "Posture correction", "Sports injury recovery"],
    benefits: ["Improved mobility", "Faster recovery", "Strengthened muscles", "Prevention of further injuries"],
  },

  dryNeedling: {
    title: "Dry Needling",
    description: `
      Dry needling is a technique used by physical therapists and other healthcare providers to target and relieve muscle pain. It involves inserting fine needles into trigger points (muscle knots) to alleviate tension and pain.

      What does dry needling do? 
      - Releases muscle tension and knots
      - Stimulates blood flow and promotes healing
      - Improves range of motion

      What conditions can dry needling help with? 
      - Chronic pain
      - Muscle stiffness
      - Headaches and migraines
      - Sciatica
      - Sports injuries
      - TMJ (Temporomandibular joint) pain

      How does dry needling work?
      Dry needling works by stimulating the muscle fibers directly, promoting healing and reducing muscle tightness, inflammation, and pain. The needles create micro-trauma to the muscle, which encourages the healing process.

      Is dry needling painful?
      While dry needling can cause mild discomfort during insertion, it generally provides relief after the session.
    `,
    details: ["Needling into trigger points", "Pain relief", "Increased circulation", "Muscle relaxation"],
    benefits: ["Pain reduction", "Muscle tension relief", "Improved range of motion", "Faster recovery from injuries"],
  },

  manualTreatment: {
    title: "Manual Treatment",
    description: `
      Manual treatment involves the use of hands-on techniques to manipulate soft tissues, muscles, and joints. It aims to relieve pain, improve mobility, and enhance the function of the body.

      What does manual treatment involve? 
      - Joint mobilization
      - Muscle stretching
      - Soft tissue manipulation
      - Pain management through hands-on techniques

      What conditions can manual treatment help with? 
      - Joint stiffness and pain
      - Muscle tension
      - Back and neck pain
      - Postural imbalances
      - Sports injuries

      How does manual treatment work?
      Manual treatment works by applying direct pressure and manipulation to the muscles and joints, which helps increase circulation, improve flexibility, and reduce pain. The therapy also restores normal movement and function to the affected areas.

      Is manual treatment painful?
      Manual treatment should not cause intense pain. Some discomfort may be experienced when treating areas with deep muscle tension or injury, but it typically provides relief after treatment.
    `,
    details: ["Joint mobilization", "Muscle stretching", "Pain management", "Soft tissue therapy"],
    benefits: ["Pain relief", "Improved joint mobility", "Enhanced muscle relaxation", "Faster recovery from injuries"],
  },

  scrapping: {
    title: "Scraping Therapy",
    description: `
      Scraping therapy, also known as Gua Sha, is an ancient technique that involves scraping the skin with a smooth-edged tool to relieve muscle tension, improve circulation, and promote healing.

      What does scraping therapy involve? 
      - Use of smooth-edged tools to scrape the skin
      - Reduces muscle tension and stiffness
      - Improves blood flow and circulation
      - Stimulates lymphatic drainage

      What conditions can scraping therapy help with? 
      - Muscle tension
      - Chronic pain
      - Inflammation
      - Limited mobility
      - Poor circulation

      How does scraping therapy work?
      Scraping therapy works by applying controlled pressure with a smooth tool on the skin, which creates micro-trauma. This process enhances circulation and promotes the removal of toxins from the body, helping the healing process.

      Is scraping therapy painful?
      Scraping therapy may cause some discomfort, especially if the muscles are tight or inflamed, but it is not meant to cause intense pain. Afterward, you might experience redness or mild bruising, which fades quickly.
    `,
    details: ["Smooth-edged tool scraping", "Muscle tension relief", "Improved circulation", "Lymphatic drainage"],
    benefits: ["Pain relief", "Reduced inflammation", "Improved flexibility", "Boosted healing process"],
  },

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
