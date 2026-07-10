"use client";

import { motion } from "framer-motion";
import { longFormVideos } from "@/lib/data";
import Link from "next/link";
import { FaArrowLeft } from "react-icons/fa";

const LandscapePage = () => {
  return (
    <section className="h-full min-h-screen py-12 xl:py-24">
      <div className="container mx-auto">
        <div className="mb-8">
          <Link href="/#work" className="inline-flex items-center gap-2 text-accent hover:text-white transition-colors mb-6 uppercase text-sm tracking-widest font-semibold">
            <FaArrowLeft /> Back to Home
          </Link>
          <h1 className="h1 mb-4">Landscape Videos</h1>
          <p className="text-white/60 max-w-2xl">
            A full collection of my brand films, explainers, and campaign edits with visual hierarchy and sound-first pacing.
          </p>
        </div>

        <div className="mt-8 flex flex-wrap gap-5">
          {longFormVideos.map((video) => (
            <motion.article key={video.title} whileHover={{ y: -8, scale: 1.01 }} className="group glass-panel overflow-hidden p-4 transition-transform w-full lg:w-[calc(33.333%-14px)]">
              <div className="relative aspect-video overflow-hidden rounded-2xl border border-white/10">
                <iframe
                  src={`https://www.youtube.com/embed/${video.youtubeId}`}
                  title={video.title}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="absolute inset-0 w-full h-full"
                />
              </div>
              <div className="px-2 pb-2 pt-5">
                <p className="text-xs uppercase tracking-widest text-accent mb-2">{video.category}</p>
                <h3 className="text-2xl font-semibold text-white">{video.title}</h3>
                <p className="mt-2 text-white/65">{video.note}</p>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LandscapePage;
