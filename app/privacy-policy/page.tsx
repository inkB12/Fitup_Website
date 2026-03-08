import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Bảo mật thông tin | FITUP",
  description:
    "Tìm hiểu cách FITUP thu thập, sử dụng và bảo vệ dữ liệu cá nhân của bạn.",
};

const sections = [
  {
    title: "1. Thông tin do Người dùng cung cấp",
    content:
      "Thông tin được thu thập trực tiếp từ bạn khi bạn tạo tài khoản, thêm thông tin vào hồ sơ, điền vào biểu mẫu, mua hàng hoặc đăng ký một số dịch vụ nhất định của FitUp, đăng ký nhận thông tin tiếp thị của chúng tôi, tham gia khảo sát, cuộc thi, chương trình rút thăm trúng thưởng hoặc chương trình khuyến mãi mà chúng tôi cung cấp, cung cấp phản hồi cho chúng tôi, yêu cầu hỗ trợ khách hàng hoặc liên lạc với chúng tôi bằng các cách khác. Các loại dữ liệu chúng tôi thu thập bao gồm họ và tên, tên người dùng và mật khẩu, tháng và năm sinh, địa chỉ email, địa chỉ bưu chính và số điện thoại. Chúng tôi cũng thu thập một số dữ liệu về thể chất mà bạn chọn cung cấp liên quan đến việc sử dụng các dịch vụ của FitUp, chẳng hạn như giới tính, chiều cao, cân nặng hiện tại và cân nặng mục tiêu, mục tiêu và sở thích tập luyện và thể dục (như thời gian trong ngày bạn thích tập thể dục và các loại bài tập bạn thích), trình độ thể chất, thông tin về chấn thương và tình trạng sức khỏe để đưa ra các khuyến nghị về bài tập, và các sở thích khác mà bạn chọn cung cấp.",
  },
  {
    title: "2. Mục đích sử dụng thông tin",
    content:
      "Thông tin của bạn được dùng để cá nhân hóa trải nghiệm tập luyện, gợi ý lộ trình phù hợp, cải thiện hiệu năng sản phẩm, hỗ trợ khách hàng và gửi các thông báo quan trọng liên quan đến dịch vụ. Chúng tôi cũng có thể sử dụng dữ liệu để phân tích xu hướng, quản lý trang web, theo dõi hoạt động người dùng và thu thập thông tin nhân khẩu học về cơ sở người dùng của chúng tôi nhằm cải thiện dịch vụ và trải nghiệm người dùng.",
  },
  {
    title: "3. Lưu trữ và bảo vệ",
    content:
      "Chúng tôi áp dụng các biện pháp kỹ thuật và tổ chức hợp lý để bảo vệ dữ liệu khỏi truy cập trái phép, mất mát hoặc lạm dụng. Dù không có hệ thống nào an toàn tuyệt đối, FITUP luôn nỗ lực nâng cấp cơ chế bảo mật.",
  },
  {
    title: "4. Chia sẻ thông tin",
    content:
      "Chúng tôi không bán dữ liệu cá nhân của người dùng. Dữ liệu chỉ được chia sẻ trong phạm vi cần thiết với các đối tác cung cấp dịch vụ liên quan, trên cơ sở bảo mật và tuân thủ quy định pháp luật.",
  },
  {
    title: "5. Cookie và công cụ phân tích",
    content:
      "Chúng tôi có thể sử dụng cookie và công cụ phân tích để hiểu hành vi sử dụng, tối ưu hiệu suất và cải thiện trải nghiệm người dùng. Bạn có thể điều chỉnh cookie thông qua trình duyệt của mình.",
  },
  {
    title: "6. Quyền của người dùng",
    content:
      "Bạn có quyền yêu cầu truy cập, chỉnh sửa hoặc xóa thông tin cá nhân theo quy định hiện hành. Bạn cũng có thể quản lý các tùy chọn thông báo và quyền riêng tư trong phần cài đặt tài khoản.",
  },
  {
    title: "7. Cập nhật chính sách",
    content:
      "Chính sách này có thể được điều chỉnh theo từng thời điểm. Mọi cập nhật sẽ được công bố trên trang này kèm ngày hiệu lực mới nhất",
  },
];

export default function PrivacyPage() {
  return (
    <main className="min-h-screen w-full bg-[#1f1f1f] px-6 pb-24 pt-16 text-white">
      <section className="mx-auto max-w-5xl rounded-3xl border border-zinc-800 bg-[#121212] p-8 shadow-[0_16px_50px_rgba(0,0,0,0.35)] md:p-12">
        <p className="text-sm font-semibold uppercase tracking-[0.22em] text-[#d68c45]">
          FITUP Policy
        </p>
        <h1 className="mt-4 text-3xl font-black uppercase leading-tight md:text-5xl">
          Bảo mật thông tin
        </h1>
        <p className="mt-5 text-base text-zinc-300 md:text-lg">
          FITUP cam kết tôn trọng và bảo vệ quyền riêng tư của bạn trong toàn bộ
          quá trình sử dụng nền tảng.
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
          <span>Cập nhập lần cuối: 08/03/2026</span>
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
