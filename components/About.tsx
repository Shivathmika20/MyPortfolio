'use client'
import { motion } from "framer-motion";

const About = () => {
  return (
    <section className=" pb-12 px-6">
      <div className="max-w-2xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-lg font-semibold text-foreground mb-3">About</h2>
          <p className="text-sm text-muted-foreground leading-relaxed">
          Full-stack developer passionate about creating web applications that are both functional and delightful to use. 
            Specializing in React, TypeScript, and Node.js with a keen eye for 
            clean design and user experience. Currently exploring AI-powered tools 
            and contributing to open-source projects.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
