import { Blog } from "@/types/blog";

const blogData: Blog[] = [
  {
    id: 1,
    title: "Techmeet Update II",
    paragraph: "Previous approach update on Drona Aviation PS",
    image: "/images/blog/blog-techmeet-2.jpg",
    author: {
      name: "ba-13",
      image: "/images/team/y20/anshuman.jpg",
      // designation: "",
    },
    tags: ["Techmeet"],
    publishDate: "2/1/2023",
    reflink: "/blog-details-TM2/",
  },
  {
    id: 2,
    title: "Techmeet Update I",
    paragraph:
      "Milestone update on Drona Aviation PS                                              ",
    image: "/images/blog/blog-techmeet-1.jpg",
    author: {
      name: "ba-13",
      image: "/images/team/y20/anshuman.jpg",
      // designation: "",
    },
    tags: ["Techmeet"],
    publishDate: "1/28/2023",
    reflink: "/blog-details-TM1/",
  },
  {
    id: 3,
    title: "ARIITK 2.0",
    paragraph: "This is the inaugural post stating that we're back on!",
    image: "/images/blog/blog2.jpg",
    author: {
      name: "ariitk",
      image: "/images/logo/logo-svg.png",
      // designation: "",
    },
    tags: ["Revival"],
    publishDate: "1/26/2022",
    reflink: "/blog-details-ariitk",
  },
];
export default blogData;
