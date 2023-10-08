const About = () => {
  return (
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
              partner in creating unforgettable moments and cherished memories.
            </p>
          </div>
        </div>
      </div>

      <div
        className="max-w-7xl mx-auto px-5 py-10 lg:py-16 flex flex-col-reverse lg:flex-row justify-between items-center gap-10 lg:gap-20"
        data-aos="fade-in"
      >
        <div>
          <img src="https://i.ibb.co/6RD0FJ6/about-us.jpg" alt="" />
        </div>
        <div className="flex flex-col gap-3 mx-auto max-w-xl">
          <p className="uppercase text-[#CD5C08] tracking-[1px]">
            Crafting Moments, Creating Memories
          </p>
          <h1 className="text-4xl lg:text-5xl font-extrabold leading-snug">
            About FestiveFusion
          </h1>
          <p>
            At FestiveFusion, we are passionate about transforming your special
            occasions into unforgettable memories. With years of experience in
            event planning and a dedicated team of creative minds, we take pride
            in crafting unique and personalized experiences. From weddings and
            birthdays to anniversaries and engagements, our mission is to infuse
            every event with creativity, elegance, and heart. Discover the story
            behind our journey, our commitment to excellence, and our dedication
            to making your moments truly magical.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-5 py-10 lg:py-16" data-aos="fade-in">
        <div className="flex flex-col gap-3 mx-auto text-center max-w-[700px] mb-16">
          <p className="uppercase text-[#CD5C08] tracking-[1px]">
            The Creative Minds Behind FestiveFusion
          </p>
          <h1 className="text-4xl lg:text-5xl font-extrabold leading-snug">
            Meet Our Dedicated Team
          </h1>
          <p>
            Our team is a passionate blend of event enthusiasts and creative
            professionals, dedicated to making your dreams a reality.
          </p>
        </div>

        <div
          className="grid grid-cols-1 lg:grid-cols-3 gap-10"
          data-aos="fade-up"
          data-aos-delay="200"
        >
          <div>
            <img
              src="https://i.ibb.co/3R7PGxx/Emily-Williams.jpg"
              alt=""
              className="w-full h-auto md:h-[230px] lg:h-[400px] object-cover"
            />
            <h3 className="text-xl font-semibold border-l-4 border-[#CD5C08] pl-3 mt-5 ml-1">
              Emily Williams
            </h3>
            <p className="pl-5 text-sm">Event Coordinator</p>
          </div>

          <div>
            <img
              src="https://i.ibb.co/7YZXwJz/Jonathan-Carter.jpg"
              alt=""
              className="w-full h-auto md:h-[230px] lg:h-[400px] object-cover"
            />
            <h3 className="text-xl font-semibold border-l-4 border-[#CD5C08] pl-3 mt-5 ml-1">
              Jonathan Carter
            </h3>
            <p className="pl-5 text-sm">Creative Director</p>
          </div>

          <div>
            <img
              src="https://i.ibb.co/r4PKfxc/Sarah-Mitchell.jpg"
              alt=""
              className="w-full h-auto md:h-[230px] lg:h-[400px] object-cover"
            />
            <h3 className="text-xl font-semibold border-l-4 border-[#CD5C08] pl-3 mt-5 ml-1">
              Sarah Mitchell
            </h3>
            <p className="pl-5 text-sm">Wedding Planner</p>
          </div>

          <div>
            <img
              src="https://i.ibb.co/QYCrs3T/David-Turner.jpg"
              alt=""
              className="w-full h-auto md:h-[230px] lg:h-[400px] object-cover"
            />
            <h3 className="text-xl font-semibold border-l-4 border-[#CD5C08] pl-3 mt-5 ml-1">
              David Turner
            </h3>
            <p className="pl-5 text-sm">Event Designer</p>
          </div>

          <div>
            <img
              src="https://i.ibb.co/cDKGdpp/Jessica-Bennett.jpg"
              alt=""
              className="w-full h-auto md:h-[230px] lg:h-[400px] object-cover"
            />
            <h3 className="text-xl font-semibold border-l-4 border-[#CD5C08] pl-3 mt-5 ml-1">
              Jessica Bennett
            </h3>
            <p className="pl-5 text-sm">Marketing Manager</p>
          </div>

          <div>
            <img
              src="https://i.ibb.co/S3jz6Fb/Michael-Anderson.jpg"
              alt=""
              className="w-full h-auto md:h-[230px] lg:h-[400px] object-cover"
            />
            <h3 className="text-xl font-semibold border-l-4 border-[#CD5C08] pl-3 mt-5 ml-1">
              Michael Anderson
            </h3>
            <p className="pl-5 text-sm">Customer Relations Specialist</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
