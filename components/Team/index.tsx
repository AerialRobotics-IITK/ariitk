'use client'; // Required for Framer Motion

import Image from "next/image";
import React from "react";
import { motion , Variants } from "framer-motion";

const teamMembersY23=[
  {
    name: "Ayush Goyal",
    role: "Team Head",
    image: "/images/team/y23/ayush.jpeg",
  },
  {
    name: "Prasun Shrivastav",
    role: "Team Head",
    image: "/images/team/y23/prasun.jpeg",
  },
  {
    name: "Shivang Sonker",
    role: "Team Head",
    image: "/images/team/y23/shivang.jpeg",
  },
  {
    name: "Somya Garg",
    role: "Team Head",
    image: "/images/team/y23/somya.jpeg",
  },
  {
    name: "Sunraj Patel",
    role: "Team Head",
    image: "/images/team/y23/sunraj.jpeg",
  },
  {
    name: "Meher Narula",
    role: "Senior Team Member",
    image: "/images/team/y23/meher.jpeg",
  },
  {
    name: "Akshyat Bansal",
    role: "Senior Team Member",
    image: "/images/team/y23/akshyat.jpeg",
  }
  
]
const teamMembersY22 = [
  {
    name: "Aditya Nalin Thakur",
    role: "Team Head",
    image: "/images/team/y22/aditya.jpeg",
  },
  {
    name: "Aman Singh Gill",
    role: "Team Head",
    image: "/images/team/y22/aman.jpeg",
  },
  {
    name: "Sanskar Yaduka",
    role: "Team Head",
    image: "/images/team/y22/sanskar.jpeg",
  },
  {
    name: "Anmoldeep Singh Dhillon",
    role: "Team Head",
    image: "/images/team/y22/anmol.jpg",
  }, 
  {
    name: "Shruti Ramchandra Dalvi",
    role: "Team Head",
    image: "/images/team/y22/shruti.jpg",
  },
  {
    name: "Shubh Jain",
    role: "Senior Team Member",
    image: "/images/team/y22/shubh.jpeg",
  },
  {
    name: "Suhana Krishya",
    role: "Senior Team Member",
    image: "/images/team/y22/suhana.jpeg",
  },
  // Add more team members here
];
const teamMembersY21 = [
  {
    name: "Varun Sappa",
    role: "Alumnus",
    image: "/images/team/y21/varun1.jpg",
  },
  {
    name: "Pulak Gautam",
    role: "Alumnus",
    image: "/images/team/y21/pulak2.jpg",
  },
  {
    name: "Atulya Sundaram",
    role: "Alumnus",
    image: "/images/team/y21/atulya1.jpg",
  },
  {
    name: "Harshit Chaudhary",
    role: "Alumnus",
    image: "/images/team/y21/harshit2.jpeg",
  },
  {
    name: "Hardik Agarwal",
    role: "Alumnus",
    image: "/images/team/y21/hardik1.jpg",
  },
  {
    name: "Shreya Rajak",
    role: "Alumna",
    image: "/images/team/y21/shreya1.jpg",
  },
  {
    name: "Kalika",
    role: "Alumna",
    image: "/images/team/y21/kalika1.jpg",
  },
  {
    name: "Vegi Teja Varshit",
    role: "Alumnus",
    image: "/images/team/y21/IMG_8548.jpg",
  },
  // Add more team members here
];
const teamMembersY20 = [
  {
    name: "Akshit Verma",
    role: "Alumnus",
    image: "/images/team/y20/akshit.jpg",
  },
  {
    name: "Pratyush Gupta",
    role: "Alumnus",
    image: "/images/team/y20/pratyush.jpg",
  },
  {
    name: "Rahul Rustagi",
    role: "Alumnus",
    image: "/images/team/y20/rahul.jpg",
  },
  {
    name: "Rajarshi Dutta",
    role: "Alumnus",
    image: "/images/team/y20/rajarshi.jpg",
  },
  {
    name: "B. Anshuman",
    role: "Alumnus",
    image: "/images/team/y20/anshuman.jpg",
  },
];
const teamMembersY19 = [
  {
    name: "Ishir Roongta",
    role: "Alumnus",
    image: "/images/team/y19/ishir.jpg",
  },
  {
    name: "Rohan Baijal",
    role: "Alumnus",
    image: "/images/team/y19/rohan.jpg",
  },
  {
    name: "Varun Khatri",
    role: "Alumnus",
    image: "/images/team/y19/varun.jpg",
  },
  {
    name: "Piyush Kumar",
    role: "Alumnus",
    image: "/images/team/y19/piyush.jpg",
  },
  {
    name: "Atharva Umbarkar",
    role: "Alumnus",
    image: "/images/team/y19/atharva.jpg",
  },
];
const teamMembersY18 = [
  {
    name: "Ashwin Shenai",
    role: "Alumnus",
    image: "/images/team/y18/ashwin.jpg",
  },
  {
    name: "Kshitij Kabeer",
    role: "Alumnus",
    image: "/images/team/y18/kshitij.jpg",
  },
  {
    name: "Parivesh Choudhary",
    role: "Alumnus",
    image: "/images/team/y18/parivesh.jpg",
  },
  {
    name: "Amartya Dash",
    role: "Alumnus",
    image: "/images/team/y18/amartya.jpg",
  },
];
const teamMembersY17 = [
  {
    name: "Pence Mataria",
    role: "Alumnus",
    image: "/images/team/y17/pence.jpg",
  },
  {
    name: "Piyush Patel",
    role: "Alumnus",
    image: "/images/team/y17/piyush.jpg",
  },
  {
    name: "Naveen Balaji",
    role: "Alumnus",
    image: "/images/team/y17/naveen.jpg",
  },
];
const teamMembersY16 = [
  {
    name: "Gajendra Nagar",
    role: "Alumnus",
    image: "/images/team/y16/gajendra.jpg",
  },
  {
    name: "Prashant Singh",
    role: "Alumnus",
    image: "/images/team/y16/prashant.jpg",
  },
  {
    name: "Nitish Pant",
    role: "Alumnus",
    image: "/images/team/y16/nitish.jpg",
  },
];

