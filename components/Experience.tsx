'use client'
import { motion } from "framer-motion";
import { Briefcase } from "lucide-react";

const experiences = [
  {
    company: "Mistyfall Vally Private limited",
    role: "Frontend Developer",
    period: "May 2024 - June 2024",
  },
  {
    company: "GDSC",
    role: "Web Development lead",
    period: "July 2023 - Aug 2024",
  },
  
];

const Experience = () => {
  return (
    <section className="px-6">
      <div className="max-w-2xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-lg font-semibold text-foreground mb-4">Work Experience</h2>
          <div className="space-y-4">
            {experiences.map((exp) => (
              <div
                key={exp.company}
                className="flex items-center gap-4"
              >
                <div className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center flex-shrink-0">
                  <Briefcase className="w-4 h-4 text-muted-foreground" />
                </div>
                <div className="flex-1 min-w-0 ">
                  <p className="text-sm font-medium text-foreground">{exp.company}</p>
                  <p className="text-xs text-muted-foreground">{exp.role}</p>
                </div>
                <p className="text-xs text-muted-foreground whitespace-nowrap">{exp.period}</p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Experience;
