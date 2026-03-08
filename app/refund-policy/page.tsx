import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Chính sách hoàn tiền | FITUP",
  description:
    "Quy định hoàn tiền cho gói tập và dịch vụ Personal Training (PT) trên FITUP.",
};

const sections = [
  {
    title: "1. Phạm vi áp dụng",
    content:
      "Chính sách này áp dụng cho các giao dịch thanh toán gói dịch vụ trên ứng dụng FITUP, bao gồm gói tập luyện và các gói Personal Training (PT) có thu phí.",
  },
  {
    title: "2. Điều kiện đủ để yêu cầu hoàn tiền",
    content:
      "Yêu cầu hoàn tiền có thể được xem xét khi phát sinh lỗi thanh toán, giao dịch trùng lặp hoặc dịch vụ không được cung cấp đúng như mô tả. Người dùng cần gửi yêu cầu trong thời hạn hỗ trợ được công bố tại thời điểm mua.",
  },
  {
    title: "3. Trường hợp không đủ điều kiện hoàn tiền",
    content:
      "FITUP có thể từ chối hoàn tiền đối với các trường hợp đã sử dụng một phần hoặc toàn bộ quyền lợi gói, tự ý ngừng sử dụng dịch vụ, hoặc vi phạm Điều khoản dịch vụ.",
  },
  {
    title: "4. Chính sách cho buổi PT",
    content:
      "Đối với buổi PT đã đặt lịch, việc hoàn tiền hoặc bảo lưu buổi tập phụ thuộc vào thời điểm hủy lịch. Hủy đúng thời hạn có thể được bảo lưu hoặc hỗ trợ theo chính sách; hủy quá hạn, vắng mặt hoặc đến trễ có thể bị tính là đã sử dụng.",
  },
  {
    title: "5. Quy trình gửi yêu cầu hoàn tiền",
    content:
      "Người dùng gửi yêu cầu qua kênh hỗ trợ chính thức của FITUP và cung cấp thông tin: mã giao dịch, thời gian thanh toán, gói dịch vụ và lý do yêu cầu. FITUP có thể yêu cầu thêm thông tin xác minh để xử lý.",
  },
  {
    title: "6. Thời gian xử lý",
    content:
      "Sau khi tiếp nhận đầy đủ thông tin, FITUP sẽ phản hồi kết quả trong thời gian hợp lý theo quy trình vận hành. Thời gian tiền về tài khoản có thể phụ thuộc vào ngân hàng hoặc cổng thanh toán.",
  },
  {
    title: "7. Phương thức hoàn tiền",
    content:
      "Khoản hoàn (nếu được duyệt) sẽ được thực hiện qua phương thức thanh toán ban đầu hoặc hình thức tương đương do FITUP chỉ định theo quy định tài chính hiện hành.",
  },
  {
    title: "8. Điều chỉnh chính sách",
    content:
      "FITUP có quyền cập nhật chính sách hoàn tiền để phù hợp với thay đổi vận hành và quy định pháp luật. Phiên bản mới nhất sẽ luôn được công bố trên nền tảng.",
  },
];

export default function RefundPolicyPage() {
  return (
    <main className="min-h-screen w-full bg-[#1f1f1f] px-6 pb-24 pt-16 text-white">
      <section className="mx-auto max-w-5xl rounded-3xl border border-zinc-800 bg-[#121212] p-8 shadow-[0_16px_50px_rgba(0,0,0,0.35)] md:p-12">
        <p className="text-sm font-semibold uppercase tracking-[0.22em] text-[#d68c45]">
          FITUP Refund Policy
        </p>
        <h1 className="mt-4 text-3xl font-black uppercase leading-tight md:text-5xl">
          Chính sách hoàn tiền
        </h1>
        <p className="mt-5 text-base text-zinc-300 md:text-lg">
          Chính sách này giúp bạn hiểu rõ điều kiện, quy trình và thời gian xử
          lý hoàn tiền khi sử dụng dịch vụ fitness và PT trên FITUP.
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
