"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export function CaseStudies() {
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
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Case Studies</h1>
          <p className="text-xl text-gray-600 dark:text-gray-400">
            Discover how we&apos;ve helped businesses achieve remarkable results
          </p>
        </motion.div>
      </section>

      {/* Case Studies Grid */}
      <section className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {caseStudies.map((study, index) => (
            <motion.div
              key={study.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="group relative overflow-hidden rounded-lg border border-gray-200 dark:border-gray-800 hover:shadow-lg transition-shadow"
            >
              <div className="relative h-48 bg-gradient-to-r from-blue-600 to-blue-800">
                <div className="absolute inset-0 flex items-center justify-center text-white text-4xl">
                  {study.title.charAt(0)}
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">{study.title}</h3>
                <p className="text-gray-600 dark:text-gray-400 mb-4">
                  {study.description}
                </p>
                <div className="space-y-2 mb-4">
                  <div className="flex items-center text-sm text-gray-600 dark:text-gray-400">
                    <span className="font-semibold mr-2">Industry:</span>
                    {study.industry}
                  </div>
                  <div className="flex items-center text-sm text-gray-600 dark:text-gray-400">
                    <span className="font-semibold mr-2">Results:</span>
                    {study.results}
                  </div>
                </div>
                <Link
                  href={`/case-studies/${study.slug}`}
                  className="inline-flex items-center text-blue-600 hover:text-blue-700"
                >
                  Read more
                  <svg
                    className="w-4 h-4 ml-2"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </Link>
              </div>
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
          className="bg-blue-600 rounded-lg p-8 md:p-12 text-center text-white"
        >
          <h2 className="text-3xl font-bold mb-4">
            Ready to Create Your Success Story?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Let&apos;s work together to achieve remarkable results for your
            business.
          </p>
          <Link
            href="/contact"
            className="inline-block bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors"
          >
            Start Your Journey
          </Link>
        </motion.div>
      </section>
    </div>
  );
}

const caseStudies = [
  {
    title: "Digital Transformation Success",
    description:
      "How we helped a traditional retail business embrace digital innovation and increase online sales by 200%.",
    industry: "Retail",
    results: "200% increase in online sales",
    slug: "digital-transformation-success",
  },
  {
    title: "Operational Excellence",
    description:
      "Streamlining operations and reducing costs by 30% for a manufacturing company.",
    industry: "Manufacturing",
    results: "30% cost reduction",
    slug: "operational-excellence",
  },
  {
    title: "Market Expansion Strategy",
    description:
      "Guiding a tech startup through successful international expansion.",
    industry: "Technology",
    results: "Expanded to 5 new markets",
    slug: "market-expansion-strategy",
  },
  {
    title: "Financial Turnaround",
    description:
      "Helping a struggling company achieve financial stability and growth.",
    industry: "Finance",
    results: "40% revenue growth",
    slug: "financial-turnaround",
  },
  {
    title: "Customer Experience Enhancement",
    description:
      "Improving customer satisfaction scores by 50% through strategic initiatives.",
    industry: "Service",
    results: "50% increase in satisfaction",
    slug: "customer-experience-enhancement",
  },
  {
    title: "Supply Chain Optimization",
    description:
      "Optimizing supply chain operations for improved efficiency and reduced costs.",
    industry: "Logistics",
    results: "25% efficiency improvement",
    slug: "supply-chain-optimization",
  },
];
