export interface ContentArticle {
  id: number;
  content: ContentBlock[];
}

type ContentBlock =
  | { type: "paragraph"; text: string }
  | { type: "image"; url: string; alt: string };


// Fungsi untuk mengambil content artikel yang dibutuhkan atau yang ingin ditampilkan
export default function GetContentById(id: string): ContentArticle | null {
  const numId = parseInt(id, 10);
  const content = Contents.find((content) => content.id === numId);

  return content || null;
}

export const Contents: ContentArticle[] = [
  {
    id: 0,
    content: [
      {
        type: "paragraph",
        text: "Episode terbaru dari serial SpongeBob SquarePants pada tahun 2026 menghadirkan berbagai petualangan seru dan lucu. Salah satu episode yang paling dinantikan adalah 'SpongeBob's Underwater Adventure', di mana SpongeBob dan teman-temannya menjelajahi dunia bawah laut yang penuh dengan kejutan. Dalam episode ini, mereka bertemu dengan makhluk-makhluk laut yang unik dan menghadapi tantangan yang menguji persahabatan mereka.",
      },
    ],
  },

  {
    id: 1,
    content: [
      {
        type: "paragraph",
        text: "One Piece Season 2 Episode 1 akan menandai dimulainya Elbaf Arc, yang akan membawa para karakter ke pulau raksasa Elbaf. Petualangan ini akan menghadirkan tantangan baru dan misteri yang menarik bagi para penggemar One Piece.",
      },
    ],
  },

  {
    id: 2,
    content: [
      {
        type: "paragraph",
        text: "Daftar 10 AI terbaik di tahun 2026 mencakup berbagai inovasi yang telah mengubah cara kita hidup dan bekerja. Beberapa AI yang masuk dalam daftar ini termasuk 'HealthAI', yang telah merevolusi bidang kesehatan dengan kemampuan diagnostik yang canggih, 'AutoDrive', yang telah membawa kemajuan besar dalam teknologi kendaraan otonom, dan 'CreativeBot', yang telah menginspirasi banyak seniman dengan kemampuannya untuk menghasilkan karya seni yang menakjubkan. Meskipun ChatGPT adalah salah satu AI yang populer, sayangnya tidak masuk dalam daftar ini karena beberapa alasan tertentu, seperti keterbatasan dalam memahami konteks dan menghasilkan respons yang relevan dalam beberapa situasi.",
      },
    ],
  },

  {
    id: 3,
    content: [
      {
        type: "paragraph",
        text: "One Piece Season 2 Episode 1 akan menandai dimulainya Elbaf Arc, yang akan membawa para karakter ke pulau raksasa Elbaf. Petualangan ini akan menghadirkan tantangan baru dan misteri yang menarik bagi para penggemar One Piece.",
      },
    ],
  },
  {
    id: 4,
    content: [
      {
        type: "paragraph",
        text: "Daftar 10 AI terbaik di tahun 2026 mencakup berbagai inovasi yang telah mengubah cara kita hidup dan bekerja. Beberapa AI yang masuk dalam daftar ini termasuk 'HealthAI', yang telah merevolusi bidang kesehatan dengan kemampuan diagnostik yang canggih, 'AutoDrive', yang telah membawa kemajuan besar dalam teknologi kendaraan otonom, dan 'CreativeBot', yang telah menginspirasi banyak seniman dengan kemampuannya untuk menghasilkan karya seni yang menakjubkan. Meskipun ChatGPT adalah salah satu AI yang populer, sayangnya tidak masuk dalam daftar ini karena beberapa alasan tertentu, seperti keterbatasan dalam memahami konteks dan menghasilkan respons yang relevan dalam beberapa situasi.",
      },
    ],
  },
  {
    id: 5,
    content: [
      {
        type: "paragraph",
        text: "Game SpongeBob terbaik di tahun 2026 menghadirkan pengalaman bermain yang penuh kegembiraan dan nostalgia. Beberapa game unggulan termasuk 'SpongeBob's Big Adventure', yang menantang pemain untuk menjelajahi dunia bawah laut dengan misi-misi menyenangkan, dan 'Patrick's Jellyfishing Quest', yang fokus pada permainan memancing jellyfish dengan elemen humor khas SpongeBob. Game-game ini dirancang untuk menghibur pemain dari segala usia, dengan kontrol yang mudah dan cerita yang menginspirasi persahabatan.",
      },
    ],
  },
  {
    id: 6,
    content: [
      {
        type: "paragraph",
        text: "Game SpongeBob terbaik di tahun 2026 menghadirkan pengalaman bermain yang penuh kegembiraan dan nostalgia. Beberapa game unggulan termasuk 'SpongeBob's Big Adventure', yang menantang pemain untuk menjelajahi dunia bawah laut dengan misi-misi menyenangkan, dan 'Patrick's Jellyfishing Quest', yang fokus pada permainan memancing jellyfish dengan elemen humor khas SpongeBob. Game-game ini dirancang untuk menghibur pemain dari segala usia, dengan kontrol yang mudah dan cerita yang menginspirasi persahabatan.",
      },
    ],
  },
  {
    id: 7,
    content: [
      {
        type: "paragraph",
        text: "One Piece Season 2 Episode 1 akan menandai dimulainya Elbaf Arc, yang akan membawa para karakter ke pulau raksasa Elbaf. Petualangan ini akan menghadirkan tantangan baru dan misteri yang menarik bagi para penggemar One Piece.",
      },
    ],
  },
  {
    id: 8,
    content: [
      {
        type: "paragraph",
        text: "One Piece Season 2 Episode 1 akan menandai dimulainya Elbaf Arc, yang akan membawa para karakter ke pulau raksasa Elbaf. Petualangan ini akan menghadirkan tantangan baru dan misteri yang menarik bagi para penggemar One Piece.",
      },
    ],
  },
  {
    id: 9,
    content: [
      {
        type: "paragraph",
        text: "Malam bersejarah di Stadion Utama Gelora Bung Karno berakhir dengan ledakan emosi luar biasa. Tim nasional Indonesia secara resmi mengamankan tiket menuju babak kualifikasi Piala Dunia 2026 setelah menumbangkan lawan berat dalam drama lima gol yang mendebarkan. Sorak-sorai supporter Garuda seolah tak berhenti mengguncang tribun saat peluit panjang dibunyikan.",
      },
      {
        type: "image",
        url: "/image/articles/sport/Rectangle 17.png",
        alt: "Para pemain Timnas Indonesia merayakan kemenangan di tengah lapangan",
      },
      {
        type: "paragraph",
        text: "Coach Andi, sang arsitek di balik kesuksesan ini, terlihat emosional saat sesi konferensi pers pasca-pertandingan. Beliau menekankan bahwa ini bukanlah akhir, melainkan awal dari perjuangan yang sesungguhnya di panggung dunia. 'Anak-anak bermain dengan hati hari ini. Mereka membuktikan bahwa peringkat FIFA hanyalah angka, dan semangat juang adalah segalanya,' pungkasnya dengan mata berkaca-kaca.",
      },
      {
        type: "image",
        url: "/image/articles/sport/keterangan dari coach.jpg",
        alt: "Coach Andi memberikan keterangan pers setelah pertandingan kualifikasi",
      },
      {
        type: "paragraph",
        text: "Perjalanan menuju titik ini tidaklah mudah. Dimulai dari pemusatan latihan yang intensif di pegunungan hingga integrasi pemain muda berbakat, strategi Coach Andi mulai membuahkan hasil nyata. Penguasaan bola yang efektif dan serangan balik cepat menjadi senjata mematikan yang membuat lawan kewalahan sepanjang 90 menit pertandingan.",
      },
      {
        type: "image",
        url: "/image/articles/sport/suasana-stadion-gbk.jpg",
        alt: "Lautan warna merah dari supporter Indonesia di dalam Stadion Gelora Bung Karno",
      },
      {
        type: "paragraph",
        text: "Kini, seluruh mata tertuju pada drawing babak selanjutnya. Dengan performa yang terus menanjak, harapan publik agar Indonesia benar-benar menginjakkan kaki di putaran final Piala Dunia 2026 bukan lagi sekadar mimpi belaka. Dukungan penuh masyarakat Indonesia akan menjadi energi tambahan bagi skuad Garuda untuk menghadapi tantangan global yang lebih besar.",
      },
    ],
  },
];
