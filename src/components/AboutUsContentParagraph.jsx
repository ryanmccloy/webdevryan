function AboutUsContentParagraph({ children, padding, bg = "" }) {
  return (
    <div className={`${padding} ${bg} ${bg ? "-mx-30 px-30" : ""}`}>
      {children}
    </div>
  );
}

export default AboutUsContentParagraph;
