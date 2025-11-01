"use client";

import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Button } from './components/ui/button';
import { 
  Film, 
  FileText, 
  Radio, 
  CheckCircle, 
  Zap, 
  Shield,
  Upload,
  Sparkles,
  Download,
  Play,
  ChevronRight
} from 'lucide-react';

import FeatureCard from './Components/Landing/FeatureCard';
import StepCard from './Components/Landing/StepCard';

export default function Home() {
  const heroRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"]
  });
  
  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 0.8]);

  const features = [
    {
      icon: Film,
      title: "Clapperboard Detection",
      description: "AI automatically identifies and reads slate information from your footage"
    },
    {
      icon: FileText,
      title: "Smart File Renaming",
      description: "Instantly rename clips based on scene, shot, and take numbers"
    },
    {
      icon: Radio,
      title: "Automatic Audio Sync",
      description: "Perfect audio-video synchronization using waveform analysis"
    },
    {
      icon: CheckCircle,
      title: "Confidence Review Dashboard",
      description: "Review and verify AI detections with confidence scores"
    },
    {
      icon: Zap,
      title: "NLE Integration",
      description: "Seamless export to Premiere Pro, DaVinci Resolve, and Avid"
    },
    {
      icon: Shield,
      title: "Secure Workflow",
      description: "Choose cloud processing or keep everything local and private"
    }
  ];

  const steps = [
    {
      number: "01",
      icon: Upload,
      title: "Upload Your Footage",
      description: "Drag and drop your raw camera files and audio⠀"
    },
    {
      number: "02",
      icon: Sparkles,
      title: "AI Reads and Renames",
      description: "Our AI detects slates and organizes everything automatically"
    },
    {
      number: "03",
      icon: Download,
      title: "Export Synced Media",
      description: "Download perfectly synced and organized files ready for editing"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#0B132B] via-[#1C2541] to-[#0B132B] text-white overflow-hidden">
      
      {/* Hero Section */}
      <motion.section 
        ref={heroRef}
        style={{ opacity, scale }}
        className="relative min-h-screen flex items-center justify-center px-6 py-20"
      >
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-20 left-10 w-96 h-96 bg-[#F6C343] rounded-full blur-3xl" />
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-teal-500 rounded-full blur-3xl" />
        </div>

        {/* Clapperboard Watermark */}
        <div className="absolute top-1/4 right-1/4 opacity-5">
          <Film className="w-96 h-96 text-white" />
        </div>

        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <div className="space-y-4">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2 }}
                className="inline-block"
              >
                
              </motion.div>
              
              <h1 className="text-6xl md:text-7xl lg:text-8xl font-bold leading-none tracking-tight">
                EDITING
                <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#F6C343] to-amber-200">
                  MADE SIMPLE
                </span>
              </h1>
            </div>

            <p className="text-xl md:text-2xl text-[#B3B3B3] leading-relaxed max-w-xl">
              Automatically detect clapperboards, rename footage, and sync audio in seconds.
            </p>
            {/*
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <Button 
                size="sm"
                className="bg-[#F6C343] hover:bg-[#F6C343]/90 text-[#0B132B] font-semibold text-lg px-8 py-2.5 rounded-full transition-all hover:scale-105 hover:shadow-2xl hover:shadow-[#F6C343]/50"
              >
                Try the Beta
                <ChevronRight className="ml-2 w-5 h-5" />
              </Button>
              
              <Button 
                size="sm"
                variant="outline"
                className="border-2 border-white/20 hover:border-[#F6C343] text-white hover:text-[#F6C343] bg-transparent font-semibold text-lg px-8 py-2.5 rounded-full transition-all"
              >
                <Play className="mr-2 w-5 h-5" />
                Watch Demo
              </Button>
            </motion.div>
          {/* */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
              className="flex items-center gap-8 pt-4"
            >
            </motion.div>
          </motion.div>

          {/* Hero Visual */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.3 }}
            className="relative hidden lg:block"
          >
            <div className="relative">
              {/* Clapperboard with Audio Icon */}
              <div className="relative bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl border border-white/20 rounded-3xl p-12 shadow-2xl">
                <div className="flex flex-col items-center justify-center space-y-6">
                  <Film className="w-32 h-32 text-[#F6C343]" strokeWidth={1.5} />
                  <Radio className="w-48 h-16 text-[#F6C343]" strokeWidth={1.5} />
                </div>
                
                {/* Floating Elements */}
                <motion.div
                  animate={{ y: [0, -10, 0] }}
                  transition={{ duration: 3, repeat: Infinity }}
                  className="absolute -top-6 -right-6 bg-[#F6C343] text-[#0B132B] px-4 py-2 rounded-full font-semibold text-sm shadow-lg"
                >
                  AI Powered
                </motion.div>
                
                <motion.div
                  animate={{ y: [0, 10, 0] }}
                  transition={{ duration: 4, repeat: Infinity }}
                  className="absolute -bottom-4 -left-4 bg-white/10 backdrop-blur-md border border-white/20 px-4 py-2 rounded-full font-medium text-sm"
                >
                  100% Accurate
                </motion.div>
              </div>

              {/* Glow Effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-[#F6C343]/20 to-teal-500/20 rounded-3xl blur-3xl -z-10" />
            </div>
          </motion.div>
        </div>
      </motion.section>

      {/* How It Works Section */}
      <section className="relative py-32 px-6">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-20"
          >
            <span className="text-[#F6C343] font-semibold tracking-widest text-sm uppercase">
              Simple Process
            </span>
            <h2 className="text-5xl md:text-6xl font-bold mt-4 mb-6">
              How It Works
            </h2>
            <p className="text-xl text-[#B3B3B3] max-w-2xl mx-auto">
              Three simple steps from raw footage to perfectly synced, organized files
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {steps.map((step, index) => (
              <StepCard key={index} step={step} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* Core Features Section */}
      <section className="relative py-32 px-6 bg-gradient-to-b from-[#0B132B]/50 to-transparent">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-20"
          >
            <span className="text-[#F6C343] font-semibold tracking-widest text-sm uppercase">
              Powerful Features
            </span>
            <h2 className="text-5xl md:text-6xl font-bold mt-4 mb-6">
              Everything You Need
            </h2>
            <p className="text-xl text-[#B3B3B3] max-w-2xl mx-auto">
              Professional-grade tools designed for modern post-production workflows
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature, index) => (
              <FeatureCard key={index} feature={feature} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* Workflow Preview Section */}
      <section className="relative py-32 px-6">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <span className="text-[#F6C343] font-semibold tracking-widest text-sm uppercase">
              See It In Action
            </span>
            <h2 className="text-5xl md:text-6xl font-bold mt-4 mb-6">
              Workflow Preview
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative aspect-video rounded-3xl overflow-hidden border border-white/20 bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-xl shadow-2xl"
          >
            {/* Video Placeholder */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-center space-y-4">
                <div className="w-20 h-20 mx-auto bg-[#F6C343]/20 border-2 border-[#F6C343] rounded-full flex items-center justify-center">
                  <Play className="w-10 h-10 text-[#F6C343] ml-1" />
                </div>
                <p className="text-[#B3B3B3]">Demo video coming soon</p>
              </div>
            </div>

            {/* Animated Lines */}
            <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#0B132B] to-transparent" />
          </motion.div>
        </div>
      </section>

      {/* About Section */}
      <section className="relative py-32 px-6 bg-gradient-to-b from-transparent to-[#0B132B]/50">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-8"
          >
            <span className="text-[#F6C343] font-semibold tracking-widest text-sm uppercase">
              About SnapSync
            </span>
            <h2 className="text-5xl md:text-6xl font-bold leading-tight mt-4 mb-6">
              Built for Storytellers
            </h2>
            <p className="text-2xl text-[#B3B3B3] leading-relaxed">
              We build intelligent tools that remove the repetitive parts of post-production 
              so editors can focus on storytelling.
            </p>
          </motion.div>
        </div>
      </section>

      {/* CTA Footer */}
      <section className="relative py-32 px-6">
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative bg-gradient-to-br from-[#F6C343]/20 to-amber-600/20 backdrop-blur-xl border border-[#F6C343]/30 rounded-3xl p-12 md:p-16 text-center shadow-2xl overflow-hidden"
          >
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-10">
              <Film className="absolute top-4 left-4 w-24 h-24" />
              <Radio className="absolute bottom-4 right-4 w-32 h-16" />
            </div>

            <div className="relative z-10 space-y-8">
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                Save time. Stay organized.
                <br />
                <span className="text-[#F6C343]">Focus on your edit.</span>
              </h2>
              <p className="text-xl text-[#B3B3B3] max-w-2xl mx-auto">
                Join hundreds of editors who are already transforming their workflow
              </p>
              <Button 
                size="sm"
                className="bg-[#F6C343] hover:bg-[#F6C343]/90 text-[#0B132B] font-bold text-xl px-12 py-4 rounded-full transition-all hover:scale-105 hover:shadow-2xl hover:shadow-[#F6C343]/50"
              >
                Request Access
                <ChevronRight className="ml-2 w-6 h-6" />
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative py-12 px-6 border-t border-white/10">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="flex items-center gap-3">
              <Film className="w-8 h-8 text-[#F6C343]" />
              <span className="text-xl font-bold">SnapSync Ltd</span>
            </div>
            
            <div className="text-[#B3B3B3] text-sm">
              © 2025 SnapSync Ltd — All Rights Reserved
            </div>
            
            {/* <div className="flex gap-6 text-[#B3B3B3] text-sm">
              <a href="#" className="hover:text-[#F6C343] transition-colors">Privacy</a>
              <a href="#" className="hover:text-[#F6C343] transition-colors">Terms</a>
              <a href="#" className="hover:text-[#F6C343] transition-colors">Contact</a>
            </div>
            */}
          </div>
        </div>
      </footer>
    </div>
  );
}