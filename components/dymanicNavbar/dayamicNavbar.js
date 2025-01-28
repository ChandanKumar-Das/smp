"use client";
import Image from "next/image";
import { PhoneIcon, ChevronDownIcon } from "@heroicons/react/24/solid";
import ScrollNavbar from "../landing/scrollNavbar";
import { useRouter } from "next/navigation";

export default function DynamicNavbar() {
  const router = useRouter();

  const handleClick = (name) => {
    switch (name) {
      case "ourcompany":
        router.push("/about-us");
        break;
      case "team":
        router.push("/team");
        break;
      case "services":
        router.push("/services");
        break;
      default:
        break;
    }
  };

  return (
    <>
      {/* Background Section */}
      <ScrollNavbar/>

      <div className="w-full bg-custom-bg h-full bg-cover pt-8 pb-[13%] bg-center bg-no-repeat">
        {/* Main Container */}
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
                style={{ filter: "brightness(0) invert(1)" }}
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
              {/* Dropdown: About Us */}
              <li className="px-4 cursor-pointer flex items-center gap-2 group relative">
                About Us
                <ChevronDownIcon className="h-5 w-5 transition-transform duration-500 group-hover:rotate-180" />
                <ul className="absolute top-full left-0 bg-gray-100 hidden rounded-md group-hover:flex p-4 flex-col gap-4 min-w-[200px] max-w-[300px] items-center shadow-lg">
                  <li
                    onClick={() => handleClick("ourcompany")}
                    className="text-blue-500 hover:text-gray-700 text-md cursor-pointer"
                  >
                    Our Company
                  </li>
                  <li
                    onClick={() => handleClick("team")}
                    className="text-blue-500 hover:text-gray-700 text-md cursor-pointer"
                  >
                    Our Team
                  </li>
                  <li
                    onClick={() => handleClick("services")}
                    className="text-blue-500 hover:text-gray-700 text-md cursor-pointer"
                  >
                    Reviews
                  </li>
                </ul>
              </li>

              <li className="px-4 cursor-pointer flex items-center gap-2 group">
                Service
                <ChevronDownIcon className="h-5 w-5 transition-transform duration-500 group-hover:rotate-180" />
              </li>
              <li className="px-4 cursor-pointer">Pricing</li>
              <li className="px-4 cursor-pointer">Our Clients</li>
              <li className="px-4 cursor-pointer">Training</li>
              <li className="px-4 cursor-pointer flex items-center gap-2 group">
                Resources
                <ChevronDownIcon className="h-5 w-5 transition-transform duration-500 group-hover:rotate-180" />
              </li>
              <li className="bg-red-500 p-2 cursor-pointer md:p-4 shadow-sm rounded-md text-center hover:bg-red-600 transition duration-300">
                Request a Free Strategy Session
              </li>
            </ul>
          </div>
          {/* Header Text */}
          <div className="flex justify-center px-4 pt-10">
            <p className="text-6xl font-semibold text-white text-center leading-[1.2]">
              Changing the way every Safari Company feels about gaining
              customers.
            </p>
          </div>
        </div>
        
 
      </div>

      {/* Scrollable Navbar */}
     
    </>
  );
}
