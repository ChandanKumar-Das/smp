import Image from 'next/image';
export default function Second (){

    const teamMembers = [
        { name: 'Suvransu Shekhar Sahoo', position: 'Chief Executive Officer', image: 'https://safarimarketingpro.com/images/ouletm-fig-7.png' },
        { name: 'Sasmita Mangaraj', position: 'Research & Development Manager', image: 'https://safarimarketingpro.com/images/ouletm-fig-11.png' },
        { name: 'Gayatri Palei', position: 'Business Development Manager', image: 'https://safarimarketingpro.com/images/ouletm-fig-10.png' },
        { name: 'Rajesh Routary', position: 'Senior HR', image: 'https://safarimarketingpro.com/images/ouletm-fig-1.png' },
        { name: 'Payal Das', position: 'Designing TL', image: 'https://safarimarketingpro.com/images/ouletm-fig-9.png' },
        { name: 'Manoj Kumar Das', position: 'SEO Analyst', image: 'https://safarimarketingpro.com/images/ouletm-fig-8.png' },
        { name: 'Somesh Das', position: 'Content Writer', image: 'https://safarimarketingpro.com/images/ouletm-fig-2.png' },
        { name: 'Chinmay Biswal', position: 'SMO Analyst', image: 'https://safarimarketingpro.com/images/ouletm-fig-3.png' },
      ];
    
    return(
        <>
         <div className=" py-16 px-4 ">
        <div className="max-w-[1200px] mx-auto text-center">
          {/* Heading */}
          <h2 className="font-montserrat font700 text-[48px] text-center text-[#3467d8] leading-[1.3] m-0 md:px-[15%] pb-[15px]">
          Meet Your New & Improved Digital Team
          </h2>
          <p className="text-[#787878] font400 text-[22px] mt-2">
          Educate Customers More Than Others
          </p>


          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-6 p-6">
      {teamMembers.map((member) => (
        <div key={member.name} className="bg-white shadow-md rounded-md p-6">
          <div className="pb-4">
            <img src={member.image} alt={member.name}  />
          </div>
          <h3 className="font-montserrat font-semibold text-[22px] text-left capitalize text-[#011833] leading-inherit m-0 pb-[5px]">{member.name}</h3>
          <p className="font-montserrat font-semibold text-[15px] text-left capitalize text-[#ff5254] leading-inherit m-0 pb-[10px]">{member.position}</p>
        </div>
      ))}
    </div>
          </div>
          </div>
        </>
    )
}


