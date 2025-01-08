import NavBar from "@/components/navbar/NavBar";
import { useEffect, useState } from "react";
import { SelectedPage } from "@/shared/types";
import Home from "@/components/home/Home";
import Benefits from "@/components/Benefits/Benefits";
import OurClasses from "@/components/ourClasses/OurClasses";
import ContactUs from "@/components/contactUs/ContactUs";
import Footer from "@/components/footer/Footer";

function App() {
  const [selectedPage, setSelectedPage] = useState<SelectedPage>(
    SelectedPage.Home,
  );
  const [isTopOfPage, setIsTopOfPage] = useState<boolean>(true);

  // Change selected page based on scroll position
  useEffect(() => {
    // Check if user is at the top of the page
    const handleScroll = () => {
      if (window.scrollY === 0) {
        setIsTopOfPage(true);
        setSelectedPage(SelectedPage.Home);
      } else {
        setIsTopOfPage(false);
      }
    };

    // Add scroll event listener
    window.addEventListener("scroll", handleScroll);

    // Remove scroll event listener
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="bg-gray-20">
      <NavBar
        isTopOfPage={isTopOfPage}
        selectedPage={selectedPage}
        setSelectedPage={setSelectedPage}
      />
      <Home setSelectedPage={setSelectedPage} />
      <Benefits setSelectedPage={setSelectedPage} />
      <OurClasses setSelectedPage={setSelectedPage} />
      <ContactUs setSelectedPage={setSelectedPage} />
      <Footer />
    </div>
  );
}

export default App;
