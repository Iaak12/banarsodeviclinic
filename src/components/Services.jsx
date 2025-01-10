// import Button from "../layouts/Button"
import ServicesCard from "../layouts/ServicesCard"
import { MdAirlineSeatFlat } from "react-icons/md";
import { TbMassage } from "react-icons/tb";
import { MdAssistWalker } from "react-icons/md";
import { GiTripleNeedle } from "react-icons/gi";
import { FaUserDoctor } from "react-icons/fa6";

const Services = () => {

  const icon1 = <MdAirlineSeatFlat  size={35} className="text-backgroundColor"/>
  const icon2 = <TbMassage size={35} className="text-backgroundColor"/>
  const icon3 = <MdAssistWalker  size={35} className="text-backgroundColor"/>
  const icon4 = <GiTripleNeedle  size={35} className="text-backgroundColor"/>
  const icon5 = <FaUserDoctor size={35} className="text-backgroundColor"/>
  const icon6 =  <TbMassage size={35} className="text-backgroundColor"/>

  return (
    <div className="min-h-screen flex flex-col justify-center lg:px-32 px-5 pt-24 lg:pt-16 ">
        <div className="flex flex-col items-center lg:flex-row justify-between">
            <div>
                <h1 className="text-4xl font-semibold text-center lg:text-start">Our Services</h1>
                <p className="mt-2 text-center lg:text-start">At Banarso Devi Spine Clinic, we offer a comprehensive range of services to help you achieve optimal health and well-being. Our expert team specializes in chiropractic care, providing precise adjustments to restore alignment and reduce pain. We also offer advanced therapies such as cupping, scrapping, and dry needling to address muscle tension and improve recovery.</p>
            </div>
            <div className="mt-4 lg:mt-0">
                {/* <Button  title="See Services"/> */}
            </div>
        </div>
        <div className="flex flex-col lg:flex-row gap-5 pt-14 ">
            <ServicesCard icon={icon1} title="Cupping" data="A therapeutic technique that uses suction to relieve muscle tension, improve circulation, and promote healing." learnmore="https://www.ncbi.nlm.nih.gov/books/NBK538253/"/>
            <ServicesCard icon={icon2} title="Chiropractic therapy" data="A hands-on approach to spinal adjustments that improves alignment, relieves pain, and supports overall health." learnmore="https://www.nccih.nih.gov/health/chiropractic-in-depth#:~:text=Chiropractic%20is%20a%20licensed%20health,may%20be%20used%20as%20well."/>
            <ServicesCard icon={icon3} title="Rehabilitation exercises" data="Personalized exercise programs designed to strengthen muscles, restore mobility, and prevent future injuries." learnmore="https://www.sciencedirect.com/topics/medicine-and-dentistry/exercise-rehabilitation#:~:text=Exercise%20Rehabilitation-,Exercise%20rehabilitation%20has%20started%20gaining%20some%20attention%20as%20an%20appropriate,and%20thus%20impact%20on%20less"/>
        </div>
        <div className="flex flex-col lg:flex-row gap-5 pt-14 ">
            <ServicesCard icon={icon4} title="Dry Needling" data="A targeted treatment using fine needles to release muscle knots, reduce pain, and enhance recovery." learnmore="https://www.sciencedirect.com/topics/medicine-and-dentistry/dry-needling"/>
            <ServicesCard icon={icon5} title="Manual Treatment" data="Skilled hands-on techniques to manipulate soft tissues and joints, relieving pain and improving function." learnmore="https://www.sciencedirect.com/topics/medicine-and-dentistry/manual-therapy#:~:text=Manual%20therapy%20(MT)%20is%20defined,or%20restriction%2C%20induce%20relaxation%2C%20improve"/>
            <ServicesCard icon={icon6} title="Scrapping" data="Also known as gua sha, this technique involves gently scraping the skin to reduce inflammation and improve mobility." learnmore="https://pmc.ncbi.nlm.nih.gov/articles/PMC8483130/"/>
        </div>
    </div>
  )
}

export default Services