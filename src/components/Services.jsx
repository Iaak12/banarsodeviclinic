import Button from "../layouts/Button"
import ServicesCard from "../layouts/ServicesCard"
import { RiMicroscopeLine } from "react-icons/ri";
import { TbMassage } from "react-icons/tb";
import { MdAssistWalker } from "react-icons/md";

const Services = () => {

  const icon1 = <RiMicroscopeLine size={35} className="text-backgroundColor"/>
  const icon2 = <TbMassage size={35} className="text-backgroundColor"/>
  const icon3 = <MdAssistWalker  size={35} className="text-backgroundColor"/>

  return (
    <div className="min-h-screen flex flex-col justify-center lg:px-32 px-5 pt-24 lg:pt-16 ">
        <div className="flex flex-col items-center lg:flex-row justify-between">
            <div>
                <h1 className="text-4xl font-semibold text-center lg:text-start">Our Services</h1>
                <p className="mt-2 text-center lg:text-start">At Banarso Devi Spine Clinic, we offer a comprehensive range of services to help you achieve optimal health and well-being. Our expert team specializes in chiropractic care, providing precise adjustments to restore alignment and reduce pain. We also offer advanced therapies such as cupping, scrapping, and dry needling to address muscle tension and improve recovery.</p>
            </div>
            <div className="mt-4 lg:mt-0">
                <Button title="See Services"/>
            </div>
        </div>
        <div className="flex flex-col lg:flex-row gap-5 pt-14 ">
            <ServicesCard icon={icon1} title="Lab Test"/>
            <ServicesCard icon={icon2} title="Trigger point Massage"/>
            <ServicesCard icon={icon3} title="Rehabilitation exercises"/>
        </div>
    </div>
  )
}

export default Services