/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from 'react';
import { poseRecommendations } from '../data';
import { motion, AnimatePresence } from 'motion/react';
import { Smile, AlertCircle, Heart, ShieldAlert } from 'lucide-react';
import BlurUpImage from './BlurUpImage';

export default function ChakraGuide() {
  const [selectedIdx, setSelectedIdx] = useState(0);

  const moods = [
    { label: 'Căng thẳng, âu lo (Stress)', icon: <Smile className="w-4 h-4" /> },
    { label: 'Mất ngủ, khó ngủ', icon: <Heart className="w-4 h-4" /> },
    { label: 'Đau mỏi vai gáy & cột sống', icon: <AlertCircle className="w-4 h-4" /> },
    { label: 'Uể oải, mệt mỏi, lười biếng', icon: <ShieldAlert className="w-4 h-4" /> },
  ];

  const currentPose = poseRecommendations[selectedIdx] || poseRecommendations[0];

  return (
    <div id="chakra-section" className="bg-art-cream border border-art-border-light rounded-2xl p-6 sm:p-8 shadow-[0_4px_24px_rgba(74,93,78,0.02)]">
      <div className="text-center max-w-xl mx-auto mb-8">
        <span className="text-[10px] uppercase tracking-[0.25em] font-semibold text-art-taupe bg-white px-4.5 py-1.5 border border-art-divider rounded-full shadow-2xs">
          GỌI Ý TƯ THẾ TRỊ LIỆU
        </span>
        <h3 className="text-2xl sm:text-3xl font-serif mt-3 text-art-green tracking-tight font-normal italic">
          Cơ Thể Bạn Hôm Nay Muốn Nói Gì?
        </h3>
        <p className="text-xs sm:text-sm text-art-text-muted mt-2 leading-relaxed">
          Học Viện Yoga Cân Bằng thấu hiểu những mệt mỏi tinh thần và thể chất của bạn. Hãy chọn trạng thái hiện tại bên dưới để xem gợi ý tư thế (Asana) trị liệu phù hợp nhất ngay lúc này.
        </p>
      </div>

      {/* Mood Tab Controls */}
      <div className="flex flex-wrap justify-center gap-2.5 mb-8">
        {moods.map((m, i) => (
          <button
            id={`mood-tab-btn-${i}`}
            key={i}
            onClick={() => setSelectedIdx(i)}
            className={`px-5 py-3 rounded-full text-[10px] uppercase tracking-widest font-bold whitespace-nowrap transition-all flex items-center gap-1.5 border ${selectedIdx === i
                ? 'bg-art-green hover:bg-art-green-hover text-white border-transparent shadow-sm'
                : 'bg-white hover:bg-art-cream text-art-text-muted border-art-border-light'
              }`}
          >
            {m.icon}
            {m.label}
          </button>
        ))}
      </div>

      {/* Recommended Pose Card (Animated display) */}
      <AnimatePresence mode="wait">
        <motion.div
          key={selectedIdx}
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -12 }}
          transition={{ duration: 0.3 }}
          className="bg-white border border-art-divider rounded-xl overflow-hidden shadow-xs grid grid-cols-1 md:grid-cols-12 gap-0"
        >
          {/* Pose Image */}
          <div className="md:col-span-5 h-64 md:h-auto min-h-[250px] relative">
            <BlurUpImage
              src={currentPose.imageUrl}
              alt={currentPose.poseName}
              containerClassName="absolute inset-0 w-full h-full"
              className="w-full h-full object-cover grayscale-[10%]"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-art-green/60 via-transparent to-transparent md:hidden" />
            <div className="absolute bottom-4 left-4 text-white md:hidden">
              <span className="text-[10px] uppercase font-bold tracking-widest text-white/80">
                {currentPose.sanskritName}
              </span>
              <h4 className="text-lg font-serif font-bold italic">{currentPose.poseName}</h4>
            </div>
          </div>

          {/* Pose details */}
          <div className="md:col-span-7 p-6 sm:p-8 flex flex-col justify-between bg-white">
            <div>
              <div className="hidden md:block">
                <span className="text-[10px] uppercase tracking-[0.2em] font-bold text-art-taupe block">
                  {currentPose.sanskritName}
                </span>
                <h4 className="text-2xl font-serif text-art-green mt-1 italic font-normal">
                  {currentPose.poseName}
                </h4>
              </div>

              {/* Benefits list */}
              <div className="mt-5">
                <span className="text-[10px] uppercase tracking-wider font-extrabold text-art-taupe block mb-2.5 font-sans">
                  LỢI ÍCH TRỊ LIỆU:
                </span>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  {currentPose.benefits.map((b, bi) => (
                    <li key={bi} className="flex items-start gap-1.5 text-xs text-art-text-muted">
                      <span className="text-art-green mt-0.5">✦</span>
                      <span>{b}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Guide/How-to */}
              <div className="mt-6 pt-5 border-t border-art-cream">
                <span className="text-[10px] uppercase tracking-wider font-extrabold text-art-taupe block mb-2 font-sans">
                  CON ĐƯỜNG THỰC HÀNH:
                </span>
                <p className="text-xs text-art-text-muted leading-relaxed italic bg-art-taupe-bg/40 p-4 rounded-lg border border-art-divider">
                  "{currentPose.directions}"
                </p>
              </div>
            </div>

            {/* Quote of action */}
            <div className="mt-6 flex flex-wrap items-center justify-between gap-4 pt-4 border-t border-art-divider">
              <div className="text-[10px] text-art-text-muted tracking-wide font-sans">
                * Giữ từ 3-5 phút, thở tự nhiên sâu bằng mũi.
              </div>
              <button
                id={`register-session-mood-btn-${selectedIdx}`}
                onClick={() => {
                  const el = document.getElementById('booking-section');
                  if (el) el.scrollIntoView({ behavior: 'smooth' });
                }}
                className="text-xs text-art-green font-bold hover:text-art-taupe underline transition-colors cursor-pointer"
              >
                Nhận tư vấn trị liệu riêng biệt →
              </button>
            </div>

          </div>
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