// --- Animation Variants ---
const cardVariants: Variants = {
  initial: (custom: { direction: 'left' | 'right'; delay: number }) => ({
    opacity: 0,
    x: custom.direction === 'left' ? -100 : 100,
    y: 40,
    scale: 0.85,
  }),
  animate: (custom: { direction: 'left' | 'right'; delay: number }) => ({
    opacity: 1,
    x: 0,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.8,
      ease: [0.4, 0, 0.2, 1],
      delay: custom.delay,
    }
  }),
  hover: {
    scale: 1.05,
    boxShadow: "0 0 0 6px #3b82f6, 0 0 24px 4px #60a5fa",
    transition: {
      duration: 0.3,
      ease: [0.4, 0, 0.2, 1],
    }
  }
};

// --- Team Card with Blue Glow ---
const TeamCard = ({ member }: { member: { name: string; role: string; image: string } }) => (
  <div className="w-60 bg-gray-200 rounded-xl shadow-md p-4 flex flex-col items-start dark:bg-gray-800">
    <div
      className="w-full aspect-square overflow-hidden rounded-md mb-4 border-4 border-blue-400"
      style={{
        boxShadow: "0 0 0 6px #3b82f6, 0 0 24px 4px #60a5fa"
      }}
    >
      <Image
        src={member.image}
        alt={member.name}
        width={240}
        height={240}
        className="w-full h-full object-cover"
      />
    </div>
    <div className="w-full text-left">
      <h2 className="text-xl font-semibold mb-2 text-gray-800 dark:text-gray-100">
        {member.name}
      </h2>
      <p className="text-base text-gray-800 dark:text-gray-100">
        {member.role}
      </p>
    </div>
  </div>
);

const renderTeamGrid = (
  members: { name: string; role: string; image: string }[],
  gridClass: string = "grid-cols-1 md:grid-cols-2 lg:grid-cols-5"
) => (
  <div className="flex flex-wrap justify-center">
    <div className={`grid ${gridClass} gap-12 mb-16`}>
      {members.map((member, index) => {
        const direction = index % 2 === 0 ? 'left' : 'right';
        const delay = index * 0.08;
        return (
          <motion.div
            key={index}
            custom={{ direction, delay }}
            initial="initial"
            whileInView="animate"
            whileHover="hover"
            viewport={{ once: true, amount: 0.2 }}
            variants={cardVariants}
          >
            <TeamCard member={member} />
          </motion.div>
        );
      })}
    </div>
  </div>
);

