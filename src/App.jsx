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

// check padding-x on landing vs rest of sections (looks bigger on landing)

// Code review processes

// Global section apdding style, and global heading styles for better maintainability
// max width on entire webpage
// indication to click on accordion on features section
