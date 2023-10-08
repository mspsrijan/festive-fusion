import React from "react";

const FeaturedWorks = () => {
  return (
    <div className="max-w-7xl mx-auto px-5 py-10 lg:py-16" data-aos="fade-in">
      <div className="flex flex-col gap-3 mx-auto text-center max-w-[700px] mb-16">
        <p className="uppercase text-[#CD5C08] tracking-[1px]">
          A Glimpse into Our Creative Portfolio
        </p>
        <h1 className="text-4xl lg:text-5xl font-extrabold leading-snug">
          Featured Works
        </h1>
        <p>
          Explore some of our proudest moments and remarkable events that
          showcase our dedication to making memories.
        </p>
      </div>
      <div
        className="grid grid-cols-1 md:grid-cols-2 gap-y-10"
        data-aos="fade-up"
        data-aos-delay="200"
      >
        <div>
          <img
            src="https://i.ibb.co/mBSKRKD/event-wedding.jpg"
            alt=""
            className="w-full h-auto md:h-[230px] lg:h-[400px] object-cover"
          />
          <h3 className="text-xl font-semibold border-l-4 border-[#CD5C08] pl-3 mt-5 ml-1">
            Adam Smith's Dream Wedding
          </h3>
        </div>
        <div>
          <img
            src="https://i.ibb.co/hsm6jdg/event-birthday.jpg"
            alt=""
            className="w-full h-auto md:h-[230px] lg:h-[400px] object-cover"
          />
          <h3 className="text-xl font-semibold border-l-4 border-[#CD5C08] pl-3 mt-5 ml-1">
            Johnson's Epic Birthday Bash
          </h3>
        </div>
        <div>
          <img
            src="https://i.ibb.co/2d0XLgr/event-anniversary.jpg"
            alt=""
            className="w-full h-auto md:h-[230px] lg:h-[400px] object-cover"
          />
          <h3 className="text-xl font-semibold border-l-4 border-[#CD5C08] pl-3 mt-5 ml-1">
            Mr. and Mrs. Davis' Romantic Anniversary
          </h3>
        </div>
        <div>
          <img
            src="https://i.ibb.co/5YGqVpB/event-retirement.jpg"
            alt=""
            className="w-full h-auto md:h-[230px] lg:h-[400px] object-cover"
          />
          <h3 className="text-xl font-semibold border-l-4 border-[#CD5C08] pl-3 mt-5 ml-1">
            Mr. Anderson's Unforgettable Retirement Party
          </h3>
        </div>
      </div>
    </div>
  );
};

export default FeaturedWorks;
