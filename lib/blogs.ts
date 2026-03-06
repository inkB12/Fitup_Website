export type BlogSection = {
  heading: string;
  paragraphs: string[];
};

export type BlogPost = {
  slug: string;
  title: string;
  excerpt: string;
  author: string;
  publishedAt: string;
  readTime: string;
  category: string;
  coverGradient: string;
  sections: BlogSection[];
  keyTakeaways: string[];
};

export const BLOG_POSTS: BlogPost[] = [
  {
    slug: "ai-personalized-training-plan",
    title: "Lộ Trình Tập Cá Nhân Hóa Bằng AI: Vì Sao Hiệu Quả Hơn Giáo Án Cố Định",
    excerpt:
      "Mỗi ngày cơ thể hồi phục khác nhau. AI giúp điều chỉnh buổi tập theo thể trạng thực tế để bạn tiến bộ đều và an toàn hơn.",
    author: "Ban Biên Tập FITUP",
    publishedAt: "03/03/2026",
    readTime: "6 phút đọc",
    category: "Huấn luyện AI",
    coverGradient: "from-[#d68c45]/90 via-[#96310b]/85 to-[#6b121c]/90",
    sections: [
      {
        heading: "Điểm khác biệt của AI trong lập kế hoạch",
        paragraphs: [
          "Giáo án truyền thống thường cố định trong nhiều tuần. Trong khi đó, mức độ hồi phục, giấc ngủ, căng thẳng và lịch làm việc của bạn thay đổi liên tục.",
          "AI phân tích dữ liệu buổi tập gần nhất để tự điều chỉnh số hiệp, số rep và cường độ. Nhờ vậy, bài tập sát với năng lượng thực tế của bạn hơn.",
        ],
      },
      {
        heading: "Cách áp dụng để đạt hiệu quả cao",
        paragraphs: [
          "Hãy ghi nhận dữ liệu trung thực, đặc biệt là mức gắng sức và tỷ lệ hoàn thành bài. Dữ liệu càng chuẩn thì gợi ý càng chính xác.",
          "Mỗi 2 tuần nên rà soát lại giáo án: giữ bài hiệu quả, thay bài gây khó chịu và tăng tải từ từ để tránh chấn thương.",
        ],
      },
      {
        heading: "Kết quả bạn có thể kỳ vọng",
        paragraphs: [
          "Phần lớn người tập sẽ giảm số buổi bỏ dở vì buổi tập vừa sức hơn, không còn cảm giác quá tải kéo dài.",
          "Sau 8 đến 12 tuần, tiến độ ổn định thường mang lại kết quả tốt hơn nhiều so với giáo án nặng nhưng bỏ cuộc sớm.",
        ],
      },
    ],
    keyTakeaways: [
      "Tăng tải thích ứng an toàn hơn tăng tải cứng.",
      "Duy trì đều đặn quan trọng hơn bùng nổ ngắn hạn.",
      "Dữ liệu đầu vào chuẩn quyết định chất lượng gợi ý.",
    ],
  },
  {
    slug: "science-based-fat-loss-nutrition",
    title: "Dinh Dưỡng Giảm Mỡ Theo Khoa Học Và Có Thể Duy Trì Lâu Dài",
    excerpt:
      "Giảm mỡ bền vững không đến từ ăn kiêng cực đoan. Hãy tập trung vào protein, tổng calories và cấu trúc bữa ăn hợp lý.",
    author: "HLV An Nguyễn",
    publishedAt: "26/02/2026",
    readTime: "7 phút đọc",
    category: "Dinh dưỡng",
    coverGradient: "from-[#d68c45]/80 via-[#8f4a1f]/85 to-[#6b121c]/90",
    sections: [
      {
        heading: "Bắt đầu từ protein và calories",
        paragraphs: [
          "Hãy đặt mục tiêu protein trước. Mức khoảng 1.6 đến 2.2g/kg cân nặng giúp giữ cơ tốt hơn trong giai đoạn giảm mỡ.",
          "Sau đó tạo thâm hụt calories vừa phải. Cắt quá sâu thường dẫn đến đói, giảm hiệu suất tập và dễ ăn bù mất kiểm soát.",
        ],
      },
      {
        heading: "Thiết kế bữa ăn dễ theo mỗi ngày",
        paragraphs: [
          "Ưu tiên 3 đến 4 bữa chính có nguồn đạm rõ ràng như trứng, cá, ức gà, đậu hũ, sữa chua hoặc thịt nạc.",
          "Mỗi bữa nên có đủ đạm, rau giàu chất xơ, tinh bột chất lượng và chất béo tốt để no lâu và ổn định năng lượng.",
        ],
      },
      {
        heading: "Theo dõi tiến độ mà không ám ảnh",
        paragraphs: [
          "Quan sát xu hướng theo tuần: cân nặng trung bình, vòng eo và hiệu suất tập. Dao động từng ngày là bình thường.",
          "Chỉ điều chỉnh khi xu hướng đứng yên 2 đến 3 tuần, không thay đổi vội sau một ngày ăn nhiều.",
        ],
      },
    ],
    keyTakeaways: [
      "Thâm hụt vừa phải giúp bám kế hoạch lâu hơn.",
      "Protein và chất xơ là nền tảng kiểm soát cơn đói.",
      "Đánh giá theo xu hướng, không theo cảm xúc từng ngày.",
    ],
  },
  {
    slug: "30-minute-home-workout",
    title: "Giáo Án 30 Phút Tại Nhà Dành Cho Người Bận Rộn",
    excerpt:
      "Không có phòng gym vẫn có thể tiến bộ nếu buổi tập được thiết kế đúng: ngắn gọn, trọng tâm và theo dõi rõ ràng.",
    author: "HLV Minh Trần",
    publishedAt: "18/02/2026",
    readTime: "5 phút đọc",
    category: "Luyện tập",
    coverGradient: "from-[#c07b3c]/85 via-[#96310b]/80 to-[#6b121c]/85",
    sections: [
      {
        heading: "Cấu trúc buổi tập 30 phút",
        paragraphs: [
          "Mô hình gợi ý: 5 phút khởi động, 20 phút khối chính, 5 phút giãn cơ. Hạn chế nghỉ giữa các bài để tăng thời gian tập hiệu quả.",
          "Ưu tiên các nhóm động tác lớn: squat, hinge, push, pull và core để tác động toàn thân trong thời gian ngắn.",
        ],
      },
      {
        heading: "Tăng độ khó tại nhà như thế nào",
        paragraphs: [
          "Bạn có thể tăng rep, chậm nhịp thực hiện, rút ngắn thời gian nghỉ hoặc thêm tải bằng balo.",
          "Mỗi bài nên có một chỉ số theo dõi chính để nhìn thấy tiến bộ qua từng tuần.",
        ],
      },
      {
        heading: "Tần suất tối thiểu để thấy kết quả",
        paragraphs: [
          "Mục tiêu hợp lý là 3 buổi mỗi tuần. Nếu tuần quá bận, duy trì 2 buổi chất lượng vẫn tốt hơn bỏ hẳn.",
          "Sự nhất quán trong vài tháng sẽ tạo thay đổi rõ rệt về thể lực và vóc dáng.",
        ],
      },
    ],
    keyTakeaways: [
      "Buổi tập ngắn vẫn hiệu quả nếu đúng cấu trúc.",
      "Tăng tải không nhất thiết cần máy móc nặng.",
      "Theo dõi đều giúp duy trì động lực dài hạn.",
    ],
  },
  {
    slug: "mobility-and-recovery-basics",
    title: "Nền Tảng Mobility Và Phục Hồi Để Tập Hiệu Quả Hơn",
    excerpt:
      "Phục hồi tốt quyết định chất lượng buổi tập kế tiếp. Mobility và giấc ngủ nên là phần bắt buộc trong lịch tuần.",
    author: "BS. Lan Phạm",
    publishedAt: "10/02/2026",
    readTime: "6 phút đọc",
    category: "Phục hồi",
    coverGradient: "from-[#d68c45]/70 via-[#7a3114]/85 to-[#4d0f17]/95",
    sections: [
      {
        heading: "Mobility không phải giãn cơ ngẫu hứng",
        paragraphs: [
          "Mobility là khả năng kiểm soát chuyển động trong biên độ hữu ích, không chỉ là kéo giãn thật sâu.",
          "Trước buổi tập, bạn nên dành 8 đến 10 phút cho hông, cổ chân, vai và cột sống ngực để cải thiện kỹ thuật.",
        ],
      },
      {
        heading: "Những thói quen phục hồi có tác động lớn",
        paragraphs: [
          "Ưu tiên ngủ đủ và ngủ đúng giờ. Lịch ngủ ổn định giúp giảm mệt mỏi cảm nhận và tăng khả năng thích nghi khi tập.",
          "Bổ sung nước, đi bộ nhẹ mỗi ngày và vận động cường độ thấp vào ngày nghỉ giúp cơ thể hồi phục nhanh hơn.",
        ],
      },
      {
        heading: "Khi nào nên deload",
        paragraphs: [
          "Nếu hiệu suất giảm, đau mỏi kéo dài và động lực tụt, hãy giảm volume một tuần nhưng vẫn giữ kỹ thuật chuẩn.",
          "Deload đúng thời điểm giúp bạn tránh kiệt sức và quay lại chu kỳ tăng tải bền vững hơn.",
        ],
      },
    ],
    keyTakeaways: [
      "Mobility cần đúng mục tiêu và có kiểm soát.",
      "Giấc ngủ đều đặn là đòn bẩy lớn cho hiệu suất.",
      "Deload không phải lùi bước, mà là đầu tư dài hạn.",
    ],
  },
  {
    slug: "track-fitness-progress-correctly",
    title: "Cách Theo Dõi Tiến Độ Tập Luyện Đúng Và Dễ Duy Trì",
    excerpt:
      "Nhiều người bỏ cuộc vì không nhìn thấy tiến bộ rõ ràng. Một bảng theo dõi đơn giản sẽ giúp bạn ra quyết định chính xác hơn.",
    author: "FITUP Performance Lab",
    publishedAt: "29/01/2026",
    readTime: "5 phút đọc",
    category: "Hiệu suất",
    coverGradient: "from-[#b86f33]/80 via-[#8b2f0d]/90 to-[#6b121c]/95",
    sections: [
      {
        heading: "Theo dõi đủ 3 nhóm chỉ số",
        paragraphs: [
          "Nhóm hình thể: cân nặng trung bình tuần, vòng eo và ảnh so sánh cùng điều kiện ánh sáng.",
          "Nhóm hiệu suất: mức tạ, số rep, tốc độ hoặc thời gian hoàn thành ở các bài chính.",
          "Nhóm hành vi: số buổi hoàn thành, mức độ bám dinh dưỡng và chất lượng giấc ngủ.",
        ],
      },
      {
        heading: "Lịch review hợp lý",
        paragraphs: [
          "Mỗi tuần nên có 1 lần check-in, mỗi tháng có 1 lần tổng kết sâu. Cách này giúp vừa bám sát, vừa thấy xu hướng dài hạn.",
          "Không nên thay toàn bộ kế hoạch quá thường xuyên vì sẽ làm nhiễu dữ liệu và khó đánh giá hiệu quả thật.",
        ],
      },
      {
        heading: "Lỗi theo dõi phổ biến",
        paragraphs: [
          "Đánh giá theo dao động ngày, bỏ qua log tập, hoặc không theo dõi tỷ lệ hoàn thành kế hoạch.",
          "Hãy dựa vào xu hướng dài hạn để điều chỉnh, thay vì phản ứng theo cảm xúc nhất thời.",
        ],
      },
    ],
    keyTakeaways: [
      "Theo dõi đồng thời hình thể, hiệu suất và hành vi.",
      "Duy trì check-in tuần và tổng kết tháng.",
      "Ra quyết định dựa trên xu hướng, không dựa trên một ngày lẻ.",
    ],
  },
  {
    slug: "sleep-muscle-growth-connection",
    title: "Mối Liên Hệ Giữa Giấc Ngủ Và Tăng Cơ Mà Nhiều Người Bỏ Qua",
    excerpt:
      "Bạn có thể tập và ăn rất tốt, nhưng thiếu ngủ vẫn làm chậm tăng cơ và giảm mỡ. Giấc ngủ là biến số cốt lõi cho tiến bộ.",
    author: "HLV Huy Lê",
    publishedAt: "20/01/2026",
    readTime: "6 phút đọc",
    category: "Lối sống",
    coverGradient: "from-[#d68c45]/75 via-[#8a3916]/90 to-[#5f1020]/95",
    sections: [
      {
        heading: "Vì sao thiếu ngủ ảnh hưởng thành phần cơ thể",
        paragraphs: [
          "Thiếu ngủ làm hồi phục kém, giảm chất lượng buổi tập và tăng tín hiệu đói vào ngày hôm sau.",
          "Khi ngủ không đủ, sức mạnh và khả năng kiểm soát kỹ thuật thường giảm, khiến kích thích tăng cơ kém hiệu quả.",
        ],
      },
      {
        heading: "Thiết lập hệ thống ngủ thực tế",
        paragraphs: [
          "Giữ giờ thức dậy cố định, hạn chế caffeine vào chiều tối và giảm ánh sáng xanh trước giờ ngủ khoảng 60 phút.",
          "Tạo nghi thức thư giãn ngắn như thở sâu, giãn cơ nhẹ hoặc đọc sách để cơ thể chuyển sang trạng thái nghỉ.",
        ],
      },
      {
        heading: "Xử lý sau một đêm ngủ kém",
        paragraphs: [
          "Bạn có thể giảm nhẹ volume buổi tập hôm đó nhưng vẫn giữ kỹ thuật và mức tập trung cao.",
          "Không cần cực đoan nghỉ hoàn toàn hay tập bù quá sức. Quan trọng là quay lại nhịp bình thường càng sớm càng tốt.",
        ],
      },
    ],
    keyTakeaways: [
      "Chất lượng giấc ngủ quyết định chất lượng buổi tập.",
      "Giờ thức dậy cố định giúp ổn định đồng hồ sinh học.",
      "Sau đêm ngủ kém, điều chỉnh nhẹ thay vì phá vỡ nhịp tập.",
    ],
  },
  {
    slug: "ai-posture-realtime-injury-prevention",
    title: "Giảm 40% Nguy Cơ Chấn Thương Nhờ Phân Tích Tư Thế Real-time",
    excerpt:
      "Khi camera AI nhận diện sai kỹ thuật ngay trong lúc tập, bạn có thể chỉnh động tác tức thì và giảm nguy cơ chấn thương đáng kể.",
    author: "FITUP Research Team",
    publishedAt: "06/03/2026",
    readTime: "6 phút đọc",
    category: "Công nghệ AI",
    coverGradient: "from-[#d68c45]/85 via-[#96310b]/90 to-[#6b121c]/95",
    sections: [
      {
        heading: "Cơ chế phát hiện sai lệch tư thế",
        paragraphs: [
          "Hệ thống theo dõi các mốc khớp chính như gối, hông, vai và cột sống theo thời gian thực.",
          "Khi phát hiện góc khớp lệch ngưỡng an toàn, ứng dụng phát cảnh báo để người tập điều chỉnh ngay.",
        ],
      },
      {
        heading: "Những lỗi kỹ thuật phổ biến được cảnh báo",
        paragraphs: [
          "Đầu gối đổ vào trong khi squat, lưng gù khi deadlift, hoặc vai nâng sai nhịp khi đẩy tạ là các lỗi xuất hiện thường xuyên.",
          "Cảnh báo sớm giúp ngăn thói quen xấu tích lũy, từ đó giảm tải bất lợi lên khớp và dây chằng.",
        ],
      },
      {
        heading: "Ứng dụng trong lộ trình cá nhân",
        paragraphs: [
          "Dữ liệu tư thế được tích hợp trực tiếp vào thuật toán AI để điều chỉnh bài tập phù hợp với năng lực hiện tại.",
          "Nếu lỗi kỹ thuật lặp lại, hệ thống sẽ giảm độ khó và bổ sung bài bổ trợ trước khi tăng tải tiếp.",
        ],
      },
    ],
    keyTakeaways: [
      "Cảnh báo real-time giúp sửa sai ngay tại buổi tập.",
      "Kỹ thuật đúng là nền tảng để tăng tải an toàn.",
      "Dữ liệu tư thế giúp AI cá nhân hóa chính xác hơn.",
    ],
  },
  {
    slug: "vietnamese-meal-plan-habit-retention",
    title: "Vì Sao Thực Đơn Thuần Việt Giúp Tăng 85% Tỷ Lệ Duy Trì Thói Quen",
    excerpt:
      "Thực đơn quen miệng, dễ chuẩn bị và chi phí hợp lý giúp người dùng bám kế hoạch lâu hơn so với mô hình ăn kiêng xa lạ.",
    author: "Đội Ngũ Dinh Dưỡng FITUP",
    publishedAt: "05/03/2026",
    readTime: "5 phút đọc",
    category: "Dữ liệu",
    coverGradient: "from-[#d68c45]/85 via-[#8f4a1f]/85 to-[#6b121c]/95",
    sections: [
      {
        heading: "Lợi thế của khẩu vị quen thuộc",
        paragraphs: [
          "Kế hoạch dinh dưỡng chỉ hiệu quả khi bạn có thể duy trì. Món ăn Việt quen thuộc giúp giảm cảm giác gò bó.",
          "Việc không phải thay đổi toàn bộ khẩu vị làm tâm lý thoải mái hơn, từ đó tỷ lệ bỏ cuộc thấp hơn.",
        ],
      },
      {
        heading: "Tối ưu giữa dinh dưỡng và tính thực tế",
        paragraphs: [
          "Thực đơn tập trung vào nguyên liệu phổ biến, dễ mua, dễ nấu và có thể chuẩn bị theo tuần.",
          "Khi thời gian nấu nướng ngắn và chi phí ổn định, người dùng dễ duy trì chế độ ăn dài hạn hơn.",
        ],
      },
      {
        heading: "Cách áp dụng vào lịch bận rộn",
        paragraphs: [
          "Bạn có thể chọn bộ món theo mục tiêu: giảm mỡ, giữ cơ hoặc tăng cân sạch, sau đó xoay vòng 2 đến 3 nhóm món chính.",
          "Kết hợp theo dõi bữa ăn trên app giúp AI tự điều chỉnh khẩu phần phù hợp theo tuần.",
        ],
      },
    ],
    keyTakeaways: [
      "Khẩu vị quen thuộc giúp tăng khả năng bám kế hoạch.",
      "Yếu tố chi phí và thời gian nấu ảnh hưởng lớn đến duy trì.",
      "Theo dõi khẩu phần đều giúp tối ưu kết quả.",
    ],
  },
  {
    slug: "carb-protein-ratio-for-vietnamese-body",
    title: "Carb Và Protein: Tỷ Lệ Vàng Theo Cơ Địa Người Việt",
    excerpt:
      "Không có một tỷ lệ cố định cho tất cả. Tỷ lệ carb-protein cần dựa trên mục tiêu, tần suất tập và phản hồi cơ thể.",
    author: "HLV Dinh Dưỡng FITUP",
    publishedAt: "04/03/2026",
    readTime: "6 phút đọc",
    category: "Dinh dưỡng",
    coverGradient: "from-[#d68c45]/85 via-[#9a3a12]/88 to-[#6b121c]/95",
    sections: [
      {
        heading: "Hiểu vai trò của carb và protein",
        paragraphs: [
          "Protein giúp phục hồi và duy trì khối cơ, còn carb là nguồn năng lượng chính cho các buổi tập cường độ vừa và cao.",
          "Thiếu carb kéo dài có thể làm hiệu suất giảm, thiếu protein kéo dài dễ mất cơ trong giai đoạn giảm mỡ.",
        ],
      },
      {
        heading: "Gợi ý tỷ lệ theo mục tiêu",
        paragraphs: [
          "Người giảm mỡ có thể ưu tiên protein cao hơn và phân bổ carb quanh khung giờ tập để duy trì hiệu suất.",
          "Người tăng cơ nên đảm bảo tổng calories đủ, giữ protein ổn định và tăng carb theo khối lượng tập luyện.",
        ],
      },
      {
        heading: "Cách theo dõi để tự điều chỉnh",
        paragraphs: [
          "Theo dõi năng lượng buổi tập, mức đói, chất lượng ngủ và thay đổi số đo cơ thể trong 2 đến 3 tuần.",
          "Nếu mệt mỏi kéo dài hoặc hiệu suất tụt, hãy tăng carb có kiểm soát thay vì cắt sâu thêm calories.",
        ],
      },
    ],
    keyTakeaways: [
      "Tỷ lệ carb-protein cần cá nhân hóa theo mục tiêu.",
      "Hiệu suất tập là tín hiệu quan trọng để điều chỉnh.",
      "Không cực đoan cắt carb nếu chưa đánh giá đủ dữ liệu.",
    ],
  },
  {
    slug: "personal-roadmap-from-training-data",
    title: "Cá Nhân Hóa Lộ Trình Tập Từ Dữ Liệu Thực Tế Của Bạn",
    excerpt:
      "Thói quen, bữa ăn, lịch làm việc và hiệu suất buổi tập đều được gom lại để xây dựng một lộ trình thật sự dành riêng cho bạn.",
    author: "FITUP Product Team",
    publishedAt: "03/03/2026",
    readTime: "6 phút đọc",
    category: "Lộ trình cá nhân",
    coverGradient: "from-[#d68c45]/82 via-[#96310b]/86 to-[#6b121c]/95",
    sections: [
      {
        heading: "Dữ liệu nào được dùng để cá nhân hóa",
        paragraphs: [
          "Hệ thống sử dụng lịch tập, mức hoàn thành, bữa ăn, giấc ngủ và phản hồi cảm giác sau buổi tập.",
          "Các dữ liệu này tạo thành hồ sơ tiến độ để AI đề xuất điều chỉnh theo từng tuần.",
        ],
      },
      {
        heading: "Lộ trình thay đổi ra sao theo thời gian",
        paragraphs: [
          "Khi bạn tiến bộ tốt, bài tập được nâng độ khó có kiểm soát. Khi có dấu hiệu quá tải, hệ thống tự giảm volume để bảo toàn hồi phục.",
          "Cách điều chỉnh động này giúp bạn duy trì nhịp tập đều mà không rơi vào chu kỳ quá sức rồi bỏ dở.",
        ],
      },
      {
        heading: "Lợi ích cho người mới và người tập lâu năm",
        paragraphs: [
          "Người mới tránh được việc chọn sai bài hoặc tăng tải quá nhanh, còn người tập lâu năm có thêm dữ liệu để tối ưu điểm nghẽn.",
          "Cả hai nhóm đều hưởng lợi từ việc ra quyết định dựa trên số liệu thay vì cảm tính.",
        ],
      },
    ],
    keyTakeaways: [
      "Cá nhân hóa hiệu quả cần dữ liệu thật, không cần đoán.",
      "Điều chỉnh theo tuần giúp giảm nguy cơ quá tải.",
      "Lộ trình động phù hợp cho cả người mới và người có kinh nghiệm.",
    ],
  },
];

export function getBlogBySlug(slug: string) {
  return BLOG_POSTS.find((post) => post.slug === slug);
}
