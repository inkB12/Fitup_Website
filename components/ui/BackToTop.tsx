"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUp } from "lucide-react";

export default function BackToTop() {
  const [isVisible, setIsVisible] = useState(false);

  // Kiểm tra vị trí cuộn chuột để hiện/ẩn nút
  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  // Hàm cuộn lên đầu trang mượt mà
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.button
          initial={{ opacity: 0, scale: 0.5, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.5, y: 20 }}
          whileHover={{
            y: -8, // Nảy lên
            scale: 1.1, // Phóng to nhẹ
            filter: "brightness(1.2)", // Sáng rực lên
          }}
          whileTap={{ scale: 0.9 }}
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 z-[100] flex h-14 w-14 cursor-pointer items-center justify-center rounded-full bg-gradient-to-tr from-orange-600 to-orange-400 text-white shadow-[0_0_20px_rgba(249,115,22,0.4)] transition-shadow hover:shadow-[0_0_30px_rgba(249,115,22,0.7)] md:bottom-10 md:right-10"
        >
          <ArrowUp className="h-6 w-6 stroke-[2.5px]" />
        </motion.button>
      )}
    </AnimatePresence>
  );
}
