import React from "react";
import { FaEnvelope, FaPhoneAlt, FaLinkedin } from "react-icons/fa";

export default function Contact() {
  return (
    <section
      id="contact"
      className="py-20 bg-gray-50 dark:bg-gray-800 transition-colors duration-300"
    >
      <div className="max-w-3xl mx-auto px-6 text-center">
        <h2 className="text-3xl font-bold text-gray-900 dark:text-white">
          Let&apos;s work together
        </h2>

        <p className="mt-4 text-gray-600 dark:text-gray-300">
          I'm currently available for freelance projects and full-time opportunities.
        </p>

        {/* Email Button */}
        <a
          href="mailto:surajcsgo@gmail.com"
          className="mt-6 inline-block px-6 py-3 bg-black dark:bg-white text-white dark:text-black rounded-full hover:scale-105 transition-transform"
        >
          Email me
        </a>

        {/* Contact Info */}
        <div className="mt-8 flex flex-col items-center gap-3 text-gray-700 dark:text-gray-300">
          <div className="flex items-center gap-2">
            <FaEnvelope className="text-lg text-gray-500 dark:text-gray-400" />
            <a
              href="mailto:surajcsgo@gmail.com"
              className="hover:underline hover:text-gray-900 dark:hover:text-white transition-colors"
            >
              surajcsgo@gmail.com
            </a>
          </div>

          <div className="flex items-center gap-2">
            <FaPhoneAlt className="text-lg text-gray-500 dark:text-gray-400" />
            <a
              href="tel:+919984904063"
              className="hover:underline hover:text-gray-900 dark:hover:text-white transition-colors"
            >
              +91 99849 04063
            </a>
          </div>
        </div>

        {/* Social Links */}
        <div className="mt-6 flex justify-center gap-6">
          <a
            href="https://www.linkedin.com/in/surajkumar53/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors"
          >
            <FaLinkedin className="text-xl" />
            <span>LinkedIn</span>
          </a>
        </div>
      </div>
    </section>
  );
}
