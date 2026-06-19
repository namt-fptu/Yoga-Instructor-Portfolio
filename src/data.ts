/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { WorkExperience, EducationCertificate, YogaSkill, YogaPoseRecommendation, ClassScheduleItem, Testimonial, FAQItem } from './types';

export const workExperiences: WorkExperience[] = [
  {
    id: 'exp1',
    period: 'Tháng 10/2021 — Hiện tại',
    role: 'Trưởng nhóm Huấn luyện Thể chất & Trị liệu Tâm lý',
    company: 'An Nhiên Yoga Space',
    description: 'Chỉ đạo chuyên môn, hướng dẫn các buổi trị liệu thiền định kết hợp chuông xoay Tây Tạng cổ truyền, hỗ trợ đắc lực cho hàng trăm học viên giảm bớt chứng mất ngủ kinh niên và rối loạn âu lo.'
  },
  {
    id: 'exp2',
    period: 'Tháng 06/2017 — Tháng 10/2021',
    role: 'Huấn luyện viên Hatha Yoga Cao cấp',
    company: 'Elite Fitness & Yoga',
    description: 'Thiết kế giáo án cá nhân hóa phục hồi cột sống cho nhóm học viên văn phòng gặp hội chứng đau lưng, mỏi cổ vai gáy. Tổ chức hơn 50 workshop chuyên đề về cân bằng Thân - Tâm - Trí.'
  },
  {
    id: 'exp3',
    period: 'Tháng 09/2015 — Tháng 12/2016',
    role: 'Trợ giảng và Điều phối viên khóa học',
    company: 'Sivananda Yoga Vedanta Việt Nam',
    description: 'Hỗ trợ giảng dạy chuyên sâu các khóa Đào tạo Huấn luyện viên Yoga 200 Giờ, hướng dẫn chi tiết triết lý cổ điển Yoga cổ xưa và chế độ ăn uống thực dưỡng thanh lọc cơ thể.'
  }
];

export const educationCertificates: EducationCertificate[] = [
  {
    id: 'edu1',
    year: '2017',
    title: 'Chứng chỉ HLV Yoga Quốc tế Alliance 500 Giờ (RYT 500)',
    institution: 'Yoga Alliance USA — Đào tạo chuyên sâu tại Rishikesh, Ấn Độ',
    gpaOrDetail: 'Xếp loại Xuất sắc (High Distinction)'
  },
  {
    id: 'edu2',
    year: '2019',
    title: 'Chứng chỉ Trị liệu bằng Chuông Xoay Tây Tạng Himalaya',
    institution: 'Nepal Sound Healing & Yoga Academy',
    gpaOrDetail: 'Phương pháp gõ chuông trị liệu tầng sóng não'
  },
  {
    id: 'edu3',
    year: '2015',
    title: 'Cử nhân Khoa học Thể thao & Sức Khỏe',
    institution: 'Đại học Sư phạm Thể dục Thể thao TP.HCM',
    gpaOrDetail: 'GPA: 3.6 / 4.0'
  }
];

export const yogaSkills: YogaSkill[] = [
  {
    id: 'skill1',
    name: 'Hatha & Yin Yoga Thư Giãn',
    icon: 'flower',
    description: 'Tinh thông các tư thế kéo giãn sâu, cải thiện hệ tuần hoàn và tăng tính linh hoạt của các thớ cơ khớp xương.'
  },
  {
    id: 'skill2',
    name: 'Kỹ thuật thở Pranayama',
    icon: 'wind',
    description: 'Điều phối luồng năng lượng sống, giúp tống khứ khí thải trong phổi và giải tỏa tâm trạng lo âu.'
  },
  {
    id: 'skill3',
    name: 'Trị liệu chuông xoay Tây Tạng',
    icon: 'bell',
    description: 'Kích hoạt năng lượng tự chữa lành trong tế bào thông qua sóng âm luân xa, mang lại trạng thái thiền định sâu.'
  },
  {
    id: 'skill4',
    name: 'Dinh dưỡng & Lối sống Xanh',
    icon: 'leaf',
    description: 'Tư vấn thực đơn thực dưỡng khoa học, giúp cơ thế nhẹ nhõm, thanh lọc độc tố một cách tự nhiên.'
  }
];

