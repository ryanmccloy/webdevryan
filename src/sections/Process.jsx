import ProcessHeading from "../components/ProcessHeading";
import ProcessList from "../components/ProcessList";

function Process() {
  return (
    <section className="px-30 pt-90 lg:pt-120 pb-30 md:gap-90 flex flex-col gap-60">
      <ProcessHeading />
      <ProcessList />
    </section>
  );
}

export default Process;
