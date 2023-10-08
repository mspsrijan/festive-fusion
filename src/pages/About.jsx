const About = () => {
  return (
    <div>
      <div>
        <div
          className="hero min-h-[350px] px-5"
          style={{
            backgroundImage: "url(https://i.ibb.co/n3mJNr3/about-us-bg.jpg)",
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundColor: "rgba(0,0,0,0.6)",
            backgroundBlendMode: "overlay",
          }}
        >
          <div className="text-center text-white">
            <div className="max-w-[800px]" data-aos="fade-in">
              <h1 className="mb-5 text-4xl lg:text-5xl font-extrabold leading-snug">
                Our Story
              </h1>
              <p className="mb-5">
                Discover the journey and passion behind FestiveFusion, your
                partner in creating unforgettable moments and cherished
                memories.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