export const partners = [
  { name: 'An Nhiên Space', subtitle: 'Wellness Studio' },
  { name: 'Elite Fitness', subtitle: 'Premium Gym & Yoga' },
  { name: 'Sivananda Yoga', subtitle: 'Vedanta Center' },
  { name: 'California Fitness', subtitle: 'Century Group' },
  { name: 'Healthland Yoga', subtitle: 'Eco Retreat' },
  { name: 'Vingroup Wellness', subtitle: 'Corporate Program' }
];

export const yogaClassOptions = [
  'Hatha Yoga Căn Bản & Nâng Cao (Offline)',
  'Yin Yoga Thư Giãn Sâu & Trị Liệu Đau Lưng (Offline/Online)',
  'Thiền Định Và Trị Liệu Trầm Cảm Bằng Chuông Xoay (1-on-1)',
  'Yoga Doanh Nghiệp - Workshop Cân Bằng Năng Lượng'
];

export const poseRecommendations: YogaPoseRecommendation[] = [
  {
    mood: 'Căng thẳng, âu lo (Stress)',
    poseName: 'Tư thế Em Bé',
    sanskritName: 'Balasana',
    benefits: ['Xoa dịu hệ thần kinh trung ương', 'Gia tăng lưu thông máu lên não', 'Kéo giãn nhẹ nhàng vùng hông, đùi và mắt cá chân'],
    directions: 'Quỳ trên gối, gập thân người về phía trước, trán chạm thảm. Hai tay duỗi dọc theo thân hoặc vươn dài về trước, thả lỏng bả vai sâu sắc.',
    imageUrl: 'https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?auto=format&fit=crop&q=80&w=600'
  },
  {
    mood: 'Mất ngủ, khó ngủ',
    poseName: 'Tư thế Gác Chân Lên Tường',
    sanskritName: 'Viparita Karani',
    benefits: ['Hỗ trợ tuần hoàn máu ngược từ chân về tim', 'Giảm tải căng thẳng tích tụ ở bàn chân và đùi', 'Chuẩn bị trạng thái thư giãn tuyệt đối để ngủ ngon'],
    directions: 'Nằm ngửa sát tường, đưa cả hai chân duỗi thẳng áp lên mặt tường sao cho cơ thể tạo thành một góc vuông 90 độ. Nhắm mắt và hít thở sâu.',
    imageUrl: 'https://images.unsplash.com/photo-1506126613408-eca07ce68773?auto=format&fit=crop&q=80&w=600'
  },
  {
    mood: 'Đau mỏi vai gáy & cột sống',
    poseName: 'Tư thế Con Mèo - Con Bò',
    sanskritName: 'Marjaryasana-Bitilasana',
    benefits: ['Khơi thông dòng chảy sinh khí dọc tủy sống', 'Giải phóng chèn ép dây thần kinh vùng cổ vai gáy', 'Mát-xa nhẹ nhàng các cơ quan nội tạng'],
    directions: 'Chống hai tay và đầu gối xuống thảm (tư thế cái bàn). Hít vào võng lưng ngẩng mặt (tư thế Con Bò), thở ra gù lưng cúi đầu nhìn rốn (tư thế Con Mèo).',
    imageUrl: 'https://images.unsplash.com/photo-1599447421416-3414500d18a5?auto=format&fit=crop&q=80&w=600'
  },
  {
    mood: 'Uể oải, mệt mỏi, lười biếng',
    poseName: 'Tư thế Chó Úp Mặt',
    sanskritName: 'Adho Mukha Svanasana',
    benefits: ['Tưới máu giàu oxy lên não bộ tức thì', 'Đánh thức dòng năng lượng tiềm tàng', 'Kéo vươn tối đa sườn lưng và cơ gân kheo'],
    directions: 'Từ tư thế quỳ chống tay, đẩy hông lên cao để tạo cơ thể thành chữ V ngược. Ấn gót chân hướng về phía thảm và thả lỏng đầu cổ giữa hai cánh tay.',
    imageUrl: 'https://images.unsplash.com/photo-1575052814086-f385e2e2ad1b?auto=format&fit=crop&q=80&w=600'
  }
];

export const facebookUrl = 'https://m.me/loantran.yoga'; // Refers to Messenger / Facebook Page
export const zaloUrl = 'https://zalo.me/0901234567'; // Refers to Zalo OA or personal number

