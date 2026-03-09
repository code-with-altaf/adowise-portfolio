"use client";

import { useEffect, useState } from "react";
import SectionTitle from "../Common/SectionTitle";
import SingleBlog from "./SingleBlog";
import blogDataStatic from "./blogData";

const Blog = ({ messages }: { messages: any }) => {
  const [blogs, setBlogs] = useState<any[]>(blogDataStatic);
  const t = messages?.Blog || {};

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const res = await fetch("/api/admin/blogs");
        if (res.ok) {
          const data = await res.json();
          if (data.length > 0) {
            // Combine or replace static with dynamic
            setBlogs(data);
          }
        }
      } catch (err) {
        console.error("Failed to fetch dynamic blogs", err);
      }
    };
    fetchBlogs();
  }, []);

  return (
    <section
      id="blog"
      className="bg-gray-light dark:bg-bg-color-dark py-16 md:py-20 lg:py-28"
    >
      <div className="container">
        <SectionTitle
          title={t.title}
          paragraph={t.subtitle}
          center
        />

        <div className="grid grid-cols-1 gap-x-8 gap-y-10 md:grid-cols-2 md:gap-x-6 lg:gap-x-8 xl:grid-cols-3">
          {blogs.map((blog) => (
            <div key={blog._id || blog.id} className="w-full">
              <SingleBlog blog={blog} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Blog;
