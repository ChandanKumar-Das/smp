import Fifth from "../../../components/about-us/fifth";
import First from "../../../components/about-us/first";
import Fourth from "../../../components/about-us/fourth";
import Second from "../../../components/about-us/second";
import Thired from "../../../components/about-us/thired";
import DynamicNavbar from "../../../components/dymanicNavbar/dayamicNavbar";


export default function AboutUs(){
    return(
        <>
       <DynamicNavbar/>
       <div className="">
         <First/>
         <Second/>
         <Thired/>
         <Fourth/>
         <Fifth/>
       </div>
        </>
    )
}