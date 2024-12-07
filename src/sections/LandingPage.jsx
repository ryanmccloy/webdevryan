import NavBar from "../components/NavBar";
import CTA from "../components/CTA";
import LandingBottom from "../components/LandingBottom";

function LandingPage() {
  return (
    <div className="p-30 flex h-[100dvh] flex-col xl:px-60">
      <NavBar />
      <section className="flex flex-1 flex-col justify-between">
        <CTA />
        <LandingBottom />
      </section>
    </div>
  );
}

export default LandingPage;
