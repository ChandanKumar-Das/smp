export default function NotCharge() {
  return (
    <>
      <div className="w-full py-[100px] bg-custom-dark-blue bg-lets-talk bg-no-repeat bg-left">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="flex flex-col md:flex-row md:justify-end space-y-6 md:space-y-0">
            <div className="md:w-1/2 space-y-6">
              <h1 className="text-4xl font-bold text-white">
                We Don’t Charge To Educate Our Customers
              </h1>
              <p className="text-white text-sm md:text-md">
                Customer Education accelerates growth throughout the customer journey...
              </p>

              {/* Form Wrapper */}
              <div className="w-full bg-white shadow-md rounded-lg p-8">
                <form className="space-y-4">
                  <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                    <div>
                      <label htmlFor="fullName" className="block text-sm font-medium text-gray-700">Full Name</label>
                      <input
                        type="text"
                        id="fullName"
                        className="mt-1 p-2 w-full rounded-md border border-gray-300"
                        placeholder="Enter your full name"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
                      <input
                        type="email"
                        id="email"
                        className="mt-1 p-2 w-full rounded-md border border-gray-300"
                        placeholder="Enter your email"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="companyName" className="block text-sm font-medium text-gray-700">Company Name</label>
                    <input
                      type="text"
                      id="companyName"
                      className="mt-1 p-2 w-full rounded-md border border-gray-300"
                      placeholder="Enter your company name"
                    />
                  </div>

                  <div>
                    <label htmlFor="comments" className="block text-sm font-medium text-gray-700">Further Comments</label>
                    <textarea
                      id="comments"
                      rows="4"
                      className="mt-1 p-2 w-full rounded-md border border-gray-300"
                      placeholder="Write your comments here"
                    ></textarea>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="country" className="block text-sm font-medium text-gray-700">Country</label>
                      <select id="country" className="mt-1 p-2 w-full rounded-md border border-gray-300">
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
                        className="mt-1 p-2 w-full rounded-md border border-gray-300"
                        placeholder="Enter your phone number"
                      />
                    </div>
                  </div>

                  <div className="flex items-center">
                    <input type="checkbox" id="captcha" className="h-4 w-4 text-blue-600" />
                    <label htmlFor="captcha" className="ml-2 text-sm text-gray-700">
                      I&apos;m not a robot
                    </label>
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-red-600 text-white py-2 rounded-md hover:bg-red-700"
                  >
                    CONTACT US TODAY
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
