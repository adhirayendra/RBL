export interface Article {
  id: number;
  thumbnailUrl: string;
  title: string;
  desc: string;
  category: string;
}

// Fungsi untuk mengambil judul Artikel
export function getTitleContentById(id: string): string | null {
  const numId = parseInt(id, 10);
  const article = articles.find((article) => article.id === numId);

  return article ? article.title : null;
}

// Fungsi untuk mengambil seluruh metadata Artikel
export default function getArticleById(id: string): Article | null {
  const numId = parseInt(id, 10);
  return articles.find((article) => article.id === numId) || null;
}

export const articles: Article[] = [
  {
    id: 0,
    thumbnailUrl: "/image/articles/SpongeBob.jpg",
    title: "Daftar Episode Terbaru Dari Serial SpongeBob Squerpants",
    desc: "2026 adalah tahun yang menarik bagi para penggemar serial animasi SpongeBob SquarePants. Serial ini telah merilis beberapa episode terbaru yang menghadirkan petualangan seru dan lucu dari karakter-karakter ikonik seperti SpongeBob, Patrick, Squidward, dan lainnya.",
    category: "showbiz",
  },
  {
    id: 1,
    thumbnailUrl: "/image/articles/one-piece-elbaf.jpg",
    title: "One Piece Season 2 Episode 1: Elbaf Arc Dimulai Tanggal?",
    desc: "One Piece adalah salah satu serial anime dan manga paling populer di dunia...",
    category: "lo-ok",
  },
  {
    id: 2,
    thumbnailUrl: "/image/articles/top-10-ai.jpg",
    title: "Top 10 AI Terbaik di Tahun 2026 ChatGPT Tidak Masuk Daftar",
    desc: "Tahun 2026 telah menyaksikan perkembangan pesat dalam bidang kecerdasan buatan (AI)...",
    category: "hard-news",
  },
  {
    id: 3,
    thumbnailUrl: "/image/articles/one-piece-elbaf.jpg",
    title: "One Piece Season 2 Episode 1: Elbaf Arc Dimulai Tanggal?",
    desc: "Salah satu arc yang paling dinantikan adalah Elbaf Arc...",
    category: "game",
  },
  {
    id: 4,
    thumbnailUrl: "/image/articles/top-10-ai.jpg",
    title: "Top 10 AI Terbaik di Tahun 2026 ChatGPT Tidak Masuk Daftar",
    desc: "Tahun 2026 telah menyaksikan perkembangan pesat dalam bidang kecerdasan buatan (AI)...",
    category: "hard-news",
  },
  {
    id: 5,
    thumbnailUrl: "/image/articles/SpongeBob.jpg",
    title: "Game SponeBob Terbaik Di 2026",
    desc: "Tahun 2026 membawa berbagai game SpongeBob yang menarik dan menghibur...",
    category: "game",
  },
  {
    id: 6,
    thumbnailUrl: "/image/articles/SpongeBob.jpg",
    title: "Game SponeBob Terbaik Di 2026",
    desc: "Tahun 2026 membawa berbagai game SpongeBob yang menarik...",
    category: "k-zone",
  },
  {
    id: 7,
    thumbnailUrl: "/image/articles/one-piece-elbaf.jpg",
    title: "One Piece Season 2 Episode 1: Elbaf Arc Dimulai Tanggal?",
    desc: "Petualangan ini akan menghadirkan tantangan baru di Elbaf...",
    category: "lo-ok",
  },
  {
    id: 8,
    thumbnailUrl: "/image/articles/one-piece-elbaf.jpg",
    title: "One Piece Season 2 Episode 1: Elbaf Arc Dimulai Tanggal?",
    desc: "Petualangan ini akan menghadirkan tantangan baru...",
    category: "sport",
  },
  {
    id: 9,
    category: "sport",
    thumbnailUrl: "/image/articles/sport/Rectangle-17.png",
    title: "Timas Lolos Kualifikasi Piala Dunia 2026, Ini Kata Pelatih",
    desc: "Tim nasional Indonesia berhasil lolos ke babak kualifikasi Piala Dunia 2026...",
  },
];


