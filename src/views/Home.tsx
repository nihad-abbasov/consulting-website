'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';

export function Home() {
  const [mounted, setMounted] = useState(false);
  const { resolvedTheme } = useTheme();

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
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Transform Your Business</h1>
          <p className={`text-xl ${
            resolvedTheme === 'dark' ? 'text-gray-400' : 'text-gray-600'
          }`}>
            Expert consulting services to help your business grow and succeed in today's competitive market
          </p>
          <div className="mt-8">
            <Link
              href="/contact"
              className={`inline-block px-6 py-3 rounded-lg font-semibold ${
                resolvedTheme === 'dark'
                  ? 'bg-blue-600 hover:bg-blue-700 text-white'
                  : 'bg-blue-600 hover:bg-blue-700 text-white'
              }`}
            >
              Get Started
            </Link>
          </div>
        </motion.div>
      </section>

      {/* Services Preview */}
      <section className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Our Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className={`p-6 rounded-lg ${
                resolvedTheme === 'dark'
                  ? 'bg-gray-800 border-gray-700'
                  : 'bg-white border-gray-200'
              } border shadow-sm`}
            >
              <h3 className="text-xl font-semibold mb-4">{service.title}</h3>
              <p className={`${
                resolvedTheme === 'dark' ? 'text-gray-400' : 'text-gray-600'
              }`}>
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className={`rounded-lg p-8 md:p-12 text-center ${
            resolvedTheme === 'dark'
              ? 'bg-gray-800'
              : 'bg-gray-50'
          }`}
        >
          <h2 className="text-3xl font-bold mb-4">Ready to Get Started?</h2>
          <p className={`text-xl mb-8 ${
            resolvedTheme === 'dark' ? 'text-gray-400' : 'text-gray-600'
          }`}>
            Contact us today to discuss how we can help your business grow
          </p>
          <Link
            href="/contact"
            className={`inline-block px-6 py-3 rounded-lg font-semibold ${
              resolvedTheme === 'dark'
                ? 'bg-blue-600 hover:bg-blue-700 text-white'
                : 'bg-blue-600 hover:bg-blue-700 text-white'
            }`}
          >
            Contact Us
          </Link>
        </motion.div>
      </section>
    </div>
  );
}

const services = [
  {
    title: 'Strategic Planning',
    description: 'Develop a clear roadmap for your business growth and success.',
  },
  {
    title: 'Market Analysis',
    description: 'Gain insights into your market and identify new opportunities.',
  },
  {
    title: 'Process Optimization',
    description: 'Streamline your operations and improve efficiency.',
  },
]; 