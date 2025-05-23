import { useState } from "react";
import { motion } from "framer-motion";
import { FiX } from "react-icons/fi";
import Button from "./reusable/Button";
import emailjs from "@emailjs/browser"; // ✅ updated import

const selectOptions = [
  "Web Application",
  "Mobile Application",
  "UI/UX Design",
  "Branding",
];

const HireMeModal = ({ onClose }) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: selectOptions[0],
    message: "",
  });

  const [sending, setSending] = useState(false);
  const [feedback, setFeedback] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSending(true);
    setFeedback(null);

    const serviceID = "service_knuam38";
    const templateID = "template_rwqpxb7";
    const userID = "PEkuE5X0SrvfIV2Uy"; // ✅ Add your user ID

    const templateParams = {
      from_name: formData.name,
      from_email: formData.email,
      subject: formData.subject,
      message: formData.message,
      to_email: "benjaminmanjolo39@gmail.com",
    };

    emailjs
      .send(serviceID, templateID, templateParams, userID) // ✅ userID added here
      .then(() => {
        setFeedback("Request sent successfully!");
        setSending(false);
        onClose();
      })
      .catch((error) => {
        setFeedback("Failed to send request. Please try again later.");
        setSending(false);
        console.error("EmailJS error:", error);
      });
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="font-general-medium fixed inset-0 z-30 transition-all duration-500"
    >
      {/* Modal Backdrop */}
      <div className="bg-filter bg-black bg-opacity-50 fixed inset-0 w-full h-full z-20"></div>

      {/* Modal Content */}
      <main className="flex flex-col items-center justify-center h-full w-full">
        <div className="modal-wrapper flex items-center z-30">
          <div className="modal max-w-md mx-5 xl:max-w-xl lg:max-w-xl md:max-w-xl bg-secondary-light dark:bg-primary-dark max-h-screen shadow-lg flex-row rounded-lg relative">
            <div className="modal-header flex justify-between gap-10 p-5 border-b border-ternary-light dark:border-ternary-dark">
              <h5 className="text-primary-dark dark:text-primary-light text-xl">
                What project are you looking for?
              </h5>
              <button
                onClick={onClose}
                className="px-4 font-bold text-primary-dark dark:text-primary-light"
              >
                <FiX className="text-3xl" />
              </button>
            </div>
            <div className="modal-body p-5 w-full h-full">
              <form onSubmit={handleSubmit} className="max-w-xl m-4 text-left">
                <input
                  className="w-full px-5 py-2 border dark:border-secondary-dark rounded-md text-md bg-secondary-light dark:bg-ternary-dark text-primary-dark dark:text-ternary-light"
                  id="name"
                  name="name"
                  type="text"
                  required
                  placeholder="Name"
                  value={formData.name}
                  onChange={handleChange}
                />
                <div className="mt-6">
                  <input
                    className="w-full px-5 py-2 border dark:border-secondary-dark rounded-md text-md bg-secondary-light dark:bg-ternary-dark text-primary-dark dark:text-ternary-light"
                    id="email"
                    name="email"
                    type="email"
                    required
                    placeholder="Email"
                    value={formData.email}
                    onChange={handleChange}
                  />
                </div>
                <div className="mt-6">
                  <select
                    className="w-full px-5 py-2 border dark:border-secondary-dark rounded-md text-md bg-secondary-light dark:bg-ternary-dark text-primary-dark dark:text-ternary-light"
                    id="subject"
                    name="subject"
                    required
                    value={formData.subject}
                    onChange={handleChange}
                  >
                    {selectOptions.map((option) => (
                      <option key={option} value={option}>
                        {option}
                      </option>
                    ))}
                  </select>
                </div>

                <div className="mt-6">
                  <textarea
                    className="w-full px-5 py-2 border dark:border-secondary-dark rounded-md text-md bg-secondary-light dark:bg-ternary-dark text-primary-dark dark:text-ternary-light"
                    id="message"
                    name="message"
                    rows="6"
                    placeholder="Project description"
                    value={formData.message}
                    onChange={handleChange}
                  ></textarea>
                </div>

                {feedback && (
                  <div className="mt-4 text-center text-sm text-red-600 dark:text-red-400">
                    {feedback}
                  </div>
                )}

                <div className="mt-6 pb-4 sm:pb-1">
                  <button
                    type="submit"
                    disabled={sending}
                    className="px-4 sm:px-6 py-2 sm:py-2.5 text-white bg-indigo-500 hover:bg-indigo-600 rounded-md focus:ring-1 focus:ring-indigo-900 duration-500"
                  >
                    {sending ? "Sending..." : "Send Request"}
                  </button>
                </div>
              </form>
            </div>
            <div className="modal-footer mt-2 py-5 px-8 text-right">
              <button
                onClick={onClose}
                className="px-4 sm:px-6 py-2 bg-gray-600 text-primary-light hover:bg-ternary-dark dark:bg-gray-200 dark:text-secondary-dark dark:hover:bg-primary-light rounded-md focus:ring-1 focus:ring-indigo-900 duration-500"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      </main>
    </motion.div>
  );
};

export default HireMeModal;
