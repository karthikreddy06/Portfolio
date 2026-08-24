"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface LoadingScreenProps {
  onComplete?: () => void;
}

const quotes = [
  "Good software should feel inevitable.",
  "Build with clarity.",
  "Make complexity quiet.",
];

export default function LoadingScreen({ onComplete }: LoadingScreenProps) {
  const [isVisible, setIsVisible] = useState(true);
  const [quoteIndex, setQuoteIndex] = useState(0);

  useEffect(() => {
    // Check for reduced motion
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReducedMotion) {
      setIsVisible(false);
      onComplete?.();
      return;
    }

    // Quote cycling
    const qTimer1 = setTimeout(() => setQuoteIndex(1), 700);
    const qTimer2 = setTimeout(() => setQuoteIndex(2), 1400);

    // Intro completion
    const exitTimer = setTimeout(() => {
      setIsVisible(false);
    }, 2200);

    return () => {
      clearTimeout(qTimer1);
      clearTimeout(qTimer2);
      clearTimeout(exitTimer);
    };
  }, [onComplete]);

  return (
    <AnimatePresence onExitComplete={onComplete}>
      {isVisible && (
        <motion.div
          className="intro-overlay"
          initial={{ opacity: 1, y: 0 }}
          exit={{
            y: "-100%",
            transition: {
              duration: 0.85,
              ease: [0.22, 1, 0.36, 1],
            },
          }}
          aria-hidden={!isVisible}
          role="status"
          aria-label="Editorial introduction"
        >
          <div className="intro-backdrop" />
          
          <motion.div
            className="intro-center"
            initial={{ opacity: 0, scale: 0.94 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{
              opacity: 0,
              scale: 0.92,
              transition: { duration: 0.5, ease: "easeIn" },
            }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          >
            {/* Ambient subtle glow ring */}
            <div className="intro-ambient-aura" />

            {/* Concentric subtle decorative rings */}
            <div className="intro-dashed-ring" />
            <div className="intro-inner-ring" />

            {/* Rotating SVG circular typography */}
            <div className="intro-ring-container">
              <svg viewBox="0 0 240 240" className="intro-ring-svg" aria-hidden="true">
                <defs>
                  <path
                    id="introCirclePath"
                    d="M 120, 120 m -86, 0 a 86,86 0 1,1 172,0 a 86,86 0 1,1 -172,0"
                  />
                </defs>
                <text className="intro-ring-text">
                  <textPath href="#introCirclePath" startOffset="0%">
                    M. KARTHIK REDDY · AI &amp; DATA SCIENCE · SOFTWARE ENGINEERING · 
                  </textPath>
                </text>
              </svg>
            </div>

            {/* Center Core Monogram */}
            <div className="intro-core">
              <span className="intro-core-kr">KR</span>
              <div className="intro-core-divider" />
              <span className="intro-core-label">PORTFOLIO</span>
            </div>
          </motion.div>

          {/* Rotating Quote Section */}
          <div className="intro-quote-container">
            <AnimatePresence mode="wait">
              <motion.p
                key={quoteIndex}
                className="intro-quote"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
                transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
              >
                &ldquo;{quotes[quoteIndex]}&rdquo;
              </motion.p>
            </AnimatePresence>
            <div className="intro-author">
              <span>MUKKAMALLA KARTHIK REDDY</span>
              <span className="intro-author-dot" />
              <span>2026</span>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
