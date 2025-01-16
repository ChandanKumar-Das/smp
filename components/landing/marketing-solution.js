"use client"

import Image from "next/image";

export default function MarketingSolution() {
  return (
    <>
      <div className="max-w-[1200px] mx-auto px-4 md:px-8">
        {/* Heading */}
        <h1 className="text-center font-bold uppercase text-3xl sm:text-4xl md:text-5xl px-4 text-blue-600">
          A comprehensive marketing solution for your safari company
        </h1>

        {/* Paragraphs */}
        <p className="py-8 text-center text-base sm:text-lg md:text-xl leading-relaxed">
          Do you think only having a safari website can make you found by your potential customers? Almost 90% majority of 
          Safari Holidays plans start with a search in Google. With thousands of safari websites and 2.3 million searches 
          going every day, your safari website needs to be visible to your potential customers who are looking for safari holidays.
        </p>

        <p className="pb-8 text-center text-base sm:text-lg md:text-xl leading-relaxed">
          There's nothing more depressing than sitting around & waiting for inquiries to fill your inbox. You know that to 
          get more customers, you need more inquiries, and to get more inquiries, you need better marketing. The problem is 
          you're not a marketing expert; you're a Safari Operator, and you understand the safari business well.
        </p>

        <p className="pb-8 text-center text-base sm:text-lg md:text-xl leading-relaxed">
          Sure, you've heard people talk about things like SEO and PPC, but you don't really know what any of that means, so 
          you feel a bit insecure and inadequate. You may have hired someone to help, but you've just not seen the results you want.
        </p>

        <p className="pb-8 text-center text-base sm:text-lg md:text-xl leading-relaxed">
          That’s why we at Safari Marketing Pro designed a proven process that helps thousands of safari operators to 
          10x their revenue. It’s not just about the marketing where we bring customers to your business; we understand 
          how to create a world-class website, what marketing strategy works, and which content will engage your traveler 
          to attract and convince them to book. So from managing and planning to executing, we refine the process that works 
          diligently to build a winning relationship with your customers.
        </p>

        <p className="pb-10 text-center text-base sm:text-lg md:text-xl leading-relaxed">
          Let's Get More Qualified Inquiries and Bookings, and Make More Money.....
        </p>

        {/* Image Section */}
        <div className="flex justify-center mb-8">
          <Image
            src="https://safarimarketingpro.com/images/acmsyhc-fig-1.jpg"
            height={1000}
            width={1000}
            alt="image"
            className="max-w-full h-auto"
          />
        </div>

        {/* Button Section */}
        <div className="flex justify-center items-center">
          <div className="py-2 px-6 sm:px-10 rounded-sm transition-all duration-500 bg-black hover:bg-red-500 uppercase text-sm sm:text-lg md:text-xl cursor-pointer text-white font-semibold text-center">
            Get My Free Proposal
          </div>
        </div>
      </div>
    </>
  );
}
