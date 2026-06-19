/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { WorkExperience, EducationCertificate, YogaSkill, YogaPoseRecommendation, ClassScheduleItem, Testimonial, FAQItem } from './types';

export const workExperiences: WorkExperience[] = [
  {
    id: 'exp1',
    period: '2021 — Hiện tại',
    role: 'Sáng lập & Huấn luyện viên trưởng',
    company: 'Học Viện Yoga Cân Bằng',
    description: 'Thiết kế giáo trình hơi thở trị liệu và chỉnh dáng chuyên sâu. Trực tiếp giảng dạy và hướng dẫn các lớp phục hồi cột sống, cân bằng cơ xương chậu cho hơn 5.000+ học viên.'
  },
  {
    id: 'exp2',
    period: '2018 — 2021',
    role: 'Huấn luyện viên Yoga Trị Liệu cấp cao',
    company: 'Trung Tâm Phục Hồi Tự Nhiên & Trị Liệu Thân Tâm',
    description: 'Chịu trách nhiệm thiết kế bài tập chỉnh dáng cho dân văn phòng gặp các hội chứng vai khom, cổ rùa, đau mỏi vai gáy cổ. Tích lũy hơn 6.000 giờ giảng dạy thực tế.'
  },
  {
    id: 'exp3',
    period: '2016 — 2018',
    role: 'Huấn luyện viên Hatha Yoga & Hơi thở Pranayama',
    company: 'Hệ Thống Yoga & Sức Khỏe Toàn Diện',
    description: 'Hướng dẫn các kỹ thuật thở cổ điển kết hợp định tuyến sinh cơ học an toàn. Tích lũy hơn 4.000 giờ đứng lớp hướng dẫn trực tiếp cho mọi lứa tuổi.'
  }
];

export const educationCertificates: EducationCertificate[] = [
  {
    id: 'edu1',
    year: '2020',
    title: 'Master Yoga Cân Bằng & Phục Hồi 500h',
    institution: 'Yoga Alliance Quốc tế — Đào tạo chuyên sâu về cân chỉnh cơ xương khớp tự nhiên',
    gpaOrDetail: 'Phương pháp định tuyến sinh cơ học cột sống & khung chậu'
  },
  {
    id: 'edu2',
    year: '2018',
    title: 'Chứng chỉ chuyên môn Yoga Trị Liệu 300h',
    institution: 'Học Viện Yoga Trị Liệu Quốc Tế',
    gpaOrDetail: 'Giải phẫu học cột sống, liệu pháp phục hồi vai gáy và hỗ trợ hô hấp'
  },
  {
    id: 'edu3',
    year: '2016',
    title: 'Chứng chỉ Giáo viên Yoga Hatha 200h',
    institution: 'Sivananda Yoga Vedanta Vyasa',
    gpaOrDetail: 'Kỹ thuật thở Pranayama kiểm soát khí lực & tâm trí'
  }
];

