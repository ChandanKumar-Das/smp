

export default function Tenth() {
  return (
    <>
      <div className="bg-socs-bg bg-cover bg-center ">
        <div className="max-w-[1200px] mx-auto px-4 py-20">
          {/* Heading Section */}
          <h1 className="pb-6 text-center uppercase text-3xl sm:text-4xl md:text-5xl text-white font-bold">
          Africa is our second home.
          </h1>
           <p className=" text-center text-sm sm:text-md md:text-2xl text-white">Chin is very well name in Africa as a Safari Mentor.</p>
          {/* Content Section */}
          <div className="flex flex-col pt-12 md:flex-row gap-5">
            {/* Text Section */}
            <div className="flex-1">
              <h2 className="text-md sm:text-md  text-white">
              As Africa is our second home, we don’t take clients to do only marketing, we understand the whole eco-system of the safari to serve the clients amazingly from their operations to their sales.
              </h2>
              <p className="mt-4 text-xl font-semibold sm:text-base md:text-xl text-white">
              If you don’t know where Serengeti is, how will you bring customers to Serengeti?
              </p>

              {/* List with SVG icons */}
              <div className="flex gap-2 items-center text-white text-md sm:text-md mt-4">
                
                <p>So, we make sure to sit down with the clients and thoroughly check them from the ground label up until they connect to a customer. It’s not just about marketing, where we bring customers to them; we are also part of the process where they convert the customers or checking whether they are following up or not.</p>
              </div>

              <div className="flex gap-2 items-center text-white text-lg sm:text-xl mt-4">
      
                <p>That’s why Chin is committed to giving them face-to-face meetings to bring value from every angle.</p>
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
                  src="https://www.youtube.com/embed/V12f3YAttXY?rel=0"
                  frameBorder="0"
                  allow="autoplay; encrypted-media"
                  allowFullScreen
                  className="absolute top-0 left-0 w-full h-full"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