export const classSchedules: ClassScheduleItem[] = [
  {
    id: 'sch1',
    day: 'Thứ Hai',
    time: '06:00 - 07:15',
    className: 'Hatha Yoga Khởi Đầu Ngày Mới',
    duration: '75 phút',
    status: 'Còn chỗ',
    level: 'Cơ bản'
  },
  {
    id: 'sch2',
    day: 'Thứ Hai',
    time: '18:30 - 19:45',
    className: 'Yin Yoga Phục Hồi Thần Kinh',
    duration: '75 phút',
    status: 'Chỉ còn 1 chỗ',
    level: 'Mọi cấp độ'
  },
  {
    id: 'sch3',
    day: 'Thứ Ba',
    time: '08:00 - 09:15',
    className: 'Trị Liệu Cột Sống & Đau Vai Gáy',
    duration: '75 phút',
    status: 'Còn chỗ',
    level: 'Trị liệu sâu'
  },
  {
    id: 'sch4',
    day: 'Thứ Tư',
    time: '12:00 - 13:00',
    className: 'Yoga Trưa Nhanh Cho Dân Văn Phòng',
    duration: '60 phút',
    status: 'Góc thiền đầy',
    level: 'Cơ bản'
  },
  {
    id: 'sch5',
    day: 'Thứ Tư',
    time: '18:30 - 20:00',
    className: 'Thiền Định & Trị Liệu Chuông Xoay Himalaya',
    duration: '90 phút',
    status: 'Chỉ còn 1 chỗ',
    level: 'Trị liệu sâu'
  },
  {
    id: 'sch6',
    day: 'Thứ Năm',
    time: '06:00 - 07:15',
    className: 'Hatha Yoga Thải Độc Độc Tố (Pranayama)',
    duration: '75 phút',
    status: 'Còn chỗ',
    level: 'Mọi cấp độ'
  },
  {
    id: 'sch7',
    day: 'Thứ Sáu',
    time: '18:30 - 19:45',
    className: 'Vinyasa Flow Cân Bằng Thể Chất',
    duration: '75 phút',
    status: 'Còn chỗ',
    level: 'Mọi cấp độ'
  },
  {
    id: 'sch8',
    day: 'Thứ Bảy',
    time: '08:00 - 09:30',
    className: 'Chuyên Đề Thiền Chuông Trải Nghiệm Sâu (Offline)',
    duration: '90 phút',
    status: 'Góc thiền đầy',
    level: 'Trị liệu sâu'
  }
];

export const testimonials: Testimonial[] = [
  {
    id: 'test1',
    name: 'Phan Hoàng Yến',
    role: 'Nhân viên thiết kế / Designer',
    text: 'Tình trạng đau vai gáy và tê bì cánh tay do ngồi máy tính 10 tiếng mỗi ngày của tôi đã giảm tới 90% sau 2 tháng tập luyện cùng cô Loan Trần. Cô chỉ dẫn rất kỹ cách định tuyến hơi thở Pranayama và không bao giờ ép dẻo quá đà, làm tôi cảm thấy cực kỳ an tâm.',
    rating: 5,
    avatarUrl: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=150',
    classType: 'Trị Liệu Cột Sống'
  },
  {
    id: 'test2',
    name: 'Trần Minh Đức',
    role: 'Quản lý dự án / Project Manager',
    text: 'Lớp thiền chuông xoay Tây Tạng thực sự là cứu cánh sau những giờ họp căng thẳng. Tiếng chuông trầm bổng kết hợp với sự dẫn dắt ấm áp của cô Loan đưa tôi vào trạng thái thư sảng chưa từng có. Giấc ngủ đã sâu hơn hẳn, không còn chập chờn như trước.',
    rating: 5,
    avatarUrl: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=150',
    classType: 'Thiền Trị Liệu Chuông Xoay'
  },
  {
    id: 'test3',
    name: 'Lê Thị Thu Thủy',
    role: 'Chuyên viên ngân hàng',
    text: 'Là người bận rộn, tôi rất thích khóa Yin Yoga vào cuối ngày. Động tác giãn cơ chậm rãi trên nền nhạc thiền yên tĩnh giúp loại bỏ hoàn toàn mệt mỏi tích tụ. Cô Loan luôn chỉnh sửa tư thế cẩn thận cho từng học viên dù là ở lớp trực tiếp Thảo Điền.',
    rating: 5,
    avatarUrl: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=150',
    classType: 'Yin Yoga Phục Hồi'
  },
  {
    id: 'test4',
    name: 'Nguyễn Lâm Phong',
    role: 'Kinh doanh tự do',
    text: 'Không gian tập luyện thanh tịnh, cô giáo nhẹ nhàng, chuyên môn cực kỳ vững vàng. Những bài tập thở Pranayama cổ điển đã giúp tôi cải thiện sức bền thể trạng sau đợt ốm dậy rất nhiều. Đăng ký nhận lời khuyên sức khoẻ qua Zalo cực kỳ nhanh gọn.',
    rating: 5,
    avatarUrl: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=150',
    classType: 'Hatha Yoga Pranayama'
  }
];