export const yogaSkills: YogaSkill[] = [
  {
    id: 'service1',
    name: 'Thở trẻ hóa',
    icon: 'flower',
    description: 'Kỹ thuật thở sâu tăng nồng độ oxy trong máu, kích hoạt hệ bạch huyết thải độc tế bào, giúp cơ thể dẻo dai và làm chậm lão hóa tự nhiên.'
  },
  {
    id: 'service2',
    name: 'Thở chỉnh dáng eo thon, dáng chuẩn, mông đào',
    icon: 'leaf',
    description: 'Kích hoạt nhóm cơ lõi sâu (core) bằng hơi thở bụng dưới, siết gọn vòng eo tự nhiên và nâng cơ mông mà không tạo áp lực lên cột sống.'
  },
  {
    id: 'service3',
    name: 'Thở cân chỉnh lệch hông chậu',
    icon: 'bell',
    description: 'Sự kết hợp giữa thở sâu điều động khí lực và bài tập kéo cơ chéo đùi, hỗ trợ giải phóng căng cứng chéo và đưa khung chậu về vị trí cân bằng.'
  },
  {
    id: 'service4',
    name: 'Thở hỗ trợ cải thiện cong vẹo cột sống',
    icon: 'wind',
    description: 'Kỹ thuật dẫn khí vào các khoang liên sườn bị xẹp do cột sống cong lệch, giúp làm mềm cơ bị rút và hỗ trợ điều chỉnh độ cong tự nhiên.'
  },
  {
    id: 'service5',
    name: 'Thở chỉnh vai khom, cổ rùa',
    icon: 'flower',
    description: 'Chuỗi hơi thở mở ngực phối hợp định tuyến bả vai và đầu cổ, kích hoạt cơ lưng trên yếu để khôi phục lại trục đứng thẳng chuẩn mực.'
  },
  {
    id: 'service6',
    name: 'Thở giải mỏi vai gáy cổ',
    icon: 'leaf',
    description: 'Giải tỏa căng thẳng thần kinh vùng cổ vai gáy bằng hơi thở sâu kết hợp chuyển động chậm, tăng tuần hoàn máu não và chấm dứt tê bì bả vai.'
  },
  {
    id: 'service7',
    name: 'Thở hỗ trợ giảm khó chịu do viêm xoang',
    icon: 'wind',
    description: 'Các phép thở luân phiên làm sạch xoang và thở nén khí giúp làm ấm, lưu thông khí hốc xoang, giảm hẳn cảm giác nghẹt mũi và nhức đầu.'
  }
];

export const partners = [
  { name: 'Học Viện Yoga Cân Bằng', subtitle: 'Trụ sở chính' },
  { name: 'Liên Minh Yoga Trị Liệu', subtitle: 'Đối tác chuyên môn' },
  { name: 'Hiệp Hội Phục Hồi Cột Sống', subtitle: 'Hợp tác nghiên cứu' },
  { name: 'Wellness Space', subtitle: 'Không gian tập luyện' }
];

export const yogaClassOptions = [
  'Lớp Thở Trị Liệu & Cân Chỉnh Cột Sống (Offline/Online)',
  'Lớp Thở Tạo Dáng - Eo Thon Mông Đào (Offline/Online)',
  'Khóa Học Đào Tạo Huấn Luyện Viên Yoga Trị Liệu 200h/300h',
  'Trị Liệu Cá Nhân 1-Kèm-1 Thiết Kế Giáo Án Theo Thể Trạng'
];

export const poseRecommendations: YogaPoseRecommendation[] = [
  {
    mood: 'Mỏi mệt, căng thẳng cơ ngực & vai',
    poseName: 'Tư thế Em Bé kết hợp Thở Bụng',
    sanskritName: 'Balasana',
    benefits: [
      'Xoa dịu hệ thần kinh trung ương tức thì',
      'Giải tỏa lực ép phần thắt lưng và vai gáy',
      'Định hướng hơi thở sâu vào khoang phổi sau'
    ],
    directions: 'Quỳ trên gối, gập thân về trước, trán chạm thảm. Đưa tay ra sau thả lỏng hoàn toàn bả vai. Hít thở sâu bằng bụng, cảm nhận vùng lưng sau nở rộng theo hơi hít vào.',
    imageUrl: 'https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?auto=format&fit=crop&q=80&w=600'
  },
  {
    mood: 'Mất ngủ, nhức mỏi chân & lệch hông',
    poseName: 'Tư thế Gác Chân Lên Tường kết hợp Thở Luân Phiên',
    sanskritName: 'Viparita Karani',
    benefits: [
      'Tăng lưu lượng máu ngược từ chân về tim và não',
      'Giải tỏa áp lực lên vùng hông chậu và đĩa đệm',
      'Lắng dịu nhịp tim, chuẩn bị giấc ngủ sâu tự nhiên'
    ],
    directions: 'Nằm sát tường, đưa chân thẳng lên tường tạo góc 90 độ với cơ thể. Nhắm mắt và thực hiện kỹ thuật thở luân phiên qua từng lỗ mũi để cân bằng năng lượng âm dương.',
    imageUrl: 'https://images.unsplash.com/photo-1506126613408-eca07ce68773?auto=format&fit=crop&q=80&w=600'
  },
  {
    mood: 'Đau lưng, vẹo cột sống nhẹ, gù lưng',
    poseName: 'Tư thế Con Mèo - Con Bò kết hợp Thở Đại Dương',
    sanskritName: 'Marjaryasana-Bitilasana',
    benefits: [
      'Bôi trơn các khớp cột sống, làm mềm cơ dựng gai lưng',
      'Giải phóng chèn ép các dây thần kinh dọc tủy sống',
      'Kích hoạt năng lượng phục hồi thông qua âm thanh thở Ujjayi'
    ],
    directions: 'Tạo tư thế cái bàn 4 điểm chạm. Hít vào võng lưng mở ngực ngẩng mặt (Con Bò). Thở ra gù lưng cúi đầu hóp bụng nhìn rốn (Con Mèo). Phối hợp nhịp nhàng với hơi thở Ujjayi.',
    imageUrl: 'https://images.unsplash.com/photo-1599447421416-3414500d18a5?auto=format&fit=crop&q=80&w=600'
  },
  {
    mood: 'Nghẹt mũi, xoang tịt, uể oải',
    poseName: 'Tư thế Ngồi Gập Người kết hợp Thở Thanh Lọc',
    sanskritName: 'Paschimottanasana',
    benefits: [
      'Kéo giãn toàn bộ cơ mặt sau cơ thể và cột sống',
      'Tạo áp lực nhẹ vùng bụng kích thích cơ quan nội tạng',
      'Thở thanh lọc giúp thông thoáng xoang mũi, xua tan đau đầu'
    ],
    directions: 'Ngồi thẳng chân duỗi trước. Hít vào vươn tay cao kéo dài lưng. Thở ra gập người dài từ khớp hông về trước. Kết hợp hít sâu và thở ra chủ động bằng mũi để thông khí hốc xoang.',
    imageUrl: 'https://images.unsplash.com/photo-1575052814086-f385e2e2ad1b?auto=format&fit=crop&q=80&w=600'
  }
];

