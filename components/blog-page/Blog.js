import React, { useState } from "react";
import ArticleCard from "./ArticleCard";
import DetailedView from "./DetailedView";
import Link from 'next/link';

const categories = [
  "All Categories"
];

export default function Blog() {
  const [activeCategory, setActiveCategory] = useState("All Categories");
  const [view, setView] = useState("Articles"); // "Articles" or "Videos"
  const [selectedItem, setSelectedItem] = useState(null);
  const [showCategoryDropdown, setShowCategoryDropdown] = useState(false);
  const [showViewDropdown, setShowViewDropdown] = useState(false);

  const manualArticles = [
    {
      title: "How Voyex Helps You Bring A...",
      description: "According to a source, the current ESG market is estimated to be worth 7.02 trillion USD, with significant investment growth in green bonds...",
      tags: ["AI", "Workflow Automation"],
      readTime: "4 Mins Read",
      date: "26 April, 2025",
      content: "Full content of the first blog post.",
      image: "/blog3.png", // Placeholder image URL
      imagePosition: "center 90%",
    },
    {
      title: "Behind the Scenes - How th...",
      description: "According to a source, the current ESG market is estimated to be worth 7.02 trillion USD, with significant investment growth in green bonds...",
      tags: ["AI", "Marketing"],
      readTime: "4 Mins Read",
      date: "26 April, 2025",
      content: "Full content of the second blog post.",
      image: "/blogcard.png", // Placeholder image URL
      imagePosition: "center 83%",
    },
    {
      title: "The Real Benefits of AI Tools...",
      description: "According to a source, the current ESG market is estimated to be worth 7.02 trillion USD, with significant investment growth in green bonds...",
      tags: ["AI", "Productivity"],
      readTime: "4 Mins Read",
      date: "26 April, 2025",
      content: "Full content of the third blog post.",
      image: "/blog1.png", // Placeholder image URL
      imagePosition: "center 70%",
    },
  ];

  return (
    <div className="py-6 px-10 max-w-[1286px] text-white min-h-screen mx-auto">
      {!selectedItem ? (
        <>
          {/* Category & View Toggle for Large Screens */}
          <div className="md:flex justify-between mb-6 sm:hidden">
            <div className="flex flex-row gap-4 px-[1px] py-[1px] bg-[#0d0d0d] rounded-[27px]">
              {categories.map((cat) => (
                <button
                  key={cat}
                  className={`rounded-[27px] md:px-3.5 md:py-2 md:gap-1.5 lg:px-5 lg:py-2.5 lg:gap-2.5 flex font-semibold text-base ${activeCategory === cat ? "bg-[#c088fb] text-[#0a0a0b]" : "bg-transparent text-[#f4f4f4]"}`}
                  onClick={() => { setActiveCategory(cat); }}
                >
                  {cat}
                </button>
              ))}
            </div>
             <div className="flex flex-row gap-2">
              <button
                className={`lg:px-5 lg:py-2.5 md:px-3 md:py-2 rounded-[27px] text-[#2d2d2d] text-base font-semibold ${view === "Articles" ? "bg-[#c088fb]" : "bg-[#ebffe8]"}`}
                onClick={() => setView("Articles")}
              >
                Articles
              </button>
            </div>
          </div>
        
          {/* Article Grid */}
<div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-6">
  {manualArticles.map((article, index) => (
    <div key={index}>
      <Link href={`/blog/blog-${index + 1}`} passHref>
        <div>
          <ArticleCard {...article} />
        </div>
      </Link>
    </div>
  ))}
</div>

          <div className="text-center text-[#c088fb] font-semibold mt-8">
         More coming soon 
        </div>

        </>
      ) : (
        // Detailed View (Replaces Blog)
        <DetailedView selectedItem={selectedItem} onBack={() => setSelectedItem(null)} />
      )}
    </div>
  );
}


// import React, { useState, useEffect } from "react";
// import ArticleCard from "./ArticleCard";
// import VideoCard from "./VideoCard";
// import DetailedView from "./DetailedView";

