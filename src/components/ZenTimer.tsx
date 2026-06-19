/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Volume2, Play, Square, Sparkles, Heart } from 'lucide-react';

export default function ZenTimer() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [breathPhase, setBreathPhase] = useState<'inhale' | 'hold' | 'exhale'>('inhale');
  const [secondsLeft, setSecondsLeft] = useState(4); // cycle duration tracker
  const [completedCycles, setCompletedCycles] = useState(0);
  const [ringing, setRinging] = useState(false);

  const audioContextRef = useRef<AudioContext | null>(null);

  // Play Tibetan Singing Bowl Sound using Web Audio API
  const playSingingBowl = () => {
    try {
      setRinging(true);
      setTimeout(() => setRinging(false), 800);

      const AudioContextClass = window.AudioContext || (window as any).webkitAudioContext;
      if (!AudioContextClass) return;

      // Create new context or use existing state
      const ctx = new AudioContextClass();
      audioContextRef.current = ctx;
      const now = ctx.currentTime;

      // Himalayan Healing bowl frequency: warm, deep F3 (approx 174.6 Hz)
      const fundamental = 174.6;

      // Harmonious + Inharmonic partials that define the metal timbral "bloom"
      const partials = [
        { freq: fundamental, gain: 0.45, decay: 7.0, vibratoFreq: 5.2, vibratoDepth: 3.5 },
        { freq: fundamental * 1.49, gain: 0.28, decay: 5.5, vibratoFreq: 4.1, vibratoDepth: 2.8 }, // fifth
        { freq: fundamental * 2.11, gain: 0.18, decay: 4.5, vibratoFreq: 5.8, vibratoDepth: 4.5 },
        { freq: fundamental * 2.76, gain: 0.12, decay: 3.0, vibratoFreq: 3.6, vibratoDepth: 2.0 },
        { freq: fundamental * 3.42, gain: 0.08, decay: 2.0, vibratoFreq: 6.5, vibratoDepth: 1.8 },
        { freq: fundamental * 4.96, gain: 0.04, decay: 1.2, vibratoFreq: 7.2, vibratoDepth: 1.0 }
      ];

      // Master volume envelope for smooth start and long decay
      const masterGain = ctx.createGain();
      masterGain.gain.setValueAtTime(0, now);
      // Soft wool mallet strike has slightly longer attack than hard mallet
      masterGain.gain.linearRampToValueAtTime(0.7, now + 0.12);
      masterGain.gain.exponentialRampToValueAtTime(0.001, now + 7.5);

      masterGain.connect(ctx.destination);

      partials.forEach((p) => {
        const osc = ctx.createOscillator();
        const pGain = ctx.createGain();

        // Rhythmic tremolo/beating LFO
        const lfo = ctx.createOscillator();
        const lfoGain = ctx.createGain();

        lfo.frequency.setValueAtTime(p.vibratoFreq, now);
        lfoGain.gain.setValueAtTime(p.vibratoDepth, now);

        lfo.connect(lfoGain);
        lfoGain.connect(osc.frequency);

        osc.frequency.setValueAtTime(p.freq, now);

        // Individual volume ramping for the partial
        pGain.gain.setValueAtTime(0, now);
        pGain.gain.linearRampToValueAtTime(p.gain, now + 0.08);
        pGain.gain.exponentialRampToValueAtTime(0.001, now + p.decay);

        osc.connect(pGain);
        pGain.connect(masterGain);

        lfo.start(now);
        osc.start(now);

        lfo.stop(now + p.decay + 0.5);
        osc.stop(now + p.decay + 0.5);
      });
    } catch (e) {
      console.warn('Web Audio was blocked or is not supported in this frame environment.', e);
    }
  };

  // 4-4-4 Box Breathing Cycle Logic for Yoga/Zen State
  // Hít vào (4s) -> Giữ hơi (4s) -> Thở ra (4s)
  useEffect(() => {
    let interval: NodeJS.Timeout | null = null;

    if (isPlaying) {
      interval = setInterval(() => {
        setSecondsLeft((prev) => {
          if (prev <= 1) {
            // Transition phase
            if (breathPhase === 'inhale') {
              setBreathPhase('hold');
              return 4;
            } else if (breathPhase === 'hold') {
              setBreathPhase('exhale');
              return 4;
            } else {
              setBreathPhase('inhale');
              setCompletedCycles((c) => c + 1);
              // Gently ring bowl at completion of cycle for a lovely touch!
              playSingingBowl();
              return 4;
            }
          }
          return prev - 1;
        });
      }, 1000);
    } else {
      setBreathPhase('inhale');
      setSecondsLeft(4);
    }

    return () => {
      if (interval) clearInterval(interval);
    };
  }, [isPlaying, breathPhase]);

  return (
    <div id="zen-section" className="bg-art-cream border border-art-border-light rounded-2xl p-6 sm:p-8 shadow-[0_4px_24px_rgba(74,93,78,0.02)]">
      <div className="flex flex-col md:flex-row gap-8 items-center justify-between">
        
        {/* Left Side: Sound Healing Box */}
        <div className="w-full md:w-5/12 flex flex-col justify-center space-y-4 text-center md:text-left">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-art-green-light text-art-green hover:bg-art-taupe-bg transition-colors rounded-full text-[10px] uppercase tracking-wider font-bold self-center md:self-start border border-art-border-light">
            <Sparkles className="w-3 h-3 text-art-taupe" />
            <span>Trải Nghiệm Thư Thái</span>
          </div>
          <h3 className="text-2xl font-serif text-art-green tracking-wide font-normal italic">
            Chuông Xoay Tây Tạng Phục Hồi
          </h3>
          <p className="text-sm text-art-text-muted leading-relaxed">
            Nhấp chuột vào chiếc chuông thanh tịnh bên dưới để lắng nghe âm vang nguyên bản, sảng khoái và xua tan căng thẳng mệt nhoài tức thì bằng tần số rung động phục hồi.
          </p>
 
          <div className="pt-2 flex flex-col sm:flex-row gap-3 items-center justify-center md:justify-start">
            <button
              id="ring-singing-bowl-btn"
              onClick={playSingingBowl}
              className={`relative px-6 py-3 rounded-full text-[10px] uppercase tracking-widest font-semibold transition-all flex items-center gap-2 border bg-art-green hover:bg-art-green-hover text-white shadow-sm ring-offset-2 focus:ring-2 focus:ring-art-green ${
                ringing ? 'scale-[0.97]' : ''
              }`}
            >
              <Volume2 className="w-4 h-4" />
              Gõ Chuông Phục Hồi
            </button>
            <span className="text-[10px] uppercase tracking-wider font-bold text-art-taupe hidden sm:inline-block">
              *Đeo tai nghe để cảm nhận sâu
            </span>
          </div>
        </div>
 
        {/* Right Side: Rhythmic Breathing Guide */}
        <div className="w-full md:w-6/12 bg-white border border-art-divider rounded-xl p-6 flex flex-col items-center justify-center relative overflow-hidden shadow-inner min-h-[300px]">
          
          {/* Subtle pulsating backgrid */}
          <div className="absolute inset-0 bg-radial-gradient from-transparent to-art-cream pointer-events-none" />
 
          {/* Glowing Animated Pacer Circle */}
          <div className="relative w-40 h-40 flex items-center justify-center">
            
            {/* Pulsing visual core depending on breathing phase */}
            <AnimatePresence mode="wait">
              <motion.div
                key={breathPhase}
                initial={{ opacity: 0.3 }}
                animate={{
                  opacity: 0.9,
                  scale: breathPhase === 'inhale' ? 1.4 : breathPhase === 'hold' ? 1.4 : 0.85
                }}
                transition={{
                  duration: breathPhase === 'hold' ? 0.5 : 4,
                  ease: 'easeInOut'
                }}
                className={`absolute inset-0 rounded-full blur-xl opacity-20 ${
                  breathPhase === 'inhale'
                    ? 'bg-amber-100'
                    : breathPhase === 'hold'
                    ? 'bg-art-green-light'
                    : 'bg-art-taupe-bg'
                }`}
              />
            </AnimatePresence>
 
            {/* Structured Border Visualizer Ring */}
            <motion.div
              animate={{
                scale: isPlaying ? (breathPhase === 'inhale' ? 1.4 : breathPhase === 'hold' ? 1.4 : 0.85) : 1
              }}
              transition={{
                duration: isPlaying ? 4 : 1,
                ease: 'easeInOut'
              }}
              className="absolute w-28 h-28 rounded-full border-2 border-dashed border-art-divider flex items-center justify-center transition-all"
            />
 
            {/* Inner Interactive Sphere */}
            <motion.div
              animate={{
                scale: isPlaying ? (breathPhase === 'inhale' ? 1.25 : breathPhase === 'hold' ? 1.25 : 0.8) : 1,
                backgroundColor: isPlaying
                  ? (breathPhase === 'inhale' ? '#F7E7CE' : breathPhase === 'hold' ? '#DAE6D7' : '#EEDAD3')
                  : '#F2EDE4'
              }}
              transition={{
                duration: isPlaying ? 4 : 1,
                ease: 'easeInOut'
              }}
              className="w-20 h-20 rounded-full flex flex-col items-center justify-center shadow-md border border-art-divider"
            >
              {isPlaying ? (
                <div className="flex flex-col items-center justify-center">
                  <span className="text-xl font-bold text-art-green tracking-wide">{secondsLeft}s</span>
                  <span className="text-[10px] text-art-text-muted font-sans font-medium tracking-wide">bước</span>
                </div>
              ) : (
                <Heart className="w-6 h-6 text-art-taupe" />
              )}
            </motion.div>
          </div>
 
          {/* Phase labels & actions */}
          <div className="mt-6 text-center z-10">
            <h4 className="text-base font-semibold text-art-green tracking-wide">
              {!isPlaying ? 'Thiền Thở 4-4-4 Đạt Khí' : (
                breathPhase === 'inhale' ? 'HÍT VÀO THƯ THÁI 🧘' :
                breathPhase === 'hold' ? 'GIỮ LẠI NĂNG LƯỢNG ✦' :
                'THỞ RA THẢ LỎNG 🍃'
              )}
            </h4>
            <p className="text-xs text-art-text-muted mt-1 max-w-[240px] h-8">
              {!isPlaying 
                ? 'Phương pháp thở hộp (Hít vào 4s - Giữ 4s - Thở ra 4s) xoa dịu tâm trí cực đỉnh' 
                : (
                  breathPhase === 'inhale' ? 'Hãy để phổi nở rộng nhẹ nhàng, cơ bụng phồng đều.' :
                  breathPhase === 'hold' ? 'Nhắm mắt sảng khoái, cảm nhận sinh khí căng tràn cơ thể.' :
                  'Từ từ xẹp bụng xuống, tống khứ mọi gánh nặng uể oải ra ngoài.'
                )
              }
            </p>
 
            <div className="mt-6 flex flex-wrap items-center justify-center gap-3">
              <button
                id="breath-play-pause-btn"
                onClick={() => {
                  setIsPlaying(!isPlaying);
                  if(!isPlaying) {
                    playSingingBowl(); // welcoming bell
                  }
                }}
                className={`flex items-center gap-1.5 px-4 py-2 rounded-full text-[10px] uppercase tracking-widest font-bold shadow-sm transition-all border ${
                  isPlaying 
                    ? 'bg-art-taupe-bg hover:bg-art-divider text-art-green border-art-divider' 
                    : 'bg-art-green hover:bg-art-green-hover text-white border-transparent'
                }`}
              >
                {isPlaying ? (
                  <>
                    <Square className="w-3.5 h-3.5 fill-current" />
                    Dừng luyện thở
                  </>
                ) : (
                  <>
                    <Play className="w-3.5 h-3.5 fill-current" />
                    Bắt đầu luyện thở
                  </>
                )}
              </button>
 
              {completedCycles > 0 && (
                <div className="text-[10px] uppercase tracking-wider text-art-green font-bold bg-art-green-light px-3 py-1.5 rounded-full border border-art-border-light">
                  Chu kỳ: {completedCycles}
                </div>
              )}
            </div>
          </div>
 
        </div>
 
      </div>
    </div>
  );
}
