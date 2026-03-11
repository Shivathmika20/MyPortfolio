'use client'
import { motion } from "framer-motion";
import { Code2, Server, Database, Wrench } from "lucide-react";

const skillCategories = [
  {
    name: "Frontend",
    icon: Code2,
    skills: ["Next.js","ReactJs",  "TypeScript", "Tailwind", "ShadCN", "JavaScript"],
  },
  {
    name: "Backend",
    icon: Server,
    skills: ["Node.js", "ExpressJs", "REST APIs", "Prisma"],
  },
  {
    name: "Databases",
    icon: Database,
    skills: ["PostgreSQL", "MongoDB"],
  },
  {
    name: "Tools",
    icon: Wrench,
    skills: ["Git & Github", "Docker", "Linux", "Figma"],
  },
];

const Skills = () => {
  return (
    <section className="py-8 px-4 md:px-6 ">
      <div className="max-w-2xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-lg font-semibold text-foreground mb-6">Skills</h2>
          <div className="grid grid-cols-1  md:grid-cols-2 gap-3 auto-rows-fr ">
            {skillCategories.map((category) => (
              <div
                key={category.name}
                className="p-4 rounded-lg bg-card border border-border flex flex-col h-full"
              >
                <div className="flex items-center gap-2 mb-3">
                  <category.icon className="w-4 h-4 text-muted-foreground" />
                  <h3 className="text-sm font-medium text-foreground">{category.name}</h3>
                </div>
                <div className="flex flex-wrap gap-1.5 flex-1 content-start space-y-1 mt-2">
                  {category.skills.map((skill) => (
                    <span
                      key={skill}
                      className="px-2 py-0.5 text-xs font-medium rounded bg-secondary text-secondary-foreground h-fit"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
