import Image from "next/image";
import React from "react";
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
    name: "Anmoldeep Singh Dhillon",
    role: "Team Head",
    image: "images/team/y22/anmol.jpg",
  },
  {
    name: "Sanskar Yaduka",
    role: "Team Head",
    image: "images/team/y22/sanskar.jpeg",
  }, 
  {
    name: "Shruti Ramchandra Dalvi",
    role: "Team Head",
    image: "images/team/y22/shruti.jpg",
  },
  {
    name: "Shubh Jain",
    role: "Senior Member",
    image: "images/team/y22/shubh.jpeg",
  },
  {
    name: "Suhana Krishya",
    role: "Senior Member",
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
    role: "Alumnus",
    image: "/images/team/y21/shreya1.jpg",
  },
  {
    name: "Kalika",
    role: "Alumnus",
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
    name: "B.Anshuman",
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
    <div className="square-lg bg-gray-200 p-6 shadow-md dark:bg-gray-700">
      <img
        src={member.image}
        alt={member.name}
        className="square-full hover: mx-auto mb-4 h-64 w-64 scale-105 transition-all duration-300 ease-in-out"
      />
      <h2 className="mb-2 text-xl font-bold text-gray-800 dark:text-gray-100">
        {member.name}
      </h2>
      <h3 className="mb-4 text-lg text-gray-600 dark:text-gray-100">
        {member.role}
      </h3>
    </div>
  );
};

const Team = () => {
  return (
    <div>

      {/* y22s */}
      <div className="mt-10 ml-20 text-6xl mb-4 font-bold">
        Y22s
      </div>
    <div className="flex flex-wrap justify-center">
      <div className="grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-3">
        {teamMembersY22.map((member, index) => (
          <div key={index}>
            
            <TeamCard member={member} />
          </div>
        ))}
      </div>
    </div>

      {/* y21s */}
      <div className="mb-4 ml-20 mt-10 text-6xl font-bold">Y21s</div>
      <div className="flex flex-wrap justify-center">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-3">
          {teamMembersY21.map((member, index) => (
            <div key={index}>
              {/* className="w-1/3 md:w-1/4 lg:w-1/5" */}
              <TeamCard member={member} />
            </div>
          ))}
        </div>
      </div>


      {/* y20s */}
      <div className="mb-4 ml-20 mt-10 text-6xl font-bold">Y20s</div>
      <div className="flex flex-wrap justify-center">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-3">
          {teamMembersY20.map((member, index) => (
            <div key={index}>
              {/* className="w-1/3 md:w-1/4 lg:w-1/5" */}
              <TeamCard member={member} />
            </div>
          ))}
        </div>
      </div>
      {/* Y19s */}
      <div className="mb-4 ml-20 mt-10 text-6xl font-bold">Y19s</div>
      <div className="flex flex-wrap justify-center">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-3">
          {teamMembersY19.map((member, index) => (
            <div key={index}>
              {/* className="w-1/3 md:w-1/4 lg:w-1/5" */}
              <TeamCard member={member} />
            </div>
          ))}
        </div>
      </div>

      {/* y18s */}
      <div className="mb-4 ml-20 mt-10 text-6xl font-bold">Y18s</div>
      <div className="flex flex-wrap justify-center">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-3">
          {teamMembersY18.map((member, index) => (
            <div key={index}>
              {/* className="w-1/3 md:w-1/4 lg:w-1/5" */}
              <TeamCard member={member} />
            </div>
          ))}
        </div>
      </div>

      {/* y17s */}
      <div className="mb-4 ml-20 mt-10 text-6xl font-bold">Y17s</div>
      <div className="flex flex-wrap justify-center">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-3">
          {teamMembersY17.map((member, index) => (
            <div key={index}>
              {/* className="w-1/3 md:w-1/4 lg:w-1/5" */}
              <TeamCard member={member} />
            </div>
          ))}
        </div>
      </div>

      {/* Y16s */}
      <div className="mb-4 ml-20 mt-10 text-6xl font-bold">Y16s</div>
      <div className="flex flex-wrap justify-center">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-3">
          {teamMembersY16.map((member, index) => (
            <div key={index}>
              {/* className="w-1/3 md:w-1/4 lg:w-1/5" */}
              <TeamCard member={member} />
            </div>
          ))}
        </div>
      </div>
      <br />
    </div>
  );
};

export default Team;
//
//       ¯\(ツ)/¯
// Harshit Chaudhary was here, if you see this, feel lucky
