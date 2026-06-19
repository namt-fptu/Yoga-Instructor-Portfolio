/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export interface WorkExperience {
  id: string;
  period: string;
  role: string;
  company: string;
  description: string;
}

export interface EducationCertificate {
  id: string;
  year: string;
  title: string;
  institution: string;
  gpaOrDetail?: string;
}

export interface YogaSkill {
  id: string;
  name: string;
  icon: string;
  description: string;
}

export interface ClassScheduleItem {
  id: string;
  day: string; // e.g. "Thứ Hai", "Thứ Ba"
  time: string; // e.g. "08:30 - 09:30"
  className: string; // e.g. "Yin Yoga Trị Liệu"
  duration: string; // e.g. "60 phút"
  status: 'Còn chỗ' | 'Góc thiền đầy' | 'Chỉ còn 1 chỗ';
  level: 'Cơ bản' | 'Mọi cấp độ' | 'Trị liệu sâu';
}

export interface YogaPoseRecommendation {
  mood: string;
  poseName: string;
  sanskritName: string;
  benefits: string[];
  directions: string;
  imageUrl: string;
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  text: string;
  rating: number;
  avatarUrl: string;
  classType: string;
}

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
  category: 'khấn_khoản' | 'lớp_học' | 'sức_khỏe' | 'khác';
}

