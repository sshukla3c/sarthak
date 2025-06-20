import React from "react";
import { motion } from "framer-motion";
import { useTheme } from "../context/ThemeContext";

const Skills = () => {
  const { getThemeColor } = useTheme();
  const currentThemeColor = getThemeColor();

  const skills = [
    {
      category: "Frontend",
      icon: "🎨",
      items: [
        { name: "React", level: 90 },
        { name: "JavaScript/TypeScript", level: 85 },
        { name: "HTML/CSS", level: 90 },
        { name: "Tailwind CSS", level: 85 },
        { name: "Redux", level: 80 },
      ],
    },
    {
      category: "Backend",
      icon: "⚙️",
      items: [
        { name: "PHP", level: 80 },
        { name: "Node.js", level: 70 },
        { name: "Express.js", level: 65 },
        { name: "MongoDB", level: 70 },
        { name: "REST APIs", level: 90 },
      ],
    },
    {
      category: "Tools & Others",
      icon: "🛠️",
      items: [
        { name: "Git/GitHub", level: 90 },
        { name: "Docker", level: 75 },
        { name: "AWS", level: 70 },
        { name: "CI/CD", level: 80 },
        { name: "Jest/Testing", level: 75 },
      ],
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <section id="skills" className="section py-20">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-4">Skills & Expertise</h2>
          <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            A comprehensive overview of my technical skills and expertise in
            various technologies and tools that I've mastered throughout my
            career.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-3 gap-8"
        >
          {skills.map((category) => (
            <motion.div
              key={category.category}
              variants={itemVariants}
              className="bg-white/50 dark:bg-gray-800/50 backdrop-blur-md rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow duration-300"
            >
              <div className="flex items-center space-x-3 mb-6">
                <span className="text-3xl">{category.icon}</span>
                <h3 className="text-xl font-semibold">{category.category}</h3>
              </div>
              <div className="space-y-4">
                {category.items.map((skill) => (
                  <div key={skill.name} className="space-y-2">
                    <div className="flex justify-between items-center">
                      <span className="text-gray-700 dark:text-gray-300 font-medium">
                        {skill.name}
                      </span>
                      <span className="text-sm text-gray-500 dark:text-gray-400">
                        {skill.level}%
                      </span>
                    </div>
                    <div className="h-2 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, ease: "easeOut" }}
                        style={{
                          background: `linear-gradient(to right, var(--color-primary-light), var(--color-primary-dark))`,
                        }}
                        className="h-full rounded-full"
                      />
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="mt-16 text-center"
        >
          <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Continuously learning and adapting to new technologies to stay at
            the forefront of web development and deliver the best solutions.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
