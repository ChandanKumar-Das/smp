 "use client"
import Image from 'next/image';
import { PhoneIcon } from '@heroicons/react/24/solid';
import ScrollNavbar from './scrollNavbar';
import { ChevronDownIcon } from '@heroicons/react/24/solid';
//import { useRouter } from 'next/router';
import { useRouter } from "next/navigation"



export default function Navbar() {
  const router = useRouter();


  const handleClick = (name) => {

    if(name === 'ourcompany'){
      router.push('/about-us');
    }

    if( name === 'team'){
      router.push('/team')
    }
    if( name === 'services'){
      router.push('/services')
    }
      
  };
  
  return (
    <>
    <div className="bg-[rgba(61,114,194,0.95)] p-4 ">
      {/* Container */}
      <div className="max-w-[1200px] mx-auto">
        {/* Top Section */}
        <div className="flex flex-col md:flex-row border-b border-white pb-2 justify-between items-center">
          {/* Logo */}
          <div className="mb-2 md:mb-0">
            <Image
              src="https://safarimarketingpro.com/images/smp-logo.png"
              alt="logo"
              width={150}
              height={50}
              className="white-image"
              style={{ filter: 'brightness(0) invert(1)' }}
              priority
            />
          </div>
          {/* Phone Number */}
          <div className="text-white flex items-center text-lg font-bold">
            <PhoneIcon className="h-6 w-6 text-white mr-2" />
            +91 6371 223 581
          </div>
        </div>

        {/* Navigation Links */}
        <div>
          <ul className="flex flex-wrap justify-center md:justify-between items-center text-white uppercase pt-2 font-bold space-y-2 md:space-y-0">
          <li className="px-4 cursor-pointer flex items-center gap-2 group relative hover:text-red-500 ">
        About Us
        <span>
          <ChevronDownIcon className="h-5 w-5 transition-transform duration-500 group-hover:rotate-180 group-hover:text-red-500" />
        </span>
        <ul className="absolute top-full left-0 bg-gray-100 hidden rounded-md  group-hover:flex p-4 flex-col gap-4 min-w-[200px] max-w-[300px] items-center">
        <li onClick={()=>handleClick('ourcompany')} className=" text-[#4679c5] hover:text-red-500 text-[14px] font600">Our Company</li>
        <li onClick={()=>handleClick('team')} className="text-[#4679c5] hover:text-red-500 text-[14px] font600">Our Team</li>
        <li onClick={()=>handleClick('services')} className="text-[#4679c5] hover:text-red-500 text-[14px] font600">Reviews</li>
        </ul>
        </li>

            <li className="px-4 cursor-pointer flex items-center gap-2 group">Service <span> <ChevronDownIcon className="h-5 w-5 transition-transform duration-500 group-hover:rotate-180" /></span></li>
            <li className="px-4 cursor-pointer">Pricing</li>
            <li className="px-4 cursor-pointer">Our Clients</li>
            <li className="px-4 cursor-pointer">Training</li>
            <li className="px-4 cursor-pointer flex items-center gap-2 group">Resources <span> <ChevronDownIcon className="h-5 w-5 transition-transform duration-500 group-hover:rotate-180" /></span></li>
            <li className="p-2 cursor-pointer md:p-4 shadow-sm bg-[#ff5254] hover:text-red-500 rounded-md text-center hover:bg-black transition duration-300">
              Request a Free Strategy Session
            </li>
          </ul>
        </div>
      </div>
    </div>
    
    <ScrollNavbar/>
    
    </>
  );
}
