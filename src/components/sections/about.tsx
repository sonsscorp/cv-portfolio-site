'use client';

import { motion } from 'framer-motion';
import { User, MapPin, Calendar } from 'lucide-react';
import { PERSONAL_INFO } from '@/lib/constants';
import Image from 'next/image';

export function AboutSection() {
  return (
    <section id="about" className="py-20 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            About Me
          </h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto rounded-full"></div>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Photo */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="relative w-full max-w-md mx-auto">
              {/* Decorative background */}
              <div className="absolute inset-0 bg-gradient-to-br from-blue-400 to-purple-600 rounded-2xl transform rotate-6 scale-105"></div>
              
              {/* Profile Photo */}
              <div className="relative bg-gray-200 dark:bg-gray-700 rounded-2xl overflow-hidden aspect-square">
                <Image
                  src="/profile-photo.jpg"
                  alt={PERSONAL_INFO.name}
                  fill
                  className="object-cover"
                  priority
                />
              </div>
              
              {/* Floating elements */}
              <motion.div
                animate={{
                  y: [0, -10, 0],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
                className="absolute -top-6 -right-6 w-12 h-12 bg-blue-100 dark:bg-blue-900 rounded-full flex items-center justify-center"
              >
                <span className="text-blue-600 dark:text-blue-400 text-xl">👋</span>
              </motion.div>

              <motion.div
                animate={{
                  y: [0, 10, 0],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 1
                }}
                className="absolute -bottom-4 -left-4 w-16 h-16 bg-purple-100 dark:bg-purple-900 rounded-full flex items-center justify-center"
              >
                <span className="text-purple-600 dark:text-purple-400 text-2xl">💻</span>
              </motion.div>
            </div>
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            <div>
              <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white mb-4">
                {PERSONAL_INFO.title}
              </h3>
              <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
                {PERSONAL_INFO.bio}
              </p>
            </div>

            {/* Quick Info */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-6">
              <motion.div
                whileHover={{ scale: 1.02 }}
                className="flex items-center space-x-3 p-4 bg-gray-50 dark:bg-gray-800 rounded-lg"
              >
                <div className="flex-shrink-0">
                  <MapPin className="h-5 w-5 text-blue-600 dark:text-blue-400" />
                </div>
                <div>
                  <p className="text-sm font-medium text-gray-900 dark:text-white">Location</p>
                  <p className="text-sm text-gray-600 dark:text-gray-400">{PERSONAL_INFO.location}</p>
                </div>
              </motion.div>

              <motion.div
                whileHover={{ scale: 1.02 }}
                className="flex items-center space-x-3 p-4 bg-gray-50 dark:bg-gray-800 rounded-lg"
              >
                <div className="flex-shrink-0">
                  <Calendar className="h-5 w-5 text-blue-600 dark:text-blue-400" />
                </div>
                <div>
                  <p className="text-sm font-medium text-gray-900 dark:text-white">Experience</p>
                  <p className="text-sm text-gray-600 dark:text-gray-400">30+ Years</p>
                </div>
              </motion.div>
            </div>

            {/* Fun Facts or Achievements */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="pt-6"
            >
              <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
                Quick Highlights
              </h4>
              <div className="grid grid-cols-2 gap-4">
                <div className="text-center p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg">
                  <div className="text-2xl font-bold text-blue-600 dark:text-blue-400 mb-1">30+</div>
                  <div className="text-sm text-gray-600 dark:text-gray-400">Years Experience</div>
                </div>
                <div className="text-center p-4 bg-green-50 dark:bg-green-900/20 rounded-lg">
                  <div className="text-2xl font-bold text-green-600 dark:text-green-400 mb-1">20+</div>
                  <div className="text-sm text-gray-600 dark:text-gray-400">Countries Served</div>
                </div>
              </div>
            </motion.div>

            {/* Technologies I Love */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5, duration: 0.6 }}
            >
              <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
                Core Expertise
              </h4>
              <div className="flex flex-wrap gap-2">
                {['International Trade', 'Quality Control', 'Electronic Testing', 'Supply Chain', 'Production Management', 'Customer Relations'].map((tech, index) => (
                  <motion.span
                    key={tech}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.1 * index, duration: 0.3 }}
                    whileHover={{ scale: 1.05 }}
                    className="px-3 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-full text-sm font-medium"
                  >
                    {tech}
                  </motion.span>
                ))}
              </div>
            </motion.div>

            {/* Education */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.7, duration: 0.6 }}
            >
              <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
                Education
              </h4>
              <div className="p-4 bg-gray-50 dark:bg-gray-800 rounded-lg">
                <h5 className="font-medium text-gray-900 dark:text-white">English Teaching Qualification</h5>
                <p className="text-sm text-blue-600 dark:text-blue-400 mb-2">Long An Pedagogy College, Long An Province, Vietnam</p>
                <p className="text-sm text-gray-600 dark:text-gray-400">Graduated 1992</p>
                <h5 className="font-medium text-gray-900 dark:text-white mt-4">Major in English</h5>
                <p className="text-sm text-blue-600 dark:text-blue-400 mb-2">Hanoi Foreign Language University, Ho Chi Minh City, Vietnam</p>
                <p className="text-sm text-gray-600 dark:text-gray-400">Graduated 1997</p>
                <h5 className="font-medium text-gray-900 dark:text-white mt-4">Bachelor&apos;s Degree in Economics</h5>
                <p className="text-sm text-blue-600 dark:text-blue-400 mb-2">University of Foreign Trade, Ho Chi Minh City, Vietnam</p>
                <p className="text-sm text-gray-600 dark:text-gray-400">Graduated 2003</p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}