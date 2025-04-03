"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { useTheme } from "next-themes";
import { useState, useEffect } from "react";
import { BsArrowRight } from "react-icons/bs";

interface Service {
  id: number;
  title: string;
  description: string;
  icon: string;
}

const services: Service[] = [
  {
    id: 1,
    title: "Strategic Consulting",
    description:
      "Transform your business with our strategic consulting services. We help you identify opportunities, overcome challenges, and achieve sustainable growth.",
    icon: "📊",
  },
  {
    id: 2,
    title: "Digital Transformation",
    description:
      "Embrace the future with our digital transformation services. We help businesses modernize their operations and leverage technology for growth.",
    icon: "💻",
  },
  {
    id: 3,
    title: "Financial Advisory",
    description:
      "Navigate complex financial landscapes with our expert advisory services. We provide comprehensive financial solutions for sustainable growth.",
    icon: "💰",
  },
];

export function Services() {
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
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Our Services</h1>
          <p
            className={`text-xl ${
              theme === "dark" ? "text-gray-400" : "text-gray-600"
            }`}
          >
            We offer a range of consulting services to help your business grow
            and succeed in today&apos;s competitive landscape.
          </p>
        </motion.div>
      </section>

      {/* Services Grid */}
      <section className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`rounded-2xl overflow-hidden shadow-xl p-8 ${
                theme === "dark" ? "bg-gray-800" : "bg-white"
              }`}
            >
              <div className="text-4xl mb-4">{service.icon}</div>
              <h2 className="text-2xl font-bold mb-4">{service.title}</h2>
              <p
                className={`mb-6 ${
                  theme === "dark" ? "text-gray-400" : "text-gray-600"
                }`}
              >
                {service.description}
              </p>
              <Link
                href={`/service/${service.id}`}
                className={`inline-flex items-center gap-2 ${
                  theme === "dark"
                    ? "text-blue-400 hover:text-blue-300"
                    : "text-blue-600 hover:text-blue-500"
                }`}
              >
                Learn More
                <BsArrowRight />
              </Link>
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
            Ready to Transform Your Business?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Let&apos;s discuss how our consulting services can help you achieve
            your business goals.
          </p>
          <Link
            href="/contact"
            className="inline-block bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors"
          >
            Schedule a Consultation
          </Link>
        </motion.div>
      </section>
    </div>
  );
}
