"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { useTheme } from "next-themes";
import { useState, useEffect } from "react";
import { BsArrowRight, BsCalendar, BsTag } from "react-icons/bs";

interface Article {
  id: number;
  title: string;
  category: string;
  date: string;
  excerpt: string;
  imageUrl: string;
  author: {
    name: string;
    role: string;
    avatar: string;
  };
  tags: string[];
}

const featuredArticle: Article = {
  id: 1,
  title: "The Future of Digital Transformation",
  category: "Technology",
  date: "March 15, 2024",
  excerpt: "Explore the key trends and strategies that are shaping the future of digital transformation in businesses across all industries.",
  imageUrl: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80",
  author: {
    name: "Sarah Johnson",
    role: "Digital Transformation Expert",
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80"
  },
  tags: ["Digital Transformation", "Technology", "Innovation"]
};

const articles: Article[] = [
  {
    id: 2,
    title: "Strategic Planning for Business Growth",
    category: "Business",
    date: "March 10, 2024",
    excerpt: "Learn about the key components of an effective strategic planning process and how it can drive sustainable business growth.",
    imageUrl: "https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80",
    author: {
      name: "Michael Chen",
      role: "Business Strategy Consultant",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80"
    },
    tags: ["Business Strategy", "Growth", "Planning"]
  },
  {
    id: 3,
    title: "Innovation in the Modern Workplace",
    category: "Innovation",
    date: "March 5, 2024",
    excerpt: "Discover how fostering a culture of innovation can lead to breakthrough ideas and competitive advantage in the workplace.",
    imageUrl: "https://images.unsplash.com/photo-1507679799987-c73779587ccf?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80",
    author: {
      name: "Emily Rodriguez",
      role: "Innovation Specialist",
      avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80"
    },
    tags: ["Innovation", "Workplace", "Culture"]
  }
];

export function Blog() {
  const [mounted, setMounted] = useState(false);
  const { theme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <div className="space-y-24">
      {/* Hero Section */}
      <section className="container mx-auto px-4 py-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="max-w-3xl mx-auto text-center"
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Our Blog</h1>
          <p className={`text-xl ${
            theme === "dark" ? "text-gray-400" : "text-gray-600"
          }`}>
            Insights, trends, and best practices from our team of experts
          </p>
        </motion.div>
      </section>

      {/* Featured Article */}
      <section className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className={`rounded-2xl overflow-hidden shadow-xl ${
            theme === "dark" ? "bg-gray-800" : "bg-white"
          }`}
        >
          <div className="grid grid-cols-1 md:grid-cols-2">
            <div className="relative h-[400px] md:h-auto">
              <img
                src={featuredArticle.imageUrl}
                alt={featuredArticle.title}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="p-8">
              <div className="flex items-center gap-4 mb-4">
                <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                  theme === "dark" ? "bg-blue-900 text-blue-300" : "bg-blue-100 text-blue-600"
                }`}>
                  {featuredArticle.category}
                </span>
                <div className={`flex items-center gap-2 ${
                  theme === "dark" ? "text-gray-400" : "text-gray-600"
                }`}>
                  <BsCalendar />
                  <span>{featuredArticle.date}</span>
                </div>
              </div>
              <h2 className="text-3xl font-bold mb-4">{featuredArticle.title}</h2>
              <p className={`mb-6 ${
                theme === "dark" ? "text-gray-400" : "text-gray-600"
              }`}>
                {featuredArticle.excerpt}
              </p>
              <div className="flex items-center gap-4 mb-6">
                <img
                  src={featuredArticle.author.avatar}
                  alt={featuredArticle.author.name}
                  className="w-12 h-12 rounded-full"
                />
                <div>
                  <div className="font-semibold">{featuredArticle.author.name}</div>
                  <div className={`text-sm ${
                    theme === "dark" ? "text-gray-400" : "text-gray-600"
                  }`}>
                    {featuredArticle.author.role}
                  </div>
                </div>
              </div>
              <Link
                href={`/blog/${featuredArticle.id}`}
                className={`inline-flex items-center gap-2 ${
                  theme === "dark" ? "text-blue-400 hover:text-blue-300" : "text-blue-600 hover:text-blue-500"
                }`}
              >
                Read More
                <BsArrowRight />
              </Link>
            </div>
          </div>
        </motion.div>
      </section>

      {/* Articles Grid */}
      <section className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {articles.map((article, index) => (
            <motion.div
              key={article.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`rounded-2xl overflow-hidden shadow-xl ${
                theme === "dark" ? "bg-gray-800" : "bg-white"
              }`}
            >
              <div className="relative h-48">
                <img
                  src={article.imageUrl}
                  alt={article.title}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <div className="flex items-center gap-4 mb-4">
                  <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                    theme === "dark" ? "bg-blue-900 text-blue-300" : "bg-blue-100 text-blue-600"
                  }`}>
                    {article.category}
                  </span>
                  <div className={`flex items-center gap-2 ${
                    theme === "dark" ? "text-gray-400" : "text-gray-600"
                  }`}>
                    <BsCalendar />
                    <span>{article.date}</span>
                  </div>
                </div>
                <h3 className="text-xl font-bold mb-2">{article.title}</h3>
                <p className={`mb-4 ${
                  theme === "dark" ? "text-gray-400" : "text-gray-600"
                }`}>
                  {article.excerpt}
                </p>
                <div className="flex items-center gap-4 mb-4">
                  <img
                    src={article.author.avatar}
                    alt={article.author.name}
                    className="w-10 h-10 rounded-full"
                  />
                  <div>
                    <div className="font-semibold">{article.author.name}</div>
                    <div className={`text-sm ${
                      theme === "dark" ? "text-gray-400" : "text-gray-600"
                    }`}>
                      {article.author.role}
                    </div>
                  </div>
                </div>
                <div className="flex flex-wrap gap-2 mb-4">
                  {article.tags.map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className={`px-2 py-1 rounded-full text-xs ${
                        theme === "dark" ? "bg-gray-700 text-gray-300" : "bg-gray-100 text-gray-700"
                      }`}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <Link
                  href={`/blog/${article.id}`}
                  className={`inline-flex items-center gap-2 ${
                    theme === "dark" ? "text-blue-400 hover:text-blue-300" : "text-blue-600 hover:text-blue-500"
                  }`}
                >
                  Read More
                  <BsArrowRight />
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
}
