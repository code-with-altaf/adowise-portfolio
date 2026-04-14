import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { Blog } from "@/types/blog";

const blogsDirectory = path.join(process.cwd(), "src/content/blogs");
const seoBlogsDirectory = path.join(process.cwd(), "src/content/seo-blogs");

export function getAllBlogs(includeHidden = true): Blog[] {
  const sources = [
    { dir: blogsDirectory, hidden: false }
  ];
  
  if (includeHidden) {
    sources.push({ dir: seoBlogsDirectory, hidden: true });
  }

  let allBlogsData: any[] = [];

  sources.forEach(({ dir, hidden }) => {
    if (!fs.existsSync(dir)) return;
    
    const fileNames = fs.readdirSync(dir);
    const folderBlogs = fileNames
      .filter((fileName) => fileName.endsWith(".md"))
      .map((fileName) => {
        const fullPath = path.join(dir, fileName);
        const fileContents = fs.readFileSync(fullPath, "utf8");
        const matterResult = matter(fileContents);
        const data = matterResult.data;

        return {
          id: data.id,
          _id: String(data.id),
          title: data.title,
          paragraph: data.paragraph,
          image: data.image,
          author: {
            name: data.authorName,
            image: data.authorImage,
            designation: data.authorDesignation,
          },
          tags: data.tags || [],
          publishDate: data.publishDate,
          content: matterResult.content,
          hidden: hidden // New property to identify SEO-only blogs
        };
      });
    allBlogsData = [...allBlogsData, ...folderBlogs];
  });

  return allBlogsData.sort((a, b) => b.id - a.id);
}

export function getBlogById(id: string | number): Blog | undefined {
  const blogs = getAllBlogs();
  return blogs.find((blog) => String(blog.id) === String(id));
}
