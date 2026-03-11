'use client'

import { motion, AnimatePresence } from "framer-motion";
import { Briefcase, ChevronDown } from "lucide-react";
import { useState } from "react";


type Experience = {
  _id: string;
  company: string;
  role: string;
  period: string;
  bullets: string[];
}

const ExperienceItem = ({ exp }: { exp: Experience }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div
      className="group cursor-pointer"
      onMouseEnter={() => setIsOpen(true)}
      onMouseLeave={() => setIsOpen(false)}
      onClick={() => setIsOpen((prev) => !prev)}
      
      
    >
      <div className="flex items-center gap-4 py-3">
        <div className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center flex-shrink-0">
          <Briefcase className="w-4 h-4 text-muted-foreground" />
        </div>
        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-1">
            <p className="text-sm font-medium text-foreground">{exp.company}</p>
            <ChevronDown
              className={`w-3.5 h-3.5 text-muted-foreground transition-transform duration-200 ${isOpen ? "rotate-180" : ""}`}
            />
          </div>
          <p className="text-xs text-muted-foreground">{exp.role}</p>
          <p className="text-xs text-muted-foreground sm:hidden">{exp.period}</p>
        </div>
        <p className="text-xs text-muted-foreground whitespace-nowrap hidden sm:block">{exp.period}</p>
      </div>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="overflow-hidden"
          >
            <ul className="ml-14 space-y-1 list-disc list-outside pl-4 pb-3">
              {exp.bullets.map((bullet, i) => (
                <li key={i} className="text-sm text-muted-foreground leading-relaxed">
                  {bullet}
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

const Experience = ({ data }: { data: Experience[] }) => {  // ← accept data as prop
  return (
    <section className=" px-4 md:px-6 ">
      <div className="max-w-2xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-lg font-semibold text-foreground mb-4">Work Experience</h2>
          <div>
            {data.map((exp) => (
              <ExperienceItem key={exp._id} exp={exp} />  // ← pass exp not data
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Experience;