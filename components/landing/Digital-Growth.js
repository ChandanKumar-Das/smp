import Image from "next/image";

export default function DigitalGrowth() {
  return (
    <>
      <div className="bg-[#011833] pb-10 pt-[200px] sm:pt-[300px] lg:pt-[500px]">
        <div className="max-w-[1200px] mx-auto px-4">
          {/* Heading Section */}
          <div className="flex justify-center">
            <h1 className="text-center text-3xl sm:text-4xl lg:text-5xl uppercase w-full sm:w-[90%] leading-tight text-white font-bold">
              Digital Growth For Your African Safari Business
            </h1>
          </div>

          {/* Grid Section */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-10">
            {/* Card 1 */}
            <div className="flex gap-4 hover:bg-slate-700 transition duration-300 p-4 rounded-md">
              <div>
                <Image
                  src="https://safarimarketingpro.com/images/dgyhacb-icn-1.png"
                  alt="Website Development"
                  height={200}
                  width={200}
                />
              </div>
              <div className="text-white">
                <h1 className="font-bold text-xl sm:text-2xl">
                  Website <br /> Development
                </h1>
                <p className="w-full sm:w-[80%] text-sm sm:text-lg pt-4">
                  Your Safari business is unique, and you need a website that
                  convinces potential customers planning to book their trips to
                  Africa while setting you apart from the competition.
                </p>
                <div className="bg-red-500 hover:bg-black hover:border transition duration-300 cursor-pointer mt-8 text-white px-4 py-2 inline-block">
                  Read More
                </div>
              </div>
            </div>

            {/* Card 2 */}
            <div className="flex gap-4 hover:bg-slate-700 transition duration-300 p-4 rounded-md">
              <div>
                <Image
                  src="https://safarimarketingpro.com/images/dgyhacb-icn-2.png"
                  alt="Organic Marketing"
                  height={200}
                  width={200}
                />
              </div>
              <div className="text-white">
                <h1 className="font-bold text-xl sm:text-2xl">
                  Organic <br /> Marketing
                </h1>
                <p className="w-full sm:w-[80%] text-sm sm:text-lg pt-4">
                  We know how important it is for you to maintain a high ranking
                  for your safari website. We can help you with an outstanding
                  organic marketing strategy to attract your desired audience.
                </p>
                <div className="bg-red-500 hover:bg-black hover:border transition duration-300 cursor-pointer mt-8 text-white px-4 py-2 inline-block">
                  Read More
                </div>
              </div>
            </div>

            {/* Card 3 */}
            <div className="flex gap-4 hover:bg-slate-700 transition duration-300 p-4 rounded-md">
              <div>
                <Image
                  src="https://safarimarketingpro.com/images/dgyhacb-icn-3.png"
                  alt="Google Advertising"
                  height={200}
                  width={200}
                />
              </div>
              <div className="text-white">
                <h1 className="font-bold text-xl sm:text-2xl">
                  Google <br /> Advertising
                </h1>
                <p className="w-full sm:w-[80%] text-sm sm:text-lg pt-4">
                  The right advertising campaign can be the secret sauce to a
                  safari company’s success. We help you curate the best Ad
                  strategies for your safari business to get the results.
                </p>
                <div className="bg-red-500 hover:bg-black hover:border transition duration-300 cursor-pointer mt-8 text-white px-4 py-2 inline-block">
                  Read More
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
