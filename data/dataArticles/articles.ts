type ContentBlock =
  | { type: "paragraph"; text: string }
  | { type: "image"; url: string; alt: string };

interface Article {
  id: number;
  thumbnail: {
    thumbnailUrl: string;
    title: string;
    desc: string;
  };
  contents: ContentBlock[];
  category: string;
}

export const articles: Article[] = [
  {
    id: 0,
    thumbnail: {
      thumbnailUrl: "/articles/SpongeBob.jpg",
      title: "Daftar Episode Terbaru Dari Serial SpongeBob Squerpants",
      desc: "2026 adalah tahun yang menarik bagi para penggemar serial animasi SpongeBob SquarePants. Serial ini telah merilis beberapa episode terbaru yang menghadirkan petualangan seru dan lucu dari karakter-karakter ikonik seperti SpongeBob, Patrick, Squidward, dan lainnya. Dalam artikel ini, kita akan membahas daftar episode terbaru dari serial SpongeBob SquarePants yang dirilis pada tahun 2026.",
    },
    contents: [
      {
        type: "paragraph",
        text: "Episode terbaru dari serial SpongeBob SquarePants pada tahun 2026 menghadirkan berbagai petualangan seru dan lucu. Salah satu episode yang paling dinantikan adalah 'SpongeBob's Underwater Adventure', di mana SpongeBob dan teman-temannya menjelajahi dunia bawah laut yang penuh dengan kejutan. Dalam episode ini, mereka bertemu dengan makhluk-makhluk laut yang unik dan menghadapi tantangan yang menguji persahabatan mereka.",
      },
    ],
    category: "showbiz",
  },

  {
    id: 1,
    thumbnail: {
      thumbnailUrl: "/articles/one piece elbaf.jpg",
      title: "One Piece Season 2 Episode 1: Elbaf Arc Dimulai Tanggal?",
      desc: "One Piece adalah salah satu serial anime dan manga paling populer di dunia, yang telah memikat jutaan penggemar dengan petualangan seru dan karakter-karakter yang menarik. Setelah menyelesaikan arc Wano Country yang epik, para penggemar sangat menantikan kelanjutan cerita dalam One Piece Season 2. Salah satu arc yang paling dinantikan adalah Elbaf Arc, yang akan membawa kita ke pulau raksasa Elbaf yang penuh dengan misteri dan tantangan. Dalam artikel ini, kita akan membahas tanggal rilis One Piece Season 2 Episode 1 yang menandai dimulainya Elbaf Arc, serta apa yang bisa kita harapkan dari petualangan baru ini.",
    },
    contents: [
      {
        type: "paragraph",
        text: "One Piece Season 2 Episode 1 akan menandai dimulainya Elbaf Arc, yang akan membawa para karakter ke pulau raksasa Elbaf. Petualangan ini akan menghadirkan tantangan baru dan misteri yang menarik bagi para penggemar One Piece.",
      },
    ],
    category: "lo-ok",
  },

  {
    id: 2,
    thumbnail: {
      thumbnailUrl: "/articles/Top 10 AI.jpg",
      title: "Top 10 AI Terbaik di Tahun 2026 ChatGPT Tidak Masuk Daftar",
      desc: "Tahun 2026 telah menyaksikan perkembangan pesat dalam bidang kecerdasan buatan (AI), dengan banyak inovasi dan aplikasi baru yang muncul. Dalam artikel ini, kita akan membahas daftar 10 AI terbaik di tahun 2026, yang mencakup berbagai bidang seperti kesehatan, transportasi, hiburan, dan lainnya. Meskipun ChatGPT adalah salah satu AI yang populer, sayangnya tidak masuk dalam daftar ini karena beberapa alasan tertentu.",
    },
    contents: [
      {
        type: "paragraph",
        text: "Daftar 10 AI terbaik di tahun 2026 mencakup berbagai inovasi yang telah mengubah cara kita hidup dan bekerja. Beberapa AI yang masuk dalam daftar ini termasuk 'HealthAI', yang telah merevolusi bidang kesehatan dengan kemampuan diagnostik yang canggih, 'AutoDrive', yang telah membawa kemajuan besar dalam teknologi kendaraan otonom, dan 'CreativeBot', yang telah menginspirasi banyak seniman dengan kemampuannya untuk menghasilkan karya seni yang menakjubkan. Meskipun ChatGPT adalah salah satu AI yang populer, sayangnya tidak masuk dalam daftar ini karena beberapa alasan tertentu, seperti keterbatasan dalam memahami konteks dan menghasilkan respons yang relevan dalam beberapa situasi.",
      },
    ],
    category: "hard-news",
  },

  {
    id: 3,
    thumbnail: {
      thumbnailUrl: "/articles/one piece elbaf.jpg",
      title: "One Piece Season 2 Episode 1: Elbaf Arc Dimulai Tanggal?",
      desc: "One Piece adalah salah satu serial anime dan manga paling populer di dunia, yang telah memikat jutaan penggemar dengan petualangan seru dan karakter-karakter yang menarik. Setelah menyelesaikan arc Wano Country yang epik, para penggemar sangat menantikan kelanjutan cerita dalam One Piece Season 2. Salah satu arc yang paling dinantikan adalah Elbaf Arc, yang akan membawa kita ke pulau raksasa Elbaf yang penuh dengan misteri dan tantangan. Dalam artikel ini, kita akan membahas tanggal rilis One Piece Season 2 Episode 1 yang menandai dimulainya Elbaf Arc, serta apa yang bisa kita harapkan dari petualangan baru ini.",
    },
    contents: [
      {
        type: "paragraph",
        text: "One Piece Season 2 Episode 1 akan menandai dimulainya Elbaf Arc, yang akan membawa para karakter ke pulau raksasa Elbaf. Petualangan ini akan menghadirkan tantangan baru dan misteri yang menarik bagi para penggemar One Piece.",
      },
    ],
    category: "game",
  },

  {
    id: 4,
    thumbnail: {
      thumbnailUrl: "/articles/Top 10 AI.jpg",
      title: "Top 10 AI Terbaik di Tahun 2026 ChatGPT Tidak Masuk Daftar",
      desc: "Tahun 2026 telah menyaksikan perkembangan pesat dalam bidang kecerdasan buatan (AI), dengan banyak inovasi dan aplikasi baru yang muncul. Dalam artikel ini, kita akan membahas daftar 10 AI terbaik di tahun 2026, yang mencakup berbagai bidang seperti kesehatan, transportasi, hiburan, dan lainnya. Meskipun ChatGPT adalah salah satu AI yang populer, sayangnya tidak masuk dalam daftar ini karena beberapa alasan tertentu.",
    },
    contents: [
      {
        type: "paragraph",
        text: "Daftar 10 AI terbaik di tahun 2026 mencakup berbagai inovasi yang telah mengubah cara kita hidup dan bekerja. Beberapa AI yang masuk dalam daftar ini termasuk 'HealthAI', yang telah merevolusi bidang kesehatan dengan kemampuan diagnostik yang canggih, 'AutoDrive', yang telah membawa kemajuan besar dalam teknologi kendaraan otonom, dan 'CreativeBot', yang telah menginspirasi banyak seniman dengan kemampuannya untuk menghasilkan karya seni yang menakjubkan. Meskipun ChatGPT adalah salah satu AI yang populer, sayangnya tidak masuk dalam daftar ini karena beberapa alasan tertentu, seperti keterbatasan dalam memahami konteks dan menghasilkan respons yang relevan dalam beberapa situasi.",
      },
    ],
    category: "hard-news",
  },

  {
    id: 5,
    thumbnail: {
      thumbnailUrl: "/articles/SpongeBob.jpg",
      title: "Game SponeBob Terbaik Di 2026",
      desc: "Tahun 2026 membawa berbagai game SpongeBob yang menarik dan menghibur, menampilkan petualangan baru di Bikini Bottom dengan karakter favorit seperti SpongeBob, Patrick, dan Squidward. Dalam artikel ini, kita akan menjelajahi daftar game SpongeBob terbaik yang dirilis pada tahun 2026, yang menawarkan gameplay seru, grafis yang indah, dan cerita yang lucu untuk semua usia.",
    },
    contents: [
      {
        type: "paragraph",
        text: "Game SpongeBob terbaik di tahun 2026 menghadirkan pengalaman bermain yang penuh kegembiraan dan nostalgia. Beberapa game unggulan termasuk 'SpongeBob's Big Adventure', yang menantang pemain untuk menjelajahi dunia bawah laut dengan misi-misi menyenangkan, dan 'Patrick's Jellyfishing Quest', yang fokus pada permainan memancing jellyfish dengan elemen humor khas SpongeBob. Game-game ini dirancang untuk menghibur pemain dari segala usia, dengan kontrol yang mudah dan cerita yang menginspirasi persahabatan.",
      },
    ],
    category: "game",
  },

  {
    id: 6,
    thumbnail: {
      thumbnailUrl: "/articles/SpongeBob.jpg",
      title: "Game SponeBob Terbaik Di 2026",
      desc: "Tahun 2026 membawa berbagai game SpongeBob yang menarik dan menghibur, menampilkan petualangan baru di Bikini Bottom dengan karakter favorit seperti SpongeBob, Patrick, dan Squidward. Dalam artikel ini, kita akan menjelajahi daftar game SpongeBob terbaik yang dirilis pada tahun 2026, yang menawarkan gameplay seru, grafis yang indah, dan cerita yang lucu untuk semua usia.",
    },
    contents: [
      {
        type: "paragraph",
        text: "Game SpongeBob terbaik di tahun 2026 menghadirkan pengalaman bermain yang penuh kegembiraan dan nostalgia. Beberapa game unggulan termasuk 'SpongeBob's Big Adventure', yang menantang pemain untuk menjelajahi dunia bawah laut dengan misi-misi menyenangkan, dan 'Patrick's Jellyfishing Quest', yang fokus pada permainan memancing jellyfish dengan elemen humor khas SpongeBob. Game-game ini dirancang untuk menghibur pemain dari segala usia, dengan kontrol yang mudah dan cerita yang menginspirasi persahabatan.",
      },
    ],
    category: "k-zone",
  },

  {
    id: 7,
    thumbnail: {
      thumbnailUrl: "/articles/one piece elbaf.jpg",
      title: "One Piece Season 2 Episode 1: Elbaf Arc Dimulai Tanggal?",
      desc: "One Piece adalah salah satu serial anime dan manga paling populer di dunia, yang telah memikat jutaan penggemar dengan petualangan seru dan karakter-karakter yang menarik. Setelah menyelesaikan arc Wano Country yang epik, para penggemar sangat menantikan kelanjutan cerita dalam One Piece Season 2. Salah satu arc yang paling dinantikan adalah Elbaf Arc, yang akan membawa kita ke pulau raksasa Elbaf yang penuh dengan misteri dan tantangan. Dalam artikel ini, kita akan membahas tanggal rilis One Piece Season 2 Episode 1 yang menandai dimulainya Elbaf Arc, serta apa yang bisa kita harapkan dari petualangan baru ini.",
    },
    contents: [
      {
        type: "paragraph",
        text: "One Piece Season 2 Episode 1 akan menandai dimulainya Elbaf Arc, yang akan membawa para karakter ke pulau raksasa Elbaf. Petualangan ini akan menghadirkan tantangan baru dan misteri yang menarik bagi para penggemar One Piece.",
      },
    ],
    category: "liputan",
  },

  {
    id: 8,
    thumbnail: {
      thumbnailUrl: "/articles/one piece elbaf.jpg",
      title: "One Piece Season 2 Episode 1: Elbaf Arc Dimulai Tanggal?",
      desc: "One Piece adalah salah satu serial anime dan manga paling populer di dunia, yang telah memikat jutaan penggemar dengan petualangan seru dan karakter-karakter yang menarik. Setelah menyelesaikan arc Wano Country yang epik, para penggemar sangat menantikan kelanjutan cerita dalam One Piece Season 2. Salah satu arc yang paling dinantikan adalah Elbaf Arc, yang akan membawa kita ke pulau raksasa Elbaf yang penuh dengan misteri dan tantangan. Dalam artikel ini, kita akan membahas tanggal rilis One Piece Season 2 Episode 1 yang menandai dimulainya Elbaf Arc, serta apa yang bisa kita harapkan dari petualangan baru ini.",
    },
    contents: [
      {
        type: "paragraph",
        text: "One Piece Season 2 Episode 1 akan menandai dimulainya Elbaf Arc, yang akan membawa para karakter ke pulau raksasa Elbaf. Petualangan ini akan menghadirkan tantangan baru dan misteri yang menarik bagi para penggemar One Piece.",
      },
    ],
    category: "sport",
  },

  {
    id: 9,
    thumbnail: {
      thumbnailUrl: "/articles/one piece elbaf.jpg",
      title: "One Piece Season 2 Episode 1: Elbaf Arc Dimulai Tanggal?",
      desc: "One Piece adalah salah satu serial anime dan manga paling populer di dunia, yang telah memikat jutaan penggemar dengan petualangan seru dan karakter-karakter yang menarik. Setelah menyelesaikan arc Wano Country yang epik, para penggemar sangat menantikan kelanjutan cerita dalam One Piece Season 2. Salah satu arc yang paling dinantikan adalah Elbaf Arc, yang akan membawa kita ke pulau raksasa Elbaf yang penuh dengan misteri dan tantangan. Dalam artikel ini, kita akan membahas tanggal rilis One Piece Season 2 Episode 1 yang menandai dimulainya Elbaf Arc, serta apa yang bisa kita harapkan dari petualangan baru ini.",
    },
    contents: [
      {
        type: "paragraph",
        text: "One Piece Season 2 Episode 1 akan menandai dimulainya Elbaf Arc, yang akan membawa para karakter ke pulau raksasa Elbaf. Petualangan ini akan menghadirkan tantangan baru dan misteri yang menarik bagi para penggemar One Piece.",
      },
    ],
    category: "musik",
  },
];
