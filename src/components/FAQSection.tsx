import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { HelpCircle, ChevronDown, ChevronUp, Search, MessageSquare, Info, Sparkles } from 'lucide-react';
import { faqs, zaloUrl } from '../data';

export default function FAQSection() {
  const [openId, setOpenId] = useState<string | null>('faq1');
  const [searchQuery, setSearchQuery] = useState('');

  const toggleAccordion = (id: string) => {
    setOpenId(openId === id ? null : id);
  };

  const filteredFaqs = faqs.filter((item) => {
    const query = searchQuery.trim().toLowerCase();
    if (!query) return true;
    return (
      item.question.toLowerCase().includes(query) ||
      item.answer.toLowerCase().includes(query)
    );
  });

  return (
    <div id="faq-section" className="bg-white border border-art-border-light rounded-2xl p-6 sm:p-12 lg:p-16 shadow-[0_4px_24px_rgba(74,93,78,0.02)] relative overflow-hidden">
      
      {/* Background Glow */}
      <div className="absolute top-0 left-0 w-32 h-32 bg-art-cream rounded-br-full opacity-40 pointer-events-none" />

      {/* Header */}
      <div className="text-center max-w-2xl mx-auto mb-10">
        <span className="text-[10px] uppercase tracking-[0.25em] font-semibold text-art-taupe bg-art-cream px-4 py-1.5 border border-art-divider rounded-full shadow-2xs inline-flex items-center gap-1.5">
          <HelpCircle className="w-3 h-3 text-art-green" />
          HỎI ĐÁP THƯỜNG GẶP
        </span>
        <h3 className="text-2xl sm:text-3xl lg:text-4xl font-serif mt-3 text-art-green tracking-tight font-normal italic">
          Giải Đáp Câu Hỏi Thường Gặp
        </h3>
        <p className="text-xs sm:text-sm text-art-text-muted mt-2.5 leading-relaxed">
          Tìm câu trả lời nhanh chóng cho các thắc mắc về kỹ thuật tập thở Pranayama, các lớp thở chỉnh dáng, phục hồi cột sống hoặc chế độ luyện tập thích hợp nhất tại Trung tâm.
        </p>
      </div>

      {/* Search Bar - Aesthetic & Responsive */}
      <div className="max-w-xl mx-auto mb-8 relative">
        <div className="relative">
          <input
            type="text"
            placeholder="Tìm kiếm câu hỏi (ví dụ: mất ngủ, cứng khớp, đau vai gáy...)"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-11 pr-4 py-3 sm:py-3.5 bg-art-cream border border-art-divider focus:border-art-green/80 focus:ring-1 focus:ring-art-green/20 rounded-xl text-xs sm:text-sm text-art-green placeholder-art-text-muted/60 transition-all font-sans outline-none font-medium shadow-2xs"
          />
          <Search className="w-4 h-4 text-art-taupe absolute left-4 top-1/2 -translate-y-1/2" />
          {searchQuery && (
            <button
              onClick={() => setSearchQuery('')}
              className="absolute right-4 top-1/2 -translate-y-1/2 text-xs text-art-taupe hover:text-art-green font-bold uppercase tracking-wider cursor-pointer font-sans"
            >
              Xoá
            </button>
          )}
        </div>
      </div>

      {/* Accordion List */}
      <div className="max-w-3xl mx-auto space-y-4">
        {filteredFaqs.length === 0 ? (
          <div className="text-center py-12 px-4 border border-dashed border-art-divider rounded-xl text-xs sm:text-sm text-art-text-muted bg-art-cream/40">
            Chưa tìm thấy câu hỏi tương ứng với từ khóa "{searchQuery}". Hãy thử từ khoá phổ thông khác!
          </div>
        ) : (
          filteredFaqs.map((faq) => {
            const isOpen = openId === faq.id;
            return (
              <div
                key={faq.id}
                className={`border rounded-xl transition-all ${
                  isOpen
                    ? 'border-art-green bg-art-cream/30 shadow-2xs'
                    : 'border-art-divider hover:border-art-taupe bg-white'
                }`}
              >
                {/* Accordion Title Trigger - min height 44px for touch responsiveness */}
                <button
                  onClick={() => toggleAccordion(faq.id)}
                  className="w-full text-left px-5 py-4 flex items-center justify-between gap-4 font-serif text-sm sm:text-base md:text-lg text-art-green transition-all select-none cursor-pointer focus:outline-none min-h-[44px]"
                  aria-expanded={isOpen}
                >
                  <span className="font-normal pr-2 leading-relaxed">{faq.question}</span>
                  <div className={`w-8 h-8 rounded-full border flex items-center justify-center transition-all ${
                    isOpen ? 'bg-art-green text-white border-art-green' : 'bg-art-taupe-bg text-art-green border-art-divider'
                  }`}>
                    {isOpen ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                  </div>
                </button>

                {/* Animated Accordion Content panel */}
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.25, ease: 'easeInOut' }}
                      className="overflow-hidden"
                    >
                      <div className="px-5 pb-5 pt-1 text-xs sm:text-sm text-art-text-muted leading-relaxed font-sans border-t border-art-divider/40">
                        <p className="whitespace-pre-line">{faq.answer}</p>
                        
                        {/* Interactive Micro Call To Action if health category */}
                        {faq.category === 'sức_khỏe' && (
                          <div className="mt-3.5 p-3 bg-white border border-art-divider rounded-lg flex items-start gap-2 max-w-xl">
                            <Info className="w-4 h-4 text-art-taupe shrink-0 mt-0.5" />
                            <span className="text-[11px] text-art-text-muted">
                              Mọi bài tập thở hay tư thế đều có thể tuỳ chỉnh theo hiện trạng cột sống. Bạn muốn nhận bộ bài tập cá nhân phù hợp?
                              <a
                                href={zaloUrl}
                                target="_blank"
                                rel="noreferrer"
                                className="text-art-green font-bold hover:underline inline-flex items-center gap-0.5 ml-1.5 uppercase tracking-wide text-[10px]"
                              >
                                Nhắn Trung tâm tư vấn <Sparkles className="w-2.5 h-2.5" />
                              </a>
                            </span>
                          </div>
                        )}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })
        )}
      </div>

      {/* Trust reassurance badge */}
      <div className="mt-12 text-center border-t border-art-divider/60 pt-6 max-w-md mx-auto">
        <p className="text-[11px] text-art-text-muted italic leading-relaxed">
          Bạn có vướng mắc nào khác chưa được liệt kê tại đây không? Hãy liên hệ nhắn tin cho Trung Tâm Sen Yoga qua Zalo hoặc Messenger bất cứ lúc nào để được hồi đáp chân thành nhất.
        </p>
        <a
          href={zaloUrl}
          target="_blank"
          rel="noreferrer"
          className="mt-3 inline-flex items-center gap-1.5 px-4 py-2 bg-art-taupe-bg hover:bg-art-divider text-art-green font-bold text-[10px] uppercase tracking-wider rounded-lg border border-art-divider transition-all shadow-3xs"
        >
          <MessageSquare className="w-3.5 h-3.5" />
          Hỏi trực tiếp Trung tâm
        </a>
      </div>

    </div>
  );
}
