import { Feature } from "@/types/feature";
import Image from "next/image";
const featuresData: Feature[] = [
  {
    id: 1,
    icon: "/images/icuas25.jpeg",
    title: "🥇 ICUAS 2025",
    head:"Secured first place in ICUAS 2025",
    paragraph:
      "Held in Charlotte, NC, USA in May 2025. Cleared several rounds, competing against teams from around the world.",
  },
  {
    id: 2,
    icon: "/images/imav.jpg",
    title: "- IMAV 2019",
    head: "Secured a place in Top 10 team globally",
    paragraph:
      "In IMAV 2019, held in Madrid, Spain. Competing against 200 teams from around the world.",
  },
  {
    id: 3,
    icon: "/images/auvsihomepage.png",
    title: "- AUVSI",
    head: "Chosen as one of only 11 teams worldwide",
    paragraph:
      "To compete in Mission 9 of the AUVSI Foundation International Aerial Robotics Competition, alongside prestigious institutions such as Cornell University and IIT Bombay",
  },
  {
    id: 4,
    icon: "/images/blog/blog-techmeet-1.jpg",
    title: "- INTER-IIT TECH MEET",
    head: "Podium finishes at the Inter IIT Tech Meet",
    paragraph:
      "For 5 consecutive years, earning prestigious honours such as the Sole Gold Medal Winner with a perfect score of 400/400 and a Special Mention from DRDO",
  },
];
export default featuresData;
