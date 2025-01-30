

export default function Fifth(){
    return(
        <>
        <div>
            <div className="max-w-[1200px] mx-auto py-10"> 
                <h1 className="text-[34px]  font800">Awards We’ve Won</h1>
            <div className=" grid grid-cols-3 gap-10 mt-14">
             <div>
             {[
            { title: "Top B2B Company", award: "Clutch Award" },
            { title: "Best In Search", award: "Top SEOs" },
          ].map((item, index) => (
            <div key={index} className="flex flex-col leading-[2.2] ">
              <span className="text-gray-600 text-xl font-semibold">⭐ {item.title}</span>
              <p className="text-gray-600 pl-8">{item.award}</p>
            </div>
          ))}
             </div>
             <div>
             {[
            { title: "Growing Businesses Online", award: "Google" },
            { title: "Top Digital Marketing Agency", award: "Clutch Award" },
          ].map((item, index) => (
            <div key={index} className="flex flex-col leading-[2.2] ">
              <span className="text--600 text-xl font-semibold">⭐ {item.title}</span>
              <p className="text-gray-600 pl-8">{item.award}</p>
            </div>
          ))}
             </div>
             <div>
                <img src="https://safarimarketingpro.com/images/wmatbp-fig-1.png" alt="image "/>
             </div>
            </div>


            <div className="flex justify-between">
                <div className="w-8/12">
                    <img src="https://safarimarketingpro.com/images/social-logos.png" alt="newphoto"/>
                </div>
                <div className="mt-16 w-7/12">
                    <h1 className="text-4xl font-bold">Safari Marketing Pro Named Google AdWords™ Premier Partner</h1>
                    <p className="pt-4 text-gray-500 text-md">SMP is excited to announce that we have been awarded Premier Partner Status by Google AdWords™!</p>
                    <p className="pt-4 text-gray-500 text-md">Which means we have exceeded the expectations of the African countries for our outstanding work in the safari industry. Client’s success is where our happiness lies and we have only followed our aim to solve their problems & came out with flying colours.</p>
                    <p className="pt-4 text-gray-500 text-md">This elite Premier Partner status is something we are truly proud of and grateful for. It is a testament to the profitable results we deliver to our clients every day.</p>
                    <button className="mt-4 px-6 py-3 uppercase bg-red-500 text-white rounded-lg font-medium shadow-md hover:bg-red-600 transition duration-300">work with us</button>
                </div>
            </div>
            </div>
        </div>
        </>
    )
}