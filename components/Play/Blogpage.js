// import React from "react";

// const Blog = () => {
//   const blogs = [
//     {
//       id: 1,
//       title: "How Voyex Helps You Bring A...",
//       description:
//         "According to a source, the current ESG market is estimated to be worth 7.02 trillion USD, with significant investment growth in green bonds...",
//       tags: ["AI", "Workflow Automation"],
//       readTime: "4 Mins Read",
//       date: "26 April, 2025",
//     },
//     {
//       id: 2,
//       title: "Behind the Scenes - How th...",
//       description:
//         "According to a source, the current ESG market is estimated to be worth 7.02 trillion USD, with significant investment growth in green bonds...",
//       tags: ["AI", "Marketing"],
//       readTime: "4 Mins Read",
//       date: "26 April, 2025",
//     },
//     {
//       id: 3,
//       title: "The Real Benefits of AI Tools...",
//       description:
//         "According to a source, the current ESG market is estimated to be worth 7.02 trillion USD, with significant investment growth in green bonds...",
//       tags: ["AI", "Productivity"],
//       readTime: "4 Mins Read",
//       date: "26 April, 2025",
//     },
//   ];

//   return (
//     <div className="relative flex flex-col items-center justify-center py-14 px-6 max-w-5xl mx-auto md:-mt-[350px] lg:-mt-[500px] sm:-mt-[350px] mb-80  " data-aos="fade-up">
//       {/* "Our Blog" Button */}
//       <div className="mb-4">
//         <button className="bg-[#0d0d0d] text-white text-sm font-medium px-6 py-2 rounded-full" data-aos="fade-up">
//           Our Blog
//         </button>
//       </div>

//       {/* Section Title */}
//       <h2 className="text-white lg:text-[54px] md:text-[38px] sm:text-[32px] font-bold leading-tight text-center mb-8" data-aos="fade-up">
//         Read Our Latest Research & Blog Posts
//       </h2>

//       {/* Blog Cards */}
//       <div className="grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-4 max-w-[1200px] w-full">
//         {blogs.map((blog) => (
//           <div
//             key={blog.id}
//             data-aos="fade-up"
//             className="bg-[#0d0d0d] border border-gray-800 rounded-lg p-6 flex flex-col gap-4 transition-transform duration-300 hover:scale-105"
//           >
//             {/* Placeholder for Image */}
//             <div className="bg-gray-700 rounded-lg h-40"></div>

//             {/* Tags */}
//             <div className="flex gap-2">
//               {blog.tags.map((tag, index) => (
//                 <span
//                   key={index}
//                   className="bg-[#131314] text-[#C088FB] text-xs font-medium px-3 py-1 rounded-full"
//                 >
//                   {tag}
//                 </span>
//               ))}
//             </div>

//             {/* Blog Title */}
//             <h3 className="text-white text-lg font-bold">{blog.title}</h3>

//             {/* Blog Description */}
//             <p className="text-gray-400 text-sm">{blog.description}</p>

//             {/* Footer */}
//             <div className="flex justify-between items-center text-gray-500 text-xs">
//               <span>{blog.date}</span>
//               <span>{blog.readTime}</span>
//             </div>
//           </div>
//         ))}
//       </div>

//       {/* "Read More Blog Stories" Link */}
//       <div className="mt-8">
//         <a
//           href="/blog"
//           className="text-[#C088FB] text-md font-medium hover:underline" 
//         >
//           Read More blog stories
//         </a>
//       </div>
//     </div>
//   );
// };

// export default Blog;




"use client"; 

import React, { useState } from "react";
import Link from "next/link";
import ArticleCard from "../Play/ArticleCard";

const manualArticles = [
  {
    title: "How the Voyex Query Engine Understands You (And Finds the Right AI Tools)",
    description: "According to a source, the current ESG market is estimated to be worth 7.02 trillion USD, with significant investment growth in green bonds...",
    tags: ["AI", "Workflow Automation"],
    readTime: "4 Mins Read",
    date: "26 April, 2025",
    content: "Full content of the first blog post.",
    image: "/blog3.png",
    imagePosition: "center 90%",
  },
  {
    title: "Behind the Scenes — How the Voyex Query Engine Works",
    description: "According to a source, the current ESG market is estimated to be worth 7.02 trillion USD, with significant investment growth in green bonds...",
    tags: ["AI", "Marketing"],
    readTime: "4 Mins Read",
    date: "26 April, 2025",
    content: "Full content of the second blog post.",
    image: "/blogcard.png",
    imagePosition: "center 83%",
  },
  {
    title: "The Real Benefits of AI Tools (And How to Start Using Them Today)",
    description: "According to a source, the current ESG market is estimated to be worth 7.02 trillion USD, with significant investment growth in green bonds...",
    tags: ["AI", "Productivity"],
    readTime: "4 Mins Read",
    date: "26 April, 2025",
    content: "Full content of the third blog post.",
    image: "/blog1.png",
    imagePosition: "center 70%",
  },
];

export default function BlogPage() {
  return (
    <div className=" flex flex-col items-center justify-center py-14 px-6 max-w-6xl lg:max-w-[980px] xl:max-w-[1153px] mx-auto md:-mt-[350px] lg:-mt-[500px] sm:-mt-[350px] mb-80  " data-aos="fade-up">
    {/* // <div className="pt-0 px-6 md:px-10 max-w-[1286px] text-white min-h-screen mx-auto"> */}

          {/* "Our Blog" Button */}
          <div className="mb-4">
        <button className="bg-[#0d0d0d] text-white text-sm font-medium px-6 py-2 rounded-full" data-aos="fade-up">
          Our Blog
        </button>
      </div>

      {/* Section Title */}
      <h2 className="text-white lg:text-[54px] md:text-[38px] sm:text-[32px] font-bold leading-tight text-center mb-8" data-aos="fade-up">
        Read Our Latest Research & Blog Posts
      </h2>

      {/* Article Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {manualArticles.map((article, index) => (
          <Link key={index} href={`/blog/blog-${index + 1}`} passHref>
            <div>
              <ArticleCard {...article} />
            </div>
          </Link>
        ))}
      </div>

      {/* More Coming Soon */}
      <div className="text-center text-[#c088fb] font-semibold mt-10">
        More coming soon
      </div>
    </div>
  );
}
