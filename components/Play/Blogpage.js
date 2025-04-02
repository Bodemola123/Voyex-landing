import React from "react";

const Blog = () => {
  const blogs = [
    {
      id: 1,
      title: "Deepseek New Launch",
      description:
        "According to a source, the current ESG market is estimated to be worth 7.02 trillion USD, with significant investment growth in green bonds...",
      tags: ["AI", "Marketing"],
      readTime: "4 Mins Read",
      date: "11 Jan, 2025",
    },
    {
      id: 2,
      title: "Deepseek New Launch",
      description:
        "According to a source, the current ESG market is estimated to be worth 7.02 trillion USD, with significant investment growth in green bonds...",
      tags: ["AI", "Marketing"],
      readTime: "4 Mins Read",
      date: "11 Jan, 2025",
    },
    {
      id: 3,
      title: "Deepseek New Launch",
      description:
        "According to a source, the current ESG market is estimated to be worth 7.02 trillion USD, with significant investment growth in green bonds...",
      tags: ["AI", "Marketing"],
      readTime: "4 Mins Read",
      date: "11 Jan, 2025",
    },
  ];

  return (
    <div className="relative flex flex-col items-center justify-center py-14 px-6 -mt-60 mb-80" data-aos="fade-up">
      {/* "Our Blog" Button */}
      <div className="mb-4">
        <button className="bg-[#0d0d0d] text-white text-sm font-medium px-6 py-2 rounded-full">
          Our Blog
        </button>
      </div>

      {/* Section Title */}
      <h2 className="text-white text-5xl md:text-5xl font-bold text-center mb-8">
        Read Our Latest Research & Blog Posts
      </h2>

      {/* Blog Cards */}
      <div className="grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-4 max-w-[1200px] w-full">
        {blogs.map((blog) => (
          <div
            key={blog.id}
            data-aos="fade-up"
            className="bg-[#0d0d0d] border border-gray-800 rounded-lg p-6 flex flex-col gap-4 transition-transform duration-300 hover:scale-105"
          >
            {/* Placeholder for Image */}
            <div className="bg-gray-700 rounded-lg h-40"></div>

            {/* Tags */}
            <div className="flex gap-2">
              {blog.tags.map((tag, index) => (
                <span
                  key={index}
                  className="bg-[#131314] text-[#C088FB] text-xs font-medium px-3 py-1 rounded-full"
                >
                  {tag}
                </span>
              ))}
            </div>

            {/* Blog Title */}
            <h3 className="text-white text-lg font-bold">{blog.title}</h3>

            {/* Blog Description */}
            <p className="text-gray-400 text-sm">{blog.description}</p>

            {/* Footer */}
            <div className="flex justify-between items-center text-gray-500 text-xs">
              <span>{blog.date}</span>
              <span>{blog.readTime}</span>
            </div>
          </div>
        ))}
      </div>

      {/* "Read More Blog Stories" Link */}
      <div className="mt-8">
        <a
          href="#"
          className="text-[#C088FB] text-md font-medium hover:underline"
        >
          Read More blog stories
        </a>
      </div>
    </div>
  );
};

export default Blog;