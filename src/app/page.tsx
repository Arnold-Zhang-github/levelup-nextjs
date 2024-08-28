import { MyForm } from "@/components/MyForm";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import Sessions from "@/components/Sessions";
import Footer from "@/components/Footer";
import Feedback from "@/components/Feedback";

export default function Page() {
   return (
      <>
         <Navbar />
         <div className="flex flex-col">
            <HeroSection />
            <Sessions />
            <Feedback />
            <MyForm />
            <Footer />
            
         </div>
      </>
   );
}
