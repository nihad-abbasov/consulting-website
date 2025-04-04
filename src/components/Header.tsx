'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { useTheme } from 'next-themes';
import { BsMoon, BsSun, BsList, BsX } from 'react-icons/bs';
import { motion, AnimatePresence } from 'framer-motion';

export function Header() {
  const [mounted, setMounted] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const menuVariants = {
    closed: {
      x: "100%",
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 30
      }
    },
    open: {
      x: 0,
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 30
      }
    }
  };

  const menuItemVariants = {
    closed: { opacity: 0, x: 20 },
    open: (i: number) => ({
      opacity: 1,
      x: 0,
      transition: {
        delay: i * 0.1,
        duration: 0.3
      }
    })
  };

  if (!mounted) {
    return null;
  }

  return (
    <header className={`fixed w-full z-50 ${theme === 'dark' ? 'bg-gray-900 text-white' : 'bg-white text-gray-900'
      }`}>
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="text-xl font-bold">
            ConsultPro
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link href="/about" className={`hover:${theme === 'dark' ? 'text-blue-400' : 'text-blue-600'
              }`}>
              About
            </Link>
            <Link href="/services" className={`hover:${theme === 'dark' ? 'text-blue-400' : 'text-blue-600'
              }`}>
              Services
            </Link>
            <Link href="/team" className={`hover:${theme === 'dark' ? 'text-blue-400' : 'text-blue-600'
              }`}>
              Team
            </Link>
            <Link href="/blog" className={`hover:${theme === 'dark' ? 'text-blue-400' : 'text-blue-600'
              }`}>
              Blog
            </Link>
            <Link href="/contact" className={`hover:${theme === 'dark' ? 'text-blue-400' : 'text-blue-600'
              }`}>
              Contact
            </Link>
          </nav>

          {/* Theme Toggle and Mobile Menu Button */}
          <div className="flex items-center space-x-4">
            <button
              onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
              className={`p-2 rounded-lg cursor-pointer ${theme === 'dark' ? 'hover:bg-gray-800' : 'hover:bg-gray-100'
                }`}
            >
              {theme === 'dark' ? <BsSun size={20} /> : <BsMoon size={20} />}
            </button>

            {/* Mobile Menu Button */}
            <button
              onClick={toggleMenu}
              className="md:hidden p-2 rounded-lg"
            >
              {isMenuOpen ? <BsX size={24} /> : <BsList size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isMenuOpen && (
            <>
              {/* Overlay */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 0.5 }}
                exit={{ opacity: 0 }}
                onClick={toggleMenu}
                className="fixed inset-0 bg-black md:hidden"
              />

              {/* Menu Panel */}
              <motion.div
                initial="closed"
                animate="open"
                exit="closed"
                variants={menuVariants}
                className={`fixed top-0 right-0 h-full w-64 ${theme === 'dark' ? 'bg-gray-900' : 'bg-white'
                  } shadow-xl md:hidden`}
              >
                {/* Close Button */}
                <div className="flex justify-end p-4">
                  <motion.button
                    onClick={toggleMenu}
                    className={`p-2 rounded-full ${theme === 'dark' ? 'hover:bg-gray-800' : 'hover:bg-gray-100'
                      }`}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <BsX size={24} />
                  </motion.button>
                </div>

                <div className="px-6">
                  <nav className="space-y-6">
                    {[
                      { href: '/about', label: 'About' },
                      { href: '/services', label: 'Services' },
                      { href: '/team', label: 'Team' },
                      { href: '/blog', label: 'Blog' },
                      { href: '/contact', label: 'Contact' }
                    ].map((item, i) => (
                      <motion.div
                        key={item.href}
                        custom={i}
                        variants={menuItemVariants}
                        initial="closed"
                        animate="open"
                        exit="closed"
                      >
                        <Link
                          href={item.href}
                          className={`block text-lg font-medium ${theme === 'dark' ? 'hover:text-blue-400' : 'hover:text-blue-600'
                            }`}
                          onClick={() => setIsMenuOpen(false)}
                        >
                          {item.label}
                        </Link>
                      </motion.div>
                    ))}
                  </nav>
                </div>
              </motion.div>
            </>
          )}
        </AnimatePresence>
      </div>
    </header>
  );
} 