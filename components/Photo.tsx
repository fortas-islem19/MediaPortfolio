"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const Photo = () => {
  return (
    <div className="w-full h-full relative flex items-center justify-center">
      {/* Animated toggle background elements */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0, duration: 0.8, ease: "easeOut" }}
        viewport={{ once: false, amount: 0.5 }}
        className="absolute -inset-8 rounded-full bg-gradient-to-br from-cyan-500/10 via-emerald-500/5 to-lime-400/10 blur-3xl"
        animate={{ scale: [1, 1.1, 1] }}
        // eslint-disable-next-line react/jsx-no-duplicate-props
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
      />
      
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.1, duration: 0.8, ease: "easeOut" }}
        viewport={{ once: false, amount: 0.5 }}
        className="absolute -inset-16 rounded-full bg-gradient-to-tr from-lime-400/5 via-cyan-500/5 to-emerald-500/10 blur-3xl"
        animate={{ scale: [1, 0.95, 1] }}
        // eslint-disable-next-line react/jsx-no-duplicate-props
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 0.2 }}
      />

      {/* Photo container */}
      <motion.div
        initial={{ opacity: 0, y: 30, scale: 0.9 }}
        whileInView={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ delay: 0.3, duration: 0.8, ease: "easeOut" }}
        whileHover={{ scale: 1.05, rotate: -2 }}
        viewport={{ once: false, amount: 0.5 }}
        className="relative mx-auto aspect-square w-[280px] xl:w-[480px] rounded-2xl overflow-hidden shadow-2xl"
      >
        {/* Gradient overlay frame */}
        <div className="absolute inset-0 bg-gradient-to-br from-cyan-400/20 via-transparent to-lime-300/20 z-10 pointer-events-none rounded-2xl" />
        
        {/* Cropped image */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.45, duration: 0.6, ease: "easeOut" }}
          viewport={{ once: false, amount: 0.5 }}
          className="relative w-full h-full"
        >
          <Image 
            src="/assets/IslemL.jpg" 
            priority 
            quality={100} 
            fill 
            alt="Jacoub Fortas portrait" 
            className="object-cover rounded-2xl"
          />
        </motion.div>

        {/* Animated border */}
        <motion.div
          className="absolute inset-0 rounded-2xl border-2 border-transparent bg-gradient-to-r from-cyan-400 via-emerald-400 to-lime-300 bg-clip-border pointer-events-none"
          animate={{
            opacity: [0.3, 0.7, 0.3],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </motion.div>
    </div>
  );
};

export default Photo;