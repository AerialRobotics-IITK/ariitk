import Image from "next/image";
import React from "react";
import ParallaxTeam from "./ParallaxTeam";

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
    image: "images/team/y22/aman.jpeg",
  },
  {
    name: "Sanskar Yaduka",
    role: "Team Head",
    image: "images/team/y22/sanskar.jpeg",
  },
  {
    name: "Anmoldeep Singh Dhillon",
    role: "Team Head",
    image: "images/team/y22/anmol.jpg",
  }, 
  {
    name: "Shruti Ramchandra Dalvi",
    role: "Team Head",
    image: "images/team/y22/shruti.jpg",
  },
  {
    name: "Shubh Jain",
    role: "Senior Team Member",
    image: "images/team/y22/shubh.jpeg",
  },
  {
    name: "Suhana Krishya",
    role: "Senior Team Member",
    image: "images/team/y22/suhana.jpeg",
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

const TeamCard = ({ member }) => {
  return (
    <div className="w-60 bg-gray-200 rounded-xl shadow-md text-white p-4 flex flex-col items-start dark:bg-gray-800">
      <div className="w-full aspect-square overflow-hidden rounded-md mb-4">
        <img
          src={member.image}
          alt={member.name}
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
};

const Team = () => {
  return (
    <main>
    <ParallaxTeam />
    <div>
      {/*y23s*/}
      <div className="flex items-center my-12 mt-40">
        <div className="flex-grow border-t border-gray-300 dark:border-gray-600"></div>
        <span className="mx-4 text-6xl font-semibold text-gray-800 dark:text-gray-200">Y23s</span>
        <div className="flex-grow border-t border-gray-300 dark:border-gray-600"></div>
      </div>
      <div className="flex flex-wrap justify-center">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-5 mb-16">
          {teamMembersY23.map((member, index) => (
            <div key={index}>
              <TeamCard member={member} />
            </div>
          ))}
        </div>
      </div>

      {/* y22s */}
      <div className="flex items-center my-12">
        <div className="flex-grow border-t border-gray-300 dark:border-gray-600"></div>
        <span className="mx-4 text-6xl font-semibold text-gray-800 dark:text-gray-200">Y22s</span>
        <div className="flex-grow border-t border-gray-300 dark:border-gray-600"></div>
      </div>
      <div className="flex flex-wrap justify-center">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-5 mb-16">
          {teamMembersY22.map((member, index) => (
            <div key={index}>
              <TeamCard member={member} />
            </div>
          ))}
        </div>
      </div>

      {/* y21s */}
      <div className="flex items-center my-12">
        <div className="flex-grow border-t border-gray-300 dark:border-gray-600"></div>
        <span className="mx-4 text-6xl font-semibold text-gray-800 dark:text-gray-200">Y21s</span>
        <div className="flex-grow border-t border-gray-300 dark:border-gray-600"></div>
      </div>
      <div className="flex flex-wrap justify-center">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-5 mb-16">
          {teamMembersY21.map((member, index) => (
            <div key={index}>
              <TeamCard member={member} />
            </div>
          ))}
        </div>
      </div>


      {/* y20s */}
      <div className="flex items-center my-12">
        <div className="flex-grow border-t border-gray-300 dark:border-gray-600"></div>
        <span className="mx-4 text-6xl font-semibold text-gray-800 dark:text-gray-200">Y20s</span>
        <div className="flex-grow border-t border-gray-300 dark:border-gray-600"></div>
      </div>
      <div className="flex flex-wrap justify-center">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-5 mb-16">
          {teamMembersY20.map((member, index) => (
            <div key={index}>
              <TeamCard member={member} />
            </div>
          ))}
        </div>
      </div>

      {/* Y19s */}
      <div className="flex items-center my-12">
        <div className="flex-grow border-t border-gray-300 dark:border-gray-600"></div>
        <span className="mx-4 text-6xl font-semibold text-gray-800 dark:text-gray-200">Y19s</span>
        <div className="flex-grow border-t border-gray-300 dark:border-gray-600"></div>
      </div>
      <div className="flex flex-wrap justify-center">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-5 mb-16">
          {teamMembersY19.map((member, index) => (
            <div key={index}>
              <TeamCard member={member} />
            </div>
          ))}
        </div>
      </div>

      {/* y18s */}
      <div className="flex items-center my-12">
        <div className="flex-grow border-t border-gray-300 dark:border-gray-600"></div>
        <span className="mx-4 text-6xl font-semibold text-gray-800 dark:text-gray-200">Y18s</span>
        <div className="flex-grow border-t border-gray-300 dark:border-gray-600"></div>
      </div>
      <div className="flex flex-wrap justify-center">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-4 mb-16">
          {teamMembersY18.map((member, index) => (
            <div key={index}>
              <TeamCard member={member} />
            </div>
          ))}
        </div>
      </div>

      {/* y17s */}
      <div className="flex items-center my-12">
        <div className="flex-grow border-t border-gray-300 dark:border-gray-600"></div>
        <span className="mx-4 text-6xl font-semibold text-gray-800 dark:text-gray-200">Y17s</span>
        <div className="flex-grow border-t border-gray-300 dark:border-gray-600"></div>
      </div>
      <div className="flex flex-wrap justify-center">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-3 mb-16">
          {teamMembersY17.map((member, index) => (
            <div key={index}>
              <TeamCard member={member} />
            </div>
          ))}
        </div>
      </div>

      {/* Y16s */}
      <div className="flex items-center my-12">
        <div className="flex-grow border-t border-gray-300 dark:border-gray-600"></div>
        <span className="mx-4 text-6xl font-semibold text-gray-800 dark:text-gray-200">Y16s</span>
        <div className="flex-grow border-t border-gray-300 dark:border-gray-600"></div>
      </div>
      <div className="flex flex-wrap justify-center">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-3 mb-64">
          {teamMembersY16.map((member, index) => (
            <div key={index}>
              <TeamCard member={member} />
            </div>
          ))}
        </div>
      </div>
    </div>
    </main>
  );
};

export default Team;
//
//       ¯\(ツ)/¯
// Harshit Chaudhary was here, if you see this, feel lucky
// revamped by saatvik on 21/6/25 