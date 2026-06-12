interface playlistProp {
  id: number;
  title: string;
  duration: string;
  src: string;
}

export interface episodesProps {
  id: number;
  title: string;
  author: string;
  mainCover: string;
  thumbnail: string;
  duration: string;
  progress: string;
  playlist: playlistProp[];
}

export const episodes = [
  {
    id: 1,
    title: "Dramadhan",
    author: "Radio Budi Luhur",
    mainCover: "/image/spotifySeries/Spotify 1.png",
    thumbnail: "/image/spotifySeries/Spotify 1.png",
    duration: "13:57",
    progress: "1/3",
    playlist: [
      {
        id: 1,
        title: "Hidup Begini Begini Aja",
        duration: "03:45",
        src: "/audio/SpotiDownloader.com - Baby - Justin Bieber.mp3",
      },
      {
        id: 2,
        title: "Ekspidisi Menyentuh Awan",
        duration: "10:20",
        src: "/audio/SpotiDownloader.com - Baby - Justin Bieber.mp3",
      },
      {
        id: 3,
        title: "Penyakit Orang Kaya",
        duration: "15:45",
        src: "/audio/SpotiDownloader.com - Baby - Justin Bieber.mp3",
      },
      {
        id: 4,
        title: "Suara Dari Masa Lalu",
        duration: "12:30",
        src: "/audio/SpotiDownloader.com - Baby - Justin Bieber.mp3",
      },
    ],
  },
  {
    id: 2,
    title: "Into the Spectrum",
    author: "Radio Budi Luhur",
    mainCover: "/image/spotifySeries/Cover Spotify 1.png",
    thumbnail: "/image/spotifySeries/Cover Spotify 1.png",
    duration: "15:20",
    progress: "2/5",
    playlist: [
      {
        id: 1,
        title: "Spectrum Beginnings",
        duration: "15:20",
        src: "/audio/SpotiDownloader.com - Baby - Justin Bieber.mp3",
      },
      {
        id: 2,
        title: "Wavelengths",
        duration: "12:15",
        src: "/audio/SpotiDownloader.com - Baby - Justin Bieber.mp3",
      },
      {
        id: 3,
        title: "Color Theory",
        duration: "14:40",
        src: "/audio/SpotiDownloader.com - Baby - Justin Bieber.mp3",
      },
    ],
  },
  {
    id: 3,
    title: "Tanya Jawab Asal",
    author: "Radio Budi Luhur",
    mainCover: "/image/spotifySeries/Spotify 1.png",
    thumbnail: "/image/spotifySeries/Cover Spotify 1.png",
    duration: "10:45",
    progress: "1/1",
    playlist: [
      {
        id: 1,
        title: "Q&A Session 1",
        duration: "10:45",
        src: "/audio/SpotiDownloader.com - Baby - Justin Bieber.mp3",
      },
      {
        id: 2,
        title: "Behind the Scenes",
        duration: "08:30",
        src: "/audio/SpotiDownloader.com - Baby - Justin Bieber.mp3",
      },
    ],
  },
  {
    id: 4,
    title: "Now We Know",
    author: "Radio Budi Luhur",
    mainCover: "/image/spotifySeries/Spotify 1.png",
    thumbnail: "/image/spotifySeries/Cover Spotify 1.png",
    duration: "12:10",
    progress: "4/10",
    playlist: [
      {
        id: 1,
        title: "Episode 1: Atoms",
        duration: "12:10",
        src: "/audio/SpotiDownloader.com - Baby - Justin Bieber.mp3",
      },
      {
        id: 2,
        title: "Episode 2: Space",
        duration: "15:00",
        src: "/audio/SpotiDownloader.com - Baby - Justin Bieber.mp3",
      },
      {
        id: 3,
        title: "Episode 3: Ocean",
        duration: "11:30",
        src: "/audio/SpotiDownloader.com - Baby - Justin Bieber.mp3",
      },
      {
        id: 4,
        title: "Episode 4: History",
        duration: "14:20",
        src: "/audio/SpotiDownloader.com - Baby - Justin Bieber.mp3",
      },
    ],
  },
];
