import { useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Doctors = () => {
  const data = [
    {
      img: "/assets/dr1.jpg",
      name: "Ruqayya",
      specialties: "Physical Therapist (PT)",
      header: "Our Physiotherapist",
    },
    {
      img: "/assets/about2.jpg", // Add the new image path
      name: "Gautam Batra",
      specialties: "Chiropractor",
      header: "Our Chiropractor",
    },
  ];

  const [header, setHeader] = useState(data[0].header); // Set initial header

  const settings = {
    accessibility: true,
    dots: true,
    infinite: false,
    speed: 500,
    arrows: false,
    slidesToShow: 1,
    slidesToScroll: 1,
    beforeChange: (current, next) => setHeader(data[next].header), // Change header on slide change
    responsive: [
      {
        breakpoint: 1023,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div
      id="doctors"
      className="min-h-screen flex flex-col justify-center items-center lg:px-32 px-5 pt-16"
    >
      <div className="text-center mb-10">
        <h1 className="text-4xl font-semibold">{header}</h1>
        <p className="mt-2">
          Meet our highly skilled and compassionate doctors, dedicated to providing exceptional care and improving your well-being.
        </p>
      </div>
      <div className="w-full max-w-[280px] lg:max-w-[320px]">
        <Slider {...settings}>
          {data.map((doctor, index) => (
            <div
              className="h-[350px] lg:h-[400px] w-full text-black rounded-xl shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px] mb-2 cursor-pointer"
              key={index}
            >
              <div>
                <img
                  src={doctor.img}
                  alt={doctor.name}
                  className="h-56 lg:h-[250px] rounded-t-xl w-full object-cover"
                />
              </div>
              <div className="flex flex-col justify-center items-center">
                <h1 className="font-semibold text-xl pt-4">{doctor.name}</h1>
                <h3 className="pt-2">{doctor.specialties}</h3>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default Doctors;
