import React from 'react';
import { motion } from 'framer-motion';

export default function FeatureCard({ feature, index }) {
  const Icon = feature.icon;

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ y: -8, scale: 1.02 }}
      className="group relative bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl border border-white/20 rounded-2xl p-8 hover:border-[#F6C343]/50 transition-all duration-300 overflow-hidden"
    >
      {/* Glow Effect on Hover */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#F6C343]/0 to-[#F6C343]/0 group-hover:from-[#F6C343]/10 group-hover:to-transparent transition-all duration-300 rounded-2xl" />

      <div className="relative z-10 space-y-4">
        <div className="w-14 h-14 bg-[#F6C343]/20 border border-[#F6C343]/30 rounded-xl flex items-center justify-center group-hover:bg-[#F6C343]/30 transition-colors">
          <Icon className="w-7 h-7 text-[#F6C343]" strokeWidth={1.5} />
        </div>

        <h3 className="text-xl font-bold text-white">
          {feature.title}
        </h3>

        <p className="text-[#B3B3B3] leading-relaxed">
          {feature.description}
        </p>
      </div>

      {/* Corner Accent */}
      <div className="absolute top-0 right-0 w-20 h-20 bg-[#F6C343]/5 rounded-bl-full" />
    </motion.div>
  );
} 
