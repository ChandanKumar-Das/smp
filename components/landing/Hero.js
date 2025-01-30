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
      <div className="bg-blue-700 p-4">
        <div className="max-w-[1200px] mx-auto flex flex-col lg:flex-row items-center">
          {/* Left Section */}
          <div className="mt-12 lg:mt-24 flex-1">
            <h1 className="font-bold text-3xl sm:text-5xl text-white">
              We Want To Turn Your Lookers Into Bookers.
            </h1>
            <h4 className="text-white font-semibold text-lg sm:text-xl pt-4 sm:pt-6">
              Providing African safari operators with more website visits, more bookings, and more agents.
            </h4>

            {/* Input with Button */}
            <div className="pt-10 sm:pt-16 flex flex-col sm:flex-row items-center">
              <div>
                <input
                  className="py-3 px-16 sm:px-20 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  list="options"
                  placeholder="Select an option"
                />
                <datalist id="options">
                  {dtopdownvalue.map((item, index) => (
                    <option key={index} value={item} />
                  ))}
                </datalist>
              </div>

              <div className="mt-4 uppercase sm:mt-0 sm:ml-4 py-3 px- sm:px-10 bg-red-600 font-bold text-lg sm:text-xl text-white rounded-md cursor-pointer hover:bg-red-700">
                Get a Free Quote
              </div>
            </div>

            {/* Image Logos */}
            <div className="flex pt-10 sm:pt-14 flex-wrap gap-4 justify-center sm:justify-start">
              {[...Array(5)].map((_, index) => (
                <div key={index}>
                  <Image
                    src="https://safarimarketingpro.com/images/hm-baner-logo-1.png"
                    alt={`Image ${index + 1}`}
                    width={80}
                    height={80}
                    className="rounded-md"
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Right Section */}
          <div className="flex-1 mt-10 lg:mt-0">
            <Image
              src="https://safarimarketingpro.com/images/banner-single-fig-1.png"
              width={600}
              height={600}
              alt="New Image"
              className="mx-auto lg:mx-0"
            />
          </div>
        </div>
      </div>
    </>
  );
}
