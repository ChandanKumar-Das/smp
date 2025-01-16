import HappyClient from "../../components/landing/happy-client";
import Hero from "../../components/landing/Hero";
import HighlyConverting from "../../components/landing/Highly-converting";
import LosingInquiries from "../../components/landing/Losing-Inquiries";
import MarketingSolution from "../../components/landing/marketing-solution";
import Navbar from "../../components/landing/Navbar";
import OnlyChoice from "../../components/landing/only-choice";

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
   </>
  );
}
