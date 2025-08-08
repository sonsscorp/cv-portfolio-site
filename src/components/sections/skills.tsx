'use client';

import { motion } from 'framer-motion';
import { Cog, Globe, Building, Star } from 'lucide-react';
import { SKILLS } from '@/lib/constants';

const categoryIcons = {
  'Manufacturing & Testing': Cog,
  'International Trade': Globe,
  'Business & Operations': Building,
};

const skillLevelColors = {
  Beginner: 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900/30 dark:text-yellow-300',
  Intermediate: 'bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-300',
  Advanced: 'bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-300',
  Expert: 'bg-purple-100 text-purple-800 dark:bg-purple-900/30 dark:text-purple-300',
};

const skillLevelWidth = {
  Beginner: 'w-1/4',
  Intermediate: 'w-2/4',
  Advanced: 'w-3/4',
  Expert: 'w-full',
};

export function SkillsSection() {
  return (
    <section id="skills" className="py-20 bg-white dark:bg-gray-900">
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
            Skills & Technologies
          </h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto rounded-full mb-4"></div>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Technologies and tools I use to build exceptional digital experiences
          </p>
        </motion.div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {SKILLS.map((category, categoryIndex) => {
            const Icon = categoryIcons[category.category as keyof typeof categoryIcons];
            
            return (
              <motion.div
                key={category.category}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: categoryIndex * 0.2, duration: 0.6 }}
                className="bg-gray-50 dark:bg-gray-800 rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300"
              >
                {/* Category Header */}
                <div className="flex items-center mb-6">
                  <motion.div
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.5 }}
                    className="flex items-center justify-center w-12 h-12 bg-blue-100 dark:bg-blue-900/30 rounded-lg mr-4"
                  >
                    <Icon className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                  </motion.div>
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                    {category.category}
                  </h3>
                </div>

                {/* Skills List */}
                <div className="space-y-4">
                  {category.skills.map((skill, skillIndex) => (
                    <motion.div
                      key={skill.name}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ 
                        delay: (categoryIndex * 0.2) + (skillIndex * 0.1), 
                        duration: 0.4 
                      }}
                      whileHover={{ scale: 1.02 }}
                      className="relative"
                    >
                      <div className="flex items-center justify-between mb-2">
                        <span className="font-medium text-gray-900 dark:text-white">
                          {skill.name}
                        </span>
                        {skill.level && (
                          <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                            skillLevelColors[skill.level]
                          }`}>
                            {skill.level}
                          </span>
                        )}
                      </div>
                      
                      {/* Skill Progress Bar */}
                      {skill.level && (
                        <div className="relative">
                          <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                            <motion.div
                              initial={{ width: 0 }}
                              whileInView={{ width: '100%' }}
                              viewport={{ once: true }}
                              transition={{ 
                                delay: (categoryIndex * 0.2) + (skillIndex * 0.1) + 0.3, 
                                duration: 0.8,
                                ease: 'easeOut'
                              }}
                              className={`h-2 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full relative overflow-hidden ${
                                skillLevelWidth[skill.level]
                              }`}
                            >
                              <motion.div
                                animate={{ x: ['0%', '100%'] }}
                                transition={{ 
                                  duration: 2, 
                                  repeat: Infinity, 
                                  ease: 'linear',
                                  delay: (categoryIndex * 0.2) + (skillIndex * 0.1) + 1
                                }}
                                className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent w-1/3"
                              />
                            </motion.div>
                          </div>
                        </div>
                      )}
                    </motion.div>
                  ))}
                </div>

                {/* Category Stats */}
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: (categoryIndex * 0.2) + 0.5, duration: 0.4 }}
                  className="mt-6 pt-4 border-t border-gray-200 dark:border-gray-700"
                >
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-gray-600 dark:text-gray-400">
                      {category.skills.length} Technologies
                    </span>
                    <div className="flex items-center">
                      {Array.from({ length: 5 }, (_, i) => (
                        <Star
                          key={i}
                          className={`w-3 h-3 ${
                            i < 4 
                              ? 'text-yellow-400 fill-current' 
                              : 'text-gray-300 dark:text-gray-600'
                          }`}
                        />
                      ))}
                    </div>
                  </div>
                </motion.div>
              </motion.div>
            );
          })}
        </div>

        {/* Additional Skills or Certifications */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.8, duration: 0.6 }}
          className="mt-16 text-center"
        >
          <div className="bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 rounded-xl p-8">
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
              Always Learning
            </h3>
            <p className="text-gray-600 dark:text-gray-300 mb-6 max-w-2xl mx-auto">
              I&apos;m constantly improving my skills and staying current with industry standards and best practices. 
              Currently focusing on advanced electronic testing methodologies and modern manufacturing processes.
            </p>
            <div className="flex flex-wrap justify-center gap-3">
              {['Advanced Testing Methods', 'Lean Manufacturing', 'ISO Quality Standards', 'Digital Documentation', 'Process Automation'].map((tech, index) => (
                <motion.span
                  key={tech}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.1 * index, duration: 0.3 }}
                  whileHover={{ scale: 1.05 }}
                  className="px-4 py-2 bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 rounded-full text-sm font-medium shadow-sm border border-gray-200 dark:border-gray-700"
                >
                  {tech}
                </motion.span>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}