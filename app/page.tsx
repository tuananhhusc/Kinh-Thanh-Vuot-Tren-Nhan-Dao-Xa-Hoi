import React from "react";
import { TableOfContents } from "./components/TableOfContents";

const tocItems = [
  { id: "dan-nhap", title: "1. Dẫn nhập: Cuộc khủng hoảng...", level: 2 as const },
  { id: "ban-the-luan-mac-khai", title: "2. Bản thể luận của Mặc Khải", level: 2 as const },
  { id: "dei-verbum", title: "2.1. Dei Verbum: Sự tự mặc khải", level: 3 as const },
  { id: "verbum-domini", title: "2.2. Verbum Domini: Sự lật đổ các tiêu chuẩn thế gian", level: 3 as const },
  { id: "perspicuity", title: "2.3. Sự rõ ràng của Kinh Thánh về ơn cứu độ", level: 3 as const },
  { id: "coi-re-nhan-quyen", title: "3. Cội rễ tư tưởng nhân quyền", level: 2 as const },
  { id: "imago-dei", title: "3.1. Imago Dei và phẩm giá", level: 3 as const },
  { id: "chu-nghia-nhan-van", title: "3.2. Chủ nghĩa nhân văn sơ hở", level: 3 as const },
  { id: "social-gospel", title: "4. Lịch sử Tin Mừng Xã Hội", level: 2 as const },
  { id: "social-gospel-hinh-thanh", title: "4.1. Sự hình thành", level: 3 as const },
  { id: "gospel-reductionism", title: "4.2. Sự giản lược hóa Phúc Âm", level: 3 as const },
  { id: "liberation-theology", title: "5. Thần học Giải phóng tại Mỹ Latinh", level: 2 as const },
  { id: "liberation-nguon-goc", title: "5.1. Nguồn gốc và cấu trúc", level: 3 as const },
  { id: "liberation-huan-quyen", title: "5.2. Sự phản biện của Huấn quyền", level: 3 as const },
  { id: "liberation-tha-hoa", title: "5.3. Sự tha hóa đích thực", level: 3 as const },
  { id: "karl-barth", title: "6. Biện chứng của Lời Chúa nơi Karl Barth", level: 2 as const },
  { id: "barth-wholly-other", title: "6.1. Từ xã hội chủ nghĩa đến \"wholly other\"", level: 3 as const },
  { id: "barth-dispossessive", title: "6.2. Mặc khải mang tính tước đoạt", level: 3 as const },
  { id: "tranh-luan-duong-dai", title: "7. Những tranh luận đương đại", level: 2 as const },
  { id: "tuyen-ngon-dallas", title: "7.1. Tuyên ngôn Dallas", level: 3 as const },
  { id: "phan-bien-tien-bo", title: "7.2. Phản biện từ cánh tiến bộ", level: 3 as const },
  { id: "hoc-thuyet-xa-hoi", title: "8. Học thuyết Xã hội Công giáo", level: 2 as const },
  { id: "on-cuu-do-toan-dien", title: "8.1. Ơn cứu độ toàn diện", level: 3 as const },
  { id: "trat-tu-sieu-nhien", title: "8.2. Trật tự siêu nhiên nâng trật tự tự nhiên", level: 3 as const },
  { id: "duc-tin-hoan-cai-hanh-dong", title: "8.3. Đức tin, hoán cải và hành động xã hội", level: 3 as const },
  { id: "ket-luan", title: "9. Kết luận: Sự trường tồn của Lời Hằng Sống", level: 2 as const },
  { id: "tai-lieu-tham-khao", title: "Tài liệu tham khảo", level: 2 as const },
];

