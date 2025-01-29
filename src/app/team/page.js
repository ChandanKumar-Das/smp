import DynamicNavbar from "../../../components/dymanicNavbar/dayamicNavbar";
import Footer from "../../../components/landing/footer";
import NotCharge from "../../../components/landing/NotCharge";
import OnlineTime from "../../../components/landing/Online";
import First from "../../../components/team/fast";


export default function Team(){
    const headerData= {
        image:'https://safarimarketingpro.com/images/team-banner.jpg',
        content1:'Safari Marketing Pro is Made Up of a Highly-Motivated, Super-Qualified Group of Industry Experts',
        content2: 'We have got a diverse group of individuals who are drawn together by a common goal: helping our clients grow. We are passionate about client success!'
      }

    return(
        <>
        <DynamicNavbar image={headerData.image} content={headerData.content1} content2={headerData.content2}/>
        <First/>
       <NotCharge/>
       <Footer/>
        </>
    )
}