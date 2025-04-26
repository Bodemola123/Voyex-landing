import React, { useState } from "react";
import Link from "next/link";
import ArticleCard from "./ArticleCard";
import DetailedView from "./DetailedView";

const categories = ["All Categories"];

const manualArticles = [
  {
    title: "How Voyex Helps You Bring A...",
    description: "According to a source, the current ESG market is estimated to be worth 7.02 trillion USD, with significant investment growth in green bonds...",
    tags: ["AI", "Workflow Automation"],
    readTime: "4 Mins Read",
    date: "26 April, 2025",
    content: "Full content of the first blog post.",
    image: "/blog3.png",
    imagePosition: "center 90%",
  },
  {
    title: "Behind the Scenes - How th...",
    description: "According to a source, the current ESG market is estimated to be worth 7.02 trillion USD, with significant investment growth in green bonds...",
    tags: ["AI", "Marketing"],
    readTime: "4 Mins Read",
    date: "26 April, 2025",
    content: "Full content of the second blog post.",
    image: "/blogcard.png",
    imagePosition: "center 83%",
  },
  {
    title: "The Real Benefits of AI Tools...",
    description: "According to a source, the current ESG market is estimated to be worth 7.02 trillion USD, with significant investment growth in green bonds...",
    tags: ["AI", "Productivity"],
    readTime: "4 Mins Read",
    date: "26 April, 2025",
    content: "Full content of the third blog post.",
    image: "/blog1.png",
    imagePosition: "center 70%",
  },
];

export default function Blog() {
  const [activeCategory, setActiveCategory] = useState("All Categories");
  const [view, setView] = useState("Articles");
  const [selectedItem, setSelectedItem] = useState(null);

  return (
    <div className="py-6 px-6 md:px-10 max-w-[1286px] text-white min-h-screen mx-auto">
      {!selectedItem ? (
        <>
          {/* Category & View Toggle */}
          <div className="hidden md:flex justify-between mb-6">
            {/* Categories */}
            <div className="flex gap-4 bg-[#0d0d0d] rounded-[27px] p-1">
              {categories.map((cat) => (
                <button
                  key={cat}
                  className={`rounded-[27px] flex items-center font-semibold text-base px-5 py-2.5 ${
                    activeCategory === cat
                      ? "bg-[#c088fb] text-[#0a0a0b]"
                      : "bg-transparent text-[#f4f4f4]"
                  }`}
                  onClick={() => setActiveCategory(cat)}
                >
                  {cat}
                </button>
              ))}
            </div>

            {/* View Toggle */}
            <div className="flex gap-2">
              <button
                className={`rounded-[27px] font-semibold text-base px-5 py-2.5 ${
                  view === "Articles"
                    ? "bg-[#c088fb] text-[#0a0a0b]"
                    : "bg-[#ebffe8] text-[#2d2d2d]"
                }`}
                onClick={() => setView("Articles")}
              >
                Articles
              </button>
            </div>
          </div>

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
        </>
      ) : (
        <DetailedView selectedItem={selectedItem} onBack={() => setSelectedItem(null)} />
      )}
    </div>
  );
}
