import React from "react";
import SectionTitle from "../Common/SectionTitle";
import SingleBlog from "./SingleBlog";
import blogData from "./blogData";
import { Blog as BlogType } from "@/types/blog"; // Adjust path as needed

const Blog: React.FC = () => {
  return (
    <section
      id="blog"
      className="bg-gray-light py-16 dark:bg-bg-color-dark md:py-20 lg:py-28"
    >
      <div className="container">
        <SectionTitle
          title="Our Latest Blogs"
          paragraph="Here are some of our latest blogs. Just sit back and enjoy the read."
          center
        />

        <div className="grid grid-cols-1 gap-x-8 gap-y-10 md:grid-cols-2 md:gap-x-6 lg:gap-x-8 xl:grid-cols-3">
          {blogData.map((blog: BlogType, index: number) => (
            <div key={blog.id} className="w-full">
              <SingleBlog blog={blog} index={index} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Blog;




