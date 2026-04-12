import { Download } from "lucide-react";

export const metadata = {
  title: "Tải Ứng Dụng | FITUP",
  description: "Tải APK FITUP và bắt đầu hành trình tập luyện của bạn.",
};

export default function DownloadAppPage() {
  return (
    <main className="relative min-h-screen w-full overflow-hidden bg-[#050b14] text-white">
      <div
        className="absolute inset-0 z-0 bg-cover bg-center"
        style={{
          backgroundImage:
            'url("https://res.cloudinary.com/dratbz8bh/image/upload/v1771924295/chay-bo-3-170262930243577429218_kilixq.jpg")',
        }}
      />
      <div className="absolute inset-0 z-0 bg-[linear-gradient(100deg,rgba(3,13,24,0.88)_0%,rgba(7,25,45,0.72)_45%,rgba(0,0,0,0.75)_100%)]" />

      <section className="relative z-10 mx-auto flex min-h-screen w-full max-w-7xl flex-col items-center justify-center gap-12 px-6 py-20 lg:flex-row lg:justify-between">
        <div className="max-w-[620px] text-center lg:text-left">
          <h1 className="text-3xl font-extrabold leading-[1.12] tracking-tight md:text-5xl lg:text-6xl">
            <span className="block whitespace-nowrap text-[#d68c45]">
              Con đường nhanh nhất
            </span>
            <span className="block text-white">
              Đến phiên bản mới của bạn
            </span>
          </h1>

          <p className="mt-7 max-w-[620px] text-xl font-medium leading-relaxed text-zinc-100/90">
            FITUP tạo và cá nhân hóa kế hoạch tập luyện theo đúng sở thích và
            hiệu suất thực tế của bạn. Bắt đầu ngay và duy trì tiến độ ổn định
            dù bạn tập ở bất cứ đâu.
          </p>
        </div>

        <div className="flex w-full max-w-[360px] shrink-0 flex-col items-center rounded-[2rem] border border-white/20 bg-black/65 p-8 shadow-[0_35px_70px_rgba(0,0,0,0.65)] backdrop-blur-sm">
          <p className="text-sm font-bold uppercase tracking-[0.14em] text-[#d68c45]">
            Ứng Dụng Android (APK)
          </p>
          <p className="mt-4 text-center text-sm text-zinc-200/90">
            Nhấn nút bên dưới để tải về và cài đặt ứng dụng FITUP.
          </p>
          <a
            href="https://github.com/inkB12/Fitup_Website/releases/latest/download/v1.0.0-fitup.apk"
            target="_blank"
            rel="noreferrer"
            className="mt-8 inline-flex items-center gap-3 rounded-full bg-[linear-gradient(90deg,#d68c45_0%,#96310b_80%,#6b121c_100%)] px-8 py-4 text-base font-extrabold uppercase tracking-[0.12em] text-white transition-all duration-150 hover:brightness-110"
          >
            <Download className="h-5 w-5" />
            Tải APK
          </a>
        </div>
      </section>
    </main>
  );
}
