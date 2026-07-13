export default {
  name: "topMusic",
  title: "Top Musik",
  type: "document",
  fields: [
    {
      name: "rank",
      title: "Peringkat Musik",
      type: "number",
    },
    {
      name: "titleMusic",
      title: "Judul Musik",
      type: "string",
    },
    {
      name: "artistName",
      title: "Nama Artist",
      type: "string",
    },
    {
      name: "durationMusic",
      title: "Durasi Musik",
      type: "string",
    },
    {
      name: "albumCover",
      title: "Album Cover (Masukan Link Cover IMG)",
      type: "string",
    },
  ],
};
