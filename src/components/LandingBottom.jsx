function LandingBottom() {
  return (
    <div className="gap-15 flex flex-col items-end self-end sm:w-2/3 md:w-1/2 xl:w-1/3">
      <div className="h-[125px] w-[120px]">
        <img
          src="/ryan.jpg"
          className="rounded-custom h-full w-full object-cover"
          alt="Ryan, Front-End Developer"
        />
      </div>
      <p className="text-end text-base font-medium uppercase">
        I&apos;m ryan, & I deliver custom websites that look great, load fast,
        and help you stand out online.
      </p>
    </div>
  );
}

export default LandingBottom;
