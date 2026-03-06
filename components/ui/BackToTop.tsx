"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUp } from "lucide-react";

export default function BackToTop() {
  const [isVisible, setIsVisible] = useState(false);

  // Kiá»ƒm tra vá»‹ trÃ­ cuá»™n chuá»™t Ä‘á»ƒ hiá»‡n/áº©n nÃºt
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

  // HÃ m cuá»™n lÃªn Ä‘áº§u trang mÆ°á»£t mÃ 
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
            y: -8, // Náº£y lÃªn
            scale: 1.1, // PhÃ³ng to nháº¹
            filter: "brightness(1.2)", // SÃ¡ng rá»±c lÃªn
          }}
          whileTap={{ scale: 0.9 }}
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 z-[100] flex h-14 w-14 cursor-pointer items-center justify-center rounded-full bg-[linear-gradient(135deg,#d68c45_0%,#96310b_80%,#6b121c_100%)] text-white shadow-[0_0_20px_rgba(214,140,69,0.4)] transition-shadow hover:brightness-110 hover:shadow-[0_0_30px_rgba(214,140,69,0.7)] md:bottom-10 md:right-10"
        >
          <ArrowUp className="h-6 w-6 stroke-[2.5px]" />
        </motion.button>
      )}
    </AnimatePresence>
  );
}

