'use client'
import { motion } from "framer-motion";
import { Calendar, ExternalLink, MapPin } from "lucide-react";
import Link from "next/link";
import { urlForImage } from "@/sanity/lib/image";
import Image from "next/image";
import type { Image as SanityImage } from "sanity";


type Hackathon={
  _id:string;
  title:string;
  logo?:SanityImage;
  description:string;
  location:string;
  date:string;
  award:string;
  liveurl?:string;
}


const Hackathons = ({data}:{data:Hackathon[]}) => {
  return (
    <section id="hackathons" className="py-10  px-4 md:px-6 ">
    <div className="max-w-2xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 0.5 }}
        className="text-center mb-10"
        >
          <span className="inline-block px-3 py-1 text-sm font-medium rounded-full bg-secondary text-secondary-foreground border border-border mb-3">
            Hackathons
          </span>
          <h2 className="text-2xl md:text-5xl font-bold text-foreground mb-2">
          I like building things
          </h2>
          <p className="text-md text-muted-foreground max-w-md mx-auto">
          I have participated in hackathons , building creative solutions under pressure.        </p>
        </motion.div>
        <div className="relative ">
       
          {/* Timeline line */}
          <div className="absolute left-6 top-0 bottom-0 w-px bg-border" />
              <div className="space-y-8">
                {data.map((hack, i) => (
                  <motion.div
                    key={hack.title}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: i * 0.1 }}
                    className="relative pl-16"
                  >
                    {/* Timeline dot/icon */}
                    <div className="absolute left-0 top-0 w-12 h-12 rounded-full overflow-hidden border border-border bg-background flex items-center justify-center shrink-0">
                      <Image
                        src={urlForImage(hack.logo!) as string}
                        alt={hack.title}
                        fill
                        className="object-cover rounded-full"
                      />
                    </div>
                    {/* Content */}
                    <div className="pt-1">
                      <div className="flex items-center gap-2 text-xs text-muted-foreground mb-1">
                        <Calendar className="w-3 h-3" />
                        {hack.date}
                      </div>
                      <div className="flex flex-col md:flex-row md:items-center gap-1 md:gap-2 mb-0.5">
                            <h3 className="text-base font-semibold text-foreground">
                              {hack.title}
                            </h3>
                            {hack.award && (
                              <span className="text-[10px] font-medium px-2 py-0.5 rounded-full bg-amber-100 text-amber-700 border border-amber-200 w-fit">
                                🏆 {hack.award}
                              </span>
                            )}
                      </div>
                      
                      <div className="flex items-center gap-1 text-xs text-muted-foreground mb-2">
                        <MapPin className="w-3 h-3" />
                        {hack.location} 
                      </div>
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        {hack.description}
                      </p>
                      
                    </div>
                    <div className="flex items-center gap-3 mt-auto pt-2">  
                      {hack.liveurl && (
                        <Link
                          href={hack.liveurl}
                          target="main"
                          className="inline-flex items-center gap-1 text-xs text-muted-foreground hover:text-foreground transition-colors"
                        >
                          <ExternalLink className="w-3 h-3" />
                         Showcase
                        </Link>
                      )}
             
                    </div>
                    </motion.div>
                ))}
              </div>
        </div>
       
    </div>
    </section>
  );
};

export default Hackathons;
