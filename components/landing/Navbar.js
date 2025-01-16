 "use Client"
import Image from 'next/image';
import { PhoneIcon } from '@heroicons/react/24/solid';

export default function Navbar() {
  return (
    <div className="bg-blue-700 p-4 sticky top-0 z-50">
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
            <li className="px-4">About Us</li>
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
    </div>
  );
}