export const faqs: FAQItem[] = [
  {
    id: 'faq1',
    category: 'sức_khỏe',
    question: 'Tôi bị cứng khớp, không hề dẻo dai thì học Yoga được không?',
    answer: 'Hoàn toàn được! Gốc rễ của Yoga không nằm ở việc ép dẻo hay tạo ra những tư thế uốn lượn kỳ vĩ, mà là việc quay về thấu hiểu giới hạn của chính cơ thể qua dòng chảy của hơi thở. Tại lớp của Loan Trần, bạn sẽ được hướng dẫn dùng gạch xốp, dây đai hỗ trợ và các biến thể nhẹ nhàng nhất để dần mở khớp một cách an lành, tự nhiên.'
  },
  {
    id: 'faq2',
    category: 'khấn_khoản',
    question: 'Nên ăn uống thế nào trước và sau khi tham gia buổi tập?',
    answer: 'Để buổi tập đạt hiệu quả tốt nhất và tránh cảm giác đầy bụng, khó chịu, bạn nên hoàn thành bữa ăn chính trước khi tập ít nhất 2 đến 3 tiếng. Nếu cảm thấy đói sát giờ tập, bạn có thể uống một ít nước ấm ấm hoặc ăn nửa quả chuối trước 30-45 phút.'
  },
  {
    id: 'faq3',
    category: 'lớp_học',
    question: 'Trị liệu chuông xoay Himalaya khác biệt thế nào với lớp Yoga thông thường?',
    answer: 'Trị liệu chuông xoay Tây Tạng là phương pháp chữa lành bằng rung động âm thanh sâu. Trong khi bạn nằm thư giãn hoàn toàn ở tư thế Shavasana, các sóng âm hài hòa phát ra từ chuông xoay cơ học đúc thủ công sẽ tác động trực tiếp lên hệ thần kinh trung ương và màng tế bào đại học, giúp xóa tan căng thẳng, điều hòa nhịp tim và hỗ trợ sâu sắc đối với người mất ngủ mãn tính.'
  },
  {
    id: 'faq4',
    category: 'sức_khỏe',
    question: 'Đau vai gáy nặng hoặc thoát vị đĩa đệm lưng tập lớp nào an toàn?',
    answer: 'Đối với chứng đau vai gáy do ngồi làm việc nhiều hoặc thoát vị nhẹ, lớp "Trị Liệu Cột Sống & Đau Vai Gáy" vào Thứ Ba hằng tuần được thiết kế riêng cho bạn. Cần chủ động thông báo tình trạng cột sống cụ thể cho Loan Trần qua Zalo hoặc gặp trực tiếp trước giờ tập để giáo viên linh động điều tiết các bài vặn xoắn và nhấn cơ chuyên nghiệp tránh lực đè lên đĩa đệm.'
  },
  {
    id: 'faq5',
    category: 'khác',
    question: 'Loan Trần có các lớp dạy trực tuyến (Online) không?',
    answer: 'Có! Bên cạnh trải nghiệm phục hồi sâu trực tiếp tại góc thiền Thảo Điền, Loan Trần duy trì một nhóm học trực tuyến tương tác màn hình sống động qua Zoom dành cho các bạn học viên ở xa hoặc lịch trình bận rộn. Bạn vui lòng nhắn trực tiếp qua Zalo hoặc Messenger để nhận mã liên kết thử lớp trực tuyến.'
  }
];


