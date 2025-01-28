import Image from "next/image";

export default function First() {
  return (
    <>
      <div className="bg-gray-200 ">
        {/* Image Section */}
        <div className="max-w-[1200px] mx-auto flex flex-col lg:flex-row justify-between items-center px-6 pt-12 lg:px-20 lg:pt-16 gap-8">

   
        <div className="flex-1">
  <Image
    src="https://safarimarketingpro.com/images/md-fig.png"
    alt="Website Development"
    height={500}
    width={500}
    className="transform -scale-x-100"
  />
</div>


        {/* Text Content */}
        <div className="flex-1 text-gray-600 space-y-6 lg:pl-10">
          <h1 className="text-4xl font-bold leading-tight text-[#3467d8]">
            We thrive to get the right essence of your Safari brand
          </h1>
          <p className="text-lg leading-relaxed">
            Our goal is to create a strong and consistent brand identity for
            each and every safari operator in Africa that accurately reflects
            the core values and bootstrapping of their brand. This ensures their
            appeal to a robust revenue model. This can help establish small or
            medium safari operators, boost their brand recognition, foster
            loyalty, and increase revenue by up to{" "}
            <span className="font-semibold text-red-500">300%</span>.
          </p>
          <p className="text-lg leading-relaxed">
            Whether you are launching a new safari company or looking to
            revitalize an existing one, we can help you develop a compelling
            brand strategy that will drive growth and success for your safari
            business.
          </p>
          <img src="https://safarimarketingpro.com/images/md-sign.svg.png" alt="signature" width={200} height={200}/>
         
          <h3 className="text-2xl text-[#3467d8] font-semibold">
            Manorama Pallai -{" "}
            <span className="text-lg font-medium text-[#3467d8]">
              Managing Director
            </span>
          </h3>
        </div>

        </div>
      </div>

    </>
  );
}
