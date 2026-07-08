"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const Photo = () => {
  return (
    <div className="w-full h-full relative flex items-center justify-center">
      {/* Liquid backdrop blob — blurred, slowly rotating organic shape */}
      <div className="liquid-backdrop absolute w-[320px] h-[320px] xl:w-[540px] xl:h-[540px]" />

      {/* Photo container */}
      <motion.div
        initial={{ opacity: 0, scale: 0.85 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.3, duration: 0.8, ease: "easeOut" }}
        viewport={{ once: false, amount: 0.5 }}
        className="relative mx-auto w-[280px] h-[280px] xl:w-[420px] xl:h-[420px]"
      >
        {/* Glowing border that follows the morphing shape */}
        <div className="morphing-blob absolute inset-[-4px] bg-gradient-to-r from-cyan-400 via-emerald-400 to-lime-300 opacity-50 blur-sm" />

        {/* Morphing photo blob */}
        <div className="morphing-blob w-full h-full relative overflow-hidden shadow-2xl">
          {/* Gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-br from-cyan-400/15 via-transparent to-lime-300/15 z-10 pointer-events-none" />

          <Image
            src="/assets/IslemL.jpg"
            priority
            quality={100}
            fill
            alt="Jacoub Fortas portrait"
            className="object-cover"
          />
        </div>
      </motion.div>
    </div>
  );
};

export default Photo;