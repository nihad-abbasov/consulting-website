"use client";

import { motion } from "framer-motion";

export function Team() {
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
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Our Team</h1>
          <p className="text-xl text-gray-600 dark:text-gray-400">
            Meet the experts behind our consulting success
          </p>
        </motion.div>
      </section>

      {/* Leadership Team */}
      <section className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">
          Leadership Team
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {leadershipTeam.map((member, index) => (
            <motion.div
              key={member.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="text-center"
            >
              <div className="relative w-48 h-48 mx-auto mb-4 rounded-full overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-blue-800" />
                <div className="absolute inset-0 flex items-center justify-center text-white text-4xl">
                  {member.name.charAt(0)}
                </div>
              </div>
              <h3 className="text-xl font-semibold mb-1">{member.name}</h3>
              <p className="text-blue-600 mb-2">{member.role}</p>
              <p className="text-gray-600 dark:text-gray-400">{member.bio}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Advisory Board */}
      <section className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Advisory Board</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {advisoryBoard.map((member, index) => (
            <motion.div
              key={member.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="text-center"
            >
              <div className="relative w-32 h-32 mx-auto mb-4 rounded-full overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-blue-800" />
                <div className="absolute inset-0 flex items-center justify-center text-white text-3xl">
                  {member.name.charAt(0)}
                </div>
              </div>
              <h3 className="text-lg font-semibold mb-1">{member.name}</h3>
              <p className="text-blue-600 text-sm mb-2">{member.role}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Join Us Section */}
      <section className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="bg-blue-600 rounded-lg p-8 md:p-12 text-center text-white"
        >
          <h2 className="text-3xl font-bold mb-4">Join Our Team</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            We&apos;re always looking for talented individuals to join our team
            of experts.
          </p>
          <a
            href="/careers"
            className="inline-block bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors"
          >
            View Open Positions
          </a>
        </motion.div>
      </section>
    </div>
  );
}

const leadershipTeam = [
  {
    name: "John Smith",
    role: "CEO & Founder",
    bio: "20+ years of experience in business consulting and strategy development.",
  },
  {
    name: "Sarah Johnson",
    role: "Chief Strategy Officer",
    bio: "Expert in digital transformation and innovation strategy.",
  },
  {
    name: "Michael Chen",
    role: "Head of Operations",
    bio: "Specializes in operational efficiency and process optimization.",
  },
];

const advisoryBoard = [
  {
    name: "David Wilson",
    role: "Former CEO, TechCorp",
  },
  {
    name: "Emily Brown",
    role: "Investment Partner, Growth Capital",
  },
  {
    name: "Robert Lee",
    role: "Board Member, Global Enterprises",
  },
  {
    name: "Lisa Anderson",
    role: "Industry Expert, Innovation",
  },
];
