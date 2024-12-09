import LandingPage from "./sections/LandingPage";
import AboutUs from "./sections/AboutUs";
import Features from "./sections/Features";
import Process from "./sections/Process";
import Services from "./sections/Services";
import ContactUs from "./sections/ContactUs";
import Footer from "./sections/Footer";

function App() {
  return (
    <>
      <LandingPage />

      <main>
        <AboutUs />
        <Features />
        <Process />
        <Services />
        <ContactUs />
      </main>

      <Footer />
    </>
  );
}

export default App;

// code review contactus
// code review footer
// form submission data (CRM software??)
// webpage animations
// indication to click on accordion on features section
