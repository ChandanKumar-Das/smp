"use client";
import { useEffect, useRef, useState } from "react";

export default function Sixth() {
  const images = [
    "https://safarimarketingpro.com/images/ayrtjsyc-slide-fig-5.jpg",
    "https://safarimarketingpro.com/images/ayrtjsyc-slide-fig-11.jpg",
    "https://safarimarketingpro.com/images/ayrtjsyc-slide-fig-12.jpg",
    "https://safarimarketingpro.com/images/ayrtjsyc-slide-fig-1.jpg",
    "https://safarimarketingpro.com/images/ayrtjsyc-slide-fig-3.jpg",
    "https://safarimarketingpro.com/images/ayrtjsyc-slide-fig-6.jpg",
    "https://safarimarketingpro.com/images/ayrtjsyc-slide-fig-7.jpg",
    "https://safarimarketingpro.com/images/ayrtjsyc-slide-fig-8.jpg",
  ];

  const sliderRef = useRef(null);
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000); // Change every 3 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="bg-blue-500 text-white">
      <div className="max-w-7xl mx-auto py-14 px-4 md:px-8">
        {/* Heading Section */}
        <h2 className="text-center text-3xl md:text-5xl pb-4 font-bold">
          We rise by Lifting others
        </h2>
        <h4 className="text-center text-lg md:text-2xl font-semibold">
          Because when we give, we also receive
        </h4>

        {/* Content Section */}
        <div className="flex flex-col lg:flex-row gap-10 items-center mt-6">
          {/* Text Content */}
          <div className="lg:w-6/12 space-y-4">
            <p className="text-lg md:text-xl leading-relaxed">
              Imagine a world where every single person on the planet is given
              free access to the sum of all human needs. In Safari Marketing Pro,{" "}
              <span className="font-bold">
                we’re dedicated to building a better world; both virtually and
                communally.
              </span>{" "}
              We believe that helping your community is an opportunity to grow
              as a person and to better understand how you fit into this world.
              Contributing to the common good is of paramount importance to us.
              That’s why we organize charity events with various volunteer
              groups and non-profit organizations.
            </p>
            <p className="font-bold text-lg md:text-xl">
              Putting a smile on someone’s face is worth a million dollars to us.
            </p>
          </div>

          {/* Image Slider (One Image Visible at a Time) */}
          <div className="relative w-full lg:w-6/12 flex items-center justify-center">
            <div
              ref={sliderRef}
              className="w-auto h-auto transition-opacity duration-500"
            >
              <img
                src={images[index]}
                alt={`Slide ${index}`}
                className="max-w-full max-h-full object-contain  "
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
