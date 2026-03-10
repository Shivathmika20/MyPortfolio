'use client'
import { motion } from "framer-motion";

const skills = [
  "Javascript", "Next.js","ReactJs", "Node.js", "Express.js", "TypeScript",
  "Tailwind CSS","ShadCN UI", "PostgreSQL", "MongoDB","Prisma", 
  "Git & Github", "Figma", "REST APIs", "Docker","Linux"
];

const Skills = () => {
  return (
    <section className="py-8 px-6">
      <div className="max-w-2xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-lg font-semibold text-foreground mb-4">Skills</h2>
          <div className="flex flex-wrap gap-2">
            {skills.map((skill) => (
              <span
                key={skill}
                className="px-3 py-1.5 text-xs font-medium rounded-md bg-secondary text-secondary-foreground border border-border"
              >
                {skill}
              </span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
