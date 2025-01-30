"use client";
import Image from "next/image";
import { useState } from "react";

export default function First() {
  const [showMore, setShowMore] = useState(false);

  return (
    <div className="bg-gray-200 flex items-center justify-center">
   
      <div className="max-w-[1200px] w-full mx-auto flex flex-col lg:flex-row justify-between items-start  pt-12  lg:pt-16 gap-8">
        
        
        <div className="w-full lg:w-1/2 lg:sticky top-24 self-start">
          <Image
            src="https://safarimarketingpro.com/images/team-chinpal.png"
            alt="Website Development"
            height={400}
            width={400}
            className="w-full h-auto"
          />
        </div>

        {/* Text Section (Expands) */}
        <div className="w-full lg:w-8/12 text-gray-600 space-y-6">
          <h1 className="text-4xl font-bold leading-tight text-[#3467d8]">
            Fall in love with your Customers' Problem!
          </h1>
          
          <p className="font-montserrat font-normal text-[18px] text-left text-[#787878] leading-[1.5] m-0">
            Chinu Pal, fondly known as the "king of sales," is a remarkable mentor
            who has revolutionized the safari industry with his exceptional guidance
            and unparalleled contributions to African tourism. His profound understanding
            of the safari ecosystem has brought tremendous value to safari businesses
            in every aspect.
          </p>

          {showMore && (
            <div className="transition-all duration-300 ease-in-out">
              <p className="font-montserrat font-normal text-[18px] text-left text-[#787878] leading-[1.5] m-0 py-[15px] ">
                Chin's unwavering mission is to have a direct impact
                on the revenue models of safari businesses by freeing
                them from their dependence on agents and educating them
                on how to thrive in the digital world. He firmly believes
                that if his clients give him a dollar, he must deliver 
                ten dollars' worth of work.
              </p>
              <p className="mt-2 font-montserrat font-normal text-[18px] text-left text-[#787878] leading-[1.5] m-0 ">
                Chin's influence has not only been limited to the private
                sector but has also reached out to significant government and
                tourism organizations such as TANAPA, 748 Air, Tanzania Air, Airtel,
                Tanzania Embassy, and TripAdvisor. His commitment to excellence has been
                unmatched, and his passion for transforming the safari industry is truly
                inspiring.
              </p>
            </div>
          )}

          {/* Toggle Button */}
          <button
            onClick={() => setShowMore(!showMore)}
            className="mt-4 bg-red-600 text-white py-2 px-4 rounded-lg hover:bg-red-700 transition"
          >
            {showMore ? "Read Less" : "Read More"}
          </button>

          {/* Signature */}
          <img
            src="https://safarimarketingpro.com/images/chin-sign.png"
            alt="signature"
            width={200}
            height={200}
            className="mt-4"
          />

          {/* Footer Text */}
          <h3 className="text-2xl text-[#3467d8] font-semibold">
            Mr. Chinu Pal | -{" "}
            <span className="text-lg font-medium italic text-[#3467d8]">
              Founder of Safari Marketing Pro
            </span>
          </h3>
        </div>
      </div>
    </div>
  );
}
