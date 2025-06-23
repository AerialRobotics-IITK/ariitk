'use client';
import { motion, useScroll, useTransform } from "framer-motion";
import React, { useRef } from "react";

export default function ParallaxTeam() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);
  const bottomY = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const textY = useTransform(scrollYProgress, [0, 1], ["-100%", "400%"]);
  const textScale = useTransform(scrollYProgress, [0, 1], [1, 0.8]);

  return (
    <div
      ref={ref}
      className="w-full h-screen overflow-hidden relative grid place-items-center"
    >
      {/* heading */}
      <motion.h1
        style={{ y: textY , scale: textScale}}
        className="text-center text-9xl font-extrabold text-white relative z-10"
      >
        ARIITK 2025/26
      </motion.h1>

      {/* background image */}
      <motion.div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `url('/images/team/current/teamphoto.jpg')`,
          backgroundPosition: "bottom",
          backgroundSize: "cover",
          y: backgroundY
        }}
      />
      
      {/* bottom half image */}
      <motion.div
        className="absolute inset-0 z-20"
        style={{
          backgroundImage: `url('/images/team/current/team-bottom.png')`,
          backgroundPosition: "bottom",
          backgroundSize: "cover",
          y: bottomY
        }}
      />

    </div>
  );
}

// saatvik was here on 21/6/25 