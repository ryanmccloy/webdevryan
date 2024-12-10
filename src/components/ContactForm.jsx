import { useEffect, useRef } from "react";
import GetInTouchButton from "./GetInTouchButton";

function ContactForm() {
  const messageRef = useRef(null);

  const formStyles = "flex flex-col gap-15 ";
  const labelStyles = "font-semibold";
  const inputStyles = "border-b border-primary bg-background p-2";

  useEffect(() => {
    const textArea = messageRef.current;

    const handleInput = () => {
      textArea.style.height = "auto";
      textArea.style.height = textArea.scrollHeight + "px";
    };

    textArea.addEventListener("input", handleInput);

    return () => {
      textArea.removeEventListener("input", handleInput);
    };
  }, []);

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("Form Submitted");
  };

  return (
    <form className="flex flex-col gap-30" onSubmit={handleSubmit}>
      <div className={`${formStyles}`}>
        <label htmlFor="name" className={`${labelStyles}`}>
          Name
        </label>
        <input id="name" type="text" required className={`${inputStyles}`} />
      </div>

      <div className={`${formStyles}`}>
        <label htmlFor="email" className={`${labelStyles}`}>
          Email
        </label>
        <input id="email" type="email" required className={`${inputStyles}`} />
      </div>

      <div className={`${formStyles}`}>
        <label htmlFor="message" className={`${labelStyles}`}>
          Message
        </label>
        <textarea
          id="message"
          ref={messageRef}
          type="text"
          rows="1"
          required
          className={`${inputStyles} overflow-hidden`}
        />
      </div>

      <GetInTouchButton type="submit" label="Send Message">
        Send Message
      </GetInTouchButton>
    </form>
  );
}

export default ContactForm;
