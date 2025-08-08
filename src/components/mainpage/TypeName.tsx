"use client";

import { useEffect, useState } from "react";

export default function TypeName() {
  const fullText = "DANIEL DAVID";
  const [displayText, setDisplayText] = useState("");
  const [isTyping, setIsTyping] = useState(true);
  const [showCursor, setShowCursor] = useState(true);

  useEffect(() => {
    let typingTimeout: NodeJS.Timeout;
    let erasingTimeout: NodeJS.Timeout;
    let waitTimeout: NodeJS.Timeout;

    const typeText = (index: number = 0) => {
      if (index <= fullText.length) {
        setDisplayText(fullText.slice(0, index));
        setIsTyping(true);
        
        if (index < fullText.length) {
          typingTimeout = setTimeout(() => typeText(index + 1), 150);
        } else {
          // Wait before starting to erase
          waitTimeout = setTimeout(() => eraseText(fullText.length), 2000);
        }
      }
    };

    const eraseText = (index: number) => {
      if (index >= 0) {
        setDisplayText(fullText.slice(0, index));
        setIsTyping(false);
        
        if (index > 0) {
          erasingTimeout = setTimeout(() => eraseText(index - 1), 100);
        } else {
          // Wait before starting to type again
          waitTimeout = setTimeout(() => typeText(0), 500);
        }
      }
    };

    // Start the animation
    typeText(0);

    // Cleanup function
    return () => {
      clearTimeout(typingTimeout);
      clearTimeout(erasingTimeout);
      clearTimeout(waitTimeout);
    };
  }, [fullText]);

  // Cursor blinking effect
  useEffect(() => {
    const cursorInterval = setInterval(() => {
      setShowCursor(prev => !prev);
    }, 530);

    return () => clearInterval(cursorInterval);
  }, []);

  return (
    <div className="font-reddit-sans">
      <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-[100px] font-bold text-[#222222] leading-tight">
        <span>{displayText}</span>
        <span 
          className={`transition-opacity duration-100 ${showCursor ? 'opacity-100' : 'opacity-0'}`}
        >
          |
        </span>
      </h1>
    </div>
  );
}