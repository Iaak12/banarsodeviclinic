import { useEffect, useRef, useState } from "react";

const VideoSection = () => {
  const videoRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      { threshold: 0.5 } // Trigger when 50% of the video section is visible
    );

    const currentVideoSection = videoRef.current?.parentNode;
    if (currentVideoSection) {
      observer.observe(currentVideoSection);
    }

    return () => {
      if (currentVideoSection) {
        observer.unobserve(currentVideoSection);
      }
    };
  }, []);

  useEffect(() => {
    if (videoRef.current && typeof videoRef.current.play === "function") {
      if (isVisible) {
        videoRef.current.play();
      } else {
        videoRef.current.pause();
      }
    }
  }, [isVisible]);

  return (
    <div className="bg-gray-100 py-12">
      <div className="container mx-auto px-4 lg:px-16">
        <h2 className="text-2xl md:text-3xl font-semibold text-center text-backgroundColor mb-6">
          Watch Our Introduction Video
        </h2>
        <p className="text-center text-gray-600 mb-8">
          Learn more about our services, team, and how we can help you achieve
          your health goals.
        </p>
        <div className="relative max-w-md md:max-w-lg mx-auto bg-white p-4 rounded-lg shadow-lg">
          {/* Reduced aspect ratio */}
          <div className="aspect-w-16 aspect-h-7">
            <video
              ref={videoRef}
              className="w-full h-full object-cover rounded-md"
              muted
              loop
              controls
            >
              <source src="/assets/video/introduction.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VideoSection;
