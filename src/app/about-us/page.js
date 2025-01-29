import Eighth from "../../../components/about-us/eighth";
import Fifth from "../../../components/about-us/fifth";
import First from "../../../components/about-us/first";
import Fourth from "../../../components/about-us/fourth";
import Second from "../../../components/about-us/second";
import Seventh from "../../../components/about-us/seventh";
import Sixth from "../../../components/about-us/sixth";
import Tenth from "../../../components/about-us/tenth";
import Thired from "../../../components/about-us/thired";
import DynamicNavbar from "../../../components/dymanicNavbar/dayamicNavbar";
import ContactSection from "../../../components/landing/contact-section";
import FAQ from "../../../components/landing/fAQ";
import Footer from "../../../components/landing/footer";
import NotCharge from "../../../components/landing/NotCharge";
import Service from "../../../components/landing/Services";


export default function AboutUs(){
  const headerData= {
    image:'https://safarimarketingpro.com/images/about-us-banner.jpg',
    content1:'Changing the way every Safari Company feels about gaining customers.',
    content2: ''
  }
    return(
        <>
       <DynamicNavbar image={headerData.image} content={headerData.content1} content2={headerData.content2}/>
       <div className="">
         <First/>
         <Second/>
         <Thired/>
         <Fourth/>
         <Fifth/>
         <Sixth/>
         <Seventh />
         <Eighth/>
         <Tenth/>
         <Service/>

          <NotCharge/>
           {/* <FAQ/> */}
         {/* <ContactSection/> */}
         <Footer/>
       </div>
        </>
    )
}