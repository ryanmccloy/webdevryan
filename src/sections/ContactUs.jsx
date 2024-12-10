import ContactForm from "../components/ContactForm";
import ContactUsHeading from "../components/ContactUsHeading";

function ContactUs() {
  return (
    <section className="section-spacing lg:flex-row-reverse" id="contact-us">
      <ContactUsHeading />
      <ContactForm />
    </section>
  );
}

export default ContactUs;
