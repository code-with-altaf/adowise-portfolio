"use client";
import { useState } from "react";
import NewsLatterBox from "./NewsLatterBox";

const Contact = ({ messages }: { messages: any }) => {
  const t = messages.Contact || {}; // Fallback in case keys are missing
  const [result, setResult] = useState("");
  const [loading, setLoading] = useState(false);

  const onSubmit = async (event: any) => {
    event.preventDefault();
    setLoading(true);
    setResult("");

    const formData = new FormData(event.target);
    const data = {
      name: formData.get("name"),
      email: formData.get("email"),
      subject: "Website Inquiry", // Default subject
      message: formData.get("message"),
    };

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      const resultData = await response.json();
      if (response.ok) {
        setResult(t.success_msg || "Your message has been sent successfully!");
        event.target.reset();
      } else {
        setResult(resultData.error || t.error_msg || "Something went wrong. Try again.");
      }
    } catch (error) {
      setResult(t.error_msg || "Something went wrong. Try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" className="overflow-hidden py-16 md:py-20 lg:py-28">
      <div className="container">
        <div className="-mx-4 flex flex-wrap">
          <div className="w-full px-4 lg:w-7/12 xl:w-8/12">
            <div
              className="mb-12 rounded-xs bg-white px-8 py-11 shadow-three dark:bg-gray-dark sm:p-[55px] lg:mb-5 lg:px-8 xl:p-[55px]"
              data-wow-delay=".15s"
            >
              <h2 className="mb-3 text-2xl font-bold text-black dark:text-white sm:text-3xl lg:text-2xl xl:text-3xl">
                {t.title || "Need Help? Open a Ticket"}
              </h2>
              <p className="mb-12 text-base font-medium text-body-color">
                {t.subtitle || "Our support team will get back to you ASAP via email."}
              </p>

              {/* ✔ FORM — UI NOT CHANGED */}
              <form onSubmit={onSubmit}>
                <div className="-mx-4 flex flex-wrap">

                  <div className="w-full px-4 md:w-1/2">
                    <div className="mb-8">
                      <label
                        htmlFor="name"
                        className="mb-3 block text-sm font-medium text-dark dark:text-white"
                      >
                        {t.name_label || "Your Name"}
                      </label>
                      <input
                        type="text"
                        name="name"
                        required
                        placeholder={t.name_placeholder || "Enter your name"}
                        className="border-stroke w-full rounded-xs border bg-[#f8f8f8] px-6 py-3 text-base text-body-color outline-hidden focus:border-primary dark:border-transparent dark:bg-[#2C303B] dark:text-body-color-dark dark:shadow-two dark:focus:border-primary dark:focus:shadow-none"
                      />
                    </div>
                  </div>

                  <div className="w-full px-4 md:w-1/2">
                    <div className="mb-8">
                      <label
                        htmlFor="email"
                        className="mb-3 block text-sm font-medium text-dark dark:text-white"
                      >
                        {t.email_label || "Your Email"}
                      </label>
                      <input
                        type="email"
                        name="email"
                        required
                        placeholder={t.email_placeholder || "Enter your email"}
                        className="border-stroke w-full rounded-xs border bg-[#f8f8f8] px-6 py-3 text-base text-body-color outline-hidden focus:border-primary dark:border-transparent dark:bg-[#2C303B] dark:text-body-color-dark dark:shadow-two dark:focus:border-primary dark:focus:shadow-none"
                      />
                    </div>
                  </div>

                  <div className="w-full px-4">
                    <div className="mb-8">
                      <label
                        htmlFor="message"
                        className="mb-3 block text-sm font-medium text-dark dark:text-white"
                      >
                        {t.message_label || "Your Message"}
                      </label>
                      <textarea
                        name="message"
                        required
                        rows={5}
                        placeholder={t.message_placeholder || "Enter your Message"}
                        className="border-stroke w-full resize-none rounded-xs border bg-[#f8f8f8] px-6 py-3 text-base text-body-color outline-hidden focus:border-primary dark:border-transparent dark:bg-[#2C303B] dark:text-body-color-dark dark:shadow-two dark:focus:border-primary dark:focus:shadow-none"
                      ></textarea>
                    </div>
                  </div>

                  <div className="w-full px-4">
                    <button
                      type="submit"
                      className="rounded-xs bg-primary px-9 py-4 text-base font-medium text-white shadow-submit duration-300 hover:bg-primary/90 dark:shadow-submit-dark"
                    >
                      {loading ? (t.loading_text || "Submitting...") : (t.btn_text || "Submit Ticket")}
                    </button>
                  </div>

                  {result && (
                    <p className="mt-4 px-4 text-sm font-medium text-primary">
                      {result}
                    </p>
                  )}

                </div>
              </form>
              {/* END */}
            </div>
          </div>

          <div className="w-full px-4 lg:w-5/12 xl:w-4/12">
            <NewsLatterBox />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