export const facebookUrl = 'https://m.me/yogadoicanbang'; 
export const zaloUrl = 'https://zalo.me/0901234567'; 

export const classSchedules: ClassScheduleItem[] = [
  // Thứ Hai
  {
    id: 'sch1',
    day: 'Thứ Hai',
    time: '05:00 - 06:00',
    className: 'Lớp VIP: Hơi Thở & Trị Liệu (Online)',
    duration: '60 phút',
    status: 'Còn chỗ',
    level: 'Trị liệu sâu'
  },
  {
    id: 'sch2',
    day: 'Thứ Hai',
    time: '06:15 - 07:15',
    className: 'PT: Trị Liệu Cá Nhân 1-Kèm-1 (Online)',
    duration: '60 phút',
    status: 'Còn chỗ',
    level: 'Mọi cấp độ'
  },
  {
    id: 'sch3',
    day: 'Thứ Hai',
    time: '12:00 - 13:00',
    className: 'PT: Phục Hồi Cá Nhân 1-Kèm-1 (Online)',
    duration: '60 phút',
    status: 'Còn chỗ',
    level: 'Cơ bản'
  },
  {
    id: 'sch4',
    day: 'Thứ Hai',
    time: '19:00 - 21:00',
    className: 'Khóa Đào Tạo Huấn Luyện Viên Yoga Trị Liệu (Online)',
    duration: '120 phút',
    status: 'Chỉ còn 1 chỗ',
    level: 'Trị liệu sâu'
  },

  // Thứ Ba
  {
    id: 'sch5',
    day: 'Thứ Ba',
    time: '05:00 - 06:00',
    className: 'Lớp VIP: Trị Liệu Cân Bằng (Trực Tiếp)',
    duration: '60 phút',
    status: 'Còn chỗ',
    level: 'Trị liệu sâu'
  },
  {
    id: 'sch6',
    day: 'Thứ Ba',
    time: '06:15 - 07:15',
    className: 'PT: Trị Liệu Cá Nhân 1-Kèm-1 (Online)',
    duration: '60 phút',
    status: 'Còn chỗ',
    level: 'Mọi cấp độ'
  },
  {
    id: 'sch7',
    day: 'Thứ Ba',
    time: '12:00 - 13:00',
    className: 'PT: Phục Hồi Cá Nhân 1-Kèm-1 (Online)',
    duration: '60 phút',
    status: 'Còn chỗ',
    level: 'Cơ bản'
  },
  {
    id: 'sch8',
    day: 'Thứ Ba',
    time: '19:00 - 20:00',
    className: 'Giải Mỏi Vai Gáy Cổ, Thở Ngủ Ngon (Online/Trực Tiếp)',
    duration: '60 phút',
    status: 'Còn chỗ',
    level: 'Mọi cấp độ'
  },

  // Thứ Tư
  {
    id: 'sch9',
    day: 'Thứ Tư',
    time: '05:00 - 06:00',
    className: 'Lớp VIP: Hơi Thở & Trị Liệu (Online)',
    duration: '60 phút',
    status: 'Còn chỗ',
    level: 'Trị liệu sâu'
  },
  {
    id: 'sch10',
    day: 'Thứ Tư',
    time: '06:15 - 07:15',
    className: 'PT: Trị Liệu Cá Nhân 1-Kèm-1 (Online)',
    duration: '60 phút',
    status: 'Còn chỗ',
    level: 'Mọi cấp độ'
  },
  {
    id: 'sch11',
    day: 'Thứ Tư',
    time: '12:00 - 13:00',
    className: 'PT: Phục Hồi Cá Nhân 1-Kèm-1 (Online)',
    duration: '60 phút',
    status: 'Còn chỗ',
    level: 'Cơ bản'
  },
  {
    id: 'sch12',
    day: 'Thứ Tư',
    time: '13:15 - 15:00',
    className: 'PT Đào Tạo Huấn Luyện Viên 1-Kèm-1 (Online)',
    duration: '105 phút',
    status: 'Còn chỗ',
    level: 'Trị liệu sâu'
  },
  {
    id: 'sch13',
    day: 'Thứ Tư',
    time: '19:00 - 21:00',
    className: 'Khóa Đào Tạo Huấn Luyện Viên Yoga Trị Liệu (Online)',
    duration: '120 phút',
    status: 'Chỉ còn 1 chỗ',
    level: 'Trị liệu sâu'
  },

  // Thứ Năm
  {
    id: 'sch14',
    day: 'Thứ Năm',
    time: '05:00 - 06:00',
    className: 'Lớp VIP: Trị Liệu Cân Bằng (Trực Tiếp)',
    duration: '60 phút',
    status: 'Còn chỗ',
    level: 'Trị liệu sâu'
  },
  {
    id: 'sch15',
    day: 'Thứ Năm',
    time: '06:15 - 07:15',
    className: 'PT: Trị Liệu Cá Nhân 1-Kèm-1 (Online)',
    duration: '60 phút',
    status: 'Còn chỗ',
    level: 'Mọi cấp độ'
  },
  {
    id: 'sch16',
    day: 'Thứ Năm',
    time: '12:00 - 13:00',
    className: 'PT: Phục Hồi Cá Nhân 1-Kèm-1 (Online)',
    duration: '60 phút',
    status: 'Còn chỗ',
    level: 'Cơ bản'
  },
  {
    id: 'sch17',
    day: 'Thứ Năm',
    time: '19:00 - 20:00',
    className: 'Giải Mỏi Vai Gáy Cổ, Thở Ngủ Ngon (Online/Trực Tiếp)',
    duration: '60 phút',
    status: 'Còn chỗ',
    level: 'Mọi cấp độ'
  },

  // Thứ Sáu
  {
    id: 'sch18',
    day: 'Thứ Sáu',
    time: '05:00 - 06:00',
    className: 'Lớp VIP: Hơi Thở & Trị Liệu (Online)',
    duration: '60 phút',
    status: 'Còn chỗ',
    level: 'Trị liệu sâu'
  },
  {
    id: 'sch19',
    day: 'Thứ Sáu',
    time: '06:15 - 07:15',
    className: 'PT: Trị Liệu Cá Nhân 1-Kèm-1 (Online)',
    duration: '60 phút',
    status: 'Còn chỗ',
    level: 'Mọi cấp độ'
  },
  {
    id: 'sch20',
    day: 'Thứ Sáu',
    time: '12:00 - 13:00',
    className: 'PT: Phục Hồi Cá Nhân 1-Kèm-1 (Online)',
    duration: '60 phút',
    status: 'Còn chỗ',
    level: 'Cơ bản'
  },
  {
    id: 'sch21',
    day: 'Thứ Sáu',
    time: '13:15 - 15:00',
    className: 'PT Đào Tạo Huấn Luyện Viên 1-Kèm-1 (Online)',
    duration: '105 phút',
    status: 'Còn chỗ',
    level: 'Trị liệu sâu'
  },
  {
    id: 'sch22',
    day: 'Thứ Sáu',
    time: '19:00 - 21:00',
    className: 'Khóa Đào Tạo Huấn Luyện Viên Yoga Trị Liệu (Online)',
    duration: '120 phút',
    status: 'Chỉ còn 1 chỗ',
    level: 'Trị liệu sâu'
  },

  // Thứ Bảy
  {
    id: 'sch23',
    day: 'Thứ Bảy',
    time: '05:00 - 06:00',
    className: 'Lớp VIP: Trị Liệu Cân Bằng (Trực Tiếp)',
    duration: '60 phút',
    status: 'Còn chỗ',
    level: 'Trị liệu sâu'
  },
  {
    id: 'sch24',
    day: 'Thứ Bảy',
    time: '06:15 - 07:15',
    className: 'PT: Trị Liệu Cá Nhân 1-Kèm-1 (Online)',
    duration: '60 phút',
    status: 'Còn chỗ',
    level: 'Mọi cấp độ'
  },
  {
    id: 'sch25',
    day: 'Thứ Bảy',
    time: '12:00 - 13:00',
    className: 'PT: Phục Hồi Cá Nhân 1-Kèm-1 (Online)',
    duration: '60 phút',
    status: 'Còn chỗ',
    level: 'Cơ bản'
  },
  {
    id: 'sch26',
    day: 'Thứ Bảy',
    time: '19:00 - 20:00',
    className: 'Giải Mỏi Vai Gáy Cổ, Thở Ngủ Ngon (Online/Trực Tiếp)',
    duration: '60 phút',
    status: 'Còn chỗ',
    level: 'Mọi cấp độ'
  }
];

