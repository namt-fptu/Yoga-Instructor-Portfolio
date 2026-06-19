import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Calendar, Clock, Sparkles, MessageSquare, ExternalLink, HelpCircle, FileText, CheckCircle } from 'lucide-react';
import { classSchedules, facebookUrl, zaloUrl } from '../data';
import { ClassScheduleItem } from '../types';

const getDayLabel = (d: string) => {
  switch (d) {
    case 'Tất cả': return { abbr: '🍃', label: 'Tất cả' };
    case 'Thứ Hai': return { abbr: 'T2', label: 'Thứ Hai' };
    case 'Thứ Ba': return { abbr: 'T3', label: 'Thứ Ba' };
    case 'Thứ Tư': return { abbr: 'T4', label: 'Thứ Tư' };
    case 'Thứ Năm': return { abbr: 'T5', label: 'Thứ Năm' };
    case 'Thứ Sáu': return { abbr: 'T6', label: 'Thứ Sáu' };
    case 'Thứ Bảy': return { abbr: 'T7', label: 'Thứ Bảy' };
    default: return { abbr: '•', label: d };
  }
};

export default function ClassSchedule() {
  const [selectedDay, setSelectedDay] = useState<string>('Tất cả');
  const [selectedLevel, setSelectedLevel] = useState<string>('Tất cả');
  const [justClicked, setJustClicked] = useState<string | null>(null);

  const days = ['Tất cả', 'Thứ Hai', 'Thứ Ba', 'Thứ Tư', 'Thứ Năm', 'Thứ Sáu', 'Thứ Bảy'];
  const levels = ['Tất cả', 'Cơ bản', 'Mọi cấp độ', 'Trị liệu sâu'];

  // Filter schedules
  const filteredSchedules = classSchedules.filter((sch) => {
    const matchesDay = selectedDay === 'Tất cả' || sch.day === selectedDay;
    const matchesLevel = selectedLevel === 'Tất cả' || sch.level === selectedLevel;
    return matchesDay && matchesLevel;
  });

  const handleContactAction = (platform: 'Zalo' | 'Facebook', className: string) => {
    setJustClicked(platform);
    setTimeout(() => setJustClicked(null), 3000);

    const url = platform === 'Zalo' ? zaloUrl : facebookUrl;
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  return (
    <div id="booking-section" className="bg-white border border-art-border-light rounded-2xl p-4 sm:p-8 lg:p-10 shadow-[0_4px_24px_rgba(74,93,78,0.02)]">
      
      {/* Refined Header */}
      <div className="text-center max-w-2xl mx-auto mb-8 sm:mb-10">
        <span className="text-[10px] uppercase tracking-[0.25em] font-semibold text-art-taupe bg-art-cream px-4 py-1.5 border border-art-divider rounded-full shadow-2xs inline-flex items-center gap-1.5">
          <Calendar className="w-3 h-3 text-art-green" />
          LỊCH TRÌNH THÂN TÂM
        </span>
        <h3 className="text-2xl sm:text-3xl lg:text-4xl font-serif mt-3 text-art-green tracking-wide font-normal italic">
          Lịch Thực Hành Yoga & Thở Thiền
        </h3>
        <p className="text-xs sm:text-sm text-art-text-muted mt-2.5 leading-relaxed">
          Học Viện Yoga Cân Bằng thiết kế các khung giờ đa dạng từ bình minh tĩnh lặng tới hoàng hôn phục hồi, phù hợp cho mọi hiện trạng cơ thể. Tham khảo bảng giờ và nhấn liên kết phía dưới để trao đổi trực tiếp lịch tập riêng biệt.
        </p>
      </div>

      {/* Interactive Filters redesigned with beautiful scrolling day buttons on mobile */}
      <div className="mb-6 sm:mb-8 p-4 sm:p-5 bg-art-cream rounded-2xl border border-art-divider/60 space-y-5">
        
        {/* Day Filters */}
        <div>
          <div className="flex items-center justify-between mb-3 px-0.5">
            <span className="block text-[10px] uppercase tracking-[0.2em] text-art-taupe font-bold">
              Lọc theo Thứ trong tuần:
            </span>
            <span className="block sm:hidden text-[9px] text-art-taupe/60 italic font-medium">
              Vuốt ngang để xem ➜
            </span>
          </div>
          
          <div className="flex overflow-x-auto gap-2 pb-2 -mx-4 px-4 sm:mx-0 sm:px-0 scrollbar-none [mask-image:linear-gradient(to_right,white_92%,transparent)] sm:[mask-image:none] -webkit-overflow-scrolling-touch">
            {days.map((day) => {
              const dayInfo = getDayLabel(day);
              const isSelected = selectedDay === day;
              return (
                <button
                  key={day}
                  onClick={() => setSelectedDay(day)}
                  className={`flex flex-col items-center justify-center py-2 px-3.5 rounded-xl min-w-[70px] transition-all relative cursor-pointer select-none active:scale-95 border ${
                    isSelected
                      ? 'bg-art-green text-white shadow-sm border-art-green font-medium'
                      : 'bg-white hover:bg-art-taupe-bg text-art-text border-art-divider/60'
                  }`}
                >
                  <span className={`text-sm font-serif font-bold ${isSelected ? 'text-white' : 'text-art-green'}`}>
                    {dayInfo.abbr}
                  </span>
                  <span className={`text-[9px] uppercase tracking-wider mt-0.5 opacity-80 font-sans font-bold ${isSelected ? 'text-white/90' : 'text-art-taupe'}`}>
                    {dayInfo.label.replace('Thứ ', '')}
                  </span>
                  {isSelected && (
                    <motion.div
                      layoutId="selectedDayDot"
                      className="absolute bottom-1 w-1 h-1 rounded-full bg-white"
                      transition={{ type: "spring", stiffness: 380, damping: 30 }}
                    />
                  )}
                </button>
              );
            })}
          </div>
        </div>

        {/* Level Filters */}
        <div className="pt-3 border-t border-art-divider/45">
          <span className="block text-[10px] uppercase tracking-[0.2em] text-art-taupe font-bold mb-2.5">
            Lọc theo trình độ / cấp độ:
          </span>
          <div className="flex flex-wrap gap-2">
            {levels.map((lvl) => {
              const isSelected = selectedLevel === lvl;
              return (
                <button
                  key={lvl}
                  onClick={() => setSelectedLevel(lvl)}
                  className={`px-4 py-1.5 rounded-full text-[11px] font-semibold tracking-wide transition-all cursor-pointer active:scale-95 border ${
                    isSelected
                      ? 'bg-art-taupe text-white shadow-xs border-art-taupe'
                      : 'bg-white hover:bg-art-taupe-bg text-art-text-muted border-art-divider/50'
                  }`}
                >
                  {lvl}
                </button>
              );
            })}
          </div>
        </div>

      </div>

      {/* Schedule Render Grid with fully response visual treatment */}
      <div className="space-y-4 min-h-[150px]">
        <AnimatePresence mode="popLayout">
          {filteredSchedules.length === 0 ? (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
              className="text-center py-10 px-4 border border-dashed border-art-divider rounded-xl text-xs text-art-text-muted bg-art-cream/40"
            >
              Chưa tìm thấy buổi học phù hợp với bộ lọc đã chọn. Hãy chọn một "Thứ trong tuần" hoặc "Cấp độ" khác.
            </motion.div>
          ) : (
            filteredSchedules.map((sch) => {
              // Status Badge styles
              let statusBg = '';
              let statusText = '';
              const isFull = sch.status === 'Góc thiền đầy';
              
              if (sch.status === 'Còn chỗ') {
                statusBg = 'bg-art-green-light text-art-green border border-art-border-light';
                statusText = 'Còn chỗ tập';
              } else if (sch.status === 'Chỉ còn 1 chỗ') {
                statusBg = 'bg-amber-50 text-amber-800 border border-amber-200';
                statusText = 'Chỉ còn 1 chỗ';
              } else {
                statusBg = 'bg-gray-100 text-gray-500 border border-gray-200';
                statusText = 'Lớp đã đầy';
              }

              return (
                <motion.div
                  key={sch.id}
                  layout
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -12 }}
                  transition={{ duration: 0.25 }}
                  className="p-4 sm:p-5 bg-white border border-art-divider/60 hover:border-art-green/40 hover:bg-art-cream/20 rounded-2xl transition-all duration-300 shadow-3xs hover:shadow-xs flex flex-col md:grid md:grid-cols-12 gap-3 md:gap-4 items-stretch md:items-center relative overflow-hidden group"
                >
                  {/* Subtle highlight bar on active hover on the left border */}
                  <div className="absolute left-0 top-0 bottom-0 w-1.5 bg-art-green opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />

                  {/* Left segment: Day, Time & Mobile Status Header */}
                  <div className="md:col-span-3 flex md:flex-col items-center md:items-start justify-between md:justify-center gap-2 pb-2.5 md:pb-0 border-b border-art-divider/40 md:border-b-0">
                    <div className="space-y-1">
                      <span className="inline-block px-2.5 py-0.5 bg-art-taupe-bg text-art-taupe text-[9px] uppercase tracking-widest font-bold rounded">
                        {sch.day}
                      </span>
                      <div className="flex items-center gap-1.5 text-xs sm:text-sm text-art-green font-semibold mt-1">
                        <Clock className="w-3.5 h-3.5 text-art-taupe" />
                        <span className="font-mono tracking-wide">{sch.time}</span>
                      </div>
                    </div>
                    {/* Status on Mobile aligns beautifully on the right */}
                    <div className="md:hidden">
                      <span className={`inline-block px-2.5 py-1 rounded-full text-[9px] font-bold uppercase tracking-wider ${statusBg}`}>
                        {statusText}
                      </span>
                    </div>
                  </div>

                  {/* Center segment: Class Info */}
                  <div className="md:col-span-5 lg:col-span-5 space-y-1.5 py-1 md:py-0">
                    <h4 className="text-base sm:text-lg font-serif font-medium text-art-green leading-snug group-hover:text-art-taupe transition-colors">
                      {sch.className}
                    </h4>
                    <div className="flex flex-wrap items-center gap-2 text-[10px] sm:text-[11px] text-art-text-muted">
                      <span className="font-mono tracking-wide bg-art-taupe-bg/50 px-2 py-0.5 rounded text-art-taupe-dark">{sch.duration}</span>
                      <span className="text-art-divider/80">•</span>
                      <span className="bg-art-cream px-2 py-0.5 rounded border border-art-divider/30 text-art-taupe font-medium">Cấp độ: {sch.level}</span>
                    </div>
                  </div>

                  {/* Status Indicator (Shown on Desktop, hidden on Mobile) */}
                  <div className="hidden md:flex md:col-span-2 lg:col-span-2 items-center justify-center">
                    <span className={`inline-block px-3 py-1.5 rounded-full text-[9px] font-bold uppercase tracking-wider text-center ${statusBg}`}>
                      {statusText}
                    </span>
                  </div>

                  {/* Right segment: Contact CTAs, side-by-side on mobile, stacked on desktop */}
                  <div className="md:col-span-2 flex flex-row md:flex-col gap-2 w-full mt-1 sm:mt-2 md:mt-0">
                    <button
                      onClick={() => handleContactAction('Facebook', sch.className)}
                      className="flex-1 md:w-full text-center bg-[#1877F2]/5 hover:bg-[#1877F2]/10 text-[#1877F2] py-2.5 rounded-xl text-[10px] font-bold uppercase tracking-wider transition-all duration-200 flex items-center justify-center gap-1.5 border border-[#1877F2]/10 hover:border-[#1877F2]/30 cursor-pointer active:scale-98"
                    >
                      <span>FB Đăng ký</span>
                      <ExternalLink className="w-3 h-3" />
                    </button>
                    <button
                      onClick={() => handleContactAction('Zalo', sch.className)}
                      className="flex-1 md:w-full text-center bg-art-green hover:bg-art-green-hover text-white py-2.5 rounded-xl text-[10px] font-bold uppercase tracking-wider transition-all duration-200 flex items-center justify-center gap-1.5 cursor-pointer active:scale-98 shadow-2xs hover:shadow-xs"
                    >
                      <span>{isFull ? 'Zalo Chờ Lớp' : 'Zalo Ghi Danh'}</span>
                      <MessageSquare className="w-3 h-3" />
                    </button>
                  </div>
                </motion.div>
              );
            })
          )}
        </AnimatePresence>
      </div>

      {/* Main Multi-channel Registration Guidance Box */}
      <div className="mt-10 p-6 bg-art-taupe-bg/40 border border-art-divider rounded-xl">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-center">
          
          <div className="md:col-span-8 space-y-2">
            <h4 className="text-lg font-serif text-art-green">
              Bạn Muốn Đăng Ký Trực Tiếp Hoặc Nhận Tư Vấn Riêng?
            </h4>
            <p className="text-xs sm:text-sm text-art-text-muted leading-relaxed">
              Học Viện không tích hợp tính năng thanh toán hay biểu mẫu lưu trữ rườm rà tại đây nhằm tôn trọng tính riêng tư của bạn. Bạn hãy nhấp vào các liên kết trực tiếp bên dưới, gửi tin nhắn tới Học Viện qua Zalo hoặc Messenger để được tư vấn lộ trình phù hợp và sắp xếp chỗ sớm nhất.
            </p>
          </div>

          <div className="md:col-span-4 flex flex-col gap-3 w-full self-start md:self-center">
            
            <a
              href={zaloUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full bg-art-green hover:bg-art-green-hover text-white py-3 px-4 rounded-xl text-xs uppercase tracking-widest font-bold font-sans flex items-center justify-center gap-2 transition-all shadow-2xs hover:shadow-xs text-center"
            >
              <MessageSquare className="w-4 h-4" />
              Gửi Tin Nhắn Zalo
            </a>

            <a
              href={facebookUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full bg-white hover:bg-art-cream text-[#1877F2] border border-[#1877F2]/30 hover:border-[#1877F2] py-3 px-4 rounded-xl text-xs uppercase tracking-widest font-bold font-sans flex items-center justify-center gap-2 transition-all text-center"
            >
              <ExternalLink className="w-4 h-4 text-[#1877F2]" />
              Nhắn Qua Facebook
            </a>
          </div>

        </div>

        {/* Small check assurance status */}
        <div className="mt-4 pt-3 border-t border-art-divider flex items-center gap-2 text-[11px] text-art-text-muted select-none">
          <CheckCircle className="w-4 h-4 text-art-green" />
          <span>Học Viện hoạt động trực tuyến 24/7. Bạn thường sẽ nhận được câu trả lời từ chúng tôi trong vòng 10-15 phút.</span>
        </div>
      </div>

      {justClicked && (
        <div className="fixed bottom-4 right-4 z-50 bg-art-green text-white text-xs px-4 py-2.5 rounded-lg shadow-lg flex items-center gap-2 animate-bounce">
          <Sparkles className="w-3.5 h-3.5 text-white animate-spin" />
          <span>Đang chuyển hướng tới {justClicked}...</span>
        </div>
      )}

    </div>
  );
}
