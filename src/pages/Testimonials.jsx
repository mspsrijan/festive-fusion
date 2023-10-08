import { FaQuoteLeft } from "react-icons/fa";

const Testimonials = () => {
  return (
    <div className="max-w-7xl mx-auto px-5 py-10 lg:py-16" data-aos="fade-in">
      <div className="flex flex-col gap-3 mx-auto text-center max-w-[700px] mb-16">
        <p className="uppercase text-[#CD5C08] tracking-[1px]">
          Hear From Those Who've Celebrated with Us
        </p>
        <h1 className="text-4xl lg:text-5xl font-extrabold leading-snug">
          What Our Clients Say
        </h1>
        <p>
          Discover the stories and experiences of our satisfied clients as they
          share their heartfelt testimonials with FestiveFusion.
        </p>
      </div>

      <div
        className="grid grid-cols-1 lg:grid-cols-3 gap-10"
        data-aos="fade-up"
        data-aos-delay="200"
      >
        <div className="border-[#C1D8C3] rounded-lg shadow p-8">
          <FaQuoteLeft
            style={{
              color: "CD5C08",
              margin: "auto",
            }}
          />
          <blockquote className="pt-3">
            <p className="text-xl font-medium text-center">
              FestiveFusion made my dream wedding a reality. Their attention to
              detail and creativity surpassed all expectations!.
            </p>
          </blockquote>
          <div className="flex items-center justify-center mt-6 space-x-3">
            <div className="flex items-center divide-x-2 divide-gray-500">
              <div className="pr-3 font-medium">Sarah Johnson</div>
              <div className="pl-3 text-sm font-light text-gray-700">Bride</div>
            </div>
          </div>
        </div>
        <div className="border-[#C1D8C3] rounded-lg shadow p-8">
          <FaQuoteLeft
            style={{
              color: "CD5C08",
              margin: "auto",
            }}
          />
          <blockquote className="pt-3">
            <p className="text-xl font-medium text-center">
              Our daughter's birthday party was a blast, thanks to
              FestiveFusion. They made it fun for kids and stress-free for us!
            </p>
          </blockquote>
          <div className="flex items-center justify-center mt-6 space-x-3">
            <div className="flex items-center divide-x-2 divide-gray-500">
              <div className="pr-3 font-medium">John Davis</div>
              <div className="pl-3 text-sm font-light text-gray-700">
                Proud Parent
              </div>
            </div>
          </div>
        </div>
        <div className="border-[#C1D8C3] rounded-lg shadow p-8">
          <FaQuoteLeft
            style={{
              color: "CD5C08",
              margin: "auto",
            }}
          />
          <blockquote className="pt-3">
            <p className="text-xl font-medium text-center">
              Celebrating our anniversary with FestiveFusion was truly magical.
              They captured our love story beautifully.
            </p>
          </blockquote>
          <div className="flex items-center justify-center mt-6 space-x-3">
            <div className="flex items-center divide-x-2 divide-gray-500">
              <div className="pr-3 font-medium">John & Emma</div>
              <div className="pl-3 text-sm font-light text-gray-700">
                Anniversary Couple
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