export default function Page() {
  return (
    <div className="grid lg:grid-cols-[minmax(0,240px)_minmax(0,1fr)] gap-8 xl:gap-12">
      {/* TOC bên trái trên desktop, trên mobile hiển thị trong component */}
      <div className="order-2 lg:order-1">
        <TableOfContents items={tocItems} />
      </div>

      {/* Cột đọc chính */}
      <article className="order-1 lg:order-2 mx-auto max-w-3xl text-[15px] sm:text-[16px] leading-relaxed sm:leading-loose">
        {/* Hero */}
        <header className="mb-10 text-center">
          <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl font-semibold text-midnight mb-4">
            Kinh Thánh Vượt Trên Nhân Đạo Xã Hội
          </h1>
          <p className="font-sans text-sm sm:text-base text-midnight/80 max-w-2xl mx-auto mb-6">
            Báo cáo nghiên cứu thần học về sự siêu việt của Kinh Thánh và sự
            nguy hiểm của trào lưu giản lược hóa thông điệp nhân đạo xã hội.
          </p>
          <div className="border-l-2 border-gold/80 pl-4 italic text-sm text-midnight/80 max-w-xl mx-auto">
            <p>
              “Kinh Thánh không thể bị giản lược thành một thông điệp thuần túy
              nhân đạo hay xã hội”
            </p>
            <p className="mt-2 text-xs text-midnight/70">
              — Đức Thánh Cha Lêô XIV (04/02/2026)
            </p>
          </div>
        </header>

        {/* Nội dung chính */}
        <section className="space-y-8 text-justify">
          {/* 1. Dẫn nhập */}
          <section id="dan-nhap" aria-labelledby="dan-nhap-heading">
            <h2
              id="dan-nhap-heading"
              className="font-serif text-xl sm:text-2xl font-semibold text-midnight mb-3 pb-1 border-b border-gold/40"
            >
              1. Dẫn Nhập: Cuộc Khủng Hoảng Của Khuynh Hướng Nội Tại Hóa Trong
              Diễn Giải Mặc Khải
            </h2>
            <p className="text-midnight/85 mb-3">
              Trong kỷ nguyên hậu hiện đại, khi các đại tự sự bị hoài nghi và
              các phong trào giải phóng xã hội lên ngôi, các văn bản tôn giáo,
              đặc biệt là Kinh Thánh Kitô giáo, thường xuyên bị kéo vào các
              lăng kính diễn giải mang tính chính trị và xã hội học. Vào ngày
              04 tháng 02 năm 2026, trong một buổi tiếp kiến chung, Đức Thánh
              Cha Lêô XIV đã đưa ra một tuyên bố mang tính nền tảng và cảnh báo
              sâu sắc: "Kinh Thánh không thể bị giản lược thành một thông điệp
              thuần túy nhân đạo hay xã hội". Tuyên bố này không phải là một sự
              thoái thác các trách nhiệm xã hội, mà là một sự tái khẳng định
              bản chất siêu việt, thiêng liêng và tính toàn vẹn của Mặc Khải
              Kitô giáo trong bối cảnh các hệ tư tưởng thế tục đang nỗ lực
              "chiếm đoạt" Kinh Thánh để phục vụ cho các nghị sự chính trị.
            </p>
            <p className="text-midnight/85 mb-3">
              Tuyên bố này càng mang sức nặng khi được đặt trong bối cảnh các
              quyết định mục vụ gần đây của Đức Thánh Cha Lêô XIV. Đầu năm
              2026, Tòa Thánh xác nhận ngài không có kế hoạch thăm Hoa Kỳ hay
              tham dự Đại hội đồng Liên Hợp Quốc, mà thay vào đó ưu tiên các
              chuyến tông du đến những vùng ngoại biên như Algeria, Angola và
              Peru. Thông qua bức thư gửi các linh mục tại Madrid vào tháng 2
              năm 2026, Đức Thánh Cha nhấn mạnh sự cần thiết của việc lắng nghe
              Chúa Thánh Thần và thực hành phân định thiêng liêng hơn là bị
              cuốn vào "việc quản lý các tình trạng khẩn cấp" của xã hội đương
              đại. Sự lựa chọn mục vụ này phản ánh chính xác lập trường thần
              học: Giáo hội và Lời Chúa không chạy theo các chương trình nghị
              sự địa chính trị hay nhân đạo thế tục.
            </p>
            <p className="text-midnight/85">
              Sự giản lược hóa (reductionism) Kinh Thánh thành một chương trình
              nghị sự xã hội hay một bản tuyên ngôn nhân quyền thuần túy là một
              trong những thách thức thần học lớn nhất của hai thế kỷ qua. Khái
              niệm giản lược hóa ở đây ám chỉ nỗ lực thu hẹp một thực tại đa
              chiều, mang tính siêu nhiên và cánh chung, vào một khuôn khổ giới
              hạn của không gian, thời gian và vật chất. Từ trào lưu Tin Mừng
              Xã Hội (Social Gospel) của phong trào Tin Lành tự do đầu thế kỷ
              20, Thần học Giải phóng (Liberation Theology) tại Mỹ Latinh vào
              những năm 1970, cho đến các cuộc tranh luận đương đại về Công lý
              Xã hội (Social Justice) và thuyết sắc tộc trọng yếu (Critical Race
              Theory) trong giới Kháng Cách (Protestant), tất cả đều đối diện
              với một ranh giới mỏng manh: Sự giao thoa giữa thông điệp cứu độ
              siêu nhiên và các hệ quả thực hành đạo đức trong trật tự trần
              thế.
            </p>
            <p className="mt-3 text-midnight/85">
              Nghiên cứu này sẽ phân tích một cách thấu đáo và toàn diện những
              nền tảng thần học, bối cảnh lịch sử, cũng như các phản biện học
              thuật từ các nhà thần học, các dòng phái Kháng Cách và Huấn Quyền
              Công Giáo. Mục tiêu của báo cáo là chứng minh rằng, mặc dù Kinh
              Thánh chứa đựng những đòi hỏi khắt khe nhất về công lý và tình bác
              ái, nó vĩnh viễn không thể bị đồng hóa hoặc thu hẹp vào bất kỳ
              một phong trào xã hội hay một ý thức hệ chính trị nào. Nỗ lực
              biến Lời Hằng Sống thành một cuốn cẩm nang công lý thế tục không
              chỉ làm suy yếu thẩm quyền của Kinh Thánh mà còn tước đoạt đi
              nguồn ân sủng duy nhất có khả năng đem lại sự biến đổi đích thực
              cho nhân loại.
            </p>
          </section>

          {/* 2. Bản thể luận của Mặc Khải */}
          <section
            id="ban-the-luan-mac-khai"
            aria-labelledby="ban-the-luan-mac-khai-heading"
          >
            <h2
              id="ban-the-luan-mac-khai-heading"
              className="font-serif text-xl sm:text-2xl font-semibold text-midnight mb-3 pb-1 border-b border-gold/40"
            >
              2. Bản Thể Luận Của Mặc Khải: Cuộc Gặp Gỡ Với Một Ngôi Vị Siêu
              Việt
            </h2>
            <p className="text-midnight/85 mb-3">
              Để hiểu tại sao Kinh Thánh không thể bị giản lược thành một thông
              điệp nhân đạo, trước hết cần phải xác định bản chất của Mặc Khải
              được chứa đựng trong Kinh Thánh. Lịch sử phát triển của thần học
              Kinh Thánh trong thế kỷ 20 đã chứng kiến một sự chuyển dịch sâu
              sắc nhằm bảo vệ tính nguyên vẹn của Mặc Khải.
            </p>

            {/* 2.1 Dei Verbum */}
            <section id="dei-verbum" aria-labelledby="dei-verbum-heading">
              <h3
                id="dei-verbum-heading"
                className="font-serif text-lg font-semibold text-midnight mt-4 mb-2"
              >
                2.1. Dei Verbum: Sự Tự Mặc Khải Của Thiên Chúa Ba Ngôi{" "}
                <sup className="align-super text-[0.65rem] text-burgundy">
                  <a
                    href="#ref-1"
                    className="no-underline hover:underline"
                  >
                    [1]
                  </a>
                </sup>
              </h3>
              <p className="text-midnight/85 mb-3">
                Hiến chế Tín lý về Mạc khải của Thiên Chúa (Dei Verbum) do Công
                Đồng Vatican II ban hành đã tạo ra một bước ngoặt trong việc
                hiểu về Kinh Thánh. Các bản thảo sơ bộ mang nặng tính kinh viện,
                vốn tiếp cận Mặc Khải như một tập hợp các mệnh đề triết lý hoặc
                các quy chuẩn luân lý trừu tượng, đã bị các Nghị phụ bác bỏ.
                Theo nhận định của thần học gia Joseph Ratzinger (sau này là
                Giáo hoàng Benedict XVI), người đã đóng vai trò quan trọng trong
                việc soạn thảo văn kiện này, các bản thảo ban đầu đã thiếu đi
                tính mạch lạc về mặt hiện sinh và mục vụ khi không đặt Chúa
                Giêsu Kitô vào trung tâm điểm của tài liệu.
              </p>
              <p className="text-midnight/85 mb-3">
                Dei Verbum nhấn mạnh rằng Thiên Chúa không chỉ mặc khải một bộ
                luật đạo đức hay một hệ thống triết học, mà Ngài "đã muốn mặc
                khải chính mình". Công trình mặc khải này được thực hiện bằng
                những việc làm và lời nói có liên hệ mật thiết với nhau, trong
                đó các hành động của Thiên Chúa trong lịch sử củng cố cho Lời
                của Ngài, và Lời của Ngài làm sáng tỏ mầu nhiệm của các hành
                động đó. Đức Kitô vừa là Đấng Trung Gian vừa là sự viên mãn của
                toàn thể mặc khải. Do đó, Kinh Thánh là chứng tá về sự tự mặc
                khải của Thiên Chúa Ba Ngôi, nhằm mời gọi con người bước vào sự
                hiệp thông sâu xa với Ngài.
              </p>
              <p className="text-midnight/85">
                Chính vì đối tượng tối hậu của Kinh Thánh là sự hiệp thông siêu
                nhiên với Thiên Chúa, mọi nỗ lực biến nó thành một công cụ giải
                quyết các nhu cầu vật chất hoặc cấu trúc lại xã hội loài người
                đều là một sự đảo lộn trật tự thần học. Thông điệp Ánh sáng Đức
                tin (Lumen Fidei)
                <sup className="align-super text-[0.65rem] text-burgundy">
                  <a
                    href="#ref-2"
                    className="no-underline hover:underline"
                  >
                    [2]
                  </a>
                </sup>{" "}
                cũng chỉ ra rằng đức tin mở ra con đường lịch
                sử, nhưng đức tin có liên hệ mật thiết với chân lý siêu việt,
                vượt khỏi sự hiểu biết thuần túy mang tính thế tục. Ngôn sứ
                Isaia (Is 7:9) khẳng định "Nếu các ngươi không tin, các ngươi sẽ
                không đứng vững". Sự "đứng vững" này, khi được tiếp xúc với nền
                văn hóa Hy Lạp, đã được dịch thành "hiểu biết", cho thấy sự thấu
                hiểu sâu sắc các hoạt động của Thiên Chúa trong lịch sử con
                người chỉ có thể khởi đi từ thái độ tín thác siêu nhiên, chứ
                không phải từ một hệ thống phân tích xã hội học.
              </p>
            </section>

            {/* 2.2 Verbum Domini */}
            <section id="verbum-domini" aria-labelledby="verbum-domini-heading">
              <h3
                id="verbum-domini-heading"
                className="font-serif text-lg font-semibold text-midnight mt-4 mb-2"
              >
                2.2. Verbum Domini: Sự Lật Đổ Các Tiêu Chuẩn Thế Gian{" "}
                <sup className="align-super text-[0.65rem] text-burgundy">
                  <a
                    href="#ref-3"
                    className="no-underline hover:underline"
                  >
                    [3]
                  </a>
                </sup>
              </h3>
              <p className="text-midnight/85 mb-3">
                Trong Tông huấn Hậu Thượng Hội Đồng Verbum Domini, Giáo hoàng
                Benedict XVI đã khẳng định rõ ràng rằng Kitô giáo không phải là
                kết quả của một lựa chọn đạo đức hay một ý tưởng cao siêu, mà là
                cuộc gặp gỡ với một biến cố, một Ngôi Vị. Chính từ lăng kính
                này, Verbum Domini bác bỏ ý tưởng cho rằng Giáo hội có nhiệm vụ
                trực tiếp trong việc tạo ra một trật tự xã hội công bằng hơn
                thông qua việc kiến tạo các chương trình chính trị. Ngôi Lời đã
                trở nên người phàm và cư ngụ giữa chúng ta (Ga 1:14) để nâng con
                người lên hàng thần linh, chứ không phải để thiết lập một nền
                cộng hòa trần thế.
              </p>
              <p className="text-midnight/85">
                Mặc dù Kinh Thánh không phải là một chương trình chính trị, Lời
                Chúa thực sự truyền cảm hứng cho việc xây dựng các mối quan hệ
                dựa trên sự ngay thẳng và công lý, đồng thời Lời Chúa tố cáo một
                cách không mơ hồ những sự bất công và thúc đẩy tình liên đới,
                bình đẳng. Tuy nhiên, sự tố cáo này mang một bản chất hoàn toàn
                khác với các cuộc cách mạng thế tục. Rao giảng Tin Mừng là để
                "lật đổ bằng sức mạnh của Phúc Âm các tiêu chuẩn phán đoán, các
                lợi ích, các mô hình tư duy, các nguồn cảm hứng và lối sống của
                nhân loại đang đi ngược lại với Lời Thiên Chúa". Nói cách khác,
                Kinh Thánh không thỏa hiệp hay điều chỉnh để phù hợp với các hệ
                hình xã hội; ngược lại, nó đứng bên ngoài và phán xét mọi hệ
                hình đó. Việc giao phó trách nhiệm cải tạo xã hội trực tiếp vào
                tay các chính trị gia là một sự phân định rạch ròi: Giáo hội và
                Lời Chúa trang bị cho giáo dân về mặt lương tâm, để chính họ là
                những người trực tiếp dấn thân vào các hoạt động chính trị và xã
                hội.
              </p>
            </section>

            {/* 2.3 Perspicuity */}
            <section id="perspicuity" aria-labelledby="perspicuity-heading">
              <h3
                id="perspicuity-heading"
                className="font-serif text-lg font-semibold text-midnight mt-4 mb-2"
              >
                2.3. Sự Rõ Ràng (Perspicuity) Của Kinh Thánh Về Ơn Cứu Độ
              </h3>
              <p className="text-midnight/85">
                Một khía cạnh khác củng cố bản thể của Mặc Khải là tính "rõ
                ràng" (perspicuity) của Kinh Thánh đối với những vấn đề liên
                quan đến sự cứu rỗi. Một nghiên cứu thực địa từ một nhà truyền
                giáo tại một trại tị nạn ở Hungary đã chứng minh sức mạnh của
                Mặc Khải khi tiếp xúc trực tiếp với con người. Khi các cuốn Tân
                Ước bằng tiếng Urdu, Dari và Farsi được phân phát cùng với hàng
                viện trợ nhân đạo cho những người tị nạn từ các quốc gia đa số
                theo Hồi giáo, nhiều người đã tin nhận Chúa Giêsu dù không có
                một chương trình thần học phức tạp nào đi kèm. Điều này dựa trên
                giả định thần học cốt lõi từ thời Cải Cách rằng: bất kỳ ai có
                kỹ năng đọc hiểu cơ bản đều có thể hiểu đủ ý nghĩa của Kinh
                Thánh khi liên quan đến việc Chúa Giêsu là ai và sự cứu rỗi có
                thể đạt được qua Ngài như thế nào. Việc này chứng minh rằng
                thông điệp cốt lõi của Kinh Thánh là sự cứu rỗi cá nhân và sự
                nhận biết Ngôi Vị Chúa Kitô, vốn có thể vượt qua mọi rào cản
                ngôn ngữ, giai cấp và cấu trúc áp bức, ngay cả trong những hoàn
                cảnh khốn cùng nhất của người tị nạn.
              </p>
            </section>
          </section>

          {/* 3. Cội rễ tư tưởng nhân quyền */}
          <section id="coi-re-nhan-quyen" aria-labelledby="coi-re-nhan-quyen-heading">
            <h2
              id="coi-re-nhan-quyen-heading"
              className="font-serif text-xl sm:text-2xl font-semibold text-midnight mb-3 pb-1 border-b border-gold/40"
            >
              3. Cội Rễ Tư Tưởng Nhân Quyền Và Sự Phức Tạp Của Khái Niệm Công Lý
            </h2>
            <p className="text-midnight/85 mb-3">
              Trước khi đi sâu vào các trào lưu làm méo mó Kinh Thánh, cần phải
              làm rõ mối quan hệ thực sự giữa Kinh Thánh và các khái niệm xã hội
              đương đại như nhân quyền (human rights) và công lý (justice). Việc
              Kinh Thánh không thể bị giản lược thành một bản tuyên ngôn nhân
              quyền không có nghĩa là Kinh Thánh không có gì để nói về nhân
              quyền.
            </p>

            {/* 3.1 Imago Dei */}
            <section id="imago-dei" aria-labelledby="imago-dei-heading">
              <h3
                id="imago-dei-heading"
                className="font-serif text-lg font-semibold text-midnight mt-4 mb-2"
              >
                3.1. Imago Dei – Lời Giải Đáp Cho Sự Tôn Trọng Phẩm Giá
              </h3>
              <p className="text-midnight/85 mb-3">
                Các câu hỏi thường được đặt ra trong giới truyền giáo đương đại
                là: Tại sao các Kitô hữu không chỉ tập trung vào việc truyền bá
                phúc âm mà lại quan tâm đến các vấn đề như cung cấp thức ăn cho
                người nghèo, chống phá thai, giúp đỡ người vô gia cư và xóa bỏ
                nạn buôn người? Câu trả lời nằm ở nguyên lý thần học vững chắc
                được thiết lập ngay từ Sáng Thế Ký 1:26-27: Con người được tạo
                dựng theo "Hình ảnh Thiên Chúa" (Imago Dei).
              </p>
              <p className="text-midnight/85 mb-3">
                Mặc dù thuật ngữ "những quyền không thể chuyển nhượng"
                (unalienable rights) xuất hiện trong Tuyên ngôn Độc lập Hoa Kỳ
                không nằm rõ ràng trong các văn bản Kinh Thánh, nhưng nguồn gốc
                triết học của nó bắt nguồn trực tiếp từ "sự đồng thuận Kitô
                giáo" (Christian consensus) của văn hóa Tây Âu. Theo phân tích
                của Tiến sĩ Francis Schaeffer, các triết gia thế kỷ 17 và 18 như
                John Locke và Jean-Jacques Rousseau đã xây dựng các học thuyết
                về quyền con người dựa trên cái nhìn cao cả về nhân loại mà họ
                kế thừa từ các nhà tư tưởng Phục hưng. Những nhà tư tưởng Phục
                hưng này lại lấy cảm hứng từ các giáo lý lâu đời của Giáo hội,
                vốn dựa trên câu chuyện sáng tạo và vai trò độc nhất vô nhị của
                Adam trong Sáng Thế Ký
                <sup className="align-super text-[0.65rem] text-burgundy">
                  <a
                    href="#ref-9"
                    className="no-underline hover:underline"
                  >
                    [9]
                  </a>
                </sup>
                .
              </p>
              <p className="text-midnight/85">
                Chính việc mang trong mình hình ảnh của Đấng Tối Cao đòi hỏi
                con người phải đối xử với nhau một cách nhân phẩm. Do đó, Công
                lý Xã hội theo quan điểm Kinh Thánh không phải là sự ép buộc
                phân phối lại của cải bởi chính quyền, mà là trách nhiệm liên đới
                của cộng đồng Đức tin trong việc trở thành "bàn tay và khối óc
                của Chúa Giêsu" để giải quyết những nỗi tuyệt vọng của xã hội.
                Sự dấn thân này không mâu thuẫn với truyền giáo, mà là việc thực
                thi Thánh ý Chúa để "phục vụ thế hệ của chính mình" (Cv 13:36).
              </p>
            </section>

            {/* 3.2 Chủ nghĩa nhân văn và bảng so sánh */}
            <section id="chu-nghia-nhan-van" aria-labelledby="chu-nghia-nhan-van-heading">
              <h3
                id="chu-nghia-nhan-van-heading"
                className="font-serif text-lg font-semibold text-midnight mt-4 mb-2"
              >
                3.2. Chủ Nghĩa Nhân Văn Sơ Hở Và Nguy Cơ Đảo Lộn Chân Lý
              </h3>
              <p className="text-midnight/85 mb-3">
                Khi các thế lực hậu hiện đại cố gắng tước bỏ nền tảng Thượng Đế
                khỏi hệ thống nhân quyền, họ đối diện với một sự sụp đổ về mặt
                nhận thức luận. Các đại diện của chủ nghĩa nhân văn thế tục cho
                rằng việc áp dụng Kinh Thánh vào thực tiễn luật pháp xã hội là
                một sai lầm nghiêm trọng vì họ tin rằng Kinh Thánh chỉ là sản
                phẩm của những con người dễ sai lầm trong một "thời kỳ thiếu khai
                sáng". Họ lập luận rằng Kinh Thánh cản trở nhân loại tiến tới
                một mức độ hạnh phúc và an sinh cao hơn.
              </p>
              <p className="text-midnight/85 mb-3">
                Hệ quả của tư duy này đã được dự báo từ trước bởi Friedrich
                Nietzsche. Nietzsche chào đón sự xuất hiện của chủ nghĩa hư vô
                (nihilism) với hy vọng rằng một nhân loại không có Chúa sẽ có
                thể tự tái định nghĩa mọi giá trị và đạt tới tiềm năng tối hậu
                của mình. Tuy nhiên, như lịch sử đã chứng minh, dự án tái định
                nghĩa mọi giá trị của Nietzsche là một ảo tưởng. "Khoảnh khắc
                chúng ta quyết định rằng chúng ta hiểu biết hơn Thiên Chúa—rằng
                chúng ta không cần Ngài để xác định các giá trị 'thực' của thế
                giới—chúng ta đã tự chuốc lấy sự hủy diệt". Lịch sử đẫm máu của
                các chế độ toàn trị thế kỷ 20 là minh chứng tàn khốc nhất cho
                nỗ lực xây dựng một nền nhân đạo không có Thiên Chúa.
              </p>

              {/* Bảng Hệ trục giá trị */}
              <div className="mt-4 overflow-x-auto">
                <table className="w-full border-collapse text-sm">
                  <thead>
                    <tr className="border-b border-midnight/10 bg-paperAlt">
                      <th className="px-3 py-2 text-left font-semibold">
                        Hệ trục giá trị
                      </th>
                      <th className="px-3 py-2 text-left font-semibold">
                        Lăng kính Kinh Thánh toàn diện
                      </th>
                      <th className="px-3 py-2 text-left font-semibold">
                        Lăng kính nhân đạo thế tục / giản lược
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b border-midnight/10">
                      <td className="px-3 py-2 align-top font-medium">
                        Nền tảng phẩm giá
                      </td>
                      <td className="px-3 py-2 align-top">
                        Imago Dei (Hình ảnh Thiên Chúa), được ban tặng từ bên
                        ngoài, bất khả xâm phạm.
                      </td>
                      <td className="px-3 py-2 align-top">
                        Khế ước xã hội, sự tiến hóa của nhận thức đạo đức; có
                        thể thay đổi theo số đông.
                      </td>
                    </tr>
                    <tr className="border-b border-midnight/10">
                      <td className="px-3 py-2 align-top font-medium">
                        Khái niệm công lý
                      </td>
                      <td className="px-3 py-2 align-top">
                        Sự tuân thủ Luật pháp Thiên Chúa và tình yêu thương
                        huynh đệ đích thực.
                      </td>
                      <td className="px-3 py-2 align-top">
                        Sự bình đẳng về kết quả kinh tế và vật chất, xóa bỏ các
                        trật tự phân cấp truyền thống.
                      </td>
                    </tr>
                    <tr className="border-b border-midnight/10">
                      <td className="px-3 py-2 align-top font-medium">
                        Phương thức hoàn thiện
                      </td>
                      <td className="px-3 py-2 align-top">
                        Ân sủng siêu nhiên chữa lành bản tính tự nhiên đã sa
                        ngã.
                      </td>
                      <td className="px-3 py-2 align-top">
                        Tự cường, tái cấu trúc hệ thống luật pháp và phân phối
                        tài nguyên.
                      </td>
                    </tr>
                    <tr>
                      <td className="px-3 py-2 align-top font-medium">
                        Mục tiêu tối hậu
                      </td>
                      <td className="px-3 py-2 align-top">
                        Sự hiệp thông cánh chung với Thiên Chúa trong Vương
                        Quốc Vĩnh Cửu.
                      </td>
                      <td className="px-3 py-2 align-top">
                        Utopia (xã hội hoàn hảo) trên trần thế.
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>
          </section>

          {/* 4. Social Gospel */}
          <section id="social-gospel" aria-labelledby="social-gospel-heading">
            <h2
              id="social-gospel-heading"
              className="font-serif text-xl sm:text-2xl font-semibold text-midnight mb-3 pb-1 border-b border-gold/40"
            >
              4. Lịch Sử Và Hệ Lụy Của Trào Lưu Tin Mừng Xã Hội (Social Gospel){" "}
              <sup className="align-super text-[0.65rem] text-burgundy">
                <a
                  href="#ref-7"
                  className="no-underline hover:underline"
                >
                  [7]
                </a>
              </sup>
            </h2>
            <p className="text-midnight/85 mb-3">
              Để nhận diện rõ mối nguy hiểm của sự giản lược hóa Kinh Thánh, cần
              phân tích sự trỗi dậy và những hệ lụy của phong trào Tin Mừng Xã
              Hội (Social Gospel) trong môi trường Kháng Cách tại Hoa Kỳ, một
              phong trào đã định hình lại hoàn toàn diện mạo của nền thần học
              hiện đại.
            </p>

            <section
              id="social-gospel-hinh-thanh"
              aria-labelledby="social-gospel-hinh-thanh-heading"
            >
              <h3
                id="social-gospel-hinh-thanh-heading"
                className="font-serif text-lg font-semibold text-midnight mt-4 mb-2"
              >
                4.1. Sự Hình Thành Của Một Thần Học Phụ Thuộc Bối Cảnh
              </h3>
              <p className="text-midnight/85 mb-3">
                Xuất hiện vào giai đoạn cuối thế kỷ 19 và đầu thế kỷ 20 trong
                bối cảnh xã hội Mỹ đang công nghiệp hóa mạnh mẽ với những bất
                công rõ rệt của chủ nghĩa tư bản sơ khai (như bóc lột sức lao
                động, nghèo đói tại các khu ổ chuột), phong trào Tin Mừng Xã Hội
                ra đời nhằm đưa ra một phương thuốc giải quyết thực trạng. Người
                đi tiên phong là Walter Rauschenbusch, một mục sư người Mỹ gốc
                Đức phục vụ tại khu vực Hell&apos;s Kitchen của New York.
                Rauschenbusch cho rằng các vấn đề xã hội thực chất là các vấn đề
                đạo đức trên quy mô lớn, và giáo lý Kitô giáo cần tập trung vào
                việc tạo ra "một cuộc sống đúng đắn" thay vì các nghi lễ thờ
                phượng sáo rỗng. Ông trích dẫn số liệu điều tra dân số Hoa Kỳ
                năm 1900 cho thấy mức lương trung bình của nam công nhân chỉ
                khoảng 480,50 USD/năm và của nữ là 267,10 USD, trong khi giá cả
                sinh hoạt tăng nhanh khiến sức mua thực tế của họ suy giảm rõ
                rệt
                <sup className="align-super text-[0.65rem] text-burgundy">
                  <a
                    href="#ref-7"
                    className="no-underline hover:underline"
                  >
                    [7]
                  </a>
                </sup>
                .
              </p>
              <p className="text-midnight/85">
                Lấy cảm hứng từ các ngôn sứ Cựu Ước, phong trào này lập luận
                rằng Vương quốc Thiên Chúa không chỉ là sự cứu rỗi linh hồn cá
                nhân mà là sự tái cấu trúc toàn diện các thể chế kinh tế, xã hội
                theo tiêu chuẩn bình đẳng và công lý. Ảnh hưởng của thần học này
                đã tác động mạnh mẽ đến những nhân vật lịch sử như Martin Luther
                King Jr., người tự nhận mình là một "người vận động cho Tin Mừng
                Xã Hội", nhấn mạnh việc quan tâm đến toàn bộ con người, cả vật
                chất lẫn tâm linh.
              </p>
            </section>

            <section
              id="gospel-reductionism"
              aria-labelledby="gospel-reductionism-heading"
            >
              <h3
                id="gospel-reductionism-heading"
                className="font-serif text-lg font-semibold text-midnight mt-4 mb-2"
              >
                4.2. Sự Giản Lược Hóa Phúc Âm (Gospel Reductionism) Và Sự Xói Mòn
                Thẩm Quyền Kinh Thánh
              </h3>
              <p className="text-midnight/85 mb-3">
                Mặc dù xuất phát từ thiện ý giải quyết sự nghèo khổ, phong trào
                này nhanh chóng bộc lộ những lỗ hổng thần học nghiêm trọng. Việc
                dịch chuyển trọng tâm từ "sự cứu rỗi cá nhân khỏi tội lỗi" sang
                "sự giải phóng tập thể khỏi các cấu trúc áp bức" đã dẫn đến một
                hiện tượng mà giới thần học gọi là sự "Giản lược hóa Phúc Âm"
                (Gospel Reductionism).
              </p>
              <p className="text-midnight/85 mb-3">
                Giản lược hóa Phúc Âm xảy ra khi các nhà thần học giảm thiểu
                toàn bộ bức tranh phong phú và phức tạp của Kinh Thánh xuống chỉ
                còn một hoặc hai khái niệm cốt lõi (thường là "Tình yêu" hoặc
                "Công lý"), đồng thời loại bỏ các mệnh lệnh luân lý khắt khe
                hoặc các khái niệm siêu nhiên (như thiên thần, ác quỷ, sự phán
                xét đời đời). Trong Giáo hội Tin lành Lutheran tại Mỹ (ELCA),
                phương pháp luận này đã bị chỉ trích kịch liệt vì nó dùng
                "Phúc Âm" làm lý do để bỏ qua "Luật pháp" (Law), từ đó hợp thức
                hóa hàng loạt các quan điểm tiến bộ về giới tính, hôn nhân và
                phá vỡ cấu trúc giáo lý truyền thống. Những giới hạn về luân lý
                mà Thánh Phaolô đặt ra bị coi là chỉ mang tính "lịch sử cục bộ"
                chứ không có giá trị phổ quát.
              </p>
              <p className="text-midnight/85 mb-3">
                Theo các phân tích đương đại, Tin Mừng Xã Hội đã làm suy yếu
                thẩm quyền của Kinh Thánh bằng cách thay thế thông điệp cốt lõi
                về sự cứu chuộc tâm linh qua Thập giá bằng các hành động đáp
                ứng "nhu cầu cảm nhận được" (felt-needs) của thể xác. Khuynh
                hướng này xuất phát từ tâm thức hậu hiện đại, vốn luôn đòi hỏi
                tôn giáo phải mang tính "thực dụng" và "liên đới" để giải quyết
                các khủng hoảng ngay lập tức. Người ta muốn nghe một bài giảng
                về sự thao túng tư pháp hoặc các vấn đề chính trị hiện hành hơn
                là lời kêu gọi tái sinh từ bên trong. Tuy nhiên, khi tập trung
                quá nhiều vào các nhu cầu chính trị và văn hóa, sức mạnh biến
                đổi của Thập giá bị làm cho trống rỗng.
              </p>
              <p className="text-midnight/85">
                Một luận điểm thường được sử dụng bởi các nhà hoạt động xã hội
                thế tục là Chúa Giêsu "đồng hành với người có tội", nên Giáo hội
                cũng phải thỏa hiệp với các lối sống tội lỗi nhân danh sự bao
                dung. Nghiên cứu thần học bác bỏ hoàn toàn điều này: Chúa Giêsu
                không bao giờ đồng thuận với lối sống tội lỗi; Ngài đối mặt với
                tội lỗi và yêu cầu sự hoán cải nội tâm trọn vẹn ("hãy đi và
                đừng phạm tội nữa") vì vương quốc Thiên Chúa đã đến gần. Mặc dù
                Kinh Thánh có hàng vạn lời dạy cho mọi khía cạnh của cuộc sống,
                việc xẻn bớt một phần của "chiếc bánh Kinh Thánh" rồi gọi đó là
                "toàn bộ chiếc bánh" chính là sự nguy hiểm của tư duy rút gọn.
                "Người ta không chỉ sống nhờ cơm bánh, nhưng còn nhờ mọi lời
                miệng Thiên Chúa phán ra" (Mt 4:4).
              </p>
            </section>
          </section>

          {/* 5. Thần học Giải phóng */}
          <section
            id="liberation-theology"
            aria-labelledby="liberation-theology-heading"
          >
            <h2
              id="liberation-theology-heading"
              className="font-serif text-xl sm:text-2xl font-semibold text-midnight mb-3 pb-1 border-b border-gold/40"
            >
              5. Cuộc Khủng Hoảng Của Thần Học Giải Phóng Tại Mỹ Latinh
            </h2>
            <p className="text-midnight/85 mb-3">
              Nếu Tin Mừng Xã Hội là sự thỏa hiệp của khối Kháng Cách Bắc Mỹ
              với chủ nghĩa thực dụng tư bản, thì Thần học Giải phóng (Liberation
              Theology) lại là một cuộc cách mạng sâu sắc hơn, bùng nổ tại khu
              vực Nam Mỹ trong môi trường Công giáo với bối cảnh đói nghèo cùng
              cực và các chế độ độc tài quân sự quân phiệt áp bức.
            </p>

            <section
              id="liberation-nguon-goc"
              aria-labelledby="liberation-nguon-goc-heading"
            >
              <h3
                id="liberation-nguon-goc-heading"
                className="font-serif text-lg font-semibold text-midnight mt-4 mb-2"
              >
                5.1. Nguồn Gốc Và Cấu Trúc Của Thần Học Giải Phóng
              </h3>
              <p className="text-midnight/85 mb-3">
                Mục tiêu ban đầu của Thần học Giải phóng là thấu hiểu Tin Mừng
                dưới ánh sáng trải nghiệm sống của người nghèo và người bị áp
                bức, từ đó hành động để loại bỏ sự áp bức, hướng tới Vương quốc
                Thiên Chúa trên trần thế. Các nhà thần học hàng đầu của phong
                trào này như Leonardo Boff và Gustavo Gutiérrez cho rằng thần
                học không thể được xây dựng từ tháp ngà hàn lâm, mà phải nảy
                sinh từ cuộc đối thoại liên tục với những người nghèo khổ và
                bối cảnh đấu tranh sinh tồn của họ. Họ lập luận rằng sự giải
                phóng chính trị, kinh tế và xã hội là một chiều kích không thể
                tách rời khỏi sứ điệp tâm linh của Kitô giáo.
              </p>
            </section>

            <section
              id="liberation-huan-quyen"
              aria-labelledby="liberation-huan-quyen-heading"
            >
              <h3
                id="liberation-huan-quyen-heading"
                className="font-serif text-lg font-semibold text-midnight mt-4 mb-2"
              >
                5.2. Sự Phản Biện Sắc Bén Của Huấn Quyền Vatican
              </h3>
              <p className="text-midnight/85 mb-3">
                Mặc dù Tòa Thánh Vatican luôn cam kết với công cuộc bảo vệ người
                nghèo và người bị gạt ra bên lề xã hội, Bộ Giáo lý Đức tin
                (CDF), dưới sự dẫn dắt của Hồng y Joseph Ratzinger (trong triều
                đại Giáo hoàng Gioan Phaolô II), đã nhận thấy những sự sai lệch
                có nguy cơ làm tổn hại nền tảng Đức tin. Hai Huấn thị lịch sử
                đã được ban hành: Huấn thị về một vài khía cạnh của "Thần học
                Giải phóng" (Libertatis Nuntius, 1984)
                <sup className="align-super text-[0.65rem] text-burgundy">
                  <a
                    href="#ref-4"
                    className="no-underline hover:underline"
                  >
                    [4]
                  </a>
                </sup>{" "}
                và Huấn thị về Tự do và
                Giải phóng của Kitô giáo (Libertatis Conscientia, 1986)
                <sup className="align-super text-[0.65rem] text-burgundy">
                  <a
                    href="#ref-5"
                    className="no-underline hover:underline"
                  >
                    [5]
                  </a>
                </sup>
                .
              </p>
              <p className="text-midnight/85 mb-3">
                Các văn kiện của Huấn quyền đã phơi bày hai hình thức giản lược
                hóa nguy hiểm nhất của Thần học Giải phóng. Thứ nhất là sự
                "chính trị hóa quá mức" và sự đối lập chết người: đặt việc
                truyền giáo vào trong "dấu ngoặc đơn" để ưu tiên cho các nhu cầu
                vật chất cấp bách. Các nhà thần học giải phóng thường lập luận:
                "Trước tiên là bánh mì, sau đó mới đến Lời Chúa". Tòa Thánh
                tuyên bố đây là một "sai lầm chết người" khi chia cắt hoặc đối
                lập giữa bánh mì trần thế và Bánh Hằng Sống. Bằng cách tập trung
                quá nhiều vào việc thay đổi các cấu trúc xã hội để giải phóng
                con người khỏi sự thống trị kinh tế, phong trào này đã coi nhẹ
                chiều kích "giải phóng khỏi tội lỗi". Lời giải của Huấn quyền là
                việc "cứu rỗi những trái tim" phải đi trước hoặc ít nhất phải
                đồng hành với việc chuyển hóa các cơ chế bất công. Giải phóng
                tâm linh là trung tâm, giải phóng xã hội là hệ quả logic của sự
                tự do của con cái Thiên Chúa.
              </p>
              <p className="text-midnight/85">
                Thứ hai là cái bẫy của phương pháp phân tích Mác-xít. Lỗ hổng
                biểu nhận luận tồi tệ nhất của Thần học Giải phóng là việc họ tự
                tin rằng có thể mượn phương pháp phân tích xã hội học của Chủ
                nghĩa Mác mà không bị nhiễm hệ tư tưởng vô thần của nó. Khi một
                người vay mượn phân tích này, họ chắc chắn phải chấp nhận "chiến
                lược Mác-xít", cụ thể là vai trò cứu thế của giai cấp vô sản và
                khái niệm "đấu tranh giai cấp" như động lực tối hậu của lịch sử.
                Việc chấp nhận đấu tranh giai cấp tạo ra một tâm thức đạo đức
                sai lệch, trong đó nguyên tắc "cứu cánh biện minh cho phương
                tiện" được tôn vinh, dẫn đến việc sử dụng bạo lực để giải quyết
                bất công. Điều này mâu thuẫn hoàn toàn với tình yêu vô điều kiện
                của Đấng Kitô và bản chất hòa bình của Tin Mừng.
              </p>
            </section>

            <section
              id="liberation-tha-hoa"
              aria-labelledby="liberation-tha-hoa-heading"
            >
              <h3
                id="liberation-tha-hoa-heading"
                className="font-serif text-lg font-semibold text-midnight mt-4 mb-2"
              >
                5.3. Sự Tha Hóa Đích Thực: Khởi Đi Từ Tội Lỗi
              </h3>
              <p className="text-midnight/85">
                Huấn thị năm 1986 (Libertatis Conscientia) đưa ra một lập luận
                triết học thấu đáo để định vị lại khái niệm "sự tha hóa"
                (alienation). Nếu Chủ nghĩa Mác coi sự tha hóa là kết quả của
                việc con người bị tách rời khỏi tư liệu sản xuất, thì Mặc Khải
                Kitô giáo tuyên bố: sự tha hóa sâu sắc và thảm khốc nhất chính
                là Tội lỗi—sự bẻ gãy mối quan hệ với Thiên Chúa. Khi con người
                khước từ Đấng Tạo Hóa để tìm kiếm sự tự chủ tuyệt đối (ảo tưởng
                muốn "trở nên như Thiên Chúa" bằng phương tiện tùy tiện), con
                người đã tự dối mình và tha hóa khỏi chính bản tính thụ tạo của
                mình. Do đó, bất kỳ nỗ lực nào nhằm đạt được sự giải phóng chính
                trị thông qua kỹ thuật, khoa học hay cách mạng bạo lực mà gạt
                bỏ sự thật và tình yêu của Chúa Giêsu, đều sẽ rơi vào những sự
                mơ hồ tàn bạo. Giải phóng xã hội chỉ có thể đạt được kết quả
                tích cực khi nó tìm thấy nguồn cảm hứng trong sự thật siêu việt
                về con người.
              </p>
            </section>
          </section>

          {/* 6. Karl Barth */}
          <section id="karl-barth" aria-labelledby="karl-barth-heading">
            <h2
              id="karl-barth-heading"
              className="font-serif text-xl sm:text-2xl font-semibold text-midnight mb-3 pb-1 border-b border-gold/40"
            >
              6. Biện Chứng Của Lời Chúa Trong Thần Học Karl Barth: Sự Tự Do
              Tuyệt Đối Của Thiên Chúa
            </h2>
            <p className="text-midnight/85 mb-3">
              Sự kháng cự mạnh mẽ chống lại việc biến Lời Chúa thành thông điệp
              chính trị không chỉ hiện diện trong truyền thống Công giáo mà còn
              là cột trụ trong tư tưởng của Karl Barth—nhà thần học Kháng Cách
              có ảnh hưởng lớn nhất thế kỷ 20. Barth đã phát triển một hệ thống
              Thần học Biện chứng nhằm tấn công trực tiếp vào nền thần học tự
              do thế kỷ 19, vốn coi tôn giáo như một tiến trình tiến hóa đạo
              đức nội tại của nhân loại.
            </p>

            <section
              id="barth-wholly-other"
              aria-labelledby="barth-wholly-other-heading"
            >
              <h3
                id="barth-wholly-other-heading"
                className="font-serif text-lg font-semibold text-midnight mt-4 mb-2"
              >
                6.1. Từ Xã Hội Chủ Nghĩa Đến Sự Khác Biệt Hoàn Toàn (Wholly
                Other)
              </h3>
              <p className="text-midnight/85 mb-3">
                Giai đoạn đầu của cuộc đời, khi còn là một mục sư trẻ tại
                Safenwil (Thụy Sĩ), Barth đã chứng kiến nỗi thống khổ của các
                công nhân dệt may làm việc mười hai tiếng mỗi ngày với mức lương
                rẻ mạt. Lương tâm Kitô giáo không cho phép ông đứng trung lập
                hay chỉ rao giảng một phúc âm xa rời thực tế. Ông tham gia Đảng
                Dân chủ Xã hội, tổ chức các công đoàn và viết tiểu luận nổi
                tiếng "Chúa Giêsu Kitô và Phong trào Công lý Xã hội" (Jesus
                Christ and the Movement for Social Justice). Trong tác phẩm này,
                ông nỗ lực vạch ra mối liên hệ nội tại giữa tinh thần của phong
                trào dân chủ xã hội thời bấy giờ và Lời hằng sống của Thiên
                Chúa.
              </p>
              <p className="text-midnight/85">
                Tuy nhiên, Barth nhanh chóng nhận ra lỗ hổng của thần học tự do:
                sự chủ quan và thuyết lịch sử đã tương đối hóa chân lý Mặc khải,
                biến Thiên Chúa thành một khái niệm để phục vụ cho sự đấu tranh
                của con người. Sự sụp đổ của châu Âu trong Thế chiến thứ Nhất đã
                xóa sạch niềm tin của ông vào sự tiến bộ luân lý của nhân loại.
                Barth quay trở lại với Kinh Thánh và viết cuốn chú giải vĩ đại
                Thư gửi tín hữu Rôma, trong đó ông nhấn mạnh sự "khác biệt hoàn
                toàn" (wholly otherness) của Thiên Chúa so với các nền văn hóa
                hay thành tựu của con người. Sự giải phóng của Chúa Kitô là một
                hành động giáng xuống từ trên cao, phán xét và xé toạc mọi cấu
                trúc của thế gian.
              </p>
            </section>

            <section
              id="barth-dispossessive"
              aria-labelledby="barth-dispossessive-heading"
            >
              <h3
                id="barth-dispossessive-heading"
                className="font-serif text-lg font-semibold text-midnight mt-4 mb-2"
              >
                6.2. Mặc Khải Mang Tính Tước Đoạt (Dis-possessive Revelation)
              </h3>
              <p className="text-midnight/85">
                Trọng tâm thần học của Barth là khái niệm: Lời Chúa là một sự
                kiện giao tiếp trực tiếp từ một Ngôi Vị thần linh đến con người.
                Dù Lời Chúa xuất hiện qua các phương tiện hữu hình (nhân tính
                của Đấng Christ, lời ngôn sứ, lời rao giảng), những phương tiện
                này không bao giờ bị "thần thánh hóa" theo cách mà con người có
                thể nắm bắt hay điều khiển được. Mặc khải do đó mang tính "tước
                đoạt": Con người không thể giành quyền kiểm soát, quản lý hay sử
                dụng Mặc khải của Thiên Chúa để phục vụ cho các mục tiêu chính
                trị do mình thiết lập. Thiên Chúa được tự do tuyệt đối. Nhờ nền
                tảng này, Barth đã soạn thảo Tuyên ngôn Barmen (1934), phản
                kháng mạnh mẽ lại nỗ lực của Đức Quốc Xã nhằm đồng hóa Giáo hội
                Đức vào hệ tư tưởng Dân tộc Chủ nghĩa và Quốc xã. Bằng cách tách
                biệt triệt để Lời Chúa khỏi mọi hệ tư tưởng trần thế—kể cả những
                ý thức hệ mang danh nghĩa cứu rỗi dân tộc—Barth đã bảo vệ Giáo
                hội khỏi việc bị biến thành một cỗ máy tuyên truyền. Quan điểm
                này khẳng định: Giáo hội chỉ có thể phục vụ thế giới một cách
                tốt nhất khi nó kiên quyết từ chối việc bị đồng hóa vào thế
                giới.
              </p>
            </section>
          </section>

          {/* 7. Tranh luận đương đại */}
          <section
            id="tranh-luan-duong-dai"
            aria-labelledby="tranh-luan-duong-dai-heading"
          >
            <h2
              id="tranh-luan-duong-dai-heading"
              className="font-serif text-xl sm:text-2xl font-semibold text-midnight mb-3 pb-1 border-b border-gold/40"
            >
              7. Những Tranh Luận Đương Đại: Công Lý Xã Hội, Thuyết Sắc Tộc
              Trọng Yếu Và Tuyên Ngôn Dallas
            </h2>
            <p className="text-midnight/85 mb-3">
              Trong thế kỷ 21, cuộc chiến chống lại sự giản lược hóa Kinh Thánh
              đã chuyển sang một chiến trường mới: sự xâm nhập của các lý thuyết
              Hậu hiện đại vào trong diễn ngôn thần học của các Giáo hội Tin Lành
              bảo thủ tại Mỹ.
            </p>

            <section
              id="tuyen-ngon-dallas"
              aria-labelledby="tuyen-ngon-dallas-heading"
            >
              <h3
                id="tuyen-ngon-dallas-heading"
                className="font-serif text-lg font-semibold text-midnight mt-4 mb-2"
              >
                7.1. Tuyên Ngôn Dallas: Chống Lại Thuyết Sắc Tộc Trọng Yếu
              </h3>
              <p className="text-midnight/85 mb-3">
                Tháng 9 năm 2018, một nhóm các nhà lãnh đạo thuộc phe Kháng Cách
                (bao gồm John MacArthur, Voddie Baucham, Phil Johnson) đã tụ họp
                để soạn thảo "Tuyên ngôn về Công lý Xã hội và Phúc âm" (Statement
                on Social Justice and the Gospel, hay Tuyên ngôn Dallas)
                <sup className="align-super text-[0.65rem] text-burgundy">
                  <a
                    href="#ref-8"
                    className="no-underline hover:underline"
                  >
                    [8]
                  </a>
                </sup>
                . Văn kiện này ra đời nhằm phản bác sự ảnh hưởng của Thuyết Sắc
                tộc Trọng yếu (Critical Race Theory - CRT), Thuyết Giao thoa
                (Intersectionality), và Nữ quyền Cấp tiến vào không gian thần
                học.
              </p>
              <p className="text-midnight/85 mb-3">
                Tuyên ngôn Dallas đưa ra các lời khẳng định và phủ nhận sắc bén
                nhằm bảo vệ Mặc khải. Về thẩm quyền Kinh Thánh và công lý, văn
                kiện bác bỏ việc sử dụng các lý thuyết xã hội học thế tục để
                định nghĩa "công lý thực sự", khẳng định chỉ có luật pháp của
                Thiên Chúa mới là tiêu chuẩn bất biến và không có bất kỳ nền văn
                hóa nào có thẩm quyền ngang hàng với Kinh Thánh. Về tội lỗi và
                bản sắc sắc tộc, Tuyên ngôn phủ nhận mạnh mẽ khái niệm "tội lỗi
                tập thể đa thế hệ" (trừ khi thế hệ hiện tại tán thành hành vi
                đó) và bác bỏ quan điểm cho rằng tình trạng kinh tế, giới tính
                hay bản sắc sắc tộc có thể gán nhãn cho một nhóm người là "những
                kẻ áp bức có đặc quyền" hay "nạn nhân bị áp bức vĩnh viễn". Mọi
                con người đều bình đẳng dưới hình ảnh của Đức Chúa Trời (Imago
                Dei) và tội lỗi là sự vi phạm trực tiếp các điều răn, chứ không
                phải là sự lệ thuộc vào một cấu trúc vô hình.
              </p>
              <p className="text-midnight/85">
                Về Phúc Âm và sứ mạng Giáo hội, điểm cốt lõi nhất của Tuyên
                ngôn là sự khẳng định rằng các hành động nhằm đem lại công lý xã
                hội, dù là hệ quả tự nhiên và đáng khích lệ của đời sống Kitô
                giáo, tuyệt đối không phải là "thành phần cốt lõi" cấu thành nên
                khái niệm Phúc Âm. Việc đánh đồng hành động xã hội với sứ mạng
                cốt lõi của Giáo hội (vốn là thờ phượng, rao giảng, cử hành bí
                tích và truyền giáo) là một sự bóp méo sứ mạng mà Đấng Christ đã
                giao phó.
              </p>
            </section>

            <section
              id="phan-bien-tien-bo"
              aria-labelledby="phan-bien-tien-bo-heading"
            >
              <h3
                id="phan-bien-tien-bo-heading"
                className="font-serif text-lg font-semibold text-midnight mt-4 mb-2"
              >
                7.2. Sự Phản Biện Từ Cánh Tiến Bộ: Ranh Giới Của Tính Hệ Thống
              </h3>
              <p className="text-midnight/85 mb-3">
                Mặc dù Tuyên ngôn Dallas bảo vệ tính trung kiên của giáo lý, nó
                đã vấp phải những làn sóng chỉ trích mạnh mẽ. Các học giả và mục
                sư khác cho rằng văn kiện này thể hiện sự "vô cảm về mặt mục
                vụ" và phớt lờ thực tế về lịch sử bất công chủng tộc mang tính
                hệ thống. Các nhà phê bình lập luận rằng việc chỉ tập trung vào
                "chính thống giáo lý" mà bỏ qua "chính hành" và "chính cảm" sẽ
                làm tê liệt lương tâm của giới Evangelical.
              </p>
              <p className="text-midnight/85">
                Họ trích dẫn Luca 4:18-19, nơi Chúa Giêsu tuyên bố sứ mạng của
                Ngài là đem tin mừng cho người nghèo, giải phóng kẻ bị giam cầm
                và trả tự do cho người bị áp bức. N.T. Wright và các học giả
                khác lập luận rằng Nước Trời là nơi giao thoa giữa trời và đất,
                nơi quyền lực trần thế bị lật ngược để trả lại trật tự mà Thiên
                Chúa mong muốn. Việc tham gia tháo dỡ chế độ Apartheid hay tham
                gia phong trào Dân Quyền đôi khi chính là sứ mạng trực tiếp của
                Giáo hội trong một thời điểm lịch sử cụ thể. Cuộc tranh luận này
                minh họa hoàn hảo cho sự căng thẳng hiện sinh: Làm thế nào để
                Giáo hội giải quyết những tội lỗi mang tính cấu trúc trong xã hội
                mà không biến Lời Chúa thành một công cụ giải cấu trúc theo chủ
                nghĩa Mác-xít thế tục? Câu trả lời chỉ có thể được tìm thấy
                trong một nhãn quan cứu độ toàn diện, vượt lên trên các cuộc
                chiến văn hóa cục bộ.
              </p>
            </section>
          </section>

          {/* 8. Học thuyết Xã hội Công giáo */}
          <section
            id="hoc-thuyet-xa-hoi"
            aria-labelledby="hoc-thuyet-xa-hoi-heading"
          >
            <h2
              id="hoc-thuyet-xa-hoi-heading"
              className="font-serif text-xl sm:text-2xl font-semibold text-midnight mb-3 pb-1 border-b border-gold/40"
            >
              8. Học Thuyết Xã Hội Công Giáo: Tầm Nhìn Cứu Độ Toàn Diện{" "}
              <sup className="align-super text-[0.65rem] text-burgundy">
                <a
                  href="#ref-6"
                  className="no-underline hover:underline"
                >
                  [6]
                </a>
              </sup>
            </h2>
            <p className="text-midnight/85 mb-3">
              Từ việc đối chiếu với những khuynh hướng cực đoan của Tin Mừng Xã
              Hội, Thần học Giải phóng và các cuộc chiến ý thức hệ Kháng Cách,
              chúng ta đi đến việc phân tích lập trường thần học cân bằng và
              sâu sắc của Tóm lược Học thuyết Xã hội của Giáo hội Công giáo
              (Compendium of the Social Doctrine of the Church). Học thuyết này
              chứng minh rõ nét rằng Kinh Thánh không bỏ rơi xã hội, nhưng cũng
              vĩnh viễn không bị đồng hóa vào nó.
            </p>

            <section
              id="on-cuu-do-toan-dien"
              aria-labelledby="on-cuu-do-toan-dien-heading"
            >
              <h3
                id="on-cuu-do-toan-dien-heading"
                className="font-serif text-lg font-semibold text-midnight mt-4 mb-2"
              >
                8.1. Ơn Cứu Độ Toàn Diện Dành Cho Toàn Thể Con Người
              </h3>
              <p className="text-midnight/85 mb-3">
                Khái niệm nền tảng để tránh sự giản lược hóa là "ơn cứu độ toàn
                diện" hay "phát triển nhân vị toàn diện" (integral human
                development). Theo Học thuyết Xã hội Công giáo, ơn cứu độ được
                ban qua Chúa Giêsu Kitô là ơn cứu độ dành cho "toàn thể mọi
                người và toàn bộ con người". Nó không chỉ giới hạn ở một linh
                hồn thoát xác tách rời khỏi thế giới vật chất, mà chạm đến mọi
                chiều kích của con người: cá nhân và xã hội, tâm linh và thể
                xác, lịch sử và siêu việt
                <sup className="align-super text-[0.65rem] text-burgundy">
                  <a
                    href="#ref-6"
                    className="no-underline hover:underline"
                  >
                    [6]
                  </a>
                </sup>
                .
              </p>
              <p className="text-midnight/85">
                Sự cứu chuộc bắt đầu từ sự Nhập thể của Ngôi Lời, Đấng đã mặc
                lấy thân phận con người để ôm lấy toàn bộ thực tại nhân loại
                trong tình yêu cứu chuộc. Do đó, lĩnh vực xã hội, kinh tế, chính
                trị không phải là những khoảng trống thế tục, xa lạ với ân
                sủng. Giáo hội xem việc loan báo Phúc âm trong lĩnh vực xã hội
                là việc truyền quyền năng của ý nghĩa và sự tự do của Tin Mừng
                vào trái tim con người, nhằm xây dựng một "thành đô trần thế"
                nhân bản hơn vì nó phù hợp với Vương quốc Thiên Chúa; nhưng
                Vương quốc này đang "đã đến nhưng chưa hoàn tất", bảo lưu tính
                siêu việt của nó cho đến ngày Chúa Kitô quang lâm.
              </p>
            </section>

            <section
              id="trat-tu-sieu-nhien"
              aria-labelledby="trat-tu-sieu-nhien-heading"
            >
              <h3
                id="trat-tu-sieu-nhien-heading"
                className="font-serif text-lg font-semibold text-midnight mt-4 mb-2"
              >
                8.2. Trật Tự Siêu Nhiên Nâng Tầm Trật Tự Tự Nhiên
              </h3>
              <p className="text-midnight/85 mb-3">
                Một khái niệm thần học then chốt bảo vệ Kinh Thánh khỏi việc trở
                thành một chương trình nghị sự là mối quan hệ giữa tự nhiên và
                siêu nhiên. Học thuyết nhấn mạnh rằng "trật tự siêu nhiên của ơn
                cứu chuộc không loại trừ trật tự tự nhiên, mà đúng hơn là sự
                nâng trật tự tự nhiên lên một bình diện cao hơn". Không có bất
                cứ điều gì thuộc về trật tự thụ tạo mà xa lạ với ân sủng; thay
                vào đó, thực tại xã hội được "tiếp nhận và nâng cao" bởi Đức
                Tin. Thế giới hữu hình, vốn đã bị bẻ gãy khỏi Thiên Chúa do tội
                Adam, nay khôi phục lại mối liên kết nguyên thủy với Nguồn mạch
                Khôn ngoan và Tình yêu qua sự cứu chuộc của Đấng Christ.
              </p>
              <p className="text-midnight/85">
                Điều này bác bỏ triệt để quan điểm tự mãn của các hệ tư tưởng
                coi lịch sử chỉ mang tính nội tại (immanentistic visions of
                history) và "tự cứu rỗi" (self-salvation). Tính "tương đối cánh
                chung" và "tương đối thần học" nhắc nhở nhân loại rằng hình bóng
                thế gian này đang qua đi (1 Cr 7:31) và quà tặng của Thiên Chúa
                vĩ đại hơn bất kỳ dự phóng nhân loại nào. Bất kỳ một hệ tư
                tưởng nội tại tiến bộ nào, hoặc các tầm nhìn toàn trị về Nhà
                nước, đều đi ngược lại với sự thật trọn vẹn của con người và kế
                hoạch của Thiên Chúa.
              </p>
            </section>

            <section
              id="duc-tin-hoan-cai-hanh-dong"
              aria-labelledby="duc-tin-hoan-cai-hanh-dong-heading"
            >
              <h3
                id="duc-tin-hoan-cai-hanh-dong-heading"
                className="font-serif text-lg font-semibold text-midnight mt-4 mb-2"
              >
                8.3. Mối Tương Quan Hữu Cơ Giữa Đức Tin, Hoán Cải Nội Tâm Và Hành
                Động Xã Hội
              </h3>
              <p className="text-midnight/85 mb-3">
                Nếu Kinh Thánh không phải là một thông điệp nhân đạo, thì đâu là
                vai trò của hành động từ thiện và dấn thân chính trị? Tài liệu
                DOCAT (Tóm lược Giáo huấn Xã hội cho giới trẻ) khẳng định một
                chân lý sắc bén: "Không phải ai hoạt động xã hội và tham gia
                chính trị mới là một Kitô hữu, nhưng một người khó mà tự gọi
                mình là Kitô hữu nếu không dấn thân vào xã hội". Sự dấn thân này
                phải xuất phát từ một cội rễ khác biệt.
              </p>
              <p className="text-midnight/85 mb-3">
                Trước hết, sự hoán cải trái tim là tiền đề. Mọi sự thay đổi xã
                hội bền vững phải được bắt nguồn từ sự hoán cải nội tâm (conversion
                of heart). Các nhà thần học Kháng Cách và Công giáo đều đồng
                thuận rằng: pháp luật hay quy định chính phủ không có sức mạnh
                nội tại để thay đổi những trái tim tội lỗi. Lịch sử loài người
                được định hình bởi các hành vi tự do, do đó một sự "đổi mới nội
                tâm của tinh thần Kitô giáo" phải đi trước mọi cam kết cải thiện
                xã hội. Chỉ khi con người trải nghiệm được tình yêu vô điều kiện
                của Thiên Chúa, họ mới học được cách nhìn nhận người lân cận của
                mình bằng một tình yêu đích thực (social charity).
              </p>
              <p className="text-midnight/85 mb-3">
                Kế đến là sự phân biệt giữa "bác ái Kinh Thánh" và phúc lợi thế
                tục. Các nỗ lực từ thiện thế tục thường chỉ dừng lại ở việc cung
                cấp viện trợ vật chất, biến con người thành những số liệu trong
                một nhà nước phúc lợi. Các chính sách chính phủ thường "đánh gục
                người nghèo", tạo ra sự phụ thuộc dài hạn và triệt tiêu tính
                trách nhiệm cá nhân. Ngược lại, quan điểm "bác ái Kinh Thánh"
                nhắm đến việc trao quyền, giúp phục hồi nhân phẩm để người nghèo
                có thể đứng vững trên đôi chân của mình, làm việc và đóng góp.
                Kitô hữu dấn thân vào đời sống xã hội như "nắm men trong bột",
                hoạt động một cách lặng lẽ nhưng có sức hoán cải mạnh mẽ các cấu
                trúc chính trị từ bên trong.
              </p>

              {/* Bảng tiêu chí đánh giá */}
              <div className="mt-4 overflow-x-auto">
                <table className="w-full border-collapse text-sm">
                  <thead>
                    <tr className="border-b border-midnight/10 bg-paperAlt">
                      <th className="px-3 py-2 text-left font-semibold">
                        Tiêu chí
                      </th>
                      <th className="px-3 py-2 text-left font-semibold">
                        Các trào lưu giản lược hóa
                      </th>
                      <th className="px-3 py-2 text-left font-semibold">
                        Tầm nhìn cứu độ toàn diện
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b border-midnight/10">
                      <td className="px-3 py-2 align-top font-medium">
                        Bản chất của tội lỗi
                      </td>
                      <td className="px-3 py-2 align-top">
                        Áp bức cấu trúc, bất bình đẳng hệ thống, ngoại tại.
                      </td>
                      <td className="px-3 py-2 align-top">
                        Sự tha hóa khỏi Thiên Chúa do sự bất tuân từ trong trái
                        tim.
                      </td>
                    </tr>
                    <tr className="border-b border-midnight/10">
                      <td className="px-3 py-2 align-top font-medium">
                        Giải pháp tối hậu
                      </td>
                      <td className="px-3 py-2 align-top">
                        Cải cách chính trị, đấu tranh giai cấp, phân phối của
                        cải.
                      </td>
                      <td className="px-3 py-2 align-top">
                        Sự hoán cải nội tâm qua ân sủng dẫn đến thực thi công
                        lý.
                      </td>
                    </tr>
                    <tr className="border-b border-midnight/10">
                      <td className="px-3 py-2 align-top font-medium">
                        Bản chất của Giáo hội
                      </td>
                      <td className="px-3 py-2 align-top">
                        Một tổ chức NGO vận động chính trị và cung cấp phúc lợi.
                      </td>
                      <td className="px-3 py-2 align-top">
                        Nhiệm thể Chúa Kitô, bảo vệ chiều kích siêu việt của con
                        người.
                      </td>
                    </tr>
                    <tr>
                      <td className="px-3 py-2 align-top font-medium">
                        Quan điểm lịch sử
                      </td>
                      <td className="px-3 py-2 align-top">
                        Nội tại hóa, xây dựng thiên đường trên mặt đất.
                      </td>
                      <td className="px-3 py-2 align-top">
                        Tương đối cánh chung; trần thế là nơi chuẩn bị cho Vương
                        quốc Vĩnh Cửu.
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>
          </section>

          {/* 9. Kết luận */}
          <section id="ket-luan" aria-labelledby="ket-luan-heading">
            <h2
              id="ket-luan-heading"
              className="font-serif text-xl sm:text-2xl font-semibold text-midnight mb-3 pb-1 border-b border-gold/40"
            >
              9. Kết Luận: Sự Trường Tồn Của Lời Hằng Sống
            </h2>
            <p className="text-midnight/85 mb-3">
              Báo cáo nghiên cứu đã tổng hợp các bình diện thần học, lịch sử,
              và triết học để chứng minh tính tuyệt đối đúng đắn trong tuyên bố
              của Đức Thánh Cha Lêô XIV: Kinh Thánh không thể bị giản lược thành
              một thông điệp thuần túy nhân đạo hay xã hội.
            </p>
            <p className="text-midnight/85 mb-3">
              Về bản thể (ontology): Kinh Thánh là sự kiện tự mặc khải của
              Thiên Chúa Ba Ngôi siêu việt. Trọng tâm của nó là sự hiệp thông và
              cứu độ con người khỏi thảm kịch lớn nhất là sự chết và tội lỗi—
              nguồn gốc sâu xa của mọi sự tha hóa xã hội. Kinh Thánh phán xét
              mọi cấu trúc thế gian chứ không thể bị thu hẹp vào bất kỳ cấu trúc
              nào.
            </p>
            <p className="text-midnight/85 mb-3">
              Về biểu hiện (manifestation): Việc biến Kinh Thánh thành một công
              cụ biện minh cho các trào lưu tư tưởng, từ Tin Mừng Xã Hội với
              "sự giản lược hóa Phúc Âm", Thần học Giải phóng lún sâu vào thuyết
              Mác-xít, cho đến việc đồng hóa sứ mạng truyền giáo với các mục
              tiêu địa chính trị hậu hiện đại, là một sự vi phạm trầm trọng vào
              tính tự do tuyệt đối của Thiên Chúa (như Karl Barth đã cảnh báo).
              Nó tước bỏ Thập giá khỏi uy quyền cứu rỗi và thay thế bằng các
              nhu cầu vật chất hữu hạn.
            </p>
            <p className="text-midnight/85">
              Về thực hành (praxis): Từ chối giản lược Kinh Thánh không đồng
              nghĩa với sự vô cảm xã hội. Ngược lại, Giáo huấn Xã hội và Công lý
              là hệ quả tất yếu, là "hoa trái" hữu hình của một trái tim đã được
              ân sủng biến đổi, nhưng không bao giờ là bản thân cấu trúc cốt lõi
              của Mặc Khải. Sự siêu nhiên không đào thải tự nhiên, nhưng đón
              nhận và nâng trật tự tự nhiên lên để hướng về Vương Quốc cánh
              chung. Chừng nào sự toàn vẹn và tính siêu việt của Kinh Thánh
              được tôn trọng, chừng đó Giáo hội mới giữ được sức mạnh tiên tri
              thực sự để mang lại tự do và hòa bình cho trần thế.
            </p>
          </section>

          {/* Tài liệu tham khảo */}
          <section
            id="tai-lieu-tham-khao"
            aria-labelledby="tai-lieu-tham-khao-heading"
            className="pt-4 border-t border-gold/40"
          >
            <h2
              id="tai-lieu-tham-khao-heading"
              className="font-serif text-xl sm:text-2xl font-semibold text-midnight mb-3"
            >
              Tài Liệu Tham Khảo
            </h2>
            <ol className="list-decimal list-outside pl-5 space-y-2 text-sm text-midnight/85">
              <li id="ref-1">
                Second Vatican Council. (1965). <i>Dei Verbum: Dogmatic
                constitution on divine revelation</i>. Vatican.va.
                https://www.vatican.va/archive/hist_councils/ii_vatican_council/documents/vat-ii_const_19651118_dei-verbum_en.html
              </li>
              <li id="ref-2">
                Francis. (2013). <i>Lumen fidei: Encyclical letter on the light
                of faith</i>. Vatican.va.
                https://www.vatican.va/content/francesco/en/encyclicals/documents/papa-francesco_20130629_enciclica-lumen-fidei.html
              </li>
              <li id="ref-3">
                Benedict XVI. (2010). <i>Verbum Domini: Post-synodal apostolic
                exhortation on the Word of God in the life and mission of the
                Church</i>. Vatican.va.
                https://www.vatican.va/content/benedict-xvi/en/apost_exhortations/documents/hf_ben-xvi_exh_20100930_verbum-domini.html
              </li>
              <li id="ref-4">
                Congregation for the Doctrine of the Faith. (1984).
                <i>
                  {" "}
                  Instruction on certain aspects of the “theology of liberation”
                  (Libertatis nuntius)
                </i>
                . Vatican.va.
                https://www.vatican.va/roman_curia/congregations/cfaith/documents/rc_con_cfaith_doc_19840806_theology-liberation_en.html
              </li>
              <li id="ref-5">
                Congregation for the Doctrine of the Faith. (1986).
                <i>
                  {" "}
                  Instruction on Christian freedom and liberation (Libertatis
                  conscientia)
                </i>
                . Vatican.va.
                https://www.vatican.va/roman_curia/congregations/cfaith/documents/rc_con_cfaith_doc_19860322_freedom-liberation_en.html
              </li>
              <li id="ref-6">
                Pontifical Council for Justice and Peace. (2004).
                <i> Compendium of the social doctrine of the Church</i>.
                Vatican.va.
                https://www.vatican.va/roman_curia/pontifical_councils/justpeace/documents/rc_pc_justpeace_doc_20060526_compendio-dott-soc_en.html
              </li>
              <li id="ref-7">
                Rauschenbusch, W. (1908). <i>Christianity and the social
                crisis</i>. In <i>Modern History Sourcebook</i> (excerpts).
                University of Oregon.
                https://pages.uoregon.edu/sshoemak/323/texts/Rauschenbusch.htm
              </li>
              <li id="ref-8">
                MacArthur, J., Baucham, V., Johnson, P., &amp; others. (2018).
                <i> Statement on social justice and the gospel</i>.
                Statementonsocialjustice.com.
                https://statementonsocialjustice.com
              </li>
              <li id="ref-9">
                Focus on the Family. (n.d.). <i>What the Bible says about “human
                rights” and “social justice”</i>. Focusonthefamily.com.
                https://www.focusonthefamily.com/family-qa/what-the-bible-says-about-human-rights-and-social-justice/
              </li>
              <li id="ref-10">
                Center for Barth Studies. (n.d.). <i>Karl Barth’s theology of
                the Word of God</i>. Princeton Theological Seminary.
                https://barth.ptsem.edu/theology/
              </li>
              <li id="ref-11">
                Dicastery for Promoting Integral Human Development. (n.d.).
                <i> Integral human development</i>. Humandevelopment.va.
                https://www.humandevelopment.va/en/sviluppo-umano-integrale.html
              </li>
            </ol>
          </section>
        </section>
      </article>
    </div>
  );
}
