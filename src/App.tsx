/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect } from 'react';
import { Mail, Phone, MapPin, ExternalLink, Instagram, Sparkles, Compass, Heart, Share2, ClipboardCheck, ArrowUpRight, Menu, X, ArrowUp, Copy, Flower2, Wind, Bell, Leaf, MessageSquare } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { Helmet } from 'react-helmet-async';
import { workExperiences, educationCertificates, yogaSkills, zaloUrl } from './data';
import ZenTimer from './components/ZenTimer';
import ChakraGuide from './components/ChakraGuide';
import ClassSchedule from './components/ClassSchedule';
import Testimonials from './components/Testimonials';
import FAQSection from './components/FAQSection';
import BlurUpImage from './components/BlurUpImage';

const getSkillIcon = (iconName: string) => {
  switch (iconName) {
    case 'flower':
      return <Flower2 className="w-5 h-5" />;
    case 'wind':
      return <Wind className="w-5 h-5" />;
    case 'bell':
      return <Bell className="w-5 h-5" />;
    case 'leaf':
      return <Leaf className="w-5 h-5" />;
    default:
      return <Sparkles className="w-5 h-5" />;
  }
};

export default function App() {
  const [activeTab, setActiveTab] = useState('all');
  const [copied, setCopied] = useState(false);
  const [zenQuoteIdx, setZenQuoteIdx] = useState(0);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [toastMessage, setToastMessage] = useState<string | null>(null);
  const [activeBioTab, setActiveBioTab] = useState<'journey' | 'philosophy' | 'methods' | 'wishes'>('journey');
  const [isLoading, setIsLoading] = useState(true);
  const [breathingText, setBreathingText] = useState("Hít vào thật sâu...");

  useEffect(() => {
    const textTimer = setTimeout(() => {
      setBreathingText("Thở ra nhẹ nhàng...");
    }, 1200);

    const loadTimer = setTimeout(() => {
      setIsLoading(false);
    }, 2500);

    return () => {
      clearTimeout(textTimer);
      clearTimeout(loadTimer);
    };
  }, []);

  const leaves = [
    { id: 1, left: '5%', delay: 0, duration: 12, size: 14, rotate: 120 },
    { id: 2, left: '25%', delay: 3, duration: 15, size: 18, rotate: 240 },
    { id: 3, left: '60%', delay: 1, duration: 14, size: 12, rotate: 90 },
    { id: 4, left: '85%', delay: 5, duration: 18, size: 16, rotate: 180 },
    { id: 5, left: '45%', delay: 2, duration: 16, size: 15, rotate: 320 },
  ];

  const handleCopyToClipboard = (text: string, label: string) => {
    navigator.clipboard.writeText(text);
    setToastMessage(`Đã sao chép ${label}!`);
    setTimeout(() => {
      setToastMessage(null);
    }, 2500);
  };

  // Scroll threshold monitoring for Back To Top Button
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 500) {
        setShowScrollTop(true);
      } else {
        setShowScrollTop(false);
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const zenQuotes = [
    "“Hơi thở là cầu nối kết nối cơ thể và tâm trí. Khi hơi thở an yên, tâm trí sẽ tự tại.”",
    "“Yoga không phải là chạm vào ngón chân của bạn, mà là những gì bạn học được trên đường đi xuống.”",
    "“Tĩnh lặng bên trong là cội nguồn của mọi sức mạnh bên ngoài.”",
    "“Cơ thể bạn xứng đáng nhận được sự tử tế và trân trọng sâu sắc nhất.”"
  ];

  const handleShare = () => {
    navigator.clipboard.writeText(window.location.href);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const nextQuote = () => {
    setZenQuoteIdx((prev) => (prev + 1) % zenQuotes.length);
  };

  return (
    <>
      <Helmet>
        <title>Yoga Loan Trần - Yoga Trị Liệu, Thiền Định & Trị Liệu Sóng Âm Chuông Xoay Tây Tạng</title>
        <meta name="description" content="Huấn luyện viên Yoga Loan Trần đồng hành cùng bạn trên hành trình cân bằng sức khỏe và sự bình an. Trị liệu đau mỏi vai gáy cổ, thiền hơi thở Pranayama chuyên sâu." />
        <meta name="keywords" content="yoga loan tran, yoga tri lieu, thien dinh, luyen tho pranayama, chuong xoay tay tang, yoga thao dien, chua lanh" />
        
        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Yoga Loan Trần - Yoga Trị Liệu & Thiền Phục Hồi Sức Khỏe" />
        <meta property="og:description" content="Đồng hành cùng học viên kết nối thân tâm sâu sắc thông qua định tuyến sinh cơ học định tuyến an toàn, hơi thở Pranayama và chuông xoay Tây Tạng dẻo dai." />
        <meta property="og:image" content="https://images.unsplash.com/photo-1594381898411-846e7d193883?auto=format&fit=crop&q=80&w=800" />
        
        {/* Twitter */}
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:title" content="Yoga Loan Trần - Yoga Trị Liệu & Thiền Phục Hồi Thân Tâm" />
        <meta property="twitter:description" content="Giúp giải phóng mệt mỏi vai gáy cổ, xoa dịu áp lực tinh thần bằng hơi thở khoa học và dòng chảy âm thanh." />
        <meta property="twitter:image" content="https://images.unsplash.com/photo-1594381898411-846e7d193883?auto=format&fit=crop&q=80&w=800" />
      </Helmet>

      <AnimatePresence mode="wait">
        {isLoading && (
          <motion.div
            key="loading"
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.6, ease: "easeInOut" }}
            className="fixed inset-0 z-50 bg-art-cream flex flex-col items-center justify-center text-center p-6 select-none"
          >
            {/* Soft Ambient Glows */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-art-taupe-bg/25 rounded-full blur-3xl opacity-50 pointer-events-none" />
            <div className="absolute bottom-10 left-10 w-[250px] h-[250px] bg-art-green-light/40 rounded-full blur-2xl pointer-events-none" />
            
            {/* Decorative Fine Frame Lines */}
            <div className="absolute inset-4 sm:inset-6 border border-art-divider/30 pointer-events-none rounded-xl" />
            <div className="absolute inset-5 sm:inset-7 border border-art-divider/15 pointer-events-none rounded-lg" />

            {/* Glowing Yoga/Zen Center Breathing Rings & Exquisite Mandala */}
            <div className="relative flex items-center justify-center w-64 h-64">
              
              {/* Pulsing Breathing Ring 1 (Exquisite outer thin dashed stroke) */}
              <motion.div
                animate={{
                  scale: [1, 1.35, 1],
                  opacity: [0.15, 0.45, 0.15],
                  rotate: 360
                }}
                transition={{
                  duration: 6,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
                className="absolute w-44 h-44 rounded-full border border-dashed border-art-green/40"
              />

              {/* Pulsing Breathing Ring 2 (Thin solid stroke pulsing offset) */}
              <motion.div
                animate={{
                  scale: [1.15, 0.9, 1.15],
                  opacity: [0.2, 0.5, 0.2],
                  rotate: -180
                }}
                transition={{
                  duration: 6,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
                className="absolute w-36 h-36 rounded-full border border-art-taupe/30"
              />

              {/* Inner Glowing Aura */}
              <motion.div
                animate={{
                  scale: [0.95, 1.1, 0.95],
                  opacity: [0.08, 0.22, 0.08],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
                className="absolute w-28 h-28 rounded-full bg-art-green-light"
              />
              
              {/* Centered Mandala with Exquisite Vector Lotus Drawing */}
              <div className="z-10 w-24 h-24 rounded-full bg-white border border-art-divider/60 flex items-center justify-center shadow-lg relative group overflow-hidden">
                <div className="absolute inset-1 rounded-full border border-art-divider/20 pointer-events-none" />
                
                {/* Rotating subtle dotted bezel inside container */}
                <motion.div 
                  animate={{ rotate: 360 }}
                  transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
                  className="absolute inset-1.5 rounded-full border border-dashed border-art-taupe/20 pointer-events-none"
                />

                <motion.div
                  animate={{
                    scale: [0.95, 1.05, 0.95],
                  }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                >
                  {/* Exquisite minimal line-art Lotus */}
                  <svg className="w-12 h-12 text-art-green" viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    {/* Background petals */}
                    <path d="M50 50 C62 48, 70 56, 62 72 M50 50 C38 48, 30 56, 38 72" opacity="0.6" strokeWidth="1.2" />
                    <path d="M50 42 C72 38, 78 50, 72 70 M50 42 C28 38, 22 50, 28 70" opacity="0.4" strokeWidth="1" />
                    
                    {/* Main petals */}
                    <path d="M50 22 C55 38, 65 48, 50 80 C35 48, 45 38, 50 22 Z" strokeWidth="1.8" />
                    <path d="M50 38 C64 40, 74 50, 64 74 C54 74, 48 64, 50 38 Z" />
                    <path d="M50 38 C36 40, 26 50, 36 74 C46 74, 52 64, 50 38 Z" />
                  </svg>
                </motion.div>
              </div>
            </div>

            {/* Title & Slogan */}
            <div className="space-y-3 mt-4">
              <motion.h1
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.6 }}
                className="font-serif text-3xl sm:text-4xl text-art-green tracking-widest italic font-light"
              >
                YOGA LOAN TRẦN
              </motion.h1>

              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5, duration: 0.5 }}
                className="text-[9px] sm:text-[10px] uppercase tracking-[0.3em] text-art-taupe font-bold flex items-center justify-center gap-2"
              >
                <span className="w-1.5 h-[1px] bg-art-taupe/40" />
                Mang sự bình an đến từng nhịp thở
                <span className="w-1.5 h-[1px] bg-art-taupe/40" />
              </motion.p>
            </div>

            {/* Micro-interactive Breath Indicator Loader */}
            <div className="mt-10 max-w-xs w-2/3 mx-auto">
              <motion.div
                key={breathingText}
                initial={{ opacity: 0, y: 5 }}
                animate={{ opacity: 0.85, y: 0 }}
                exit={{ opacity: 0, y: -5 }}
                transition={{ duration: 0.3 }}
                className="flex flex-col items-center gap-2.5 justify-center"
              >
                <div className="flex items-center gap-1.5">
                  <span className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-art-green opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-art-green"></span>
                  </span>
                  <p className="text-xs italic text-art-green font-medium tracking-wide">{breathingText}</p>
                </div>
              </motion.div>

              {/* Minimal Progress Bar */}
              <div className="h-[1px] w-full bg-art-divider/40 mt-4 rounded-full overflow-hidden relative">
                <motion.div
                  initial={{ width: "0%" }}
                  animate={{ width: "100%" }}
                  transition={{ duration: 2.5, ease: "easeInOut" }}
                  className="absolute top-0 left-0 h-full bg-art-green"
                />
              </div>
            </div>

          </motion.div>
        )}
      </AnimatePresence>

      <div className="min-h-screen bg-art-cream py-4 sm:py-8 px-2 sm:px-4 md:px-8 font-sans antialiased text-art-green relative selection:bg-art-tau-bg selection:text-art-green overflow-x-hidden w-full">
        
        {/* Dynamic Floating Leaves */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
          {leaves.map((leaf) => (
            <motion.div
              key={leaf.id}
              initial={{ y: -50, x: 0, rotate: 0, opacity: 0 }}
              animate={{
                y: '105vh',
                x: ['-20px', '20px', '-20px'],
                rotate: [0, leaf.rotate, leaf.rotate * 2],
                opacity: [0, 0.45, 0.45, 0]
              }}
              transition={{
                duration: leaf.duration,
                delay: leaf.delay,
                repeat: Infinity,
                ease: "linear"
              }}
              className="absolute text-art-green/35"
              style={{ left: leaf.left }}
            >
              <svg width={leaf.size} height={leaf.size} viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2C12 2 3 9 3 15C3 18.31 5.69 21 9 21C11.66 21 13.5 19.5 15 18C18.5 14.5 21 8 21 8C21 8 15 12 12 2Z" />
              </svg>
            </motion.div>
          ))}
        </div>

        {/* Decorative Art Background Elements */}
      <div className="absolute top-[-100px] right-[-100px] w-[500px] h-[500px] bg-art-taupe-bg rounded-full opacity-40 blur-2xl pointer-events-none"></div>
      <div className="absolute bottom-[200px] left-[-100px] w-[400px] h-[400px] border border-art-border-light rounded-full opacity-30 pointer-events-none"></div>
      <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] rounded-full bg-radial-gradient from-art-green-light/40 to-transparent blur-3xl pointer-events-none" />

      {/* Main Single-Screen Master Portfolio Card (Floating Canvas matches Image 1 and 2 style) */}
      <div className="max-w-5xl mx-auto bg-white rounded-3xl border border-art-border-light shadow-[0_8px_30px_rgba(74,93,78,0.06)] overflow-hidden transition-all duration-300">
        
        {/* UPPER NAVIGATION BAR (Matches Simple CV Nav & is highly styled for Artistic Flair) */}
        <header className="px-5 py-4 sm:px-12 border-b border-art-divider flex items-center justify-between bg-white z-30 relative">
          <div className="flex items-center gap-2">
            <span className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-art-green flex items-center justify-center text-white font-serif font-bold text-base sm:text-lg shadow-sm">
              Loan
            </span>
            <div className="flex flex-col sm:flex-row sm:items-center sm:gap-2">
              <span className="font-serif tracking-widest italic text-base sm:text-lg md:text-xl text-art-green font-bold">
                YOGA LOAN TRẦN
              </span>
              <span className="inline-block text-[10px] sm:text-[11px] w-max uppercase tracking-[0.2em] font-extrabold text-art-taupe bg-art-taupe-bg px-2.5 py-1 rounded-full border border-art-divider mt-0.5 sm:mt-0">
                HLV Yoga Trị Liệu
              </span>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-x-6 xl:gap-x-8 text-sm uppercase tracking-[0.2em] font-bold text-art-text-muted">
            <a href="#about-section" className="hover:text-art-taupe transition-colors border-b-2 border-art-green text-art-green pb-1">Giới Thiệu</a>
            <a href="#experience-section" className="hover:text-art-taupe transition-colors border-b-2 border-transparent hover:border-art-taupe pb-1">Kinh Nghiệm</a>
            <a href="#skills-section" className="hover:text-art-taupe transition-colors border-b-2 border-transparent hover:border-art-taupe pb-1">Phương Pháp</a>
            <a href="#zen-section" className="hover:text-art-taupe transition-colors text-art-green flex items-center gap-1.5 pb-1">
              <Sparkles className="w-4 h-4 text-art-taupe animate-pulse" />
              Luyện thở thiền
            </a>
            <a href="#booking-section" className="hover:bg-art-green-hover hover:text-white transition-all bg-art-green text-white px-5 py-2.5 rounded-full border-2 border-art-green font-bold text-xs min-h-[44px] flex items-center shadow-xs">
              Lịch Khai Giảng
            </a>
          </nav>

          {/* Mobile Menu Button - min touch target 48x48px */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden w-12 h-12 flex items-center justify-center bg-art-taupe-bg hover:bg-art-divider text-art-green rounded-full border-2 border-art-divider transition-all focus:outline-none cursor-pointer"
            aria-label="Toggle navigation menu"
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </header>

        {/* Mobile Dropdown Navigation Menu */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.25, ease: 'easeInOut' }}
              className="lg:hidden border-b border-art-divider bg-art-cream overflow-hidden z-20 relative shadow-inner"
            >
              <nav className="flex flex-col p-6 space-y-4 text-base uppercase tracking-[0.15em] font-extrabold text-art-text-muted bg-white">
                <a
                  href="#about-section"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="hover:text-art-taupe transition-colors py-3.5 border-b-2 border-art-divider flex items-center select-none"
                >
                  Giới thiệu giảng viên
                </a>
                <a
                  href="#experience-section"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="hover:text-art-taupe transition-colors py-3.5 border-b-2 border-art-divider flex items-center select-none"
                >
                  Kinh nghiệm đứng lớp
                </a>
                <a
                  href="#skills-section"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="hover:text-art-taupe transition-colors py-3.5 border-b-2 border-art-divider flex items-center select-none"
                >
                  Phương pháp liệu pháp
                </a>
                <a
                  href="#zen-section"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="hover:text-art-taupe transition-colors py-3.5 border-b-2 border-art-divider text-art-green flex items-center gap-2 select-none"
                >
                  <Sparkles className="w-5 h-5 text-art-taupe animate-pulse" />
                  Không gian thở thiền
                </a>
                <a
                  href="#booking-section"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="bg-art-green hover:bg-art-green-hover text-white py-4 rounded-xl font-bold text-sm text-center w-full min-h-[48px] flex items-center justify-center shadow-xs transition-colors select-none uppercase tracking-wider"
                >
                  Nhận Lịch Khai Giảng Mới
                </a>
              </nav>
            </motion.div>
          )}
        </AnimatePresence>

        {/* HERO BIO PROFILE SECTION (Matches Left Portrait + Right Bio Layout in Image 1 + Artistic Flair) */}
        <section id="about-section" className="p-6 sm:p-12 lg:p-16 border-b border-art-divider relative bg-white overflow-hidden">
          
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12 items-start">
            
            {/* Left side: Vertical Portrait Image Frame */}
            <div className="md:col-span-5 lg:col-span-5 flex flex-col items-center">
              
              {/* Elegant Arch Portrait Frame matching the Artistic visual card style */}
              <div className="relative group w-full max-w-[310px] md:max-w-none aspect-[4/5] bg-art-taupe-bg rounded-t-full rounded-b-lg overflow-hidden border border-art-divider shadow-sm">
                
                {/* Real-life Elegant Calm Yoga Instructor Portrait */}
                <BlurUpImage
                  src="https://images.unsplash.com/photo-1594381898411-846e7d193883?auto=format&fit=crop&q=80&w=800"
                  alt="Loan Trần - Yoga Coach"
                  containerClassName="w-full h-full"
                  className="w-full h-full object-cover grayscale-[10%] group-hover:grayscale-0 hover:scale-105 transition-all duration-350"
                />
                
                {/* Visual circle overlap */}
                <div className="w-48 h-48 bg-art-green rounded-full opacity-10 absolute pointer-events-none top-4 left-4" />
                
                {/* High-quality subtle gradient overlap */}
                <div className="absolute inset-0 bg-gradient-to-t from-art-green/40 via-transparent to-transparent opacity-80" />
                
                {/* Floating Mantra */}
                <div className="absolute bottom-6 left-4 right-4 text-center">
                  <span className="text-[10px] text-art-taupe-bg uppercase font-bold tracking-[0.3em] block mb-1">
                    HATHA & YIN YOGA
                  </span>
                  <p className="text-sm text-white font-serif italic">
                    "Hơi thở dẫn dắt sự tĩnh tại"
                  </p>
                </div>
              </div>

              {/* Status capsule */}
              <div className="mt-5 inline-flex items-center gap-2 px-4 py-2 bg-art-green-light text-art-green border border-art-border-light hover:bg-art-taupe-bg transition-all rounded-full text-xs font-semibold cursor-pointer"
                onClick={() => {
                  const el = document.getElementById('booking-section');
                  if (el) el.scrollIntoView({ behavior: 'smooth' });
                }}
              >
                <div className="w-2.5 h-2.5 rounded-full bg-art-green animate-pulse" />
                <span className="uppercase tracking-wider text-[10px] font-bold">Đặt lịch hướng dẫn 1-Kèm-1</span>
              </div>
            </div>

            {/* Right side: High Impact Hero answering Who, Why, and Where immediately */}
            <div className="md:col-span-7 lg:col-span-7 space-y-6">
              <div>
                <span className="text-[10px] uppercase tracking-[0.3em] text-art-taupe font-bold px-3 py-1 bg-art-taupe-bg rounded-full border border-art-divider/60 inline-block mb-3.5">
                  Yoga & Mindfulness Coach
                </span>
                
                {/* BẠN LÀ AI? (Who you are) */}
                <h1 className="text-3xl sm:text-4xl lg:text-5xl font-serif text-art-green tracking-tight leading-[1.1] font-normal italic">
                  Huấn Luyện Viên <br/>
                  <span className="font-sans font-bold not-italic text-4xl sm:text-5xl lg:text-6xl text-art-green block mt-1">
                    Yoga Loan Trần
                  </span>
                </h1>
                
                {/* BẠN GIÚP AI & SỨ MỆNH (Who you help & core guidance values) */}
                <h2 className="text-sm sm:text-base font-bold text-art-taupe mt-4 uppercase tracking-[0.2em] leading-relaxed border-l-2 border-art-green pl-3">
                  Yoga Trị Liệu • Thiền • Hơi Thở • Phục Hồi Cơ Thể & Tinh Thần
                </h2>
              </div>

              <p className="text-lg sm:text-xl font-medium text-art-text-muted leading-relaxed font-sans max-w-xl">
                Đồng hành cùng học viên trên hành trình cân bằng sức khỏe và sự bình an. Giúp giải phóng mệt mỏi cột sống, xoa dịu stress qua khoa học trị liệu hơi thở của <strong className="text-art-green font-bold">Pranayama</strong> và dòng chảy sóng âm từ <strong className="text-art-green font-bold">Chuông xoay Tây Tạng</strong> nguyên bản.
              </p>

              {/* LIÊN HỆ Ở ĐÂU? (Instant tactical buttons) */}
              <div className="pt-2 flex flex-wrap items-center gap-4">
                <a
                  href={zaloUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="bg-art-green hover:bg-art-green-hover text-white px-6 py-4 rounded-full text-xs sm:text-sm uppercase tracking-widest font-extrabold shadow-md hover:shadow-lg transition-all flex items-center gap-2 cursor-pointer min-h-[48px] active:scale-95"
                >
                  <span className="w-2 h-2 rounded-full bg-white animate-pulse" />
                  Nhắn tin qua Zalo
                </a>

                <a
                  href="mailto:contact@loantran-yoga.vn"
                  className="bg-white hover:bg-art-cream text-art-green border-2 border-art-divider px-6 py-4 rounded-full text-xs sm:text-sm uppercase tracking-widest font-extrabold transition-all flex items-center gap-2 min-h-[48px] active:scale-95"
                >
                  <Mail className="w-4 h-4 text-art-taupe" />
                  Gửi Email tư vấn
                </a>

                <a
                  href="#booking-section"
                  className="bg-art-taupe-bg hover:bg-art-divider text-art-green border border-art-divider px-6 py-4 rounded-full text-xs sm:text-sm uppercase tracking-widest font-extrabold transition-all flex items-center gap-2 min-h-[48px] active:scale-95"
                  onClick={(e) => {
                    e.preventDefault();
                    const el = document.getElementById('booking-section');
                    if (el) el.scrollIntoView({ behavior: 'smooth' });
                  }}
                >
                  <ClipboardCheck className="w-4 h-4 text-art-taupe" />
                  Xem Lịch Thực Hành
                </a>
              </div>

              {/* Dynamic Mindful Quote Carousel */}
              <div className="p-4 bg-art-taupe-bg/30 border border-art-divider rounded-2xl relative overflow-hidden group">
                <div className="absolute top-2 right-3 text-[9px] text-art-taupe uppercase tracking-[0.25em] font-bold select-none">
                  Hơi Thở Hôm Nay
                </div>
                <div className="pr-12">
                  <p className="text-xs sm:text-sm font-serif italic text-art-green min-h-[40px] flex items-center leading-relaxed tracking-wide">
                    {zenQuotes[zenQuoteIdx]}
                  </p>
                </div>
                <button
                  id="next-zen-quote-btn"
                  onClick={nextQuote}
                  className="absolute bottom-2 right-4 text-[9px] text-art-taupe hover:text-art-green font-bold underline cursor-pointer uppercase tracking-wider"
                >
                  đổi câu thiền →
                </button>
              </div>

            </div>

          </div>

          {/* GIỚI THIỆU BẢN THÂN CHI TIẾT HƠN (Journey, Philosophy, Method, Wishes Tabbed System) */}
          <div className="mt-12 pt-8 border-t border-art-divider">
            <span className="text-[10px] uppercase tracking-[0.25em] font-sans font-bold text-art-taupe block text-center mb-4">
              THẤU HIỂU LOAN TRẦN
            </span>
            
            {/* Interactive Tab Headers */}
            <div className="flex flex-wrap items-center justify-center gap-3 mb-8 max-w-2xl mx-auto">
              <button
                onClick={() => setActiveBioTab('journey')}
                className={`px-5 py-3 rounded-xl text-sm sm:text-base font-bold tracking-wider transition-all select-none cursor-pointer border-2 min-h-[44px] ${
                  activeBioTab === 'journey' 
                    ? 'bg-art-green text-white border-art-green shadow-xs' 
                    : 'bg-art-taupe-bg hover:bg-art-divider text-art-green border-art-divider'
                }`}
              >
                Hành Trình Tự Thân
              </button>
              <button
                onClick={() => setActiveBioTab('philosophy')}
                className={`px-5 py-3 rounded-xl text-sm sm:text-base font-bold tracking-wider transition-all select-none cursor-pointer border-2 min-h-[44px] ${
                  activeBioTab === 'philosophy' 
                    ? 'bg-art-green text-white border-art-green shadow-xs' 
                    : 'bg-art-taupe-bg hover:bg-art-divider text-art-green border-art-divider'
                }`}
              >
                Triết Lý Giảng Dạy
              </button>
              <button
                onClick={() => setActiveBioTab('methods')}
                className={`px-5 py-3 rounded-xl text-sm sm:text-base font-bold tracking-wider transition-all select-none cursor-pointer border-2 min-h-[44px] ${
                  activeBioTab === 'methods' 
                    ? 'bg-art-green text-white border-art-green shadow-xs' 
                    : 'bg-art-taupe-bg hover:bg-art-divider text-art-green border-art-divider'
                }`}
              >
                Phương Pháp Trị Liệu
              </button>
              <button
                onClick={() => setActiveBioTab('wishes')}
                className={`px-5 py-3 rounded-xl text-sm sm:text-base font-bold tracking-wider transition-all select-none cursor-pointer border-2 min-h-[44px] ${
                  activeBioTab === 'wishes' 
                    ? 'bg-art-green text-white border-art-green shadow-xs' 
                    : 'bg-art-taupe-bg hover:bg-art-divider text-art-green border-art-divider'
                }`}
              >
                Tâm Nguyện Gửi Trao
              </button>
            </div>

            {/* Interactive Tab Body Panel */}
            <div className="bg-art-cream/35 border-2 border-art-divider rounded-2xl p-6 sm:p-10 max-w-3xl mx-auto relative overflow-hidden min-h-[180px]">
              <div className="absolute top-0 left-0 w-16 h-16 bg-white rounded-br-3xl border-r-2 border-b-2 border-art-divider/40 pointer-events-none flex items-center justify-center text-art-taupe text-lg font-serif">
                {activeBioTab === 'journey' && "01"}
                {activeBioTab === 'philosophy' && "02"}
                {activeBioTab === 'methods' && "03"}
                {activeBioTab === 'wishes' && "04"}
              </div>
              
              <div className="pl-12 sm:pl-14">
                <AnimatePresence mode="wait">
                  {activeBioTab === 'journey' && (
                    <motion.div
                      key="journey"
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      transition={{ duration: 0.2 }}
                      className="space-y-4"
                    >
                      <h4 className="font-serif italic text-lg sm:text-xl md:text-2xl text-art-green font-bold">Bắt đầu từ sự thức tỉnh của bản thân</h4>
                      <ul className="space-y-4 text-base sm:text-lg md:text-xl text-art-text-muted font-sans leading-relaxed">
                        <li className="flex items-start gap-3">
                          <span className="w-2 h-2 rounded-full bg-art-green mt-2.5 shrink-0" />
                          <span><strong>Khởi nguồn:</strong> Nhiều năm làm việc văn phòng đầy áp lực cùng triệu chứng đau mỏi vai gáy hành hạ cơ thể hằng ngày.</span>
                        </li>
                        <li className="flex items-start gap-3">
                          <span className="w-2 h-2 rounded-full bg-art-green mt-2.5 shrink-0" />
                          <span><strong>Thức tỉnh:</strong> Cảm nhận được sự thoải mái và tĩnh lặng ngay trong lần hít thở sâu đầu tiên với lớp học thở.</span>
                        </li>
                        <li className="flex items-start gap-3">
                          <span className="w-2 h-2 rounded-full bg-art-green mt-2.5 shrink-0" />
                          <span><strong>Tu tập:</strong> Tạm gác áp lực văn phòng, trực tiếp đến Rishikesh (Ấn Độ) để theo học đào tạo bài bản 500 giờ.</span>
                        </li>
                        <li className="flex items-start gap-3">
                          <span className="w-2 h-2 rounded-full bg-art-green mt-2.5 shrink-0" />
                          <span><strong>Gieo duyên lành:</strong> Trở về nước với sứ mệnh chia sẻ phương pháp phục hồi, trị liệu tốt lành cho mọi học viên.</span>
                        </li>
                      </ul>
                    </motion.div>
                  )}

                  {activeBioTab === 'philosophy' && (
                    <motion.div
                      key="philosophy"
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      transition={{ duration: 0.2 }}
                      className="space-y-4"
                    >
                      <h4 className="font-serif italic text-lg sm:text-xl md:text-2xl text-art-green font-bold">Lắng nghe để thấu hiểu giới hạn của cơ thể</h4>
                      <ul className="space-y-4 text-base sm:text-lg md:text-xl text-art-text-muted font-sans leading-relaxed">
                        <li className="flex items-start gap-3">
                          <span className="w-2 h-2 rounded-full bg-art-green mt-2.5 shrink-0" />
                          <span><strong>Tránh phô trương:</strong> Yoga không phải cuộc đua uốn dẻo ép mình quá sức vào tư thế khó để trình diễn.</span>
                        </li>
                        <li className="flex items-start gap-3">
                          <span className="w-2 h-2 rounded-full bg-art-green mt-2.5 shrink-0" />
                          <span><strong>Thấu hiểu bản thân:</strong> Tấm thảm là nơi để trò chuyện trực tiếp và lắng nghe nhịp tim, không phán xét.</span>
                        </li>
                        <li className="flex items-start gap-3">
                          <span className="w-2 h-2 rounded-full bg-art-green mt-2.5 shrink-0" />
                          <span><strong>An toàn tuyệt đối:</strong> Giáo án định tuyến khoa học giúp bảo vệ cơ và xương khớp tối đa của học viên lớn tuổi.</span>
                        </li>
                        <li className="flex items-start gap-3">
                          <span className="w-2 h-2 rounded-full bg-art-green mt-2.5 shrink-0" />
                          <span><strong>Yêu thương trọn vẹn:</strong> Tìm thấy sự nhẹ nhõm, nâng niu cả những điểm chưa hoàn hảo của cơ thể bạn.</span>
                        </li>
                      </ul>
                    </motion.div>
                  )}

                  {activeBioTab === 'methods' && (
                    <motion.div
                      key="methods"
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      transition={{ duration: 0.2 }}
                      className="space-y-4"
                    >
                      <h4 className="font-serif italic text-lg sm:text-xl md:text-2xl text-art-green font-bold">Hơi thở tự nhiên kết hợp liệu pháp chuông xoay</h4>
                      <ul className="space-y-4 text-base sm:text-lg md:text-xl text-art-text-muted font-sans leading-relaxed">
                        <li className="flex items-start gap-3">
                          <span className="w-2 h-2 rounded-full bg-art-green mt-2.5 shrink-0" />
                          <span><strong>Hatha & Yin Yoga:</strong> Phương pháp phục hồi cột sống chậm rãi, xoa dịu vùng đau nhức mãn tính hiệu quả.</span>
                        </li>
                        <li className="flex items-start gap-3">
                          <span className="w-2 h-2 rounded-full bg-art-green mt-2.5 shrink-0" />
                          <span><strong>Luyện thở Pranayama:</strong> Giúp gia tăng dung tích phổi, lọc sạch tạp chất và cải thiện tim mạch rõ rệt.</span>
                        </li>
                        <li className="flex items-start gap-3">
                          <span className="w-2 h-2 rounded-full bg-art-green mt-2.5 shrink-0" />
                          <span><strong>Chuông xoay Tây Tạng:</strong> Sóng rung giúp giải tỏa mỏi cơ sâu, đem lại giấc ngủ an lành sâu giấc hằng đêm.</span>
                        </li>
                      </ul>
                    </motion.div>
                  )}

                  {activeBioTab === 'wishes' && (
                    <motion.div
                      key="wishes"
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      transition={{ duration: 0.2 }}
                      className="space-y-4"
                    >
                      <h4 className="font-serif italic text-lg sm:text-xl md:text-2xl text-art-green font-bold">Mang sự an nhiên bước vào đời sống thường nhật</h4>
                      <ul className="space-y-4 text-base sm:text-lg md:text-xl text-art-text-muted font-sans leading-relaxed">
                        <li className="flex items-start gap-3">
                          <span className="w-2 h-2 rounded-full bg-art-green mt-2.5 shrink-0" />
                          <span><strong>Khỏe mạnh dẻo dai:</strong> Phục hồi chuyển động linh hoạt tự nhiên của lưng, vai, cổ và hông cho cơ bắp dẻo dai.</span>
                        </li>
                        <li className="flex items-start gap-3">
                          <span className="w-2 h-2 rounded-full bg-art-green mt-2.5 shrink-0" />
                          <span><strong>Năng lượng tích cực:</strong> Mỗi giờ tập giúp nạp đầy sinh khí giúp tinh thần luôn sảng khoái và vui tươi.</span>
                        </li>
                        <li className="flex items-start gap-3">
                          <span className="w-2 h-2 rounded-full bg-art-green mt-2.5 shrink-0" />
                          <span><strong>Tĩnh tai giữa bộn bề:</strong> Có được sự kiên nhẫn, điềm tĩnh tuyệt vời trước những lo toan, guồng quay hối hả thường nhật.</span>
                        </li>
                      </ul>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </div>
          </div>

          {/* STATISTICAL ACHIEVEMENTS ROW (Trust Row Section) */}
          <div className="mt-12 pt-8 border-t border-art-divider">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
              
              <div className="bg-art-cream/25 p-4 rounded-xl border border-art-divider/60 flex flex-col items-center justify-center hover:scale-[1.02] hover:bg-art-cream/40 transition-all duration-300">
                <span className="font-serif text-2xl sm:text-3xl text-art-green font-bold">8+ Năm</span>
                <span className="text-[9px] uppercase tracking-[0.15em] font-bold text-art-taupe mt-1.5">Giảng Dạy Thực Chiến</span>
              </div>

              <div className="bg-art-cream/25 p-4 rounded-xl border border-art-divider/60 flex flex-col items-center justify-center hover:scale-[1.02] hover:bg-art-cream/40 transition-all duration-300">
                <span className="font-serif text-2xl sm:text-3xl text-art-green font-bold">500+</span>
                <span className="text-[9px] uppercase tracking-[0.15em] font-bold text-art-taupe mt-1.5">Học Viên Phục Hồi</span>
              </div>

              <div className="bg-art-cream/25 p-4 rounded-xl border border-art-divider/60 flex flex-col items-center justify-center hover:scale-[1.02] hover:bg-art-cream/40 transition-all duration-300">
                <span className="font-serif text-2xl sm:text-3xl text-art-green font-bold">1000+ Giờ</span>
                <span className="text-[9px] uppercase tracking-[0.15em] font-bold text-art-taupe mt-1.5">Đứng Lớp Trực Tiếp</span>
              </div>

              <div className="bg-art-cream/25 p-4 rounded-xl border border-art-divider/60 flex flex-col items-center justify-center hover:scale-[1.02] hover:bg-art-cream/40 transition-all duration-300">
                <div className="flex items-center gap-1 font-serif text-2xl sm:text-3xl text-art-green font-bold justify-center">
                  <span>4.9</span>
                  <span className="text-amber-500 text-[18px]">★</span>
                </div>
                <span className="text-[9px] uppercase tracking-[0.15em] font-bold text-art-taupe mt-1.5">Đánh Giá Hài Lòng</span>
              </div>

            </div>
          </div>

        </section>

        {/* TIMELINE & CERTIFICATIONS SECTION (Grid splits into: Left Employment & Right Education/Skills, matches Image 1 & 2 content with Artistic Flair) */}
        <section id="experience-section" className="p-6 sm:p-12 lg:p-16 border-b border-art-divider bg-white grid grid-cols-1 lg:grid-cols-12 gap-12">
          
          {/* Left Side: Employment / Kinh nghiệm giảng dạy (Matches Left Side layout in image 1/2) */}
          <div className="lg:col-span-7 space-y-8">
            <div className="border-b border-art-taupe-bg pb-4">
              <span className="text-xs uppercase tracking-[0.3em] font-semibold text-art-taupe block">
                Career Chronicle
              </span>
              <h2 className="text-2xl sm:text-3xl font-serif text-art-green mt-1 font-normal italic">
                Kinh Nghiệm Giảng Dạy
              </h2>
            </div>

            <div className="relative border-l-2 border-art-border-light pl-6 space-y-10 py-2">
              {workExperiences.map((job) => (
                <div key={job.id} className="relative group/timeline">
                  
                  {/* Decorative professional clay green dot */}
                  <div className="absolute -left-[31px] top-1.5 w-4 h-4 rounded-full border-2 border-white bg-art-green shadow-sm group-hover/timeline:scale-125 transition-transform" />

                  <span className="text-[10px] uppercase font-mono tracking-widest text-art-taupe block">
                    {job.period}
                  </span>
                  
                  <h3 className="text-base sm:text-lg font-serif text-art-green mt-1 group-hover/timeline:text-art-taupe transition-colors leading-snug font-medium">
                    {job.role}
                  </h3>
                  
                  <h4 className="text-xs uppercase tracking-widest font-extrabold text-art-text-muted mt-0.5 font-sans">
                    @{job.company}
                  </h4>
                  
                  <p className="text-xs sm:text-sm text-art-text-muted mt-2 leading-relaxed">
                    {job.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Right Side: Education & Key Skills (Matches Right Side layout in image 1/2) */}
          <div id="skills-section" className="lg:col-span-5 space-y-12">
            
            {/* Upper Right: Education */}
            <div className="space-y-5">
              <div className="border-b border-art-taupe-bg pb-3">
                <span className="text-xs uppercase tracking-[0.3em] font-semibold text-art-taupe block">
                  Credentials & Audits
                </span>
                <h2 className="text-xl sm:text-2xl font-serif text-art-green mt-1 font-normal">
                  Bằng Cấp & Chứng Chỉ
                </h2>
              </div>

              <div className="space-y-4">
                {educationCertificates.map((edu) => (
                  <div key={edu.id} className="p-4 bg-art-cream border border-art-border-light rounded-xl hover:border-art-taupe transition-colors shadow-2xs">
                    <span className="inline-block px-2.5 py-0.5 bg-art-taupe-bg text-art-taupe text-[9px] font-mono tracking-widest uppercase rounded">
                      NĂM {edu.year}
                    </span>
                    <h3 className="text-xs sm:text-sm font-semibold text-art-green mt-2 leading-snug font-sans">
                      {edu.title}
                    </h3>
                    <p className="text-xs text-art-text-muted mt-0.5">
                      {edu.institution}
                    </p>
                    {edu.gpaOrDetail && (
                      <span className="block mt-1.5 text-[10px] text-art-taupe italic font-semibold font-sans">
                        ↳ Chú thích: {edu.gpaOrDetail}
                      </span>
                    )}
                  </div>
                ))}
              </div>
            </div>

            {/* Lower Right: Key Skills */}
            <div className="space-y-5">
              <div className="border-b border-art-taupe-bg pb-3 flex items-start justify-between">
                <div>
                  <span className="text-xs uppercase tracking-[0.3em] font-bold text-art-taupe block">
                    Expertise Spectrum
                  </span>
                  <h2 className="text-xl sm:text-2xl font-serif text-art-green mt-1 font-normal">
                    Kỹ Năng & Liệu Pháp
                  </h2>
                </div>
                <div className="w-8 h-8 rounded-full bg-art-taupe-bg/50 border border-art-divider flex items-center justify-center text-art-green">
                  <Flower2 className="w-4 h-4 text-art-green" />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                {yogaSkills.map((skill) => (
                  <div key={skill.id} className="group/skill">
                    <div className="flex gap-3 items-start">
                      <div className="flex-shrink-0 bg-art-taupe-bg w-10 h-10 border border-art-divider rounded-xl flex items-center justify-center transition-all duration-300 group-hover/skill:bg-art-green group-hover/skill:border-art-green group-hover/skill:text-white text-art-green">
                        {getSkillIcon(skill.icon)}
                      </div>
                      <div>
                        <h3 className="text-xs sm:text-sm font-bold text-art-green font-sans group-hover/skill:text-art-taupe transition-colors leading-tight">
                          {skill.name}
                        </h3>
                        <p className="text-[11px] leading-relaxed text-art-text-muted mt-1">
                          {skill.description}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

          </div>

        </section>

        {/* INTERACTIVE WIDGET A: CHAKRA MOOD POSTURE RECOMMENDATIONS */}
        <section className="p-6 sm:p-12 lg:p-16 border-b border-art-divider bg-white">
          <ChakraGuide />
        </section>

        {/* INTERACTIVE WIDGET B: BREATHING GUIDE & SOUND HEALING SESSIONS */}
        <section className="p-6 sm:p-12 lg:p-16 border-b border-art-divider bg-white">
          <ZenTimer />
        </section>

        {/* CLASS SCHEDULE SECTION */}
        <section className="p-6 sm:p-12 lg:p-16 border-b border-art-divider bg-art-cream">
          <ClassSchedule />
        </section>

        {/* STUDENT TESTIMONIALS SECTION */}
        <section className="p-6 sm:p-12 lg:p-16 border-b border-art-divider bg-white">
          <Testimonials />
        </section>

        {/* FAQ ACCORDION SECTION */}
        <section className="p-6 sm:p-12 lg:p-16 border-b border-art-divider bg-art-cream/40">
          <FAQSection />
        </section>

        {/* EXTREMELY ACCESSIBLE CONTACT HUB FOR ELDERLY */}
        <section id="contact-hub-section" className="p-6 sm:p-12 lg:p-16 border-b border-art-divider bg-white">
          <div className="max-w-4xl mx-auto text-center space-y-6">
            <span className="text-[12px] sm:text-xs uppercase tracking-[0.25em] font-sans font-bold text-art-taupe bg-art-cream px-4 py-2 border-2 border-art-divider rounded-full inline-block">
              HỖ TRỢ TRỰC TIẾP TẬN TÂM
            </span>
            <h3 className="text-3xl sm:text-4xl font-serif text-art-green font-bold italic">
              Bắt Đầu Hành Trình Sức Khỏe Ngay Hôm Nay
            </h3>
            <p className="text-lg sm:text-xl text-art-text-muted max-w-2xl mx-auto leading-relaxed font-medium">
              Quý học viên từ 40 đến 70+ tuổi có thể liên hệ trực tiếp cho Huấn luyện viên Loan Trần qua các phương thức bên dưới. Tất cả các nút đều được thiết kế kích thước lớn, dễ đọc và tự động mở ứng dụng điện thoại/email để kết nối nhanh nhất:
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-6">
              
              {/* Call Hotline */}
              <a 
                href="tel:+84901234567"
                className="bg-art-green hover:bg-art-green-hover text-white p-6 rounded-2xl flex flex-col items-center justify-center gap-3.5 shadow-md hover:shadow-xl transition-all duration-300 min-h-[140px] focus:outline-none focus:ring-4 focus:ring-art-green/40 active:scale-95 text-center cursor-pointer"
              >
                <div className="w-14 h-14 bg-white/10 rounded-full flex items-center justify-center">
                  <Phone className="w-8 h-8 text-white stroke-[2.5]" />
                </div>
                <div>
                  <span className="block text-xs uppercase tracking-widest font-extrabold text-white/80">Nhấn Gọi Điện Hotline</span>
                  <span className="block text-lg sm:text-xl font-bold font-sans mt-1">+84 901 234 567</span>
                </div>
              </a>

              {/* Zalo messaging */}
              <a 
                href={zaloUrl}
                target="_blank"
                rel="noreferrer"
                className="bg-[#0068FF] hover:bg-[#0051C4] text-white p-6 rounded-2xl flex flex-col items-center justify-center gap-3.5 shadow-md hover:shadow-xl transition-all duration-300 min-h-[140px] focus:outline-none focus:ring-4 focus:ring-blue-300 active:scale-95 text-center cursor-pointer"
              >
                <div className="w-14 h-14 bg-white/10 rounded-full flex items-center justify-center">
                  <MessageSquare className="w-8 h-8 text-white stroke-[2.5]" />
                </div>
                <div>
                  <span className="block text-xs uppercase tracking-widest font-extrabold text-white/80">Nhấn Nhắn Tin Zalo</span>
                  <span className="block text-lg sm:text-xl font-bold font-sans mt-1">Zalo: Loan Trần Yoga</span>
                </div>
              </a>

              {/* Email application */}
              <a 
                href="mailto:contact@loantran-yoga.vn"
                className="bg-art-taupe-bg hover:bg-art-divider text-art-green p-6 rounded-2xl flex flex-col items-center justify-center gap-3.5 border-2 border-art-divider shadow-sm hover:shadow-md transition-all duration-300 min-h-[140px] focus:outline-none focus:ring-4 focus:ring-art-taupe/20 active:scale-95 text-center cursor-pointer"
              >
                <div className="w-14 h-14 bg-art-green/10 rounded-full flex items-center justify-center">
                  <Mail className="w-8 h-8 text-art-green stroke-[2.5]" />
                </div>
                <div>
                  <span className="block text-xs uppercase tracking-widest font-extrabold text-art-green/80">Nhấn Gửi Thư Điện Tử</span>
                  <span className="block text-base sm:text-lg font-bold font-sans mt-1 break-all">contact@loantran-yoga.vn</span>
                </div>
              </a>

            </div>

            <div className="bg-art-cream border-2 border-art-divider p-5 sm:p-6 rounded-xl flex items-center gap-4 text-left max-w-xl mx-auto mt-6">
              <span className="text-4xl">🧘‍♀️</span>
              <p className="text-base text-art-text-muted leading-relaxed font-bold">
                <strong>An tâm cùng Huấn luyện viên:</strong> Nếu quý vị cần trao đổi kỹ hơn về thể trạng đau cột sống, mất ngủ của mình, chỉ cần kết nối theo nút nhấn ở trên. Loan Trần luôn sẵn lòng lắng nghe và đưa ra những tư vấn phù hợp nhất.
              </p>
            </div>
          </div>
        </section>

        {/* CORE PORTFOLIO FOOTER */}
        <footer className="bg-art-taupe-bg/25 border-t border-art-divider py-12 px-6 sm:px-12 md:px-16 z-10 relative">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12 text-left">
            
            {/* Column 1: Brand & Message */}
            <div className="md:col-span-6 space-y-3.5">
              <div className="flex items-center gap-2">
                <span className="w-8 h-8 rounded-full bg-art-green flex items-center justify-center text-white font-serif font-bold text-sm shadow-sm">
                  Loan
                </span>
                <span className="font-serif tracking-widest italic text-base text-art-green font-medium">
                  YOGA LOAN TRẦN
                </span>
              </div>
              <p className="text-sm font-serif italic text-art-green/90 leading-relaxed max-w-sm">
                "Mang sự bình an đến từ hơi thở."
              </p>
              <p className="text-xs text-art-text-muted leading-relaxed max-w-sm">
                Đồng hành cùng học viên kết nối thân tâm sâu sắc thông qua phương pháp định tuyến khoa học, thiền định hơi thở Pranayama và trị liệu rung động chuông xoay Himalaya.
              </p>
            </div>

            {/* Column 2: Quick Links */}
            <div className="md:col-span-3 space-y-3">
              <h3 className="text-[10px] uppercase tracking-[0.25em] font-sans font-bold text-art-taupe border-b border-art-divider pb-1">
                Liên kết nhanh
              </h3>
              <ul className="space-y-2 text-xs font-semibold text-art-text-muted">
                <li>
                  <a href="#about-section" className="hover:text-art-green transition-colors flex items-center gap-1.5 py-0.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-art-taupe/60" />
                    Giới Thiệu (About)
                  </a>
                </li>
                <li>
                  <a href="#booking-section" className="hover:text-art-green transition-colors flex items-center gap-1.5 py-0.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-art-taupe/60" />
                    Lịch tập (Classes)
                  </a>
                </li>
                <li>
                  <a href="#faq-section" className="hover:text-art-green transition-colors flex items-center gap-1.5 py-0.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-art-taupe/60" />
                    Hỏi đáp thường gặp (FAQ)
                  </a>
                </li>
              </ul>
            </div>

            {/* Column 3: Contact */}
            <div className="md:col-span-3 space-y-3">
              <h3 className="text-[10px] uppercase tracking-[0.25em] font-sans font-bold text-art-taupe border-b border-art-divider pb-1">
                Liên hệ (Contact)
              </h3>
              <ul className="space-y-2 text-xs text-art-text-muted font-medium">
                <li className="flex items-center gap-2">
                  <Mail className="w-3.5 h-3.5 text-art-taupe shrink-0" />
                  <a href="mailto:contact@loantran-yoga.vn" className="hover:text-art-green hover:underline break-all">
                    contact@loantran-yoga.vn
                  </a>
                </li>
                <li className="flex items-center gap-2">
                  <Phone className="w-3.5 h-3.5 text-art-taupe shrink-0" />
                  <a href="tel:+84901234567" className="hover:text-art-green hover:underline">
                    +84 901 234 567
                  </a>
                </li>
                <li className="flex items-center gap-2">
                  <MapPin className="w-3.5 h-3.5 text-art-taupe shrink-0" />
                  <span>Studio Thảo Điền, Q2, HCM</span>
                </li>
              </ul>
            </div>

          </div>

          <div className="mt-8 pt-6 border-t border-art-divider/60 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-art-text-muted">
            <p>© {new Date().getFullYear()} Yoga Loan Trần. Bảo lưu mọi quyền.</p>
            <p className="italic">Năng lượng an tĩnh dẫn lối cuộc sống hạnh phúc • Namaste</p>
          </div>
        </footer>

      </div>

      {/* FLOATING QUICK CONTACT FOR SENIORS */}
      {/* Desktop/Tablet Floating Widgets */}
      <div className="hidden sm:flex fixed bottom-8 left-8 z-50 items-center gap-3">
        <a 
          href="tel:+84901234567"
          className="bg-art-green hover:bg-art-green-hover text-white px-5 py-3.5 rounded-full font-bold flex items-center gap-2.5 shadow-lg border border-white/25 active:scale-95 transition-all text-sm cursor-pointer"
          title="Gọi điện tư vấn trực tiếp"
        >
          <Phone className="w-4.5 h-4.5" />
          <span>Gọi ngay: +84 901 234 567</span>
        </a>
        <a 
          href={zaloUrl}
          target="_blank"
          rel="noreferrer"
          className="bg-[#0068FF] hover:bg-[#0051C4] text-white px-5 py-3.5 rounded-full font-bold flex items-center gap-2.5 shadow-lg border border-white/25 active:scale-95 transition-all text-sm cursor-pointer"
          title="Nhắn tin Zalo"
        >
          <MessageSquare className="w-4.5 h-4.5" />
          <span>Nhắn Zalo</span>
        </a>
      </div>

      {/* Mobile Sticky Bottom Floating Action Bar */}
      <div className="sm:hidden fixed bottom-0 left-0 right-0 z-50 bg-white border-t-2 border-art-divider p-3.5 flex gap-3 shadow-[0_-6px_20px_rgba(43,58,46,0.12)]">
        <a 
          href="tel:+84901234567"
          className="flex-1 bg-art-green hover:bg-art-green-hover text-white text-base font-bold py-3.5 rounded-xl flex items-center justify-center gap-2.5 min-h-[48px] shadow-sm select-none"
        >
          <Phone className="w-5 h-5 shrink-0 stroke-[2.5]" />
          <span>Gọi Trực Tiếp</span>
        </a>
        <a 
          href={zaloUrl}
          target="_blank"
          rel="noreferrer"
          className="flex-1 bg-[#0068FF] hover:bg-[#0051C4] text-white text-base font-bold py-3.5 rounded-xl flex items-center justify-center gap-2.5 min-h-[48px] shadow-sm select-none"
        >
          <MessageSquare className="w-5 h-5 shrink-0 stroke-[2.5]" />
          <span>Nhắn Zalo</span>
        </a>
      </div>

      {/* FLOATING BACK TO TOP BUTTON - Position shifted up in mobile to prevent sticky bar overlap */}
      <AnimatePresence>
        {showScrollTop && (
          <motion.button
            initial={{ opacity: 0, scale: 0.8, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 20 }}
            onClick={scrollToTop}
            id="back-to-top-btn"
            className="fixed bottom-24 right-5 sm:bottom-8 sm:right-8 z-40 w-12 h-12 rounded-full bg-art-green hover:bg-art-green-hover text-white flex items-center justify-center shadow-lg transition-all border border-white/20 select-none cursor-pointer focus:outline-none focus:ring-4 focus:ring-art-green/35"
            title="Quay lại đầu trang"
            aria-label="Quay lại đầu trang"
          >
            <ArrowUp className="w-6 h-6 stroke-[3]" />
          </motion.button>
        )}
      </AnimatePresence>

      {/* TOAST FEEDBACK NOTIFICATION - Shifted up in mobile to prevent sticky bar overlap */}
      <AnimatePresence>
        {toastMessage && (
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 30 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            transition={{ type: 'spring', damping: 25, stiffness: 380 }}
            className="fixed bottom-24 left-5 right-5 sm:bottom-8 sm:left-auto sm:right-24 sm:w-85 z-50 bg-art-green text-white px-5 py-4 rounded-xl shadow-xl border border-white/10 flex items-center gap-3 select-none"
          >
            <div className="w-2.5 h-2.5 rounded-full bg-art-cream animate-pulse shrink-0" />
            <div className="flex-1">
              <p className="text-sm font-bold tracking-wide font-sans">{toastMessage}</p>
            </div>
            <button
              onClick={() => setToastMessage(null)}
              className="text-white/80 hover:text-white text-sm font-extrabold leading-none cursor-pointer p-1"
            >
              ✕
            </button>
          </motion.div>
        )}
      </AnimatePresence>

    </div>
    </>
  );
}
