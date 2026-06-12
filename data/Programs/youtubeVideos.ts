interface recomendationProp {
  title: string;
  date: string;
  duration: string;
  thumbnail: string;
  link: string;
}

export interface videosProp {
  id: number;
  id_content?: string;
  title: string;
  description: string;
  thumbnail: string;
  link: string;
  recommendations: recomendationProp[];
}

export const videos: videosProp[] = [
  {
    id: 1,
    title: "Perkenalkin\nRadio Budi luhur",
    description:
      "Radio komunitas yang telah menjadi suara khas Universitas Budi Luhur sejak 2005, hadir di frekuensi 107.7 FM dan dapat dinikmati secara global melalui platform streaming di www.radiobudiluhur.com atau di RCTI+",
    thumbnail: "/image/Youtube/perkenalkin.webp",
    link: "https://www.youtube.com/watch?v=8zVeXiPuWog",
    recommendations: [
      {
        title: "Get To Know Radio Budi Luhur",
        date: "21 Okt 2024",
        duration: "1:48",
        thumbnail: "/image/Youtube/perkenalkin.webp",
        link: "https://www.youtube.com/watch?v=8zVeXiPuWog",
      },
      {
        title: "Radio Budi Luhur Video Profile 2021: New Era",
        date: "26 Sep 2021",
        duration: "2:32",
        thumbnail: "/image/Youtube/perkenalkin.webp",
        link: "https://www.youtube.com/watch?v=rEASOO9Kk3A",
      },
      {
        title: "Radio Budi Luhur Video Profile 2023: One",
        date: "18 Sep 2023",
        duration: "3:15",
        thumbnail: "/image/Youtube/RCVi_MjLSy0-HD (1) 1.png",
        link: "https://www.youtube.com/watch?v=RCVi_MjLSy0",
      },
    ],
  },
  {
    id: 2,
    id_content: "Nyobrak",
    title: "Nyobrak:\nEksistensi Radio",
    description:
      "Membahas perjalanan dan eksistensi radio komunitas kampus di era digital bersama para pakar dan praktisi media lokal.",
    thumbnail: "/image/Youtube/eps 1 ngobrak .webp",
    link: "https://www.youtube.com/watch?v=rEASOO9Kk3A",
    recommendations: [
      {
        title: 'NGOBRAKS Eps. 2 Saat "NORMAL",  jadi "BEBAN?!"',
        date: "15 Jan 2024",
        duration: "12:30",
        thumbnail: "/image/Youtube/eps 2 ngobrak.webp",
        link: "https://www.youtube.com/watch?v=rEASOO9Kk3A",
      },
      {
        title: "NGOBRAKS Eps. 3 KULIAH, MASA GITUH??!",
        date: "10 Feb 2024",
        duration: "08:45",
        thumbnail: "/image/Youtube/eps 3 ngobrak.webp",
        link: "https://www.youtube.com/watch?v=8zVeXiPuWog",
      },
      {
        title: "Tawabal: Back To School",
        date: "24 May 2025",
        duration: "06:32",
        thumbnail: "/image/Youtube/bts.webp",
        link: "https://www.youtube.com/watch?v=a2qeGP-UphY",
      },
    ],
  },
  {
    id: 3,
    id_content: "Tanya Jawab Asal",
    title: "Tanya Jawab Asal:\nEdisi Ramadhan",
    description:
      "Segmen spesial Ramadhan yang penuh dengan tanya jawab seru dan penuh tawa bersama pengisi acara favorit kamu.",
    thumbnail: "/image/Youtube/tawabal.webp",
    link: "https://www.youtube.com/watch?v=RCVi_MjLSy0",
    recommendations: [
      {
        title: "Behind the Scenes: Edisi Ramadhan",
        date: "20 Mar 2024",
        duration: "05:20",
        thumbnail: "/image/Youtube/tawabal.webp",
        link: "https://www.youtube.com/watch?v=RCVi_MjLSy0",
      },
      {
        title: "Keseruan Buka Puasa Bersama RBL",
        date: "25 Mar 2024",
        duration: "04:15",
        thumbnail: "/image/Youtube/tawabal.webp",
        link: "https://www.youtube.com/watch?v=kyHJg8smjzM",
      },
    ],
  },
  {
    id: 4,
    id_content: "Now We Know",
    title: "Now We Know:\nProgram Edukasi",
    description:
      "Wawasan baru setiap hari! Temukan fakta-fakta unik yang belum kamu ketahui sebelumnya hanya di program Now We Know.",
    thumbnail: "/image/Youtube/now we know.webp",
    link: "https://www.youtube.com/watch?v=kyHJg8smjzM",
    recommendations: [
      {
        title: "Fakta Unik Sejarah Radio",
        date: "05 Apr 2024",
        duration: "06:10",
        thumbnail: "/image/Youtube/now we know.webp",
        link: "https://www.youtube.com/watch?v=kyHJg8smjzM",
      },
      {
        title: "Teknolgi di Balik Siaran Radio",
        date: "12 Apr 2024",
        duration: "07:30",
        thumbnail: "/image/Youtube/now we know.webp",
        link: "https://www.youtube.com/watch?v=RCVi_MjLSy0",
      },
    ],
  },
];
