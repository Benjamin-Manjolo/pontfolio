import { useState } from "react";
import FormInput from "../reusable/FormInput";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleWhatsAppSend = (e) => {
    e.preventDefault();
    const phoneNumber = "YOUR_WHATSAPP_NUMBER"; // Replace with your WhatsApp number in international format without +
    const text = `Name: ${formData.name}%0AEmail: ${formData.email}%0ASubject: ${formData.subject}%0AMessage: ${formData.message}`;
    const url = `https://wa.me/${phoneNumber}?text=${text}`;
    window.open(url, "_blank");
  };

  const handleGmailSend = (e) => {
    e.preventDefault();
    const subject = encodeURIComponent(formData.subject);
    const body = encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\nMessage: ${formData.message}`
    );
    const mailtoLink = `mailto:?subject=${subject}&body=${body}`;
    window.location.href = mailtoLink;
  };

  return (
    <div className="w-full lg:w-1/2">
      <div className="leading-loose">
        <form className="max-w-xl m-4 p-6 sm:p-10 bg-secondary-light dark:bg-secondary-dark rounded-xl shadow-xl text-left">
          <p className="font-general-medium text-primary-dark dark:text-primary-light text-2xl mb-8">
            Contact Form
          </p>
          <FormInput
            inputLabel="Full Name"
            labelFor="name"
            inputType="text"
            inputId="name"
            inputName="name"
            placeholderText="Your Name"
            ariaLabelName="Name"
            value={formData.name}
            onChange={handleChange}
          />
          <FormInput
            inputLabel="Email"
            labelFor="email"
            inputType="email"
            inputId="email"
            inputName="email"
            placeholderText="Your email"
            ariaLabelName="Email"
            value={formData.email}
            onChange={handleChange}
          />
          <FormInput
            inputLabel="Subject"
            labelFor="subject"
            inputType="text"
            inputId="subject"
            inputName="subject"
            placeholderText="Subject"
            ariaLabelName="Subject"
            value={formData.subject}
            onChange={handleChange}
          />

          <div className="mt-6">
            <label
              className="block text-lg text-primary-dark dark:text-primary-light mb-2"
              htmlFor="message"
            >
              Message
            </label>
            <textarea
              className="w-full px-5 py-2 border border-gray-300 dark:border-primary-dark border-opacity-50 text-primary-dark dark:text-secondary-light bg-ternary-light dark:bg-ternary-dark rounded-md shadow-sm text-md"
              id="message"
              name="message"
              cols="14"
              rows="6"
              aria-label="Message"
              value={formData.message}
              onChange={handleChange}
            ></textarea>
          </div>

          <div className="flex space-x-4 mt-6">
            <button
              type="button"
              aria-label="Send via WhatsApp"
              onClick={handleWhatsAppSend}
              className="bg-green-700 dark:bg-green-600 hover:bg-green-800 dark:hover:bg-green-700 text-gray px-4 py-2 rounded shadow border border-green-800"
            >
              Send via WhatsApp
            </button>
            <button
              className="bg-red-700 dark:bg-red-600 hover:bg-red-800 dark:hover:bg-red-700 text-gray px-4 py-2 rounded shadow border border-red-800"
              type="button"
              aria-label="Send via Gmail"
              onClick={handleGmailSend}
            >
              Send via Gmail
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ContactForm;
