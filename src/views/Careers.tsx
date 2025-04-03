'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';

export function Careers() {
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
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Join Our Team</h1>
          <p className="text-xl text-gray-600 dark:text-gray-400">
            Build your career with us and make a difference in the business world
          </p>
        </motion.div>
      </section>

      {/* Why Join Us Section */}
      <section className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Why Join Us?</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <motion.div
              key={benefit.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="p-6 rounded-lg border border-gray-200 dark:border-gray-800"
            >
              <benefit.icon className="w-12 h-12 text-blue-600 mb-4" />
              <h3 className="text-xl font-semibold mb-2">{benefit.title}</h3>
              <p className="text-gray-600 dark:text-gray-400">{benefit.description}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Open Positions */}
      <section className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Open Positions</h2>
        <div className="space-y-6">
          {positions.map((position, index) => (
            <motion.div
              key={position.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="p-6 rounded-lg border border-gray-200 dark:border-gray-800 hover:shadow-lg transition-shadow"
            >
              <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                <div>
                  <h3 className="text-xl font-semibold mb-1">{position.title}</h3>
                  <div className="flex items-center gap-4 text-sm text-gray-600 dark:text-gray-400">
                    <span>{position.location}</span>
                    <span>•</span>
                    <span>{position.type}</span>
                  </div>
                </div>
                <Link 
                  href={`/careers/${position.slug}`}
                  className="inline-flex items-center text-blue-600 hover:text-blue-700"
                >
                  Apply now
                  <svg className="w-4 h-4 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Culture Section */}
      <section className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl font-bold mb-6">Our Culture</h2>
            <p className="text-gray-600 dark:text-gray-400 mb-4">
              At ConsultPro, we believe in fostering a culture of innovation, collaboration, and continuous learning. Our team members are encouraged to think creatively, share ideas, and grow both personally and professionally.
            </p>
            <p className="text-gray-600 dark:text-gray-400">
              We value diversity and inclusion, and we&apos;re committed to creating an environment where everyone can thrive and contribute their unique perspectives.
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="relative h-[400px] rounded-lg overflow-hidden"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-blue-800" />
          </motion.div>
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
          <h2 className="text-3xl font-bold mb-4">Ready to Start Your Journey?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Join our team and be part of something extraordinary.
          </p>
          <Link 
            href="/contact" 
            className="inline-block bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors"
          >
            Apply Now
          </Link>
        </motion.div>
      </section>
    </div>
  );
}

const benefits = [
  {
    title: 'Competitive Benefits',
    description: 'Comprehensive health insurance, retirement plans, and paid time off.',
    icon: ({ className }: { className?: string }) => (
      <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
  {
    title: 'Professional Growth',
    description: 'Continuous learning opportunities and career development programs.',
    icon: ({ className }: { className?: string }) => (
      <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
      </svg>
    ),
  },
  {
    title: 'Work-Life Balance',
    description: 'Flexible working hours and remote work opportunities.',
    icon: ({ className }: { className?: string }) => (
      <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
];

const positions = [
  {
    title: 'Senior Strategy Consultant',
    location: 'New York, NY',
    type: 'Full-time',
    slug: 'senior-strategy-consultant',
  },
  {
    title: 'Digital Transformation Lead',
    location: 'Remote',
    type: 'Full-time',
    slug: 'digital-transformation-lead',
  },
  {
    title: 'Business Analyst',
    location: 'San Francisco, CA',
    type: 'Full-time',
    slug: 'business-analyst',
  },
  {
    title: 'Project Manager',
    location: 'Chicago, IL',
    type: 'Full-time',
    slug: 'project-manager',
  },
]; 