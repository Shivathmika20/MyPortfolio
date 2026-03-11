'use client'
import { motion } from "framer-motion";
import { Mail } from "lucide-react";
import profileImg from "@/public/profile1.jpg";
import Image from "next/image";
import Link from "next/link";

const Hero = () => {
  return (
    <section className="pt-16 pb-8 px-6">
      <div className="max-w-2xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="flex items-start justify-between"
        >
          <div className="flex-1">
            <h1 className="text-4xl  md:text-5xl font-bold mb-3 tracking-tight">
              Hi, Iam Shivathmika
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed mb-4">
              Building clean, performant web experiences with modern tools.
            </p>
            <Link
              href="mailto:yelurishivathmika@gmail.com"
              className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              <Mail className="w-4 h-4" />
              yelurishivathmika@gmail.com
            </Link>
          </div>
          <Image
            src={profileImg}
            alt="John Doe"
            className="w-28 h-28 md:w-36 md:h-36 rounded-full object-cover border-2 border-border ml-6 flex-shrink-0"
          />
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
