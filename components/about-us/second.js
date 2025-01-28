export default function Second() {
    return (
      <>
        <div className=" py-12">
          <div className="max-w-[1200px] mx-auto px-6">
            {/* Content Section */}
            <div className="flex flex-col md:flex-row justify-between items-start gap-8">
              {/* Text Content */}
              <div className="md:w-1/2 space-y-6">
                <h1 className="text-4xl font-bold text-[#3467d8]">
                  Why work with SMP?
                </h1>
                <p className="text-gray-600 text-lg leading-relaxed">
                  We think that every safari company has something unique to offer in terms of how they operate and the services they offer. Hence, you can’t just figure out one recipe that works for all of them.
                </p>
                <p className="text-gray-600 text-lg leading-relaxed">
                  The safari businesses we serve are very good at understanding the destinations and the areas of operation, but they lag behind in understanding their client’s needs, having a clean website that attracts more customers, marketing it for more reach, or even doing a simple follow-up!
                </p>
                <p className="text-gray-600 text-lg leading-relaxed">
                  The top 1-2% of safari companies that have some knowledge of how to convince and acquire customers gather most of the revenue, even when the tour experience provided by lesser-known companies might be better than theirs.
                </p>
              </div>
  
              {/* Video Section */}
              <div className="md:w-1/2">
                <div className="relative pb-[56.25%] h-0 overflow-hidden rounded-lg shadow-lg">
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
  
            {/* Closing Section */}
            <div className="mt-12 text-center space-y-6">
              <h2 className="text-3xl font-semibold text-[#3467d8]">
                That’s where SMP comes into play
              </h2>
              <p className="text-gray-600 text-lg leading-relaxed max-w-[800px] mx-auto">
                As the only safari marketing company in Africa that understands the entire safari ecosystem, we identify and solve our clients' problems—no matter their size—with best-in-class, result-oriented solutions. 
                <br />
                <strong className="text-gray-800">Because our client’s success is our success!</strong>
              </p>
  
              <button className="px-6 py-3 bg-red-500 text-white rounded-lg font-medium shadow-md hover:bg-red-600 transition duration-300">
                BROWSE ALL CASE STUDIES
              </button>
            </div>
          </div>
        </div>
      </>
    );
  }
  