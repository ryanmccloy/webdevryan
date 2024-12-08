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

// Code review features
// check padding-x on landing vs rest of sections (looks bigger on landing)
// Check processstep component (add icons and check width is correct for each instance - also check the titles and paragraphs are aligned)
// Code review processes
// Figure out services cards - how to keep grid in center with max-w on each instance
// Global section apdding style, and global heading styles for better maintainability
