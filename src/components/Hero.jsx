import { useEffect, useState } from "react";

const Hero = () => {
  const [scrollTarget, setScrollTarget] = useState(null);

  const scrollToSection = (sectionId) => {
    setScrollTarget(sectionId);
  };

  useEffect(() => {
    if (scrollTarget) {
      const section = document.getElementById(scrollTarget);
      if (section) {
        section.scrollIntoView({ behavior: "smooth" });
        setScrollTarget(null);
      }
    }
  }, [scrollTarget]);

  return (
    <div>
      <div
        className="hero min-h-[550px]"
        style={{
          backgroundImage: "url(https://i.ibb.co/tBMY4gw/hero-bg.jpg)",
          backgroundSize: "cover",
          backgroundColor: "rgba(0,0,0,0.6)",
          backgroundBlendMode: "overlay",
        }}
      >
        <div className="text-center text-white">
          <div className="max-w-[700px]" data-aos="fade-up">
            <h1 className="mb-5 text-5xl font-bold">
              Creating Unforgettable Moments
            </h1>
            <p className="mb-5">
              Welcome to FestiveFusion, where we blend creativity, passion, and
              meticulous planning to craft extraordinary events. From weddings
              that leave you breathless to birthdays filled with laughter, we
              turn your dreams into reality. Let us infuse magic into your
              special moments.
            </p>

            <button
              onClick={() => scrollToSection("services")}
              data-aos="fade-in"
              data-aos-delay="400"
              className="px-9 py-4 bg-white text-[#1F2937] rounded-md hover:bg-[#CD5C08] hover:text-white mt-6"
            >
              Our Services
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
