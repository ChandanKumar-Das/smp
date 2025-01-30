import Image from "next/image";

export default function First() {
  return (
    <>
      <div className="bg-gray-200 ">
        {/* Image Section */}
        <div className="max-w-[1200px] mx-auto flex flex-col lg:flex-row justify-between items-center px-6 pt-12 lg:px-10 lg:pt-16 gap-8">

   
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
        <div className="flex-1 text-gray-600 space-y-6">
          <h1 className="text-[36px] font-montserrat font600 eading-tight text-[#3467d8]">
            We Thrive To Get The Right Essence Of Your Safari Brand
          </h1>
          <p className="text-[20px] font-medium leading-[32px] mt-[20px] text-[#787878]">
            Our goal is to create a strong and consistent brand identity for
            each and every safari operator in Africa that accurately reflects
            the core values and bootstrapping of their brand. This ensures their
            appeal to a robust revenue model. This can help establish small or
            medium safari operators, boost their brand recognition, foster
            loyalty, and increase revenue by up to{" "}
            <span className="font-semibold text-red-500">300%</span>.
          </p>
          <p className="font-montserrat font-normal text-[18px] text-left text-[#787878] leading-[1.5] m-0 py-[15px] pb-[17px]">
            Whether you are launching a new safari company or looking to
            revitalize an existing one, we can help you develop a compelling
            brand strategy that will drive growth and success for your safari
            business.
          </p>
          <img src="https://safarimarketingpro.com/images/md-sign.svg.png" alt="signature" width={200} height={200}/>
         
          <h3 className="font-montserrat text-2xl font-semibold  text-[#3467d8]">
            Manorama Pallai -{" "}
            <span className="text-2xl italic font-medium text-[#3467d8]">
              Managing Director
            </span>
          </h3>
        </div>

        </div>
      </div>

    </>
  );
}
