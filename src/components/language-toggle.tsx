'use client';

import { useTranslate } from '@/locales';
import { motion } from 'motion/react';
import { useCallback, useEffect, useRef, useState } from 'react';

// Language Toggle Button Component
export function LanguageToggle() {
  const { onChangeLang, currentLang } = useTranslate();

  const isHindi = currentLang?.value === 'hi';
  const switchTitle = isHindi ? 'Switch to English' : 'हिंदी में बदलें';

  const [showLanguagePopup, setShowLanguagePopup] = useState(true);

  const popupTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  // Show popup for 5 seconds
  const showPopup = useCallback(() => {
    // Clear existing timer if there is one
    if (popupTimerRef.current) {
      clearTimeout(popupTimerRef.current);
    }

    // Show popup
    setShowLanguagePopup(true);

    // Hide popup after 5 seconds
    popupTimerRef.current = setTimeout(() => {
      setShowLanguagePopup(false);
      popupTimerRef.current = null;
    }, 5000);
  }, []);

  // Show popup when page/component opens
  useEffect(() => {
    showPopup();

    return () => {
      if (popupTimerRef.current) {
        clearTimeout(popupTimerRef.current);
      }
    };
  }, [showPopup]);

  const handleChangeLang = useCallback(
    (newLang: string) => {
      // Existing language change logic
      onChangeLang(newLang);

      // Show popup again after language change
      showPopup();
    },
    [onChangeLang, showPopup]
  );

  return (
    <div className="relative">
      {/* Language Change Popup */}
      {showLanguagePopup && (
        <motion.div
          initial={{ opacity: 0, y: -8, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: -8, scale: 0.95 }}
          transition={{ duration: 0.25 }}
          className="absolute top-full right-0 mt-2 z-50 whitespace-nowrap rounded-lg bg-gray-900 px-3 py-2 text-xs sm:text-sm font-medium text-white shadow-lg"
        >
          {switchTitle}

          {/* Popup arrow */}
          <span
            className="absolute bottom-full right-4 h-0 w-0 border-l-4 border-r-4 border-b-4 border-l-transparent border-r-transparent border-b-gray-900"
          />
        </motion.div>
      )}

      <motion.button
        onClick={() => handleChangeLang(isHindi ? 'en' : 'hi')}
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.3, delay: 0.6 }}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="relative flex items-center gap-1.5 sm:gap-2 px-2.5 sm:px-4 py-2 sm:py-2.5 rounded-lg sm:rounded-xl text-xs sm:text-sm font-medium transition-all duration-300 group overflow-hidden cursor-pointer text-gray-600 hover:text-blue-500 hover:bg-blue-50/80"
        title={switchTitle}
        aria-label={switchTitle}
      >
        {/* Icon with Flag Animation */}
        <motion.span
          className="text-sm sm:text-base relative z-10"
          animate={{
            rotate: [0, -5, 5, -5, 0],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
          whileHover={{ scale: 1.2, rotate: 10 }}
        >
          🇮🇳
        </motion.span>

        {/* Language Label */}
        <motion.span
          className="hidden sm:inline-block whitespace-nowrap relative z-10 text-xs sm:text-sm font-medium"
          initial={{ opacity: 0, x: -10 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.3, delay: 0.7 }}
        >
          {isHindi ? 'EN' : 'हिंदी'}
        </motion.span>

        {/* Hover Ripple Effect */}
        <motion.div
          className="absolute inset-0 rounded-lg sm:rounded-xl opacity-0 group-hover:opacity-10 transition-opacity duration-300"
          style={{
            background:
              'radial-gradient(circle at center, #3b82f6 0%, transparent 70%)',
          }}
        />

        {/* Active State Background */}
        <motion.div
          className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-indigo-500/10 rounded-lg sm:rounded-xl"
          initial={{ scale: 0, opacity: 0 }}
          whileHover={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.3 }}
        />
      </motion.button>
    </div>
  );
}