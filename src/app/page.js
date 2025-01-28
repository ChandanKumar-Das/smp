
import ContactSection from "../../components/landing/contact-section";
import Customer from "../../components/landing/Customers";
import DigitalGrowth from "../../components/landing/Digital-Growth";
import FAQ from "../../components/landing/fAQ";
import Footer from "../../components/landing/footer";
import HappyClient from "../../components/landing/happy-client";
import Hero from "../../components/landing/Hero";
import HighlyConverting from "../../components/landing/Highly-converting";
import LosingInquiries from "../../components/landing/Losing-Inquiries";
import MarketingSolution from "../../components/landing/marketing-solution";
import Navbar from "../../components/landing/Navbar";
import NotCharge from "../../components/landing/NotCharge";
import OnlineTime from "../../components/landing/Online";
import OnlyChoice from "../../components/landing/only-choice";
import Service from "../../components/landing/Services";

export default function Home() {
  return (
   <>
   <Navbar/>
   <Hero/>
   <HappyClient/>
   <MarketingSolution/>
   <HighlyConverting/>
   <OnlyChoice/>
   <LosingInquiries/>
   <OnlineTime/>
   <DigitalGrowth/>
   <Customer/>
   <Service/>
   <NotCharge/>
   <FAQ/>
   <ContactSection/>
   <Footer/>
   </>
  );
}
