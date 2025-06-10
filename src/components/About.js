import React from "react";

const About = () => {
  return (
    <section id="about" className="section bg-gray-50 dark:bg-gray-800">
      <div className="container">
        <h2 className="text-3xl font-bold text-center mb-12">About Me</h2>
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div className="space-y-4">
            <p className="text-gray-600 dark:text-gray-300">
              I'm a Full Stack Developer with 4.5+ years of experience in
              React.js and 1 year in Phalcon PHP + MongoDB. Currently working at
              Threecolts as a Senior Software Engineer, I specialize in building
              scalable web applications and microservices. My expertise includes
              React.js, Node.js, TypeScript, and modern web technologies.
            </p>
            <p className="text-gray-600 dark:text-gray-300">
              Based in Lucknow, I'm passionate about creating efficient and
              user-friendly applications. I've worked on various projects
              including e-commerce platforms, data visualization, and real-time
              applications. I'm constantly learning and adapting to new
              technologies to stay at the forefront of web development.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div className="bg-white dark:bg-gray-700 p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-2">Experience</h3>
              <p className="text-gray-600 dark:text-gray-300">
                Senior Software Engineer
                <br />
                Threecolts
                <br />
                2021 - Present
                <br />
                <br />
                Software Engineer
                <br />
                Threecolts
                <br />
                2019 - 2021
              </p>
            </div>
            <div className="bg-white dark:bg-gray-700 p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-2">Location</h3>
              <p className="text-gray-600 dark:text-gray-300">
                Lucknow, India
                <br />
                Available for remote work
                <br />
                UTC -12:00
              </p>
            </div>
            <div className="bg-white dark:bg-gray-700 p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-2">Skills</h3>
              <p className="text-gray-600 dark:text-gray-300">
                • React.js (4.5+ years)
                <br />
                • Node.js
                <br />
                • TypeScript
                <br />
                • Phalcon PHP + MongoDB
                <br />• Microservices
              </p>
            </div>
            <div className="bg-white dark:bg-gray-700 p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-2">Achievements</h3>
              <p className="text-gray-600 dark:text-gray-300">
                • GitHub Pull Shark
                <br />
                • GitHub Quickdraw
                <br />
                • 22 Public Repositories
                <br />• Active Open Source Contributor
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
