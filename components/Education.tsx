'use client'
import { motion } from "framer-motion";
import { GraduationCap } from "lucide-react";

const Education = () => {
  return (
    <section className="py-8 px-6">
      <div className="max-w-2xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-lg font-semibold text-foreground mb-4">Education</h2>
          <div className="flex items-center gap-4">
            <div className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center flex-shrink-0">
              <GraduationCap className="w-4 h-4 text-muted-foreground" />
            </div>
            <div>
              <p className="text-sm font-medium text-foreground">University of Technology</p>
              <p className="text-xs text-muted-foreground">Bachelor of Science in Computer Science • 2015 - 2019</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Education;
