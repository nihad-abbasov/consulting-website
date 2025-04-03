"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { useTheme } from "next-themes";

export function About() {
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
          <h1 className="text-4xl md:text-5xl font-bold mb-6">About Us</h1>
          <p
            className={`text-xl ${
              resolvedTheme === "dark" ? "text-gray-400" : "text-gray-600"
            }`}
          >
            Learn about our mission, values, and the team behind our success
          </p>
        </motion.div>
      </section>

      {/* Mission Section */}
      <section className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl font-bold mb-6">Our Mission</h2>
            <p
              className={`text-lg mb-6 ${
                resolvedTheme === "dark" ? "text-gray-400" : "text-gray-600"
              }`}
            >
              We are dedicated to helping businesses achieve their full
              potential through strategic guidance and innovative solutions. Our
              mission is to empower organizations with the tools and insights
              they need to thrive in today&apos;s competitive landscape.
            </p>
            <p
              className={`text-lg ${
                resolvedTheme === "dark" ? "text-gray-400" : "text-gray-600"
              }`}
            >
              With years of industry experience and a commitment to excellence,
              we provide tailored consulting services that drive real results
              for our clients.
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className={`p-8 rounded-lg ${
              resolvedTheme === "dark"
                ? "bg-gray-800 border-gray-700"
                : "bg-gray-50 border-gray-200"
            } border`}
          >
            <h3 className="text-xl font-semibold mb-4">Our Values</h3>
            <ul className="space-y-4">
              {values.map((value) => (
                <li key={value.title} className="flex items-start space-x-4">
                  <div
                    className={`w-12 h-12 rounded-full ${
                      resolvedTheme === "dark"
                        ? "bg-blue-900 text-blue-400"
                        : "bg-blue-100 text-blue-600"
                    } flex items-center justify-center flex-shrink-0`}
                  >
                    {value.icon}
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">{value.title}</h4>
                    <p
                      className={`${
                        resolvedTheme === "dark"
                          ? "text-gray-400"
                          : "text-gray-600"
                      }`}
                    >
                      {value.description}
                    </p>
                  </div>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className={`p-6 rounded-lg text-center ${
                resolvedTheme === "dark"
                  ? "bg-gray-800 border-gray-700"
                  : "bg-white border-gray-200"
              } border`}
            >
              <div className="text-4xl font-bold mb-2">{stat.value}</div>
              <div
                className={`${
                  resolvedTheme === "dark" ? "text-gray-400" : "text-gray-600"
                }`}
              >
                {stat.label}
              </div>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
}

const values = [
  {
    title: "Excellence",
    description:
      "We strive for excellence in everything we do, delivering the highest quality service to our clients.",
    icon: "⭐",
  },
  {
    title: "Innovation",
    description:
      "We embrace innovation and stay at the forefront of industry trends to provide cutting-edge solutions.",
    icon: "💡",
  },
  {
    title: "Integrity",
    description:
      "We operate with honesty and transparency, building trust with our clients and partners.",
    icon: "🤝",
  },
];

const stats = [
  {
    value: "10+",
    label: "Years of Experience",
  },
  {
    value: "100+",
    label: "Happy Clients",
  },
  {
    value: "50+",
    label: "Projects Completed",
  },
];
