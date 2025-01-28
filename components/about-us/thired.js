
export default function Thired() {

    const tableData =  [
        {
            'id':1,
            'SPECIFICATIONS':'The Niche',
            'SAFARIMARKETINGPRO':'We are the industry leaders in understanding the African safari ecosystem.',
            'OTHERAGENCIES':'No ground-level understanding of how the entire safari ecosystem works.'
        },
        {
            'id':2,
            'SPECIFICATIONS':'Deep Research',
            'SAFARIMARKETINGPRO':'We do complete research of our client’s problems & requirements before starting to work with them.',
            'OTHERAGENCIES':' One-size-fits-all approach is followed for all the clients.'
        },
        {
            'id':3,
            'SPECIFICATIONS':'Result Oriented',
            'SAFARIMARKETINGPRO':'From our 13 years of experience we have figured out a marketing recipe that address exactly to the African safari operators.',
            'OTHERAGENCIES':' Whereas no proper research or knowledge on what the customer’s needs are.'
        },
        {
            'id':4,
            'SPECIFICATIONS':'Target Specific',
            'SAFARIMARKETINGPRO':'We understand the areas our client focuses on in the safari business and then prepare a tailor-made solution that fits their needs.',
            'OTHERAGENCIES':' Having less knowledge on the African destinations & safari market fails them to do what actually works.'
        },
        {
            'id':5,
            'SPECIFICATIONS':'Being There',
            'SAFARIMARKETINGPRO':'Right from the beginning we have visited our clients once a year and gained knowledge on the destinations & how the operators work.',
            'OTHERAGENCIES':' Zero to no visits for having a deep understand of the industry they serve.'
        },
        {
            'id':6,
            'SPECIFICATIONS':'Reliability',
            'SAFARIMARKETINGPRO':'We welcome our client’s suggestions in the project, so both of our goals are on the same page and make it a great experience for them.',
            'OTHERAGENCIES':' Client’s suggestions are barely taken into consideration.'
        },
        {
            'id':7,
            'SPECIFICATIONS':'Educating Customers',
            'SAFARIMARKETINGPRO':'We first study what’s the client’s position in the market in terms of website, ranking or social media. Then we educate them on what should we do to get the best results.',
            'OTHERAGENCIES':'No time is invested in researching the client’s market position hence, no customization in the services.'
        },
        {
            'id':8,
            'SPECIFICATIONS':'Relationship Driven',
            'SAFARIMARKETINGPRO':'We try to have a healthy relationship with our clients & give valuable workarounds to them for a long span of time.',
            'OTHERAGENCIES':'No services or suggestions are given once the work is handed over.'
        },
        {
            'id':9,
            'SPECIFICATIONS':'Generating Revenue',
            'SAFARIMARKETINGPRO':'We don’t simply work for our clients; we work towards what directly changes their revenue model to generate 10x results.',
            'OTHERAGENCIES':' Not creating any impact on the client’s revenue model.'
        },
        {
            'id':10,
            'SPECIFICATIONS':'Zero Promotions',
            'SAFARIMARKETINGPRO':'Our clients have become our number one promotor; so, we don’t spend a penny at marketing for ourselves.',
            'OTHERAGENCIES':'Spending tons of money on marketing.'
        },
        {
            'id':11,
            'SPECIFICATIONS':'The Right Content',
            'SAFARIMARKETINGPRO':'We have a dedicated team of writers who present the real & well-researched content on Africa.',
            'OTHERAGENCIES':' Whereas, the content here is similar to what everybody presents and taken from google.'
        },
        {
            'id':12,
            'SPECIFICATIONS':'Hello Factor',
            'SAFARIMARKETINGPRO':'The websites we design are like it’s only made for the Safari operators; it appeals a “Hello” to our clients.',
            'OTHERAGENCIES':'The websites here don’t get through the hearts of safari operators.'
        },
    ]
    return (
      <div className="bg-gray-100 py-16 px-4">
        <div className="max-w-[1200px] mx-auto text-center">
          {/* Heading */}
          <h2 className="text-4xl font-bold text-blue-600">
            SMP In Comparison To Other Marketing Agencies
          </h2>
          <p className="text-gray-500 text-lg mt-2">
            Educate Your Customers To Learn More
          </p>
  
          {/* Table Container */}
          <div className="mt-8 overflow-x-auto">
            <table className="w-full border-collapse rounded-lg shadow-lg">
              <thead>
                <tr>
                  <th className="bg-[#041431] border-b text-white px-6 py-4 text-lg font-semibold">
                    SPECIFICATIONS
                  </th>
                  <th className="bg-[#0057FF] text-white px-6 py-4 text-lg font-semibold">
                    SAFARI MARKETING PRO
                  </th>
                  <th className="bg-[#FF4F4F] text-white px-6 py-4 text-lg font-semibold">
                    OTHER AGENCIES
                  </th>
                </tr>
              </thead>
              <tbody>
                {
                    tableData.map((item,_)=>(
                        <tr key={item.id} className="bg-[#041431] border-b text-white">
                        <td className="px-6 py-4 font-semibold">{item.SPECIFICATIONS}</td>
                        <td className="bg-[#EAF2FF] px-6 py-4 text-gray-700">
                          <span className="text-green-500 mr-2">✔</span>
                         {item.SAFARIMARKETINGPRO}
                        </td>
                        <td className="bg-[#FAE1E1] px-6 py-4 text-gray-700">
                          <span className="text-red-500 mr-2">✘</span>
                          {item.OTHERAGENCIES}
                        </td>
                      </tr>  
                    ))
                }
            
                {/* Add more rows as needed */}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    );
  }
  