import React from "react";
import { motion } from "framer-motion";
import { useTheme } from "../context/ThemeContext";

const Contact = () => {
  const { getThemeColor, theme } = useTheme();
  const currentThemeColor = getThemeColor();

  const getGradientColors = () => {
    switch (theme) {
      case "blue":
        return "from-blue-500/10 via-indigo-500/10 to-cyan-500/10";
      case "purple":
        return "from-purple-500/10 via-pink-500/10 to-indigo-500/10";
      case "pink":
        return "from-pink-500/10 via-rose-500/10 to-purple-500/10";
      case "green":
        return "from-green-500/10 via-emerald-500/10 to-teal-500/10";
      case "yellow":
        return "from-yellow-500/10 via-amber-500/10 to-orange-500/10";
      case "indigo":
        return "from-indigo-500/10 via-blue-500/10 to-violet-500/10";
      case "red":
        return "from-red-500/10 via-rose-500/10 to-pink-500/10";
      case "teal":
        return "from-teal-500/10 via-cyan-500/10 to-blue-500/10";
      default:
        return "from-blue-500/10 via-indigo-500/10 to-cyan-500/10";
    }
  };

  return (
    <section
      id="contact"
      className={`section py-20 bg-gradient-to-br ${getGradientColors()} transition-colors duration-500`}
    >
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Get in Touch</h2>
          <p className="text-gray-600 dark:text-gray-300">
            Let's connect and discuss how we can work together
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="space-y-6"
          >
            <div className="flex items-center gap-4">
              <div
                className={`p-3 rounded-full bg-${currentThemeColor}-500/10`}
              >
                <svg
                  className={`w-6 h-6 text-${currentThemeColor}-500`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>
              </div>
              <div>
                <h3 className="font-medium">Email</h3>
                <a
                  href="mailto:sarthak1shukla@gmail.com"
                  className="text-gray-600 dark:text-gray-300 hover:text-primary dark:hover:text-primary-light transition-colors"
                >
                  sarthak1shukla@gmail.com
                </a>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <div
                className={`p-3 rounded-full bg-${currentThemeColor}-500/10`}
              >
                <svg
                  className={`w-6 h-6 text-${currentThemeColor}-500`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                </svg>
              </div>
              <div>
                <h3 className="font-medium">Location</h3>
                <p className="text-gray-600 dark:text-gray-300">
                  Lucknow, Uttar Pradesh, India
                </p>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <div
                className={`p-3 rounded-full bg-${currentThemeColor}-500/10`}
              >
                <svg
                  className={`w-6 h-6 text-${currentThemeColor}-500`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M13 10V3L4 14h7v7l9-11h-7z"
                  />
                </svg>
              </div>
              <div>
                <h3 className="font-medium">Availability</h3>
                <p className="text-gray-600 dark:text-gray-300">
                  Open to new opportunities
                </p>
              </div>
            </div>
          </motion.div>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="space-y-6"
          >
            <h3 className="text-xl font-semibold mb-4">Connect with me</h3>
            <div className="grid grid-cols-2 gap-4">
              <a
                href="https://github.com/sarthak1shukla"
                target="_blank"
                rel="noopener noreferrer"
                className={`flex items-center gap-3 p-4 rounded-lg bg-${currentThemeColor}-500/10 hover:bg-${currentThemeColor}-500/20 transition-colors`}
              >
                <svg
                  className={`w-6 h-6 text-${currentThemeColor}-500`}
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    fillRule="evenodd"
                    d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                    clipRule="evenodd"
                  />
                </svg>
                <span>GitHub</span>
              </a>

              <a
                href="https://linkedin.com/in/sarthak1shukla"
                target="_blank"
                rel="noopener noreferrer"
                className={`flex items-center gap-3 p-4 rounded-lg bg-${currentThemeColor}-500/10 hover:bg-${currentThemeColor}-500/20 transition-colors`}
              >
                <svg
                  className={`w-6 h-6 text-${currentThemeColor}-500`}
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    fillRule="evenodd"
                    d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"
                    clipRule="evenodd"
                  />
                </svg>
                <span>LinkedIn</span>
              </a>

              <a
                href="https://www.hackerrank.com/profile/sarthak1shukla"
                target="_blank"
                rel="noopener noreferrer"
                className={`flex items-center gap-3 p-4 rounded-lg bg-${currentThemeColor}-500/10 hover:bg-${currentThemeColor}-500/20 transition-colors`}
              >
                <svg
                  className={`w-6 h-6 text-${currentThemeColor}-500`}
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M12 0c1.285 0 9.75 4.886 10.392 6 .645 1.115.645 16.885 0 18S13.287 24 12 24s-9.75-4.885-10.395-6c-.641-1.115-.641-16.885 0-18C2.25 4.886 10.715 0 12 0zm2.295 6.799c-.141 0-.258.115-.258.258v3.875H9.963V6.908c0-.143-.117-.258-.259-.258H9.443c-.142 0-.259.115-.259.258v10.173c0 .143.117.258.259.258h.261c.142 0 .259-.115.259-.258v-4.004h4.074v4.004c0 .143.117.258.258.258h.261c.142 0 .259-.115.259-.258V7.057c0-.143-.117-.258-.259-.258h-.261z" />
                </svg>
                <span>HackerRank</span>
              </a>

              <a
                href="https://leetcode.com/u/sarthak1shukla/"
                target="_blank"
                rel="noopener noreferrer"
                className={`flex items-center gap-3 p-4 rounded-lg bg-${currentThemeColor}-500/10 hover:bg-${currentThemeColor}-500/20 transition-colors`}
              >
                <svg
                  className={`w-6 h-6 text-${currentThemeColor}-500`}
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M13.483 0a1.374 1.374 0 0 0-.961.438L7.116 6.226l-3.854 4.126a1.67 1.67 0 0 0-.415 1.2.67.67 0 0 0 .255.426L4.92 12.81a1.47 1.47 0 0 0 .678.42 1.4 1.4 0 0 0 .82-.044l1.9-.381 3.786 3.786 1.9-.381a1.4 1.4 0 0 0 .82-.044 1.47 1.47 0 0 0 .678-.42l1.926-1.926a.67.67 0 0 0 .255-.426 1.67 1.67 0 0 0-.415-1.2l-3.854-4.126L14.444.438A1.374 1.374 0 0 0 13.483 0zm-2.866 12.815l-1.9.381a.67.67 0 0 1-.82-.044.47.47 0 0 1-.255-.426l-1.926-1.926a1.67 1.67 0 0 1 .415-1.2l3.854-4.126 5.406-5.406a1.374 1.374 0 0 1 .961-.438 1.374 1.374 0 0 1 .961.438l5.406 5.406 3.854 4.126a1.67 1.67 0 0 1 .415 1.2.67.67 0 0 1-.255.426l-1.926 1.926a1.47 1.47 0 0 1-.678.42 1.4 1.4 0 0 1-.82-.044l-1.9-.381-3.786-3.786-1.9.381z" />
                </svg>
                <span>LeetCode</span>
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
