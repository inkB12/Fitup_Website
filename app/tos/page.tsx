import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Điều khoản dịch vụ | FITUP",
  description: "Điều khoản và điều kiện sử dụng ứng dụng fitness và PT FITUP.",
};

const sections = [
  {
    title: "1. Chấp nhận điều khoản",
    content:
      "Khi tạo tài khoản, đặt lịch PT hoặc tiếp tục sử dụng FITUP, bạn xác nhận đã đọc, hiểu và đồng ý với các điều khoản trong trang này.",
  },
  {
    title: "2. Đối tượng sử dụng",
    content:
      "Bạn cần cung cấp thông tin chính xác, đầy đủ và tự chịu trách nhiệm về tính hợp lệ của thông tin đã khai báo. Nếu bạn dưới độ tuổi theo quy định pháp luật, việc sử dụng ứng dụng cần có sự đồng ý của người giám hộ hợp pháp.",
  },
  {
    title: "3. Tài khoản và bảo mật",
    content:
      "Bạn có trách nhiệm bảo mật thông tin đăng nhập, không chia sẻ tài khoản cho bên thứ ba và thông báo ngay cho FITUP khi phát hiện truy cập trái phép.",
  },
  {
    title: "4. Phạm vi dịch vụ của app",
    content:
      "FITUP là ứng dụng fitness tập trung vào theo dõi luyện tập, kế hoạch tập cá nhân hóa và kết nối huấn luyện viên cá nhân (PT). Dịch vụ có thể bao gồm đặt lịch PT, theo dõi tiến độ, nhắc lịch, nội dung hướng dẫn và các tính năng hỗ trợ sức khỏe thể chất.",
  },
  {
    title: "5. Đặt lịch PT, thay đổi lịch và vắng mặt",
    content:
      "Người dùng cần đặt, đổi hoặc hủy lịch PT theo thời gian và quy định được công bố trong app. Nếu vắng mặt, đến trễ hoặc hủy quá hạn, buổi tập có thể bị tính là đã sử dụng theo chính sách hiện hành.",
  },
  {
    title: "6. Gói dịch vụ, thanh toán và hoàn tiền",
    content:
      "Một số tính năng và gói PT yêu cầu thanh toán. Khi đăng ký gói, bạn đồng ý với mức phí, chu kỳ thanh toán, thời hạn sử dụng và điều kiện gia hạn. Yêu cầu hoàn tiền được xử lý theo chính sách hoàn tiền của FITUP tại thời điểm tiếp nhận.",
  },
  {
    title: "7. Quy tắc sử dụng và hành vi bị cấm",
    content:
      "Bạn không được gian lận thanh toán, can thiệp trái phép vào hệ thống, thu thập trái phép dữ liệu người dùng khác, quảng cáo trái phép, phát tán nội dung độc hại hoặc có hành vi xúc phạm đội ngũ PT và cộng đồng người dùng.",
  },
  {
    title: "8. Cam kết sức khỏe và an toàn tập luyện",
    content:
      "Bạn xác nhận tự đánh giá tình trạng sức khỏe trước khi tập. Nếu có bệnh nền, chấn thương, đang điều trị hoặc có dấu hiệu bất thường, bạn cần tham khảo ý kiến bác sĩ trước khi tham gia chương trình tập hoặc buổi PT.",
  },
  {
    title: "9. Giới hạn trách nhiệm",
    content:
      "Nội dung và hướng dẫn trong app mang tính hỗ trợ, không thay thế chẩn đoán hoặc điều trị y khoa. FITUP không chịu trách nhiệm với rủi ro phát sinh từ việc người dùng không tuân thủ hướng dẫn an toàn hoặc che giấu thông tin sức khỏe quan trọng.",
  },
  {
    title: "10. Sở hữu trí tuệ",
    content:
      "Thương hiệu FITUP, giao diện, tài liệu hướng dẫn, video bài tập, giáo án PT và các thành phần nội dung khác thuộc quyền sở hữu của FITUP hoặc bên cấp phép hợp pháp.",
  },
  {
    title: "11. Tạm ngưng hoặc chấm dứt tài khoản",
    content:
      "FITUP có thể tạm ngưng hoặc chấm dứt tài khoản nếu phát hiện vi phạm điều khoản, hành vi gây rủi ro bảo mật, gian lận hoặc ảnh hưởng nghiêm trọng đến PT, người dùng khác và hệ thống.",
  },
  {
    title: "12. Dữ liệu cá nhân, cập nhật điều khoản và tranh chấp",
    content:
      "Việc thu thập và xử lý dữ liệu được thực hiện theo Chính sách bảo mật. Điều khoản có thể được cập nhật theo nhu cầu vận hành và quy định pháp lý; tranh chấp phát sinh được ưu tiên thương lượng trước khi giải quyết theo quy định pháp luật Việt Nam.",
  },
];

export default function TosPage() {
  return (
    <main className="min-h-screen w-full bg-[#1f1f1f] px-6 pb-24 pt-16 text-white">
      <section className="mx-auto max-w-5xl rounded-3xl border border-zinc-800 bg-[#121212] p-8 shadow-[0_16px_50px_rgba(0,0,0,0.35)] md:p-12">
        <p className="text-sm font-semibold uppercase tracking-[0.22em] text-[#d68c45]">
          FITUP Terms
        </p>
        <h1 className="mt-4 text-3xl font-black uppercase leading-tight md:text-5xl">
          Điều khoản dịch vụ
        </h1>
        <p className="mt-5 text-base text-zinc-300 md:text-lg">
          Điều khoản này áp dụng cho việc sử dụng ứng dụng fitness và đặt lịch
          Personal Training (PT) trên FITUP.
        </p>

        <div className="mt-10 space-y-6">
          {sections.map((section) => (
            <article
              key={section.title}
              className="rounded-2xl border border-zinc-800 bg-zinc-900/40 p-5"
            >
              <h2 className="text-lg font-bold text-[#d68c45]">{section.title}</h2>
              <p className="mt-2 leading-relaxed text-zinc-300">{section.content}</p>
            </article>
          ))}
        </div>

        <div className="mt-10 flex flex-wrap items-center gap-4 text-sm text-zinc-400">
          <span>Cập nhật lần cuối: 08/03/2026</span>
          <span className="hidden h-1 w-1 rounded-full bg-zinc-700 md:block" />
          <span>Liên hệ: hello@fitup.com</span>
        </div>

        <div className="mt-8">
          <Link
            href="/"
            className="inline-flex items-center rounded-full border border-zinc-700 px-5 py-2.5 text-sm font-semibold uppercase tracking-[0.12em] text-zinc-200 transition-colors hover:border-[#d68c45] hover:text-[#d68c45]"
          >
            Quay về trang chủ
          </Link>
        </div>
      </section>
    </main>
  );
}
