"use client";

import { motion } from "motion/react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useState } from "react";

const sizeClasses = {
  sm: "w-8 h-8 md:w-9 md:h-9",
  md: "w-11 h-11 md:w-12 md:h-12",
  lg: "w-12 h-12 md:w-14 md:h-14",
};

const iconSizes = {
  sm: "h-4 w-4",
  md: "h-5 w-5",
  lg: "h-6 w-6",
};

const variantClasses = {
  default: "bg-white/10 hover:bg-white/20 backdrop-blur-[2px] border border-white/20",
  outline: "bg-white border border-gray-300 hover:bg-gray-50",
  ghost: "bg-transparent hover:bg-white/10",
};

export interface CarouselNavButtonProps {
  direction: "left" | "right";
  onClick: () => void;
  className?: string;
  ariaLabel?: string;
  size?: "sm" | "md" | "lg";
  variant?: "default" | "outline" | "ghost";
}

export default function CarouselNavButton({
  direction,
  onClick,
  className = "",
  ariaLabel,
  size = "md",
  variant = "default",
}: CarouselNavButtonProps) {
  const [isHovered, setIsHovered] = useState(false);
  const Icon = direction === "left" ? ChevronLeft : ChevronRight;
  
  const enterFrom = direction === "left" ? 40 : -40;
  const exitTo = direction === "left" ? -40 : 40;

  const defaultAriaLabel = direction === "left" ? "Previous slide" : "Next slide";

  const handleClick = () => {
    // Don't reset hover state immediately - let the animation complete
    onClick();
  };

  return (
    <motion.button
      onClick={handleClick}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      className={`
        rounded-full transition-all duration-300 overflow-hidden 
        flex items-center justify-center shadow-[0_2px_8px_rgba(0,0,0,0.1)]
        ${sizeClasses[size]}
        ${variantClasses[variant]}
        ${className}
      `}
      aria-label={ariaLabel || defaultAriaLabel}
    >
      {/* Icon that enters from opposite side */}
      <motion.div
        animate={{
          x: isHovered ? 0 : enterFrom,
          opacity: isHovered ? 1 : 0,
        }}
        transition={{
          duration: 0.5,
          ease: "easeInOut",
        }}
        className="absolute"
      >
        <Icon 
          className={`${iconSizes[size]} ${variant === 'outline' ? 'text-[#0c1b54]' : 'text-white'}`} 
          strokeWidth={2} 
        />
      </motion.div>

      {/* Original icon that exits */}
      <motion.div
        animate={{
          x: isHovered ? exitTo : 0,
          opacity: isHovered ? 0 : 1,
        }}
        transition={{
          duration: 0.5,
          ease: "easeInOut",
        }}
        className="absolute"
      >
        <Icon 
          className={`${iconSizes[size]} ${variant === 'outline' ? 'text-[#0c1b54]' : 'text-white'}`} 
          strokeWidth={2} 
        />
      </motion.div>
    </motion.button>
  );
}
