'use client';

import type { WeddingConfigType } from '@/types';
import { motion } from 'motion/react';
import { useTranslation } from 'react-i18next';

interface HeroSectionProps {
  isLoaded: boolean;
  couple: WeddingConfigType;
  couples?: Array<{
    bride: WeddingConfigType['bride'];
    groom: WeddingConfigType['groom'];
  }>;
  onScrollToSection: (sectionId: string) => void;
}

export const HeroSection = ({
  isLoaded,
  couple,
  couples,
  onScrollToSection,
}: HeroSectionProps) => {
  const { t } = useTranslation('home');
  const pairRows = couples && couples.length > 0 ? couples : [{ bride: couple.bride, groom: couple.groom }];

  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* Scenic hero background image */}
      <div
        className="absolute inset-0 z-0 bg-cover bg-center"
        style={{ backgroundImage: "url('/assets/images/holding-hands.jpeg')" }}
      />

      {/* Soft overlay for readability */}
      <div className="absolute inset-0 z-0 bg-gradient-to-br from-rose-50/40 via-pink-50/40 to-purple-50/50" />
      <div className="absolute inset-0 z-0 bg-black/10" />

      {/* Background Decorations */}
      <div className="absolute inset-0 z-0">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-rose-200/30 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-purple-200/30 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-pink-200/20 rounded-full blur-3xl"></div>
      </div>

      {/* Two-date background timeline */}
      <div className="pointer-events-none absolute inset-0 z-0 flex items-center justify-center">
        <div className="flex flex-col items-center gap-3 opacity-20">
          <span className="text-[10rem] sm:text-[11rem] md:text-[12rem] font-serif text-rose-400/50 leading-none -rotate-12">
            26 Nov
          </span>
          <span className="text-[8rem] sm:text-[9rem] md:text-[10rem] font-serif text-blue-400/50 leading-none rotate-12">
            27 Nov
          </span>
        </div>
      </div>

      {/* Content */}
      <div className="relative z-10 flex flex-col min-h-screen px-6 pt-10 sm:pt-18 md:pt-20">
        <div className="flex-1 flex items-center justify-center py-10">
          <div className="max-w-4xl mx-auto text-center">
            {/* Main Heading */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: isLoaded ? 1 : 0, y: isLoaded ? 0 : 50 }}
              transition={{ duration: 1, delay: 0.2 }}
              className="mb-6 sm:mb-8"
            >
              <div className="mt-4 text-sm sm:text-base md:text-lg lg:text-xl text-gray-600 mb-4 font-medium">
                {t('hero.welcome')}
              </div>
              <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-serif text-gray-800 mb-6 leading-tight">
                Invitation
                <span className="block bg-gradient-to-r from-rose-500 to-pink-600 bg-clip-text text-transparent">
                  न्योता
                </span>
              </h2>
              <div className="w-32 h-px bg-gradient-to-r from-transparent via-rose-400 to-transparent mx-auto"></div>
            </motion.div>

            {/* Couple Photos */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: isLoaded ? 1 : 0, scale: isLoaded ? 1 : 0.8 }}
              transition={{ duration: 1, delay: 0.6 }}
              className="mb-6 sm:mb-8"
            >
              <div className="flex flex-col items-center justify-center gap-4 sm:gap-6 md:gap-8 lg:gap-10">
                {pairRows.map((pair, index) => (
                  <div key={`${pair.bride.fullName}-${pair.groom.fullName}`}> 
                    <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 md:gap-8 lg:gap-10">
                      <div className="text-center flex-shrink-0 justify-items-center">
                        <div className="w-24 h-24 sm:w-28 sm:h-28 md:w-32 md:h-32 lg:w-36 lg:h-36 xl:w-40 xl:h-40 bg-gradient-to-br from-rose-200 to-pink-300 rounded-full flex items-center justify-center text-3xl sm:text-4xl md:text-5xl lg:text-6xl mb-3 sm:mb-4 shadow-lg">
                          <span className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl">
                            👰🏻
                          </span>
                        </div>
                        <div className="w-28 sm:w-32 md:w-40 lg:w-48 xl:w-56 mx-auto px-2">
                          <h3
                            className="text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl font-serif font-black text-rose-950 drop-shadow-sm break-words hyphens-auto leading-tight overflow-wrap-anywhere tracking-wide"
                            title={pair.bride.fullName}
                          >
                            {pair.bride.name}
                          </h3>
                        </div>
                      </div>

                      <div className="hidden sm:block text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-rose-500 animate-pulse flex-shrink-0">
                        💕
                      </div>

                      <div className="sm:hidden text-xl text-rose-500 animate-pulse my-2">
                        💕
                      </div>

                      <div className="text-center flex-shrink-0 justify-items-center">
                        <div className="w-24 h-24 sm:w-28 sm:h-28 md:w-32 md:h-32 lg:w-36 lg:h-36 xl:w-40 xl:h-40 bg-gradient-to-br from-blue-200 to-indigo-300 rounded-full flex items-center justify-center text-3xl sm:text-4xl md:text-5xl lg:text-6xl mb-3 sm:mb-4 shadow-lg">
                          <span className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl">
                            🤵🏻
                          </span>
                        </div>
                        <div className="w-28 sm:w-32 md:w-40 lg:w-48 xl:w-56 mx-auto px-2">
                          <h3
                            className="text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl font-serif font-black text-blue-950 drop-shadow-sm break-words hyphens-auto leading-tight overflow-wrap-anywhere tracking-wide"
                            title={pair.groom.fullName}
                          >
                            {pair.groom.name}
                          </h3>
                        </div>
                      </div>
                    </div>

                    {index < pairRows.length - 1 && (
                      <div className="flex items-center justify-center gap-3 my-5 sm:my-7">
                        <div className="h-1 w-16 sm:w-24 rounded-full bg-gradient-to-r from-transparent via-rose-500 to-rose-300"></div>
                        <span className="inline-flex h-8 w-8 sm:h-9 sm:w-9 items-center justify-center rounded-full border border-rose-400 bg-white/90 text-rose-600 shadow-[0_0_0_4px_rgba(251,113,133,0.08)] text-sm sm:text-base font-semibold animate-pulse">
                          ✦
                        </span>
                        <div className="h-1 w-16 sm:w-24 rounded-full bg-gradient-to-r from-rose-300 via-rose-500 to-transparent"></div>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: isLoaded ? 1 : 0, y: isLoaded ? 0 : 30 }}
              transition={{ duration: 1, delay: 1.2 }}
              className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center"
            >
              <motion.button
                onClick={() => onScrollToSection('details')}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-white/80 backdrop-blur-sm text-gray-800 px-6 sm:px-8 py-3 sm:py-4 rounded-full font-semibold text-sm sm:text-base md:text-lg shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-200 cursor-pointer"
              >
                {t('hero.view-details')}
              </motion.button>
            </motion.div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="flex justify-center pb-6 sm:pb-8">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: isLoaded ? 1 : 0 }}
            transition={{ duration: 1, delay: 1.5 }}
            className="z-20"
          >
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="text-gray-600 text-center cursor-pointer"
              onClick={() => onScrollToSection('couple')}
            >
              <div className="text-xs mb-1 sm:mb-2">
                {t('hero.scroll-down')}
              </div>
              <div className="text-lg sm:text-xl">⬇️</div>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Remove the old absolute positioned scroll indicator */}
    </div>
  );
};
