"use client"
import Image from "next/image";
import { motion } from "framer-motion";

export default function HappyClient() {
  const companyLinks = [
    'https://safarimarketingpro.com/images/wgboas-fig-9.png',
    'https://safarimarketingpro.com/images/wgboas-fig-10.png',
    'https://safarimarketingpro.com/images/wgboas-fig-3.png',
    'https://safarimarketingpro.com/images/wgboas-fig-13.png',
    'https://safarimarketingpro.com/images/wgboas-fig-18.png',
    'https://safarimarketingpro.com/images/wgboas-fig-16.png',
    'https://safarimarketingpro.com/images/wgboas-fig-2.png',
    'https://safarimarketingpro.com/images/wgboas-fig-32.png',
    'https://safarimarketingpro.com/images/wgboas-fig-21.png',
    'https://safarimarketingpro.com/images/wgboas-fig-11.png',
    'https://safarimarketingpro.com/images/ex-logo.jpg',
    'https://safarimarketingpro.com/images/hodari.png',
    'https://safarimarketingpro.com/images/off-we.png',
    'https://safarimarketingpro.com/images/wgboas-fig-6.png',
    'https://safarimarketingpro.com/images/luxury-af.png',
    'https://safarimarketingpro.com/images/wgboas-fig-4.png',
    'https://safarimarketingpro.com/images/wgboas-fig-26.png',
    'https://safarimarketingpro.com/images/tribe-af.png',
    'https://safarimarketingpro.com/images/simba.png',
    'https://safarimarketingpro.com/images/wgboas-fig-12.png',
    'https://safarimarketingpro.com/images/wgboas-fig-1.png',
    'https://safarimarketingpro.com/images/utopia.png',
    'https://safarimarketingpro.com/images/clemsa.png',
    'https://safarimarketingpro.com/images/wgboas-fig-19.png',
    'https://safarimarketingpro.com/images/wgboas-fig-8.png',
    'https://safarimarketingpro.com/images/cape.png',
    'https://safarimarketingpro.com/images/wow.png',
  ];

  const iconVariants = (duration) => ({
    initial: { y: -10 },
    animate: {
      y: [10, -10],
      transition: {
        duration: duration,
        ease: "linear",
        repeat: Infinity,
        repeatType: "reverse",
      },
    },
  });

  return (
    <div className="max-w-[1200px] mx-auto my-14 px-4">
      <h1 className="text-center text-2xl sm:text-3xl md:text-4xl font-bold uppercase text-blue-600">
        Happy clients who put trust on us
      </h1>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4 text-center pt-10">
        {companyLinks.map((item, index) => (
          <motion.div
            key={index}
            className="text-center"
            variants={iconVariants(index)}
            initial="initial"
            animate="animate"
          >
            <Image
              src={item}
              alt={`Company Logo ${index}`}
              height={100}
              width={100}
              className="bg-white rounded-md shadow-lg w-full h-auto object-contain"
            />
          </motion.div>
        ))}
      </div>
    </div>
  );
}
