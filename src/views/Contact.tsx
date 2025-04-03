'use client';

import { motion } from 'framer-motion';
import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';
import { BsGeoAlt, BsEnvelope, BsTelephone } from 'react-icons/bs';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { contactFormSchema, type ContactFormData } from '@/schemas/contact';
import { FormProvider, Input, Textarea, SubmitButton } from '@/components/forms';

export function Contact() {
  const [mounted, setMounted] = useState(false);
  const { resolvedTheme } = useTheme();
  const methods = useForm<ContactFormData>({
    resolver: zodResolver(contactFormSchema),
  });

  useEffect(() => {
    setMounted(true);
  }, []);

  const onSubmit = (data: ContactFormData) => {
    console.log('Form submitted:', data);
    // Handle form submission here
  };

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
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Contact Us</h1>
          <p className={`text-xl ${
            resolvedTheme === 'dark' ? 'text-gray-400' : 'text-gray-600'
          }`}>
            Get in touch with our team to discuss how we can help your business
          </p>
        </motion.div>
      </section>

      {/* Contact Section */}
      <section className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className={`p-8 rounded-lg ${
              resolvedTheme === 'dark'
                ? 'bg-gray-800 border-gray-700'
                : 'bg-white border-gray-200'
            } border shadow-lg`}
          >
            <h2 className="text-2xl font-bold mb-6">Send us a Message</h2>
            <FormProvider methods={methods} onSubmit={onSubmit}>
              <Input
                name="name"
                label="Name"
                placeholder="Enter your name"
                required
              />
              <Input
                name="email"
                label="Email"
                type="email"
                placeholder="Enter your email"
                required
              />
              <Input
                name="company"
                label="Company"
                placeholder="Enter your company name"
                required
              />
              <Textarea
                name="message"
                label="Message"
                placeholder="Enter your message"
                required
              />
              <SubmitButton label="Send Message" />
            </FormProvider>
          </motion.div>

          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="space-y-8"
          >
            <div>
              <h2 className="text-2xl font-bold mb-6">Get in Touch</h2>
              <div className="space-y-4">
                <div className="flex items-start space-x-4">
                  <div className={`w-12 h-12 rounded-full ${
                    resolvedTheme === 'dark'
                      ? 'bg-blue-900 text-blue-400'
                      : 'bg-blue-100 text-blue-600'
                  } flex items-center justify-center`}>
                    <BsGeoAlt className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">Address</h3>
                    <p className={`${
                      resolvedTheme === 'dark' ? 'text-gray-400' : 'text-gray-600'
                    }`}>
                      123 Business Street<br />
                      New York, NY 10001<br />
                      United States
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className={`w-12 h-12 rounded-full ${
                    resolvedTheme === 'dark'
                      ? 'bg-blue-900 text-blue-400'
                      : 'bg-blue-100 text-blue-600'
                  } flex items-center justify-center`}>
                    <BsEnvelope className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">Email</h3>
                    <a
                      href="mailto:contact@consultpro.com"
                      className={`hover:${
                        resolvedTheme === 'dark' ? 'text-blue-400' : 'text-blue-600'
                      }`}
                    >
                      contact@consultpro.com
                    </a>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className={`w-12 h-12 rounded-full ${
                    resolvedTheme === 'dark'
                      ? 'bg-blue-900 text-blue-400'
                      : 'bg-blue-100 text-blue-600'
                  } flex items-center justify-center`}>
                    <BsTelephone className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">Phone</h3>
                    <a
                      href="tel:+15551234567"
                      className={`hover:${
                        resolvedTheme === 'dark' ? 'text-blue-400' : 'text-blue-600'
                      }`}
                    >
                      +1 (555) 123-4567
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <h2 className="text-2xl font-bold mb-6">Business Hours</h2>
              <div className={`space-y-2 ${
                resolvedTheme === 'dark' ? 'text-gray-400' : 'text-gray-600'
              }`}>
                <p>Monday - Friday: 9:00 AM - 6:00 PM</p>
                <p>Saturday: 10:00 AM - 4:00 PM</p>
                <p>Sunday: Closed</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
} 