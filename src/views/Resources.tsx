'use client';

import { motion } from 'framer-motion';
import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';

interface Resource {
  id: number;
  title: string;
  category: string;
  description: string;
  link: string;
  date: string;
}

const resources: Resource[] = [
  {
    id: 1,
    title: 'Digital Transformation Guide',
    category: 'Whitepaper',
    description: 'A comprehensive guide to digital transformation strategies and implementation.',
    link: '#',
    date: 'March 15, 2024'
  },
  {
    id: 2,
    title: 'Market Analysis Report',
    category: 'Report',
    description: 'Latest trends and insights in the consulting industry.',
    link: '#',
    date: 'March 10, 2024'
  },
  {
    id: 3,
    title: 'Strategic Planning Template',
    category: 'Template',
    description: 'A customizable template for strategic business planning.',
    link: '#',
    date: 'March 5, 2024'
  }
];

export function Resources() {
  const { theme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center"
          >
            <h1 className={`text-4xl md:text-5xl font-bold mb-6 ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
              Resources
            </h1>
            <p className={`text-xl ${theme === 'dark' ? 'text-gray-300' : 'text-gray-600'} max-w-3xl mx-auto`}>
              Access our collection of whitepapers, reports, and templates to help your business grow.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Resources Grid */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {resources.map((resource) => (
              <motion.div
                key={resource.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: resource.id * 0.1 }}
                className={`p-6 rounded-lg shadow-lg ${
                  theme === 'dark' ? 'bg-gray-800' : 'bg-white'
                }`}
              >
                <div className="flex items-center justify-between mb-4">
                  <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                    theme === 'dark' ? 'bg-blue-900 text-blue-200' : 'bg-blue-100 text-blue-800'
                  }`}>
                    {resource.category}
                  </span>
                  <span className={`text-sm ${theme === 'dark' ? 'text-gray-400' : 'text-gray-500'}`}>
                    {resource.date}
                  </span>
                </div>
                <h3 className={`text-xl font-semibold mb-2 ${
                  theme === 'dark' ? 'text-white' : 'text-gray-900'
                }`}>
                  {resource.title}
                </h3>
                <p className={`mb-4 ${theme === 'dark' ? 'text-gray-300' : 'text-gray-600'}`}>
                  {resource.description}
                </p>
                <a
                  href={resource.link}
                  className={`inline-block px-4 py-2 rounded-md font-medium ${
                    theme === 'dark'
                      ? 'bg-blue-600 text-white hover:bg-blue-700'
                      : 'bg-blue-500 text-white hover:bg-blue-600'
                  } transition-colors`}
                >
                  Download
                </a>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
} 