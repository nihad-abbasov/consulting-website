'use client';

import Link from 'next/link';
import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';
import { BsFacebook, BsTwitter, BsLinkedin, BsInstagram } from 'react-icons/bs';

export function Footer() {
  const [mounted, setMounted] = useState(false);
  const { resolvedTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <footer className={`${
      resolvedTheme === 'dark'
        ? 'bg-gray-900 text-white border-gray-800'
        : 'bg-gray-50 text-gray-900 border-gray-200'
    } border-t`}>
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <h3 className="text-xl font-bold mb-4">ConsultPro</h3>
            <p className={`${
              resolvedTheme === 'dark' ? 'text-gray-400' : 'text-gray-600'
            }`}>
              Professional business consulting services to help your company grow and succeed.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link 
                    href={link.href}
                    className={`hover:${
                      resolvedTheme === 'dark' ? 'text-blue-400' : 'text-blue-600'
                    }`}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Services</h4>
            <ul className="space-y-2">
              {services.map((service) => (
                <li key={service.href}>
                  <Link 
                    href={service.href}
                    className={`hover:${
                      resolvedTheme === 'dark' ? 'text-blue-400' : 'text-blue-600'
                    }`}
                  >
                    {service.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact Us</h4>
            <ul className="space-y-2">
              <li className="flex items-start space-x-2">
                <span className={`${
                  resolvedTheme === 'dark' ? 'text-gray-400' : 'text-gray-600'
                }`}>
                  Email:
                </span>
                <a 
                  href="mailto:contact@consultpro.com"
                  className={`hover:${
                    resolvedTheme === 'dark' ? 'text-blue-400' : 'text-blue-600'
                  }`}
                >
                  contact@consultpro.com
                </a>
              </li>
              <li className="flex items-start space-x-2">
                <span className={`${
                  resolvedTheme === 'dark' ? 'text-gray-400' : 'text-gray-600'
                }`}>
                  Phone:
                </span>
                <a 
                  href="tel:+15551234567"
                  className={`hover:${
                    resolvedTheme === 'dark' ? 'text-blue-400' : 'text-blue-600'
                  }`}
                >
                  +1 (555) 123-4567
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Social Links */}
        <div className="mt-12 pt-8 border-t border-gray-200 dark:border-gray-800">
          <div className="flex justify-center space-x-6">
            {socialLinks.map((social) => (
              <a
                key={social.href}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className={`text-2xl hover:${
                  resolvedTheme === 'dark' ? 'text-blue-400' : 'text-blue-600'
                }`}
              >
                {social.icon}
              </a>
            ))}
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-8 text-center">
          <p className={`${
            resolvedTheme === 'dark' ? 'text-gray-400' : 'text-gray-600'
          }`}>
            © {new Date().getFullYear()} ConsultPro. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

const quickLinks = [
  { href: '/about', label: 'About Us' },
  { href: '/team', label: 'Our Team' },
  { href: '/case-studies', label: 'Case Studies' },
  { href: '/contact', label: 'Contact' },
];

const services = [
  { href: '/services#strategy', label: 'Strategic Planning' },
  { href: '/services#market', label: 'Market Analysis' },
  { href: '/services#process', label: 'Process Optimization' },
  { href: '/services#digital', label: 'Digital Transformation' },
];

const socialLinks = [
  { href: 'https://facebook.com', icon: <BsFacebook /> },
  { href: 'https://twitter.com', icon: <BsTwitter /> },
  { href: 'https://linkedin.com', icon: <BsLinkedin /> },
  { href: 'https://instagram.com', icon: <BsInstagram /> },
]; 