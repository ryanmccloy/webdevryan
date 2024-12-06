import NavBar from "../components/NavBar";
import CTA from "../components/CTA";
import LandingBottom from "../components/LandingBottom";

function LandingPage() {
  return (
    <div className="flex h-[calc(100dvh-3.5rem)] flex-col">
      <NavBar />
      <section className="flex flex-1 flex-col justify-between">
        <CTA />
        <LandingBottom />
      </section>
    </div>
  );
}

export default LandingPage;
