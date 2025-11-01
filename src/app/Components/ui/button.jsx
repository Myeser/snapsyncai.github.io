"use client";

import React from "react";

/**
 * A versatile button component supporting "default" and "outline" variants,
 * hover effects, scaling, and shadows.
 */
export function Button({
  children,
  className = "",
  variant = "default",
  size = "lg",
  ...props
}) {
  const base =
    "inline-flex items-center justify-center font-semibold transition-all duration-200 focus:outline-none disabled:opacity-50 disabled:pointer-events-none";

  const variants = {
    default:
      "bg-[#F6C343] text-[#0B132B] hover:bg-[#F6C343]/90 hover:scale-105 hover:shadow-2xl hover:shadow-[#F6C343]/50",
    outline:
      "border-2 border-white/20 hover:border-[#F6C343] text-white hover:text-[#F6C343] bg-transparent",
  };

  const sizes = {
    sm: "px-6 py-2.5 text-base rounded-full",
    lg: "px-4 py-7 text-lg rounded-full",
    xl: "px-4 py-7 text-lg rounded-full",
  };

  return (
    <button
      {...props}
      className={`${base} ${variants[variant]} ${sizes[size]} ${className}`}
    >
      {children}
    </button>
  );
}