const Team = () => {
  return (
    <div>
      {/* Current team banner */}
      <div className="relative h-screen w-full">
        <Image
          src="/images/team/current/teamphoto.jpg"
          alt="Team Banner"
          fill
          className="object-cover"
        />
        <div className="absolute top-[20%] left-0 w-full bg-black/50 py-6">
          <h1 className="text-center text-5xl font-extrabold text-white">Meet the Team</h1>
        </div>
      </div>

      {/* Y23s */}
      <div className="flex items-center my-12 mt-64">
        <div className="flex-grow border-t border-gray-300 dark:border-gray-600"></div>
        <span className="mx-4 text-6xl font-semibold text-gray-800 dark:text-gray-200">Y23s</span>
        <div className="flex-grow border-t border-gray-300 dark:border-gray-600"></div>
      </div>
      {renderTeamGrid(teamMembersY23)}

      {/* Y22s */}
      <div className="flex items-center my-12">
        <div className="flex-grow border-t border-gray-300 dark:border-gray-600"></div>
        <span className="mx-4 text-6xl font-semibold text-gray-800 dark:text-gray-200">Y22s</span>
        <div className="flex-grow border-t border-gray-300 dark:border-gray-600"></div>
      </div>
      {renderTeamGrid(teamMembersY22)}

      {/* Y21s */}
      <div className="flex items-center my-12">
        <div className="flex-grow border-t border-gray-300 dark:border-gray-600"></div>
        <span className="mx-4 text-6xl font-semibold text-gray-800 dark:text-gray-200">Y21s</span>
        <div className="flex-grow border-t border-gray-300 dark:border-gray-600"></div>
      </div>
      {renderTeamGrid(teamMembersY21)}

      {/* Y20s */}
      <div className="flex items-center my-12">
        <div className="flex-grow border-t border-gray-300 dark:border-gray-600"></div>
        <span className="mx-4 text-6xl font-semibold text-gray-800 dark:text-gray-200">Y20s</span>
        <div className="flex-grow border-t border-gray-300 dark:border-gray-600"></div>
      </div>
      {renderTeamGrid(teamMembersY20)}

      {/* Y19s */}
      <div className="flex items-center my-12">
        <div className="flex-grow border-t border-gray-300 dark:border-gray-600"></div>
        <span className="mx-4 text-6xl font-semibold text-gray-800 dark:text-gray-200">Y19s</span>
        <div className="flex-grow border-t border-gray-300 dark:border-gray-600"></div>
      </div>
      {renderTeamGrid(teamMembersY19)}

      {/* Y18s */}
      <div className="flex items-center my-12">
        <div className="flex-grow border-t border-gray-300 dark:border-gray-600"></div>
        <span className="mx-4 text-6xl font-semibold text-gray-800 dark:text-gray-200">Y18s</span>
        <div className="flex-grow border-t border-gray-300 dark:border-gray-600"></div>
      </div>
      {renderTeamGrid(teamMembersY18, "grid-cols-1 md:grid-cols-2 lg:grid-cols-4")}

      {/* Y17s */}
      <div className="flex items-center my-12">
        <div className="flex-grow border-t border-gray-300 dark:border-gray-600"></div>
        <span className="mx-4 text-6xl font-semibold text-gray-800 dark:text-gray-200">Y17s</span>
        <div className="flex-grow border-t border-gray-300 dark:border-gray-600"></div>
      </div>
      {renderTeamGrid(teamMembersY17, "grid-cols-1 md:grid-cols-2 lg:grid-cols-3")}

      {/* Y16s */}
      <div className="flex items-center my-12">
        <div className="flex-grow border-t border-gray-300 dark:border-gray-600"></div>
        <span className="mx-4 text-6xl font-semibold text-gray-800 dark:text-gray-200">Y16s</span>
        <div className="flex-grow border-t border-gray-300 dark:border-gray-600"></div>
      </div>
      {renderTeamGrid(teamMembersY16, "grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mb-64")}
    </div>
  );
};

export default Team;






