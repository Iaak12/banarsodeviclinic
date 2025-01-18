import img from "../assets/about2.jpg"

const About = () => {
  return (
    <div id="about" className="min-h-screen flex flex-col lg:flex-row justify-between items-center lg:px-32 px-5 pt-24 lg:pt-16 gap-5 ">
        <div className="w-full lg:h-3/4 space-y-4">
            <h1 className="text-4xl font-semibold text-center lg:text-start">About Us</h1>
            <p className="text-justify lg:text-start">
            Welcome to Banarso Devi Spine Clinic, led by our expert Director and Chiropractor, Gautam Batra. We are dedicated to providing personalized care through advanced techniques like chiropractic adjustments, cupping, scrapping, dry needling, and more. Our goal is to help you achieve optimal health, relieve pain, and restore mobility through tailored rehabilitation exercises, trigger point massage, and manual treatments. Experience compassionate care and innovative solutions for a healthier you.
            </p>
            <p className="text-justify lg:text-start">
            We offer a wide range of advanced therapies, including chiropractic adjustments, cupping, scrapping, dry needling, and manual treatments. Our holistic approach ensures that every treatment is tailored to your specific requirements, providing effective relief and long-term results. With a focus on precision and care, we strive to enhance your overall well-being.
            </p>
            <p className="text-justify lg:text-start">
            At Banarso Devi Spine Clinic, we also emphasize rehabilitation through customized exercise programs and trigger point massage techniques. Our goal is to not only treat existing issues but also prevent future discomfort, enabling you to enjoy an active and pain-free lifestyle. Trust us to be your partner in achieving optimal health and wellness.
            </p>
        </div>

        <div className="w-full lg:w-3/4">
            <img src={img} alt="img" className="rounded-lg"/>
        </div>

    </div>
  )
}

export default About