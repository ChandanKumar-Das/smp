 'use client'
import { useScroll } from '../../hooks/useScroll';
import Image from 'next/image';
import { ChevronDownIcon } from '@heroicons/react/24/solid';
import { useRouter } from "next/navigation"
export default function ScrollNavbar(){
    const { isScrolled} = useScroll();
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
      
    return(
        <>
        <div
      className={`transition-all duration-500 ease-in-out py-2 ${
        isScrolled ? "sticky-nav sticky top-0 left-0 slide-down" : "absolute top-0 left-0 hidden"
      } bg-blue-600 z-[99]`}
    >
      <div className="max-w-[1200px] mx-auto">
        <ul className="flex flex-wrap justify-center md:justify-between items-center text-white uppercase pt-2 font-bold space-y-2 md:space-y-0">
          <li>
            <Image
              src="https://safarimarketingpro.com/images/smp-logo.png"
              alt="logo"
              width={150}
              height={50}
              className="white-image"
              style={{ filter: 'brightness(0) invert(1)' }}
              priority
            />
          </li>
          <li className="px-4 cursor-pointer flex items-center gap-2 group relative ">
        About Us
        <span>
          <ChevronDownIcon className="h-5 w-5 transition-transform duration-500 group-hover:rotate-180" />
        </span>
        <ul className="absolute top-full left-0 bg-gray-100 hidden rounded-md  group-hover:flex p-4 flex-col gap-4 min-w-[200px] max-w-[300px] items-center">
        <li onClick={()=>handleClick('ourcompany')} className=" text-blue-500 hover:text-gray-700 text-md">Our Company</li>
        <li onClick={()=>handleClick('team')} className="text-blue-500 hover:text-gray-700 text-md">Our Team</li>
        <li onClick={()=>handleClick('services')} className="text-blue-500 hover:text-gray-700 text-md">Reviews</li>
        </ul>
        </li>
          <li className="px-4">Service</li>
          <li className="px-4">Pricing</li>
          <li className="px-4">Our Clients</li>
          <li className="px-4">Training</li>
          <li className="px-4">Resources</li>
          <li className="bg-red-500 p-2 md:p-4 shadow-sm rounded-md text-center">
            Request a Free Strategy Session
          </li>
        </ul>
      </div>
    </div>
        </>
    )
}