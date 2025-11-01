import React from 'react';
import { motion } from 'framer-motion';

export default function StepCard({ step, index }) {
  const Icon = step.icon;

  return (
    <motion.div
      initial={{ opacity: 0, x: -30 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.2 }}
      className="relative"
    >
      <div className="relative bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl border border-white/20 rounded-2xl p-8 hover:border-[#F6C343]/50 transition-all duration-300 group">
        
        {/* Step Number */}
        <div className="absolute -top-6 -left-6 w-16 h-16 bg-gradient-to-br from-[#F6C343] to-amber-600 rounded-2xl flex items-center justify-center font-bold text-[#0B132B] text-xl shadow-xl rotate-6 group-hover:rotate-12 transition-transform">
          {step.number}
        </div>

        <div className="space-y-4 pt-6">
          <div className="w-16 h-16 bg-white/10 border border-white/20 rounded-xl flex items-center justify-center">
            <Icon className="w-8 h-8 text-[#F6C343]" strokeWidth={1.5} />
          </div>

          <h3 className="text-2xl font-bold text-white">
            {step.title}
          </h3>

          <p className="text-[#B3B3B3] leading-relaxed">
            {step.description}
          </p>
        </div>

        {/* Arrow for non-last items */}
        {index < 2 && (
          <div className="hidden md:block absolute top-1/2 -right-4 transform -translate-y-1/2">
            <div className="w-8 h-0.5 bg-gradient-to-r from-[#F6C343] to-transparent" />
          </div>
        )}
      </div>
    </motion.div>
  );
}
