"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Star, Quote, CheckCircle } from "lucide-react";

const REVIEWS = [
  {
    id: 1,
    name: "Minh Tuấn",
    role: "Giảm 5kg sau 2 tháng",
    date: "12 Tháng 3, 2026",
    avatar:
      "https://res.cloudinary.com/dratbz8bh/image/upload/v1771924295/chay-bo-3-170262930243577429218_kilixq.jpg",
    text: "Lúc đầu tôi không tin vào AI Coach lắm, nhưng lộ trình FITUP đưa ra thực sự quá chi tiết. Nó tự động điều chỉnh bài tập khi tôi báo mỏi cơ vào ngày hôm trước. Cực kỳ thông minh và an toàn!",
  },
  {
    id: 2,
    name: "Hải Yến",
    role: "Duy trì vóc dáng",
    date: "28 Tháng 2, 2026",
    avatar:
      "https://res.cloudinary.com/dratbz8bh/image/upload/v1771924295/chay-bo-3-170262930243577429218_kilixq.jpg",
    text: "Điểm ăn tiền nhất là phần dinh dưỡng. Thực đơn toàn các món Việt dễ tìm như phở bò, cơm tấm nhưng được tính toán calo cực chuẩn. Tôi không hề có cảm giác mình đang ăn kiêng.",
  },
  {
    id: 3,
    name: "Hoàng Bách",
    role: "Tăng cơ cường độ cao",
    date: "05 Tháng 3, 2026",
    avatar:
      "https://res.cloudinary.com/dratbz8bh/image/upload/v1771924295/chay-bo-3-170262930243577429218_kilixq.jpg",
    text: "Kết hợp giữa AI track tiến độ và book lịch PT 1:1 ngay trên app quá tiện lợi. PT Alex hướng dẫn rất nhiệt tình, kết quả là tôi đã tăng được 3kg cơ nạc chỉ sau 1 tháng rưỡi đồng hành.",
  },
];

export default function TestimonialsSection() {
  return (
    <section className="relative w-full overflow-hidden py-24">
      {/* Background Gradient & Abstract Shapes */}
      <div className="absolute inset-0 z-0 bg-zinc-950" />
      <div className="absolute top-0 left-1/2 z-0 h-[500px] w-[800px] -translate-x-1/2 rounded-full bg-orange-900/10 blur-[150px]" />

      <div className="container relative z-10 mx-auto max-w-7xl px-6">
        {/* Section Title */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16 flex flex-col items-center text-center"
        >
          <div className="mb-4 flex items-center gap-2 rounded-full border border-orange-500/30 bg-orange-500/10 px-4 py-1.5 text-sm font-medium text-orange-400 backdrop-blur-md">
            <Star className="h-4 w-4 fill-orange-400 text-orange-400" />
            <span>Đánh Giá Từ Cộng Đồng</span>
          </div>
          <h2 className="mb-4 text-3xl font-bold tracking-wider text-white md:text-5xl drop-shadow-md">
            HƠN CẢ SỰ <span className="text-orange-500">MONG ĐỢI</span>
          </h2>
          <p className="max-w-2xl text-sm text-zinc-400 md:text-base leading-relaxed">
            Hàng ngàn người dùng đã thay đổi vóc dáng và thói quen sống nhờ
            FITUP. Dưới đây là những câu chuyện thành công thực tế nhất.
          </p>
        </motion.div>

        {/* Reviews Grid */}
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          {REVIEWS.map((review, index) => (
            <motion.div
              key={review.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              whileHover={{ y: -10 }}
              className="group relative flex flex-col justify-between overflow-hidden rounded-[2rem] border border-zinc-800/60 bg-zinc-900/40 p-8 backdrop-blur-sm transition-all hover:border-orange-500/40 hover:bg-zinc-900/80 hover:shadow-2xl hover:shadow-orange-500/10"
            >
              {/* Giant Background Quote Icon */}
              <Quote className="absolute -right-6 -top-6 z-0 h-32 w-32 rotate-12 text-zinc-800/30 transition-transform duration-500 group-hover:rotate-0 group-hover:text-orange-500/10" />

              <div className="relative z-10">
                {/* Header: Avatar + Info */}
                <div className="mb-6 flex items-center gap-4">
                  <div className="relative h-14 w-14 overflow-hidden rounded-full border-2 border-zinc-700 transition-colors group-hover:border-orange-500">
                    <Image
                      src={review.avatar}
                      alt={review.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <div className="flex items-center gap-1.5">
                      <h4 className="text-base font-bold text-white">
                        {review.name}
                      </h4>
                      <CheckCircle className="h-4 w-4 text-blue-500" />{" "}
                      {/* Verified Badge */}
                    </div>
                    <p className="text-xs font-medium text-orange-400">
                      {review.role}
                    </p>
                  </div>
                </div>

                {/* Rating Stars */}
                <div className="mb-4 flex gap-1">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className="h-4 w-4 fill-orange-500 text-orange-500"
                    />
                  ))}
                </div>

                {/* Review Content */}
                <p className="text-sm leading-relaxed text-zinc-300">
                {review.text}
                </p>
              </div>

              {/* Footer: Date */}
              <div className="relative z-10 mt-8 border-t border-zinc-800/50 pt-4">
                <span className="text-xs text-zinc-500">{review.date}</span>
              </div>

              {/* Bottom Glow Line on Hover */}
              <div className="absolute bottom-0 left-0 h-1 w-0 bg-gradient-to-r from-orange-600 to-orange-400 transition-all duration-500 group-hover:w-full" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
