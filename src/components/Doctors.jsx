import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Doctors = () => {
  const data = [
    {
      img: "/assets/dr1.jpg",
      name: "Dr. Ruqayya",
      specialties: "Physical Therapist (PT)",
    },
  ];

  const settings = {
    accessibility: true,
    dots: true,
    infinite: false,
    speed: 500,
    arrows: false,
    slidesToShow: 1,
    slidesToScroll: 1,
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
    <div id="doctors" className="min-h-screen flex flex-col justify-center items-center lg:px-32 px-5 pt-16">
      <div className="text-center mb-10">
        <h1 className="text-4xl font-semibold">Our Doctors</h1>
        <p className="mt-2">
          Meet our highly skilled and compassionate doctor, dedicated to providing exceptional care and improving your well-being.
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