export const testimonials: Testimonial[] = [
  {
    id: 'test1',
    name: 'Nguyễn Kim Oanh',
    role: '45 tuổi, Nhân viên ngân hàng',
    text: 'Tôi bị cong vẹo cột sống nhẹ và đau vai gáy triền miên. Sau khóa tập thở trị liệu cột sống và chỉnh vai khom tại Học Viện Yoga Cân Bằng, lưng tôi đã thẳng hơn đáng kể, không còn nhức mỏi tê bì cánh tay mỗi khi ngồi làm việc lâu nữa. Rất biết ơn sự tận tình của Học Viện.',
    rating: 5,
    avatarUrl: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=150',
    classType: 'Trị Liệu Cột Sống'
  },
  {
    id: 'test2',
    name: 'Lê Hoàng Nam',
    role: '38 tuổi, Doanh nhân',
    text: 'Chứng viêm xoang mãn tính và chứng mất ngủ hành hạ tôi nhiều năm. Được hướng dẫn kỹ thuật thở luân phiên Nadi Shodhana chuyên sâu kết hợp âm thanh trị liệu chuông xoay, đường thở của tôi thông thoáng hẳn, chứng nghẹt mũi giảm rõ rệt và giấc ngủ sâu hơn rất nhiều.',
    rating: 5,
    avatarUrl: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=150',
    classType: 'Hỗ Trợ Hô Hấp & Viêm Xoang'
  },
  {
    id: 'test3',
    name: 'Phan Thanh Mai',
    role: '29 tuổi, Quản lý hành chính',
    text: 'Khóa thở chỉnh dáng eo thon mông đào thực sự là một bất ngờ lớn. Không cần tập tạ hay các động tác cường độ cao, chỉ qua cơ chế siết cơ sâu bằng hơi thở và định tuyến khung chậu, vòng eo của tôi thon gọn hẳn và cơ mông săn chắc, lại giải quyết luôn chứng mỏi thắt lưng.',
    rating: 5,
    avatarUrl: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=150',
    classType: 'Thở Chỉnh Dáng Eo Thon'
  },
  {
    id: 'test4',
    name: 'Trần Thị Thu',
    role: '56 tuổi, Cán bộ hưu trí',
    text: 'Khớp hông chậu bị lệch do thói quen ngồi chéo chân làm tôi đi lại khó khăn và hay bị nhức mỏi đùi. Nhờ tham gia lớp thở cân chỉnh lệch hông chậu, tôi học cách điều hòa hơi thở vào xương chậu và kéo giãn cơ cân bằng. Nay tôi đi đứng vững vàng hơn, cơ thể rất nhẹ nhõm.',
    rating: 5,
    avatarUrl: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=150',
    classType: 'Thở Cân Chỉnh Hông Chậu'
  }
];

