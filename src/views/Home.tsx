"use client";

import { BsArrowRight, BsGraphUp, BsLightning, BsGear } from "react-icons/bs";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { useTheme } from "next-themes";
import Link from "next/link";

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
      <section className="relative min-h-[80vh] flex items-center">
        <div
          className={`absolute inset-0 ${
            resolvedTheme === "dark" ? "bg-gray-900" : "bg-gray-50"
          }`}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20" />
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto text-center"
          >
            <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600">
              Transform Your Business
            </h1>
            <p
              className={`text-xl md:text-2xl mb-8 ${
                resolvedTheme === "dark" ? "text-gray-300" : "text-gray-600"
              }`}
            >
              Expert consulting services to help your business grow and succeed
              in today&apos;s competitive market
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className={`inline-flex items-center justify-center px-8 py-4 rounded-lg font-semibold text-lg ${
                  resolvedTheme === "dark"
                    ? "bg-blue-600 hover:bg-blue-700 text-white"
                    : "bg-blue-600 hover:bg-blue-700 text-white"
                }`}
              >
                Get Started <BsArrowRight className="ml-2" />
              </Link>
              <Link
                href="/services"
                className={`inline-flex items-center justify-center px-8 py-4 rounded-lg font-semibold text-lg ${
                  resolvedTheme === "dark"
                    ? "bg-gray-800 hover:bg-gray-700 text-white"
                    : "bg-gray-100 hover:bg-gray-200 text-gray-900"
                }`}
              >
                Learn More
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="container mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="text-center"
            >
              <div
                className={`text-4xl font-bold mb-2 ${
                  resolvedTheme === "dark" ? "text-blue-400" : "text-blue-600"
                }`}
              >
                {stat.value}
              </div>
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

      {/* Services Preview */}
      <section className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Services</h2>
          <p
            className={`text-xl ${
              resolvedTheme === "dark" ? "text-gray-400" : "text-gray-600"
            }`}
          >
            Comprehensive solutions for your business needs
          </p>
        </motion.div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className={`p-8 rounded-xl ${
                resolvedTheme === "dark"
                  ? "bg-gray-800 hover:bg-gray-700"
                  : "bg-white hover:bg-gray-50"
              } border shadow-lg transition-all duration-300`}
            >
              <div
                className={`text-4xl mb-6 ${
                  resolvedTheme === "dark" ? "text-blue-400" : "text-blue-600"
                }`}
              >
                {service.icon}
              </div>
              <h3 className="text-xl font-semibold mb-4">{service.title}</h3>
              <p
                className={`${
                  resolvedTheme === "dark" ? "text-gray-400" : "text-gray-600"
                }`}
              >
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Client Testimonials
          </h2>
          <p
            className={`text-xl ${
              resolvedTheme === "dark" ? "text-gray-400" : "text-gray-600"
            }`}
          >
            What our clients say about us
          </p>
        </motion.div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className={`p-8 rounded-xl ${
                resolvedTheme === "dark" ? "bg-gray-800" : "bg-white"
              } border shadow-lg`}
            >
              <div className="flex items-center mb-4">
                <div
                  className={`w-12 h-12 rounded-full ${
                    resolvedTheme === "dark" ? "bg-blue-900" : "bg-blue-100"
                  } flex items-center justify-center text-2xl`}
                >
                  {testimonial.name.charAt(0)}
                </div>
                <div className="ml-4">
                  <div className="font-semibold">{testimonial.name}</div>
                  <div
                    className={`text-sm ${
                      resolvedTheme === "dark"
                        ? "text-gray-400"
                        : "text-gray-600"
                    }`}
                  >
                    {testimonial.position}
                  </div>
                </div>
              </div>
              <p
                className={`${
                  resolvedTheme === "dark" ? "text-gray-300" : "text-gray-600"
                }`}
              >
                {testimonial.quote}
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
          className={`rounded-2xl p-12 md:p-16 text-center ${
            resolvedTheme === "dark"
              ? "bg-gradient-to-r from-blue-900 to-purple-900"
              : "bg-gradient-to-r from-blue-600 to-purple-600"
          }`}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">
            Ready to Transform Your Business?
          </h2>
          <p className="text-xl mb-8 text-white/90">
            Let&apos;s discuss how we can help you achieve your goals
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center justify-center px-8 py-4 rounded-lg font-semibold text-lg bg-white text-blue-600 hover:bg-gray-100 transition-colors"
          >
            Get Started <BsArrowRight className="ml-2" />
          </Link>
        </motion.div>
      </section>
    </div>
  );
}

const services = [
  {
    title: "Strategic Planning",
    description:
      "Develop a clear roadmap for your business growth and success with data-driven insights and expert guidance.",
    icon: <BsGraphUp />,
  },
  {
    title: "Digital Transformation",
    description:
      "Modernize your operations and leverage cutting-edge technology to stay ahead of the competition.",
    icon: <BsLightning />,
  },
  {
    title: "Process Optimization",
    description:
      "Streamline your operations, reduce costs, and improve efficiency through proven methodologies.",
    icon: <BsGear />,
  },
];

const stats = [
  {
    value: "10+",
    label: "Years Experience",
  },
  {
    value: "100+",
    label: "Happy Clients",
  },
  {
    value: "50+",
    label: "Projects Completed",
  },
  {
    value: "100%",
    label: "Client Satisfaction",
  },
];

const testimonials = [
  {
    name: "Sarah Johnson",
    position: "CEO, TechStart Inc.",
    quote:
      "ConsultPro transformed our business strategy and helped us achieve 200% growth in just one year. Their expertise and dedication are unmatched.",
  },
  {
    name: "Michael Chen",
    position: "Director, Global Solutions",
    quote:
      "Working with ConsultPro was a game-changer for our organization. Their insights and guidance helped us navigate complex challenges and emerge stronger.",
  },
];
