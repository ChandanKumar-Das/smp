import Image from "next/image";

export default function HighlyConverting() {
  return (
    <>
      <div className="bg-socs-bg bg-cover bg-center my-[120px] md:mb-[630px] pt-14 pb-[300px] relative">
        <div className="max-w-screen-xl mx-auto px-4">
          {/* Heading Section */}
          <h1 className="py-10 text-center uppercase text-3xl sm:text-4xl md:text-5xl text-white font-bold">
            Highly converting safari websites for African safari operators
          </h1>

          {/* Content Section */}
          <div className="flex flex-col pt-12 md:flex-row gap-5">
            {/* Text Section */}
            <div className="flex-1">
              <h2 className="text-2xl sm:text-3xl font-semibold text-white">
                Is your website conveying an appealing “HELLO” to your customers??
              </h2>
              <p className="mt-4 text-sm sm:text-base md:text-lg text-white">
                Your safari website creates that first impression on your potential customer’s
                mind before they talk to you, meet you or make an inquiry/bookings with you.
              </p>

              {/* List with SVG icons */}
              <div className="flex gap-2 items-center text-white text-lg sm:text-xl mt-4">
                <span>{">>"}</span>
                <p>Make your itineraries and booking forms as your sales page</p>
              </div>

              <div className="flex gap-2 items-center text-white text-lg sm:text-xl mt-4">
                <span>{">>"}</span>
                <p>We make your potential customers believe that you are a highly professional
                  and trusted safari company like they are looking for.</p>
              </div>

              <div className="flex gap-2 items-center text-white text-lg sm:text-xl mt-4">
                <span>{">>"}</span>
                <p>We convert strangers to paying guests with a well-presented and informative website</p>
              </div>

              <div className="pt-10">
                <div className="py-2 px-10 text-center rounded-md transition-all duration-500 bg-black hover:bg-red-500 hover:border uppercase text-xl cursor-pointer text-white font-semibold">
                  Schedule call with an Expert
                </div>
              </div>
            </div>

            {/* Video Section */}
            <div className="flex-1 mt-5 md:mt-0">
              <div className="relative pb-[56.25%] h-0 overflow-hidden">
                <iframe
                  src="https://www.youtube.com/embed/M3j3TDH1r8g?rel=0"
                  frameBorder="0"
                  allow="autoplay; encrypted-media"
                  allowFullScreen
                  className="absolute top-0 left-0 w-full h-full"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Image Section */}
        <div className="absolute w-full flex justify-center bottom-[-120px] md:bottom-[-600px]">
        <Image
  src={"https://safarimarketingpro.com/images/soowrk-fig-1.png"}
  width={1200}
  height={0}
  alt="new image"
  unoptimized
  className="w-[1300px] h-auto"
/>

        </div>
      </div>
    </>
  );
}
