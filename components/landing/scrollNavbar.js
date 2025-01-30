 'use client'
import { useScroll } from '../../hooks/useScroll';
import Image from 'next/image';
import { ChevronDownIcon } from '@heroicons/react/24/solid';
import { useRouter } from "next/navigation"
export default function ScrollNavbar(){
    const { isScrolled } = useScroll();
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

      function hanhelImageClick(){
        router.push('/')
      }
      
    return(
        <>
        <div
      className={`transition-all duration-500 ease-in-out py-2 ${
        isScrolled ? "sticky-nav sticky top-0 left-0 slide-down" : "absolute top-0 left-0 hidden"
      } bg-[#0057ff] z-[99]`}
    >
      <div className="max-w-[1200px] mx-auto">
        <ul className="flex flex-wrap justify-center md:justify-between items-center text-white uppercase pt-2 font-bold space-y-2 md:space-y-0">
          <li className='pr-8'>
            <Image
             onClick={hanhelImageClick}
              src="https://safarimarketingpro.com/images/smp-logo.png"
              alt="logo"
              width={80}
              height={50}
              className="white-image"
              style={{ filter: 'brightness(0) invert(1)' }}
              priority
            />
          </li>
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
          <li className="px-4">Service</li>
          <li className="px-4">Pricing</li>
          <li className="px-4">Our Clients</li>
          <li className="px-4">Training</li>
          <li className="px-4">Resources</li>
          <li className="p-2 cursor-pointer md:p-4 shadow-sm bg-[#ff5254] hover:text-red-500 rounded-md text-center hover:bg-black transition duration-300">
            Request a Free Strategy Session
          </li>
        </ul>
      </div>
    </div>
        </>
    )
}