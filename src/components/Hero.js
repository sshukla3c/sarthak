import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { useTheme } from "../context/ThemeContext";

const Hero = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
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

  const getThemeAnimation = () => {
    switch (theme) {
      case "blue":
        return "animate-pulse";
      case "purple":
        return "animate-bounce";
      case "pink":
        return "animate-spin";
      case "green":
        return "animate-ping";
      case "yellow":
        return "animate-pulse";
      case "indigo":
        return "animate-bounce";
      case "red":
        return "animate-spin";
      case "teal":
        return "animate-ping";
      default:
        return "animate-pulse";
    }
  };

  const stats = [
    { value: "4.5+", label: "Years Experience" },
    { value: "50+", label: "Projects Completed" },
    { value: "30+", label: "Happy Clients" },
    { value: "100%", label: "Client Satisfaction" },
  ];

  const textVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const imageVariants = {
    hidden: { opacity: 0, x: 50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut",
      },
    },
  };

  const colors = [
    "bg-blue-400/30",
    "bg-purple-400/30",
    "bg-pink-400/30",
    "bg-green-400/30",
    "bg-yellow-400/30",
    "bg-indigo-400/30",
    "bg-red-400/30",
    "bg-teal-400/30",
  ];

  const bubbleVariants = {
    initial: { scale: 0, opacity: 0 },
    animate: (i) => ({
      scale: [0, 1],
      opacity: [0, 0.6, 0],
      transition: {
        duration: 4,
        repeat: Infinity,
        delay: i * 0.5,
        ease: "easeInOut",
      },
    }),
  };

  const floatingBubbleVariants = {
    initial: { y: 0, x: 0 },
    animate: (i) => ({
      y: [0, -30, 0],
      x: [0, 15, 0],
      transition: {
        duration: 5 + i,
        repeat: Infinity,
        ease: "easeInOut",
      },
    }),
  };

  const circleVariants = {
    initial: { scale: 0, opacity: 0 },
    animate: (i) => ({
      scale: [0, 1.2, 0],
      opacity: [0, 0.4, 0],
      transition: {
        duration: 6,
        repeat: Infinity,
        delay: i * 0.8,
        ease: "easeInOut",
      },
    }),
  };

  return (
    <section
      id="home"
      className={`section min-h-screen flex items-center relative overflow-hidden bg-gradient-to-br ${getGradientColors()} transition-colors duration-500`}
    >
      {/* Add animated gradient overlays */}
      <div className="absolute inset-0 overflow-hidden">
        <div
          className={`absolute -top-40 -left-40 w-80 h-80 bg-gradient-to-br from-${currentThemeColor}-500/20 to-${currentThemeColor}-600/20 rounded-full blur-3xl ${getThemeAnimation()}`}
        />
        <div
          className={`absolute top-1/2 -right-20 w-96 h-96 bg-gradient-to-br from-${currentThemeColor}-400/20 to-${currentThemeColor}-500/20 rounded-full blur-3xl ${getThemeAnimation()}`}
        />
        <div
          className={`absolute -bottom-40 left-1/3 w-72 h-72 bg-gradient-to-br from-${currentThemeColor}-300/20 to-${currentThemeColor}-400/20 rounded-full blur-3xl ${getThemeAnimation()}`}
        />
      </div>

      {/* Animated background elements */}
      <div className="absolute inset-0 z-0">
        <motion.div
          className="absolute w-[500px] h-[500px] bg-primary/20 rounded-full opacity-20 blur-3xl"
          style={{
            left: `${mousePosition.x * 0.05}px`,
            top: `${mousePosition.y * 0.05}px`,
          }}
          variants={floatingBubbleVariants}
          initial="initial"
          animate="animate"
        />
        <motion.div
          className="absolute w-[600px] h-[600px] bg-primary/20 rounded-full opacity-20 blur-3xl"
          style={{
            right: `${mousePosition.x * 0.05}px`,
            bottom: `${mousePosition.y * 0.05}px`,
          }}
          variants={floatingBubbleVariants}
          initial="initial"
          animate="animate"
          transition={{ delay: 1 }}
        />
        <motion.div
          className="absolute w-[450px] h-[450px] bg-primary/20 rounded-full opacity-20 blur-3xl"
          style={{
            left: `${mousePosition.x * 0.03}px`,
            bottom: `${mousePosition.y * 0.03}px`,
          }}
          variants={floatingBubbleVariants}
          initial="initial"
          animate="animate"
          transition={{ delay: 2 }}
        />
      </div>

      <div className="container relative z-10">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div className="text-center md:text-left">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <h1 className="text-4xl md:text-5xl font-bold mb-4">
                <motion.span
                  className={`text-${currentThemeColor}-400 inline-block`}
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  Hi, I'm
                </motion.span>{" "}
                <motion.span
                  className={`text-${currentThemeColor}-600 inline-block`}
                  whileHover={{ scale: 1.1, rotate: -5 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  Sarthak
                </motion.span>
              </h1>
              <motion.p
                className={`text-lg md:text-xl text-${currentThemeColor}-700 dark:text-${currentThemeColor}-300 mb-6`}
                whileHover={{ scale: 1.02 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                A passionate Full Stack Developer crafting beautiful and
                functional web experiences
              </motion.p>
              <div className="flex flex-wrap gap-4 justify-center md:justify-start">
                <motion.a
                  href="#contact"
                  className={`btn btn-primary bg-${currentThemeColor}-500 hover:bg-${currentThemeColor}-600 text-white shadow-lg hover:shadow-xl transition-all duration-300`}
                  whileHover={{
                    scale: 1.05,
                    boxShadow: `0 0 20px ${currentThemeColor}-500/50`,
                  }}
                  whileTap={{ scale: 0.95 }}
                >
                  Get in Touch
                </motion.a>
                <motion.a
                  href="#projects"
                  className={`btn btn-outline border-2 border-${currentThemeColor}-500 text-${currentThemeColor}-500 hover:bg-${currentThemeColor}-500 hover:text-white transition-all duration-300`}
                  whileHover={{
                    scale: 1.05,
                    boxShadow: `0 0 20px ${currentThemeColor}-500/30`,
                  }}
                  whileTap={{ scale: 0.95 }}
                >
                  View Projects
                </motion.a>
              </div>

              {/* Social and coding profile links with theme-based hover effects */}
              <div className="mt-6 flex flex-wrap gap-4 justify-center md:justify-start">
                <motion.a
                  href="https://www.hackerrank.com/profile/sarthak1shukla"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`flex items-center gap-2 text-${currentThemeColor}-600 dark:text-${currentThemeColor}-400 hover:text-${currentThemeColor}-700 dark:hover:text-${currentThemeColor}-300 transition-colors`}
                  whileHover={{
                    scale: 1.05,
                    rotate: 5,
                    color: `var(--${currentThemeColor}-500)`,
                  }}
                  whileTap={{ scale: 0.95 }}
                >
                  <svg
                    className="w-5 h-5"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d="M12 0c1.285 0 9.75 4.886 10.392 6 .645 1.115.645 16.885 0 18S13.287 24 12 24s-9.75-4.885-10.395-6c-.641-1.115-.641-16.885 0-18C2.25 4.886 10.715 0 12 0zm2.295 6.799c-.141 0-.258.115-.258.258v3.875H9.963V6.908c0-.143-.117-.258-.259-.258H9.443c-.142 0-.259.115-.259.258v10.173c0 .143.117.258.259.258h.261c.142 0 .259-.115.259-.258v-4.004h4.074v4.004c0 .143.117.258.258.258h.261c.142 0 .259-.115.259-.258V7.057c0-.143-.117-.258-.259-.258h-.261z" />
                  </svg>
                  <span>HackerRank</span>
                </motion.a>

                <motion.a
                  href="https://leetcode.com/u/sarthak1shukla/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`flex items-center gap-2 text-${currentThemeColor}-600 dark:text-${currentThemeColor}-400 hover:text-${currentThemeColor}-700 dark:hover:text-${currentThemeColor}-300 transition-colors`}
                  whileHover={{
                    scale: 1.05,
                    rotate: -5,
                    color: `var(--${currentThemeColor}-500)`,
                  }}
                  whileTap={{ scale: 0.95 }}
                >
                  <svg
                    className="w-5 h-5"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d="M13.483 0a1.374 1.374 0 0 0-.961.438L7.116 6.226l-3.854 4.126a1.67 1.67 0 0 0-.415 1.2.67.67 0 0 0 .255.426L4.92 12.81a1.47 1.47 0 0 0 .678.42 1.4 1.4 0 0 0 .82-.044l1.9-.381 3.786 3.786 1.9-.381a1.4 1.4 0 0 0 .82-.044 1.47 1.47 0 0 0 .678-.42l1.926-1.926a.67.67 0 0 0 .255-.426 1.67 1.67 0 0 0-.415-1.2l-3.854-4.126 5.406-5.406a1.374 1.374 0 0 0 .961-.438 1.374 1.374 0 0 0 .961.438l5.406 5.406 3.854 4.126a1.67 1.67 0 0 1 .415 1.2.67.67 0 0 1-.255.426l-1.926 1.926a1.47 1.47 0 0 1-.678.42 1.4 1.4 0 0 1-.82-.044l-1.9-.381-3.786-3.786-1.9.381z" />
                  </svg>
                  <span>LeetCode</span>
                </motion.a>

                <motion.a
                  href="mailto:sarthak1shukla@gmail.com"
                  className={`flex items-center gap-2 text-${currentThemeColor}-600 dark:text-${currentThemeColor}-400 hover:text-${currentThemeColor}-700 dark:hover:text-${currentThemeColor}-300 transition-colors`}
                  whileHover={{
                    scale: 1.05,
                    rotate: 5,
                    color: `var(--${currentThemeColor}-500)`,
                  }}
                  whileTap={{ scale: 0.95 }}
                >
                  <svg
                    className="w-5 h-5"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
                  </svg>
                  <span>Email</span>
                </motion.a>
              </div>
            </motion.div>
          </div>

          <motion.div
            className="hidden md:block"
            initial="hidden"
            animate="visible"
            variants={imageVariants}
          >
            <div className="relative">
              {/* Background bubbles */}
              <div className="absolute inset-0">
                {[...Array(12)].map((_, i) => (
                  <motion.div
                    key={`bg-bubble-${i}`}
                    className={`absolute rounded-full ${
                      colors[i % colors.length]
                    } backdrop-blur-sm`}
                    style={{
                      width: `${Math.random() * 80 + 40}px`,
                      height: `${Math.random() * 80 + 40}px`,
                      left: `${Math.random() * 100}%`,
                      top: `${Math.random() * 100}%`,
                    }}
                    variants={floatingBubbleVariants}
                    initial="initial"
                    animate="animate"
                    custom={i}
                  />
                ))}
              </div>

              {/* Main image container */}
              <motion.div
                className="relative z-10"
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
              >
                <motion.div className="relative">
                  {/* Glowing bubble background */}
                  <motion.div
                    className="absolute inset-0 bg-primary/20 rounded-full blur-2xl"
                    animate={{
                      scale: [1, 1.2, 1],
                      opacity: [0.3, 0.5, 0.3],
                    }}
                    transition={{
                      duration: 4,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                  />

                  {/* Animated circles */}
                  <div className="absolute inset-0">
                    {[...Array(6)].map((_, i) => (
                      <motion.div
                        key={`circle-${i}`}
                        className={`absolute rounded-full ${
                          colors[i % colors.length]
                        } backdrop-blur-sm`}
                        style={{
                          width: `${Math.random() * 100 + 50}px`,
                          height: `${Math.random() * 100 + 50}px`,
                          left: `${Math.random() * 100}%`,
                          top: `${Math.random() * 100}%`,
                        }}
                        variants={circleVariants}
                        initial="initial"
                        animate="animate"
                        custom={i}
                      />
                    ))}
                  </div>

                  {/* Animated bubbles behind photo */}
                  <div className="absolute inset-0">
                    {[...Array(8)].map((_, i) => (
                      <motion.div
                        key={`behind-bubble-${i}`}
                        className={`absolute rounded-full ${
                          colors[i % colors.length]
                        } backdrop-blur-sm`}
                        style={{
                          width: `${Math.random() * 60 + 30}px`,
                          height: `${Math.random() * 60 + 30}px`,
                          left: `${Math.random() * 100}%`,
                          top: `${Math.random() * 100}%`,
                        }}
                        variants={bubbleVariants}
                        initial="initial"
                        animate="animate"
                        custom={i}
                      />
                    ))}
                  </div>

                  {/* Profile image */}
                  <motion.div className="relative">
                    <motion.img
                      src="https://avatars.githubusercontent.com/sarthak1shukla"
                      alt="Sarthak"
                      className="w-64 h-64 rounded-full object-cover mx-auto border-4 border-white dark:border-gray-800 shadow-2xl relative z-10"
                      whileHover={{ scale: 1.1 }}
                      transition={{
                        type: "spring",
                        stiffness: 400,
                        damping: 10,
                      }}
                    />
                  </motion.div>

                  {/* Orbiting bubbles */}
                  {[...Array(6)].map((_, i) => (
                    <motion.div
                      key={`orbit-${i}`}
                      className={`absolute w-4 h-4 ${
                        colors[i % colors.length]
                      } rounded-full backdrop-blur-sm`}
                      style={{
                        left: "50%",
                        top: "50%",
                      }}
                      animate={{
                        x: [
                          Math.cos((i * Math.PI) / 3) * 120,
                          Math.cos((i * Math.PI) / 3 + Math.PI) * 120,
                          Math.cos((i * Math.PI) / 3) * 120,
                        ],
                        y: [
                          Math.sin((i * Math.PI) / 3) * 120,
                          Math.sin((i * Math.PI) / 3 + Math.PI) * 120,
                          Math.sin((i * Math.PI) / 3) * 120,
                        ],
                        scale: [1, 1.5, 1],
                        opacity: [0.6, 0.8, 0.6],
                      }}
                      transition={{
                        duration: 4,
                        repeat: Infinity,
                        ease: "easeInOut",
                        delay: i * 0.2,
                      }}
                    />
                  ))}
                </motion.div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
