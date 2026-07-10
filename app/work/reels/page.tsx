"use client";

import { motion } from "framer-motion";
import { reelsVideos } from "@/lib/data";
import Link from "next/link";
import { FaArrowLeft } from "react-icons/fa";

const ReelsPage = () => {
  return (
    <section className="h-full min-h-screen py-12 xl:py-24">
      <div className="container mx-auto">
        <div className="mb-8">
          <Link href="/#short-form" className="inline-flex items-center gap-2 text-accent hover:text-white transition-colors mb-6 uppercase text-sm tracking-widest font-semibold">
            <FaArrowLeft /> Back to Home
          </Link>
          <h1 className="h1 mb-4">Reels & Short-form</h1>
          <p className="text-white/60 max-w-2xl">
            A vertical-first system for UGC, ads, motion graphics, and fast-turn social output. Here are all my short-form edits.
          </p>
        </div>

        <div className="mt-8 flex flex-wrap gap-5 justify-center sm:justify-start">
          {reelsVideos.map((video) => (
            <motion.article key={video.title} whileHover={{ y: -8, scale: 1.01 }} className="glass-panel p-4 transition-transform w-full sm:w-[calc(50%-10px)] md:w-[calc(33.333%-14px)] xl:w-[calc(25%-15px)]">
              <div className="relative mx-auto aspect-[9/16] max-w-[280px] overflow-hidden rounded-2xl border border-white/10">
                <iframe
                  src={`https://www.youtube.com/embed/${video.youtubeId}`}
                  title={video.title}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="absolute inset-0 w-full h-full"
                />
              </div>
              <div className="mt-4 text-center">
                <p className="text-xs uppercase tracking-widest text-accent mb-1">{video.category}</p>
                <p className="text-lg font-semibold text-white">{video.title}</p>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ReelsPage;
