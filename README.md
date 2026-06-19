# 🧘‍♀️ Yoga Loan Trần - Portfolio & Zen Space Web App

Trang web portfolio giới thiệu Huấn luyện viên (HLV) Yoga & Trị liệu Tâm lý **Loan Trần**, kết hợp các công cụ hỗ trợ thiền định và chăm sóc sức khỏe tương tác trực quan cho học viên.

![Yoga Portfolio Preview](https://images.unsplash.com/photo-1594381898411-846e7d193883?auto=format&fit=crop&q=80&w=1200&h=450)

---

## 🌟 Tính Năng Nổi Bật

Ứng dụng không chỉ là một trang hồ sơ năng lực (CV) thông thường mà còn là một không gian số tĩnh lặng (**Zen Space**), mang lại trải nghiệm tương tác thực tế cho người ghé thăm:

1. **⏱️ Bộ Hẹn Giờ Thiền Định (Zen Timer)**
   - Hỗ trợ học viên tự thực hành thiền hoặc thở Pranayama tại nhà với thời gian tùy chỉnh.
   - Phát âm thanh nền thư giãn (Tiếng chuông xoay, tiếng mưa rơi, gió thoảng, sóng biển) đồng bộ trực tiếp trên trình duyệt.

2. **☸️ Cẩm Nang Khám Phá 7 Luân Xa (Chakra Explorer)**
   - Bản đồ hướng dẫn trực quan về 7 luân xa chính trong cơ thể.
   - Cung cấp thông tin chi tiết về từng luân xa (màu sắc, vị trí, biểu hiện khi mất cân bằng, cùng tư thế Yoga khuyên tập để khơi thông dòng năng lượng).

3. **🧘 Hỗ Trợ Đề Xuất Tư Thế Theo Trạng Thái (Pose Recommender)**
   - Hệ thống gợi ý tư thế Yoga dựa trên trạng thái sức khỏe/tâm lý hiện tại (Stress/âu lo, mất ngủ, đau mỏi vai gáy, cơ thể uể oải).
   - Mô tả chi tiết lợi ích sức khỏe và cách thực hiện chuẩn định tuyến sinh cơ học.

4. **📅 Lịch Khai Giảng & Thời Khóa Biểu (Class Schedule)**
   - Lịch học hàng tuần chi tiết chia theo lớp (Hatha, Yin, Thiền chuông xoay, Yoga văn phòng).
   - Bộ lọc thông minh theo cấp độ (Cơ bản, Trị liệu sâu, Mọi cấp độ) cùng trạng thái chỗ trống thời gian thực.

5. **💼 Hồ Sơ Năng Lực Chuyên Nghiệp**
   - Trình bày thông tin bằng cấp uy tín (RYT 500 Yoga Alliance từ Ấn Độ, chứng chỉ trị liệu chuông xoay Nepal).
   - Nhật ký kinh nghiệm làm việc tại các trung tâm lớn như *An Nhiên Yoga Space*, *Elite Fitness*, *Sivananda Yoga*.

6. **💬 Phản Hồi Học Viên & Hỏi Đáp (Testimonials & FAQs)**
   - Đánh giá chân thực từ học viên phục hồi chấn thương cột sống, cải thiện giấc ngủ.
   - Bộ câu hỏi FAQ phân loại khoa học giải đáp mọi thắc mắc trước khi nhập môn.

---

## 🛠️ Công Nghệ Sử Dụng

Dự án được phát triển dựa trên các công nghệ web hiện đại, chú trọng vào hiệu ứng mượt mà và giao diện cao cấp:

* **Framework:** React 19 + Vite (tối ưu hóa thời gian tải trang cực nhanh).
* **Định dạng code:** TypeScript (đảm bảo kiểu dữ liệu chặt chẽ, dễ bảo trì).
* **Giao diện & Style:** Tailwind CSS v4 (sử dụng bảng màu HSL mộc mạc nghệ thuật: Art Cream, Olive Green, Warm Taupe).
* **Hiệu ứng & Chuyển động:** Motion (Framer Motion) tạo cảm giác thở thiền nhịp nhàng qua giao diện, chuyển tab mượt mà, lá rơi tự do.
* **Biểu tượng:** Lucide React.
* **SEO & Metadata:** React Helmet Async (Tự động cấu hình thẻ tiêu đề, mô tả chuẩn SEO, Open Graph tối ưu hóa hiển thị chia sẻ lên Facebook/Zalo).

---

## 💻 Hướng Dẫn Chạy Dự Án

### Yêu Cầu Hệ Thống
* Đã cài đặt **Node.js** (Phiên bản v18 trở lên).

### Các Bước Cài Đặt và Chạy

1. **Cài đặt các gói thư viện phụ thuộc:**
   ```bash
   npm install
   ```

2. **Chạy ứng dụng ở chế độ phát triển (Development):**
   ```bash
   npm run dev
   ```
   *Sau khi chạy, truy cập đường dẫn cục bộ trên trình duyệt (mặc định là `http://localhost:3000`).*

3. **Kiểm tra kiểu dữ liệu (TypeScript Linting):**
   ```bash
   npm run lint
   ```

4. **Biên dịch dự án cho môi trường Production:**
   ```bash
   npm run build
   ```

5. **Xem trước bản Build hoàn thiện:**
   ```bash
   npm run preview
   ```

---

## 📁 Cấu Trúc Thư Mục Chính

```text
├── src/
│   ├── components/            # Các thành phần giao diện tương tác
│   │   ├── ZenTimer.tsx       # Bộ đếm giờ thiền & nhạc nền
│   │   ├── ChakraGuide.tsx    # Cẩm nang 7 Luân Xa
│   │   ├── ClassSchedule.tsx  # Lịch học và bộ lọc lớp học
│   │   ├── FAQSection.tsx     # Bộ câu hỏi thường gặp
│   │   ├── Testimonials.tsx   # Đánh giá của học viên
│   │   └── BlurUpImage.tsx    # Tải ảnh mượt mà với hiệu ứng blur
│   ├── data.ts                # Dữ liệu nội dung (bằng cấp, kinh nghiệm, tư thế...)
│   ├── types.ts               # Định nghĩa kiểu dữ liệu TypeScript
│   ├── App.tsx                # Trang chủ chính của ứng dụng
│   ├── index.css              # Cấu hình phong cách và biến màu Tailwind v4
│   └── main.tsx               # Điểm khởi chạy React
├── package.json               # Cấu hình dự án & thư viện sử dụng
└── vite.config.ts             # Cấu hình công cụ Vite
```

---

*Chúc bạn tìm thấy sự bình an trong từng hơi thở cùng Yoga Loan Trần!* 🙏