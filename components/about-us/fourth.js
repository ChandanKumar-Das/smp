export default function Fourth() {
    return (
      <div className="bg-gray-100 py-16 px-6">
        <div className="max-w-[1200px] mx-auto">
          {/* Heading */}
          <h1 className="text-4xl font-bold text-blue-600 text-center">
            Our History
          </h1>
          <p className="text-lg text-gray-500 text-center mt-2">
            Turning Lookers into Bookers – Since 2012!
          </p>
  
          {/* Mission & Vision Section */}
          <div className="mt-12 grid md:grid-cols-2 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <h2 className="text-2xl font-semibold text-blue-700">Our Mission</h2>
              <p className="text-gray-600 mt-2">
                Our Mission at Safari Marketing Pro is to (re)shape each safari and Tour Company so that they won’t have to rely on agents.
              </p>
            </div>
  
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <h2 className="text-2xl font-semibold text-blue-700">Our Vision</h2>
              <p className="text-gray-600 mt-2">
                We want to ensure that every tour operator can transform their business into the digital field, eliminating the need for agents or third parties.
              </p>
            </div>
          </div>
  
          {/* History Section */}
          <div className="mt-16">
            <h2 className="text-3xl font-bold text-blue-600 text-center">
              A Peek Into Our History
            </h2>
  
            <div className="mt-8 bg-white p-8 rounded-lg shadow-lg">
              <h3 className="text-2xl font-semibold text-gray-800">
                A Behind the Scenes Outlook
              </h3>
              <p className="text-gray-600 mt-4">
              In 2012, there was a big hype about getting an easy project concerning digital marketing from the USA and Europe. It would’ve been easy to go where the demand was.
              </p>
              <p className="text-gray-600 mt-4">
              But, when we started our company our board of directors had a concrete goal in mind. We wanted to change the whole world for individuals who knew nothing about digital marketing. This was not a popular decision, to say the least. We had a lot of fallout and many people made mocking remarks. Because according to them – how were we going to manage a business in a country that didn’t even have basic facilities like food?
              </p>
            
  
              <div className="mt-8 p-6 bg-gray-100 rounded-lg">
                <h4 className="text-xl font-semibold text-blue-700">
                  Challenges We Faced in the African Market
                </h4>
                <p className="text-gray-600 mt-2">
                  When we arrived in Africa, we quickly realized that most safari operators relied heavily on agents. Digital marketing was an unfamiliar concept to them, and they were skeptical of its impact.
                </p>
              </div>
            </div>
          </div>
  
          {/* Achievements Section */}
          <div className="mt-16">
            <h2 className="text-3xl font-bold text-blue-600 text-center">
            How We Managed To Capture The Heart Of African Tour Operators
            </h2>
            <p className="text-gray-600 text-center mt-4">
              After years of persistence, we established Safari Marketing Pro as the leading safari marketing agency in Africa. Today, we work with over **300+ satisfied clients**, including:
            </p>
  
            {/* Clients List */}
            <div className="mt-6 flex flex-wrap justify-center gap-4">
              {[
                "Falcon Safaris",
                "Go2 Africa",
                "Mahlatini Luxury Travel",
                "Discover Africa",
                "Jewel of Africa",
                "Rhino Africa",
                "Easy Travels",
                "Altezza Travel",
                "Zara Tours",
              ].map((client, index) => (
                <span
                  key={index}
                  className="bg-blue-500 text-white px-4 py-2 rounded-full text-sm font-medium"
                >
                  {client}
                </span>
              ))}
            </div>
          </div>
  
          {/* Future Vision */}
          <div className="mt-16 text-center">
            <h2 className="text-3xl font-bold text-blue-600">
              Our Vision For The Future!
            </h2>
            <p className="text-gray-600 mt-4 max-w-[900px] mx-auto">
              We aim to reach every safari and tour operator worldwide, helping them digitize their business while eliminating reliance on B2B agents. Our continuous improvements and updates ensure the best marketing solutions for our clients.
            </p>
            <a
              href="https://www.safarimarketingpro.com/blog/"
              target="_blank"
              className="mt-6 inline-block bg-blue-600 text-white py-3 px-6 rounded-lg text-lg font-semibold shadow-lg hover:bg-blue-700 transition"
            >
              Visit Our Blog
            </a>
          </div>
  
          {/* CTA Section */}
          <div className="mt-16 flex justify-center">
            <button className="px-6 py-3 uppercase bg-red-500 text-white rounded-lg font-medium shadow-md hover:bg-red-600 transition duration-300">
              Request A Free Strategy Session
            </button>
          </div>
        </div>
      </div>
    );
  }
  