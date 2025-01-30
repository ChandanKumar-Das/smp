"use client"

import Image from 'next/image';

export default function Hero() {
  const dtopdownvalue = [
    'I need more traffic to my website',
    'I need more customers',
    'I need more leads',
    'I need more sales',
    'I need help with brand awareness',
    'All of the above',
  ];

  return (
    <>
      <div className="bg-[rgba(61,114,194,0.95)] p-4">
        <div className="max-w-[1200px] mx-auto flex flex-col lg:flex-row items-center">
          {/* Left Section */}
          <div className="mt-12 lg:mt-24 flex-1">
            <h1 className="font-bold text-3xl sm:text-[50px] leading-[1.2] text-white">
              We Want To Turn Your Lookers Into Bookers.
            </h1>
            <h4 className="text-white font400 text-lg sm:text-xl pt-4 sm:pt-6">
              Providing African safari operators with more website visits, more bookings, and more agents.
            </h4>

            {/* Input with Button */}
            <div className="pt-10 sm:pt-16 flex flex-col sm:flex-row items-center space-x-0 sm:space-x-4">
  <div className="flex flex-colsm:flex-row items-center w-full sm:w-auto">
    <select
      className="py-5 px-4 border-2  border-red-600   focus:outline-none"
      name="smp_gfq_wclsa"
      id="smp_gfq_wclsa"
    >
      <option  >
        I need more traffic to my website
      </option>
      <option >I need more customers</option>
      <option >I need more leads</option>
      <option >I need more sales</option>
      <option >I need help with brand awareness</option>
      <option >All of the above</option>
    </select>

    <div className="mt-4 sm:mt-0 ">
      <input
        type="button"
        value="Get A Free Quote"
        className="py-5 px-8 bg-[#ff5254]  uppercase hover:bg-black hover:text-[#ff5254] text-white font-bold text- cursor-pointer "
      />
    </div>
  </div>
</div>



                                       

            {/* Image Logos */}
            <div className="flex pt-10 sm:pt-14 flex-wrap gap-4 justify-center sm:justify-start">
              {[...Array(5)].map((_, index) => (
                <div key={index}>
                  <Image
                    src="https://safarimarketingpro.com/images/hm-baner-logo-1.png"
                    alt={`Image ${index + 1}`}
                    width={100}
                    height={100}
                    className="rounded-md"
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Right Section */}
          <div className="flex-1  mt-10 lg:mt-0">
            <Image
              src="https://safarimarketingpro.com/images/banner-single-fig-1.png"
              width={600}
              height={600}
              alt="New Image"
              className="mx-auto  lg:mx-0"
            />
          </div>
        </div>
      </div>
    </>
  );
}
