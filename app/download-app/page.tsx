import { Download } from "lucide-react";

export const metadata = {
  title: "Download App | FITUP",
  description: "Download FITUP app and start your training journey.",
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
          <h1 className="text-3xl font-extrabold uppercase leading-[1.08] tracking-tight md:text-5xl lg:text-6xl">
            <span className="block whitespace-nowrap text-[#d68c45]">
              The Fastest Way
            </span>
            <span className="block whitespace-nowrap text-white">
              To The New You
            </span>
          </h1>

          <p className="mt-7 max-w-[620px] text-xl font-medium leading-relaxed text-zinc-100/90">
            FITUP creates and tailors your training plan to your real
            preferences and performance. Start now and keep your progress
            consistent wherever you train.
          </p>
        </div>

        <div className="flex w-full max-w-[360px] shrink-0 flex-col items-center rounded-[2rem] border border-white/20 bg-black/65 p-8 shadow-[0_35px_70px_rgba(0,0,0,0.65)] backdrop-blur-sm">
          <p className="mb-5 text-sm font-bold uppercase tracking-[0.14em] text-[#d68c45]">
            Scan To Download
          </p>

          <div className="inline-flex rounded-2xl border border-white/20 bg-white p-3 shadow-2xl">
            <img
              src="https://api.qrserver.com/v1/create-qr-code/?size=260x260&data=https://fitup.app/download"
              alt="Download QR"
              className="h-52 w-52"
            />
          </div>

          <a
            href="#"
            className="mt-8 inline-flex items-center gap-3 rounded-full bg-[linear-gradient(90deg,#d68c45_0%,#96310b_80%,#6b121c_100%)] px-8 py-4 text-base font-extrabold uppercase tracking-[0.12em] text-white transition-all duration-150 hover:brightness-110"
          >
            <Download className="h-5 w-5" />
            Download
          </a>
        </div>
      </section>
    </main>
  );
}
