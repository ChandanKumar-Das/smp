
export default function NotCharge(){
    return(
        <>
        <div className="w-full float-left relative py-[100px] bg-custom-dark-blue bg-lets-talk bg-no-repeat bg-left">
        <div className="max-w-[1200px] mx-auto">
           <div className="">
           <div className="w-full flex justify-end">
            <div className="md:w-1/2">
                <h1 className="text-4xl md:text-4xl lg:text-4xl font-bold text-white">
                We Don’t Charge To Educate Our Customers
                </h1>
                <p className="text-white text-sm text-md pt-4">Customer Education accelerates growth throughout the customer journey.
                     We are a friendly bunch and would love to hear from you. Fill out the form below and we will be in touch.</p>

                
      <div className="w-full mt-4 max-w-lg bg-white shadow-md rounded-lg p-8">
        <form>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            <div>
              <label htmlFor="fullName" className="block text-sm font-medium text-gray-700">Full Name</label>
              <input
                type="text"
                id="fullName"
                className="mt-1 py-1 block w-full rounded-md border-gray-300 shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                placeholder="Enter your full name"
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
              <input
                type="email"
                id="email"
                className="mt-1 p-1 block w-full rounded-md border-gray-300 shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                placeholder="Enter your email"
              />
            </div>
          </div>

          <div className="mt-4">
            <label htmlFor="companyName" className="block text-sm font-medium text-gray-700">Company Name</label>
            <input
              type="text"
              id="companyName"
              className="mt-1 p-1 block w-full rounded-md border-gray-300 shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
              placeholder="Enter your company name"
            />
          </div>

          <div className="mt-4">
            <label htmlFor="comments" className="block text-sm font-medium text-gray-700">Further Comments</label>
            <textarea
              id="comments"
              rows="4"
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
              placeholder="Write your comments here"
            ></textarea>
          </div>

          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 mt-4">
            <div>
              <label htmlFor="country" className="block text-sm font-medium text-gray-700">Country</label>
              <select
                id="country"
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
              >
                <option value="">Select your country</option>
                <option value="usa">USA</option>
                <option value="uk">UK</option>
                <option value="india">India</option>
              </select>
            </div>
            <div>
              <label htmlFor="phone" className="block text-sm font-medium text-gray-700">Phone No.</label>
              <input
                type="text"
                id="phone"
                className="mt-1 py-1 block w-full rounded-md border-gray-300 shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                placeholder="Enter your phone number"
              />
            </div>
          </div>

          <div className="mt-6">
            <div className="flex items-center">
              <input
                type="checkbox"
                id="captcha"
                className="h-4 w-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
              />
              <label htmlFor="captcha" className="ml-2 block text-sm text-gray-700">
                I&apos;m not a robot
              </label>
            </div>
          </div>

          <p className="mt-4 text-xs text-gray-500">
            By submitting this form, you agree to us using your data to send you marketing tips, news, and our latest services. You can get everything 24/7.
          </p>

          <button
            type="submit"
            className="mt-6 w-full bg-red-600 text-white py-2 px-4 rounded-md hover:bg-red-700 focus:ring-2 focus:ring-red-500 focus:ring-offset-2"
          >
            CONTACT US TODAY
          </button>
        </form>
      </div>
  
            </div>
            </div>
           </div>
        </div>
       </div>

        </>
    )
}