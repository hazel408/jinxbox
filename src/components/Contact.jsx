import { useRef } from "react";
import emailjs from "emailjs-com";

export default function Contact() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "YOUR_SERVICE_ID", // from EmailJS
        "YOUR_TEMPLATE_ID", // from EmailJS
        form.current,
        "YOUR_PUBLIC_KEY"   // from EmailJS
      )
      .then(
        (result) => {
          alert("Message Sent!");
          console.log(result.text);
        },
        (error) => {
          alert("Error sending message");
          console.log(error.text);
        }
      );
  };

  return (
    <form ref={form} onSubmit={sendEmail} className="p-6 bg-white rounded-lg shadow-lg">
      <h2 className="text-2xl mb-4 font-semibold">Contact Us</h2>
      <input type="text" name="user_name" placeholder="Your Name" className="w-full border p-2 mb-3" required />
      <input type="email" name="user_email" placeholder="Your Email" className="w-full border p-2 mb-3" required />
      <textarea name="message" placeholder="Your Message" className="w-full border p-2 mb-3" required />
      <button type="submit" className="bg-yellow-700 text-white px-4 py-2 rounded-md">
        Send
      </button>
    </form>
  );
}