// const categories = [
//   "All Categories", "Business", "Health", "Technology", "Sport"
// ];

// const API_KEY = process.env.NEXT_PUBLIC_MEDIASTACK_API_KEY;
// const PAGE_SIZE = 3; 

// function SkeletonArticleCard() {
//   return (
//     <div className="bg-[#0d0d0d] p-4 flex flex-col gap-4 rounded-2xl border border-[#ffffff20] h-[400px] animate-pulse">
//       <div className="h-32 w-full rounded-lg bg-gray-700"></div>
//       <div className="h-6 w-full bg-gray-700 rounded"></div>
//       <div className="h-[102px] w-full bg-gray-700 rounded"></div>
//       <div className="h-4 w-20 bg-gray-700 rounded"></div>
//     </div>
//   );
// }

// export default function Blog() {
//   const [activeCategory, setActiveCategory] = useState("All Categories");
//   const [view, setView] = useState("Articles"); // "Articles" or "Videos"
//   const [selectedItem, setSelectedItem] = useState(null);
//   const [articles, setArticles] = useState([]);
//   const [page, setPage] = useState(1);
//   const [loading, setLoading] = useState(false);
//   const [showCategoryDropdown, setShowCategoryDropdown] = useState(false);
//   const [showViewDropdown, setShowViewDropdown] = useState(false);

//   useEffect(() => {
//     if (view === "Articles") {
//       fetchArticles();
//     }
//   }, [activeCategory, page, view]);

//   const fetchArticles = async () => {
//     setLoading(true);

//     try {
//       const categoryParam = activeCategory === "All Categories" ? "" : `&categories=${activeCategory.toLowerCase()}`;
//       const response = await fetch(
//         `https://api.mediastack.com/v1/news?access_key=${API_KEY}&languages=en${categoryParam}&limit=${PAGE_SIZE}&offset=${(page - 1) * PAGE_SIZE}`
//       );
//       const data = await response.json();

//       if (!data.data || !Array.isArray(data.data)) {
//         throw new Error("Invalid API response structure");
//       }

//       const formattedArticles = data.data.map(article => ({
//         title: article.title || "No Title",
//         description: article.description || "No Description Available",
//         tags: article.category ? [article.category] : ["News"],
//         readTime: "4 Mins Read",
//         date: article.published_at ? new Date(article.published_at).toLocaleDateString() : "Unknown Date",
//         content: article.description || "No Content Available",
//         image: article.image || "", // Handle missing images
//       }));

//       setArticles(formattedArticles);
//     } catch (error) {
//       console.error("Error fetching articles:", error);
//     }

//     setLoading(false);
//   };

