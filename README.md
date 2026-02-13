## Kinh Thánh Vượt Trên Nhân Đạo Xã Hội

Trang web học thuật trình bày báo cáo thần học Công giáo “Kinh Thánh Vượt Trên Nhân Đạo Xã Hội”, được xây dựng với **Next.js App Router**, **React 18** và **Tailwind CSS**. Dự án tập trung vào trải nghiệm đọc sâu, bố cục tĩnh lặng, và phong cách thị giác mang bản sắc **“Academic Catholic”**: trang trọng, tối giản, nhấn mạnh vào văn bản và trích dẫn.

### 1. Tech stack

- **Framework**: Next.js (App Router)  
- **Ngôn ngữ**: TypeScript, React 18  
- **Styling**: Tailwind CSS, custom theme  
- **Fonts**:  
  - Heading: `Playfair Display` (serif, qua `next/font/google`)  
  - Body: `Source Sans 3` (sans-serif, qua `next/font/google`)

### 2. Kiến trúc & layout

- `app/layout.tsx`  
  - Thiết lập metadata, font, màu nền off‑white, màu chữ midnight.  
  - Bố cục `flex` toàn trang với `main` và `footer` có dòng chữ:
    > 2026 · Kinh Thánh Vượt Trên Nhân Đạo Xã Hội

- `app/page.tsx` (Server Component)  
  - **Hero** với tiêu đề:
    > Kinh Thánh Vượt Trên Nhân Đạo Xã Hội  
    kèm epigraph trích lời Đức Thánh Cha Lêô XIV (04/02/2026).  
  - **Cột đọc chính** `max-w-3xl`, line-height rộng cho văn bản dài.  
  - Nội dung báo cáo được chia thành các `section` với `h2` / `h3` có `id` rõ ràng để phục vụ mục lục và neo liên kết.  
  - Các bảng so sánh, blockquote và citation được style theo phong cách học thuật.

- `app/components/TableOfContents.tsx` (Client Component)  
  - Nhận cấu hình TOC `{ id, title, level }` từ `page.tsx`.  
  - Dùng **IntersectionObserver** để scrollspy: khi đọc đến section nào, mục tương ứng trong TOC được highlight và auto‑scroll vào tầm nhìn.  
  - **Desktop**: TOC dọc, sticky bên trái.  
  - **Mobile**: nút **TOC** nổi (floating button) ở góc phải dưới; bấm vào mở panel mục lục dạng card, dễ thao tác khi đọc.

### 3. Theme & Design system

- **Màu sắc chính**
  - Nền: `paper` (`#FCFCEA`), `paperAlt` (`#F8F9FA`) – gợi chất liệu giấy sách.  
  - Chữ chính: `midnight` (`#102A43`).  
  - Nhấn: `gold` (`#D4AF37`) cho viền, và `burgundy` (`#A11111`) cho link/citation.

- **Typography**
  - Heading dùng font serif, cỡ lớn, spacing rộng nhẹ.  
  - Thân bài dùng sans‑serif trung tính, `leading-loose` để đọc lâu không mỏi mắt.  

- **Citations & tài liệu tham khảo**
  - Citation trong thân bài dùng dạng `sup [n]` với màu `burgundy`, là anchor cuộn xuống mục **Tài liệu tham khảo**.  
  - Phần tài liệu tham khảo trình bày theo phong cách **APA rút gọn**, có thông tin tác giả/cơ quan, năm, tiêu đề, nguồn và URL.

### 4. Cách chạy dự án cục bộ

Yêu cầu:

- Node.js LTS (khuyến nghị ≥ 18)  
- npm (hoặc pnpm/yarn – ví dụ bên dưới dùng npm)

Các bước:

```bash
git clone https://github.com/tuananhhusc/Kinh-Thanh-Vuot-Tren-Nhan-Dao-Xa-Hoi.git
cd Kinh-Thanh-Vuot-Tren-Nhan-Dao-Xa-Hoi

npm install
npm run dev
```

Sau đó mở trình duyệt tại:

```text
http://localhost:3000
```

(Nếu port 3000 đã được dùng, Next.js sẽ tự động chọn port tiếp theo và in rõ trong terminal.)

### 5. Build & deploy

Build production:

```bash
npm run build
npm start
```

Dự án có thể được deploy dễ dàng lên:

- **Vercel** (khuyến nghị cho Next.js)  
- Hoặc bất kỳ môi trường Node.js nào hỗ trợ chạy `npm start`.

### 6. Định hướng phát triển thêm

- Thêm lựa chọn **dark mode học thuật** (nền paper tối, giữ điểm nhấn vàng & burgundy).  
- Bổ sung trang phụ (appendix) cho bản PDF báo cáo, hoặc phiên bản in.  
- Thêm chức năng **search trong bài** (full‑text search client‑side cho các section).  
- Tách TOC và nội dung thành cấu trúc data‑driven để tái sử dụng cho các bài viết thần học khác.

