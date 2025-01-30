"use client"


export default function Footer() {
    return (
      <>
      <footer >
        <div className="bg-[#3467d8] text-white">
        <div className="container max-w-[1200px] mx-auto py-10 px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Useful Links */}
            <div>
              <h3 className="text-lg font-semibold mb-4">USEFUL LINKS</h3>
              <ul className="space-y-2">
                <li><a href="#" className="hover:underline pb-4">Website Designing</a></li>
                <li><a href="#" className="hover:underline pb-4">Organic Marketing</a></li>
                <li><a href="#" className="hover:underline pb-4">Google Advertising</a></li>
                <li><a href="#" className="hover:underline pb-4">Content Marketing</a></li>
                <li><a href="#" className="hover:underline pb-4">Social Media Marketing</a></li>
                <li><a href="#" className="hover:underline pb-4">Pricing</a></li>
                <li><a href="#" className="hover:underline pb-4">Ebooks</a></li>
                <li><a href="#" className="hover:underline pb-4">Contact Us</a></li>
                <li><a href="#" className="hover:underline pb-0">Blog</a></li>
              </ul>
            </div>
  
            {/* Contacts */}
            <div>
              <h3 className="text-lg font-semibold mb-4">CONTACTS</h3>
              <p className="mb-4">
                <strong className='font-bold text-xl pb-4'>Safari Marketing Pro</strong><br />
                Plot No- 26.1996/2231, Arundhati Resident,<br />
                B2, Patrapada, 751019
              </p>
              <p className="mb-4"><strong>CALL</strong>: +91-6371-223-581</p>
              <p className="mb-4"><strong>EMAIL</strong>: <a href="mailto:sales@manoramaseoservice.com" className="text-white underline">sales@manoramaseoservice.com</a></p>
              <h4 className="mt-6 font-semibold">LOVE US AS WE LOVE YOU!</h4>
              <div className="flex space-x-4 mt-4">
                <a href="#"><img src="https://img.icons8.com/ios-filled/50/ffffff/facebook-new.png" alt="Facebook" className="w-10" /></a>
                <a href="#"><img src="https://img.icons8.com/ios-filled/50/ffffff/instagram-new.png" alt="Instagram" className="w-10" /></a>
                <a href="#"><img src="https://img.icons8.com/ios-filled/50/ffffff/youtube-play.png" alt="YouTube" className="w-10" /></a>
              </div>
            </div>
  
            {/* Reviews */}
            <div>
              <h3 className="text-lg font-semibold mb-4">REVIEWS FROM ONE OF MOST TRUSTED PARTNERS</h3>

              {/* <div className="bg-white text-black rounded-lg p-4 shadow-md">
                <h4 className="text-lg font-semibold">Manorama Web Solutions Private Limited Reviews</h4>
                <p className="text-2xl font-bold my-2">4.9 ⭐</p>
                <p className="text-sm">24 Reviews</p>
                <div className="mt-2">
                  <p className="text-sm">Scheduling: 4.9</p>
                  <p className="text-sm">Quality: 4.9</p>
                  <p className="text-sm">Cost: 4.8</p>
                  <p className="text-sm">Would Refer: 4.9</p>
                </div>
                <p className="text-xs mt-4 text-gray-700">Powered by Clutch</p>
              </div> */}
              <div className="bg-white border rounded-lg shadow-lg p-6 w-80">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h3 className="text-md text-gray-500 font-semibold">Manorama Web Solutions</h3>
          <p className="text-sm text-gray-500">Private Limited Reviews</p>
        </div>
        <img
          src="https://img.shgstatic.com/clutch-static-prod/image/scale/60x60/s3fs-public/logos/3aff45ed89355c1ecf9e7dad6de80877.png" // Replace with logo URL
          alt="Company Logo"
          className="w-12 h-12"
        />
      </div>

      {/* Rating */}
      <div className="mt-4">
        <div className="flex items-center">
          <p className="text-4xl font-bold text-blue-600">4.9</p>
          <div className="ml-3">
            <div className="flex text-yellow-500">
              <span>⭐</span>
              <span>⭐</span>
              <span>⭐</span>
              <span>⭐</span>
              <span>⭐</span>
            </div>
            <p className="text-sm text-gray-500">24 Reviews</p>
          </div>
        </div>
      </div>

      {/* Ratings Breakdown */}
      <div className="mt-4 text-black">
        {[
          { label: "Scheduling", score: 4.9 },
          { label: "Quality", score: 4.9 },
          { label: "Cost", score: 4.8 },
          { label: "Would Refer", score: 4.9 },
        ].map((item, index) => (
          <div key={index} className="flex items-center justify-between text-sm mb-2">
            <p>{item.label}:</p>
            <div className="flex-1 mx-2 bg-gray-200 h-2 rounded-full">
              <div
                className="bg-blue-600 h-2 rounded-full"
                style={{ width: `${(item.score / 5) * 100}%` }}
              ></div>
            </div>
            <p className="w-8 text-right">{item.score}</p>
          </div>
        ))}
      </div>

      {/* Footer */}
      <div className="mt-6 text-center">
        <p className="bg-black py-2"><span className='text-xs'>Powered by</span> <span className='font-bold text-lg'>Clutch</span> </p>
      </div>
    </div>
            </div>
          </div>
  
         
        </div>
        </div>

        <div className="bg-blue-700 text-white ">
           {/* Bottom Footer */}
           <div className="max-w-[1200px] mx-auto py-4 text-sm text-center md:text-left flex flex-col md:flex-row justify-between items-center">
            <p>&copy; 2025 Safari Marketing Pro</p>
            <div className="flex space-x-4">
              <a href="#" className="hover:underline">Privacy Policy</a>
              <a href="#"><img src="https://safarimarketingpro.com/images/new-part-1.png" alt="Google Partner" className="w-20" /></a>
              <a href="#"><img src="https://safarimarketingpro.com/images/new-part-2.png" alt="UpCity" className="w-20" /></a>
              <a href="#"><img src="https://safarimarketingpro.com/images/new-part-3.png" alt="Clutch" className="w-20" /></a>
              <a href="#"><img src="https://safarimarketingpro.com/images/new-part-4.png" alt="Bing" className="w-20" /></a>
            </div>
          </div>
        </div>
        
      </footer>

      
      </>
    );
  }
  