//   return (
//     <div className="py-6 px-10 text-white min-h-screen">
//       {!selectedItem ? (
//         <>
//           {/* Category & View Toggle for Large Screens */}
//           <div className="md:flex justify-between mb-6 sm:hidden">
//             <div className="flex flex-row gap-4 px-[1px] py-[1px] bg-[#0d0d0d] border border-[#ffffff20] rounded-[27px]">
//               {categories.map((cat) => (
//                 <button
//                   key={cat}
//                   className={`rounded-[27px] md:px-3.5 md:py-2 md:gap-1.5 lg:px-5 lg:py-2.5 lg:gap-2.5 flex font-semibold text-base ${activeCategory === cat ? "bg-[#c088fb] text-[#0a0a0b]" : "bg-transparent text-[#f4f4f4]"}`}
//                   onClick={() => { setActiveCategory(cat); setPage(1); }}
//                 >
//                   {cat}
//                 </button>
//               ))}
//             </div>
//             <div className="flex flex-row gap-2">
//               <button
//                 className={`lg:px-5 lg:py-2.5 md:px-3 md:py-2 rounded-[27px] text-[#2d2d2d] text-base font-semibold ${view === "Articles" ? "bg-[#c088fb]" : "bg-[#ebffe8]"}`}
//                 onClick={() => setView("Articles")}
//               >
//                 Articles
//               </button>
//               <button
//                 className={`lg:px-5 lg:py-2.5 md:px-3 md:py-2 rounded-[27px] text-[#2d2d2d] text-base font-semibold ${view === "Videos" ? "bg-[#c088fb]" : "bg-[#ebffe8]"}`}
//                 onClick={() => setView("Videos")}
//               >
//                 Videos
//               </button>
//             </div>
//           </div>
//                     {/* Category & View Toggle for small Screens */}
//           <div className="md:hidden sm:flex justify-between mb-6">
//           <div className="relative">
//               <button
//                 onClick={() => setShowCategoryDropdown(!showCategoryDropdown)}
//                 className="px-5 py-2.5 border border-[#ffffff20] rounded-[17px] font-semibold text-base relative text-black bg-[#c088fb]"
//               >
//                 {activeCategory} ▼
//               </button>
//               {showCategoryDropdown && (
//                 <div className="absolute left-0 mt-1 w-[168px] bg-[#0d0d0d] border border-[#ffffff20] rounded-[17px] shadow-lg z-10 overflow-hidden">
//                   {categories.map((cat) => (
//                     <div
//                       key={cat}
//                       className={`px-4 py-2 cursor-pointer ${activeCategory === cat ? "bg-[#c088fb] text-[#0a0a0b]" : "text-[#f4f4f4] hover:bg-[#c088fb] hover:text-[#0a0a0b]"}`}
//                       onClick={() => { setActiveCategory(cat); setPage(1); setShowCategoryDropdown(false); }}
//                     >
//                       {cat}
//                     </div>
//                   ))}
//                 </div>
//               )}
//             </div>
//             <div className="relative">
//               <button
//                 onClick={() => setShowViewDropdown(!showViewDropdown)}
//                 className="px-5 py-2.5 border border-[#ffffff20] rounded-[17px] font-semibold text-base relative bg-white text-black"
//               >
//                 {view} ▼
//               </button>
//               {showViewDropdown && (
//                 <div className="absolute right-0 mt-2 w-[120px] bg-[#0d0d0d] border border-[#ffffff20] rounded-[17px] shadow-lg z-10 overflow-hidden">
//                   {["Articles", "Videos"].map((option) => (
//                     <div
//                       key={option}
//                       className={`px-4 py-2 cursor-pointer ${view === option ? "bg-white text-black" : "text-[#f4f4f4]  hover:bg-[#c088fb] hover:text-[#0a0a0b]"}`}
//                       onClick={() => { setView(option); setShowViewDropdown(false); }}
//                     >
//                       {option}
//                     </div>
//                   ))}
//                 </div>
//               )}
//             </div>
//           </div>

//           {/* Article Grid */}
//           <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-6">
//             {loading ? (
//               Array.from({ length: 3 }).map((_, index) => <SkeletonArticleCard key={index} />)
//             ) : (
//               articles.map((article, index) => (
//                 <div key={index} onClick={() => setSelectedItem(article)}>
//                   <ArticleCard {...article} />
//                 </div>
//               ))
//             )}
//           </div>

//           {/* Pagination Buttons */}
// {/* Pagination Buttons */}
// {!selectedItem && !loading && (
//   <div className="flex justify-between mt-8">
//     {page > 1 && (
//       <button
//         onClick={() => setPage(page - 1)}
//         className="px-5 py-2 bg-[#0d0d0d] hover:text-[#2d2d2d] hover:bg-[#c088fb] rounded-xl"
//       >
//         Newer
//       </button>
//     )}
//     <button
//       onClick={() => setPage(page + 1)}
//       className="px-5 py-2 bg-[#0d0d0d] hover:text-[#2d2d2d] hover:bg-[#c088fb] rounded-xl"
//     >
//       Older
//     </button>
//   </div>
// )}

// <div className="text-center text-[#c088fb] font-semibold mt-8">
//   More coming soon 
// </div>


//         </>
//       ) : (
//         // Detailed View (Replaces Blog)
//         <DetailedView selectedItem={selectedItem} onBack={() => setSelectedItem(null)} />
//       )}
//     </div>
//   );
// }