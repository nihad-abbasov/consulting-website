"use client";

import { BsArrowLeft, BsCalendar, BsTag } from "react-icons/bs";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { useTheme } from "next-themes";
import Image from "next/image";
import Link from "next/link";

interface BlogDetailProps {
  post: {
    id: number;
    title: string;
    category: string;
    date: string;
    content: string;
    imageUrl: string;
    author: {
      name: string;
      role: string;
      avatar: string;
    };
    tags: string[];
  };
}

export function BlogDetail({ post }: BlogDetailProps) {
  const [mounted, setMounted] = useState(false);
  const { theme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <div className="space-y-16">
      {/* Back Button */}
      <div className="container mx-auto px-4 pt-8">
        <Link
          href="/blog"
          className={`inline-flex items-center gap-2 ${
            theme === "dark"
              ? "text-blue-400 hover:text-blue-300"
              : "text-blue-600 hover:text-blue-500"
          }`}
        >
          <BsArrowLeft />
          Back to Blog
        </Link>
      </div>

      {/* Hero Section */}
      <section className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="max-w-4xl mx-auto"
        >
          <div className="flex items-center gap-4 mb-6">
            <span
              className={`px-3 py-1 rounded-full text-sm font-medium ${
                theme === "dark"
                  ? "bg-blue-900 text-blue-300"
                  : "bg-blue-100 text-blue-600"
              }`}
            >
              {post.category}
            </span>
            <div
              className={`flex items-center gap-2 ${
                theme === "dark" ? "text-gray-400" : "text-gray-600"
              }`}
            >
              <BsCalendar />
              <span>{post.date}</span>
            </div>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-6">{post.title}</h1>
          <div className="flex items-center gap-4">
            <Image
              src={post.author.avatar}
              alt={post.author.name}
              width={0}
              height={0}
              sizes="100vw"
              className="w-12 h-12 rounded-full"
            />
            <div>
              <div className="font-semibold">{post.author.name}</div>
              <div
                className={`text-sm ${
                  theme === "dark" ? "text-gray-400" : "text-gray-600"
                }`}
              >
                {post.author.role}
              </div>
            </div>
          </div>
        </motion.div>
      </section>

      {/* Featured Image */}
      <section className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="max-w-4xl mx-auto"
        >
          <Image
            src={post.imageUrl}
            alt={post.title}
            width={0}
            height={0}
            sizes="100vw"
            className="w-full h-[400px] object-cover rounded-2xl"
          />
        </motion.div>
      </section>

      {/* Content */}
      <section className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="max-w-4xl mx-auto prose prose-lg dark:prose-invert"
        >
          <div dangerouslySetInnerHTML={{ __html: post.content }} />
        </motion.div>
      </section>

      {/* Tags */}
      <section className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="max-w-4xl mx-auto"
        >
          <div className="flex items-center gap-2 mb-4">
            <BsTag
              className={`${
                theme === "dark" ? "text-gray-400" : "text-gray-600"
              }`}
            />
            <h3 className="text-lg font-semibold">Tags</h3>
          </div>
          <div className="flex flex-wrap gap-2">
            {post.tags.map((tag, index) => (
              <motion.span
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
                className={`px-3 py-1 rounded-full text-sm ${
                  theme === "dark"
                    ? "bg-gray-800 text-gray-300"
                    : "bg-gray-100 text-gray-700"
                }`}
              >
                {tag}
              </motion.span>
            ))}
          </div>
        </motion.div>
      </section>
    </div>
  );
}