export const faqs: FAQItem[] = [
  {
    id: 'faq1',
    category: 'sức_khỏe',
    question: 'Người bị cong vẹo cột sống hoặc lệch hông lâu năm có tập thở chỉnh dáng được không?',
    answer: 'Hoàn toàn được. Các bài tập thở kết hợp chỉnh dáng tại Học Viện Yoga Cân Bằng được thiết kế cá nhân hóa, dựa trên định tuyến sinh cơ học an toàn của cơ xương khớp. Hơi thở sâu đóng vai trò giải tỏa các bó cơ co rút xung quanh xương chậu và cột sống, giúp cân chỉnh tư thế một cách tự nhiên và bền vững mà không gây áp lực đau đớn.'
  },
  {
    id: 'faq2',
    category: 'sức_khỏe',
    question: 'Phương pháp thở giảm khó chịu do viêm xoang hoạt động như thế nào?',
    answer: 'Học viên sẽ được hướng dẫn các kỹ thuật Pranayama cổ điển như thở luân phiên (Nadi Shodhana) và thở rung (Kapalbhati). Các phép thở này giúp tăng lưu lượng tuần hoàn khí qua các khoang xoang, hỗ trợ đào thải dịch ứ đọng tự nhiên, làm dịu niêm mạc và giảm thiểu áp lực trong hốc xoang gây nhức đầu khó chịu.'
  },
  {
    id: 'faq3',
    category: 'lớp_học',
    question: 'Thời gian thực hành bao lâu thì cảm nhận được hiệu quả cân bằng cơ thể?',
    answer: 'Chỉ ngay sau buổi đầu tiên, bạn sẽ cảm nhận được lồng ngực mở rộng, hơi thở sâu hơn và vùng vai gáy nhẹ nhõm rõ rệt. Đối với các vấn đề định hình cấu trúc như vai khom, cổ rùa, lệch hông chậu hay siết eo thon, học viên sẽ nhận thấy sự cải thiện rõ ràng về tư thế sau 4-8 tuần thực hành đều đặn 3 buổi/tuần dưới sự hướng dẫn tỉ mỉ.'
  },
  {
    id: 'faq4',
    category: 'khác',
    question: 'Tại sao Học Viện lại lấy tôn chỉ "Hơi thở là gốc – Cột sống là trọng tâm"?',
    answer: 'Hơi thở là nguồn cung cấp sinh khí cốt lõi và điều hòa hệ thần kinh thực vật. Cột sống là trục đỡ trung tâm bảo vệ hệ thần kinh trung ương. Khi lấy hơi thở sâu làm chất dẫn để giải tỏa các vùng cơ co cứng, đồng thời định tuyến lại cột sống thẳng thớm, cơ thể sẽ tự động thiết lập lại trạng thái cân bằng tự nhiên và tự chữa lành các tổn thương.'
  },
  {
    id: 'faq5',
    category: 'lớp_học',
    question: 'Học viện có các chương trình đào tạo hay chỉ có các lớp trị liệu phục hồi?',
    answer: 'Học Viện cung cấp đầy đủ cả hai hệ thống: Lớp thực hành trị liệu phục hồi thể trạng (dành cho học viên cần cải thiện đau mỏi, lệch dáng) và các chương trình đào tạo chuyên sâu (dành cho những ai mong muốn trở thành Huấn luyện viên Yoga Trị Liệu & Cân Bằng Thân Tâm chuyên nghiệp).'
  }
];
