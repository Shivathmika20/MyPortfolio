'use client'
import { motion } from "framer-motion";
import { Trophy, Calendar, MapPin } from "lucide-react";

const hackathons = [
  {
    title: "HackMIT",
    award: "1st Place — Best AI/ML Hack",
    date: "Sep 2024",
    location: "MIT, Cambridge",
    description:
      "Built an AI-powered accessibility tool that generates real-time audio descriptions for visually impaired users.",
  },
  {
    title: "TreeHacks",
    award: "Winner — Sustainability Track",
    date: "Feb 2024",
    location: "Stanford University",
    description:
      "Created a carbon footprint tracker with gamification elements to encourage eco-friendly habits.",
  },
  {
    title: "CalHacks",
    award: "Top 10 Finalist",
    date: "Oct 2023",
    location: "UC Berkeley",
    description:
      "Developed a peer-to-peer study platform with AI-matched study groups and shared whiteboards.",
  },
  {
    title: "PennApps",
    award: "Best Use of Cloud — AWS",
    date: "Sep 2023",
    location: "UPenn, Philadelphia",
    description:
      "Built a serverless event management platform with real-time notifications and smart scheduling.",
  },
];

const Hackathons = () => {
  return (
    <section id="hackathons" className="py-12 px-6">
      <div className="max-w-2xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.5 }}
          className="text-center mb-10"
        >
          <span className="inline-block px-3 py-1 text-xs font-medium rounded-full bg-secondary text-secondary-foreground border border-border mb-3">
            Hackathons
          </span>
          <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-2">
            I like building things
          </h2>
          <p className="text-sm text-muted-foreground max-w-md mx-auto">
            i have participated in hackathons across the country, building creative solutions under pressure.
          </p>
        </motion.div>

        <div className="space-y-4">
          {hackathons.map((hack, i) => (
            <motion.div
              key={hack.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.08 }}
              className="rounded-lg border border-border bg-card p-5 hover:shadow-sm transition-shadow"
            >
              <div className="flex items-start justify-between gap-3 mb-2">
                <div>
                  <h3 className="text-sm font-semibold text-foreground">
                    {hack.title}
                  </h3>
                  <div className="flex items-center gap-1 mt-0.5">
                    <Trophy className="w-3 h-3 text-amber-500" />
                    <span className="text-xs font-medium text-foreground/80">
                      {hack.award}
                    </span>
                  </div>
                </div>
                <div className="text-right shrink-0">
                  <div className="flex items-center gap-1 text-xs text-muted-foreground">
                    <Calendar className="w-3 h-3" />
                    {hack.date}
                  </div>
                  <div className="flex items-center gap-1 text-xs text-muted-foreground mt-0.5">
                    <MapPin className="w-3 h-3" />
                    {hack.location}
                  </div>
                </div>
              </div>
              <p className="text-xs text-muted-foreground leading-relaxed">
                {hack.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hackathons;
