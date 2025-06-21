'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

const projects = [
  {
    id: 1,
    image: "/images/imav2025.jpg",
    alt: "IMAV 2025 Project",
    title: "IMAV 2025",
    description: "The International Micro Air Vehicle (IMAV) competition challenges teams to design and build micro aerial vehicles (MAVs) that can perform autonomous missions in complex environments.",
    problemStatement: [
      "Autonomous navigation in GPS-denied environments",
      "Object detection and recognition tasks",
      "Precision landing and payload delivery",
      "Multi-vehicle coordination challenges"
    ],
    links: [
      {
        href: "https://www.imavs.org",
        label: "Official Website"
      }
    ]
  },
  {
    id: 2,
    image: "/images/irocu2025.jpg",
    alt: "IRoC-U 2025 Project",
    title: "IRoC-U 2025",
    description: "ISRO Robotics Challenge (IRoC-U) focuses on developing autonomous navigation systems for aerial vehicles for Martian exploration scenarios.",
    problemStatement: [
      "Autonomous Navigation for Aerial Vehicles (ANAV) without external navigation aids",
      "Safe landing spot identification in unknown terrain",
      "Stable vertical take-off, hover, and landing in simulated Martian conditions",
      "Return to home position after completing mission objectives"
    ],
    details: [
      {
        label: "Key Dates",
        value: (
          <ul className="text-sm space-y-1">
            <li>Final Field Round: July 25-30, 2025</li>
            <li>Awards Ceremony: August 23, 2025</li>
          </ul>
        )
      },
      {
        label: "Venue",
        value: <p className="text-sm">URSC Bengaluru Campus</p>
      }
    ],
    links: [
      {
        href: "https://www.ursc.gov.in/IRoC-U2025/RulebookIRoC-U2025_V2.0.pdf",
        label: "Rulebook (PDF)"
      },
      {
        href: "https://www.ursc.gov.in/IRoC-U2025/",
        label: "Official Website"
      }
    ]
  }
];

const cardAnimation = (direction: 'left' | 'right', delay: number) => ({
  initial: {
    opacity: 0,
    x: direction === 'left' ? -100 : 100,
    y: 40,
    scale: 0.85,
    boxShadow: "0 0 0px #3b82f6"
  },
  animate: {
    opacity: 1,
    x: 0,
    y: 0,
    scale: 1,
    boxShadow: "0 8px 32px #3b82f680"
  },
  hover: {
    scale: 1.03,
    boxShadow: "0 12px 40px #3b82f6cc"
  },
  transition: {
    duration: 0.8,
    ease: "easeOut",
    delay: delay,
    boxShadow: { duration: 1.2, ease: "easeOut", delay: delay }
  }
});

const CurrentProjectsPage = () => {
  return (
    <div className="pt-28 px-4 max-w-6xl mx-auto mb-20">
      <h1 className="text-4xl font-bold mb-12 text-center text-blue-900 dark:text-white">
        Current Projects
      </h1>

      {projects.map((project, idx) => {
        const direction = idx % 2 === 0 ? 'left' : 'right';
        const delay = idx * 0.2;

        return (
          <motion.section
            key={project.id}
            className="mb-20 bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-6 md:p-8"
            initial={cardAnimation(direction, delay).initial}
            whileInView={cardAnimation(direction, delay).animate}
            whileHover={cardAnimation(direction, delay).hover}
            viewport={{ once: true, amount: 0.2 }}
            transition={cardAnimation(direction, delay).transition}
          >
            <div className="flex flex-col md:flex-row gap-8">
              <div className="md:w-1/3 flex items-center justify-center">
                <Image
                  src={project.image}
                  alt={project.alt}
                  width={400}
                  height={320}
                  className="rounded-xl object-cover"
                />
              </div>
              <div className="md:w-2/3">
                <h2 className="text-3xl font-bold mb-4 text-blue-700 dark:text-blue-400">
                  {project.title}
                </h2>
                <p className="mb-4 text-lg">{project.description}</p>
                <div className="mb-6">
                  <h3 className="text-xl font-semibold mb-2 text-gray-800 dark:text-gray-200">
                    Problem Statement:
                  </h3>
                  <ul className="list-disc pl-6 space-y-2 text-gray-700 dark:text-gray-300">
                    {project.problemStatement.map((item, i) => (
                      <li key={i}>{item}</li>
                    ))}
                  </ul>
                </div>
                {/* Extra details for IRoC-U */}
                {project.details && (
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                    {project.details.map((detail, i) => (
                      <div key={i}>
                        <h4 className="font-semibold mb-1">{detail.label}:</h4>
                        {detail.value}
                      </div>
                    ))}
                  </div>
                )}
                <div className="mt-4 flex flex-wrap gap-4">
                  {project.links.map((link, i) => (
                    <a
                      key={i}
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`inline-flex items-center px-4 py-2 rounded-lg transition
                        ${i === 0 ? "bg-blue-600 text-white hover:bg-blue-700" : "bg-gray-800 text-white hover:bg-gray-900"}
                      `}
                    >
                      {link.label}
                      <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"></path>
                      </svg>
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </motion.section>
        );
      })}
    </div>
  );
};

export default CurrentProjectsPage;


