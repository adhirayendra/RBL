export default {
  name: "youtubeVideo",
  title: "Koleksi Video YouTube",
  type: "document",
  fields: [
    {
      name: "title",
      title: "Judul Video / Judul Episode",
      type: "string",
      description: "Contoh: NGOBRAKS Eps. 2 Saat NORMAL, jadi BEBAN?!",
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: "program",
      title: "Pilih Program/Segmen Utama Video Ini",
      type: "reference",
      to: [{ type: "youtubeProgram" }], // Menghubungkan video ini ke wadah induknya
      description: "Pilih segmen video ini agar otomatis terkelompokkan",
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: "youtubeUrl",
      title: "Link / URL Video YouTube",
      type: "url",
      description:
        "Masukkan link penuh, contoh: https://www.youtube.com/watch?v=...",
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: "publishedDate",
      title: "Tanggal Rilis Video",
      type: "date",
      options: {
        dateFormat: "YYYY-MM-DD",
      },
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: "duration",
      title: "Durasi Video (Menit:Detik)",
      type: "string",
      description: "Contoh input: 12:30 atau 08:45",
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: "videoThumbnail",
      title: "Thumbnail Khusus Video (Opsional)",
      type: "image",
      description:
        "Kosongkan jika ingin memakai thumbnail default dari program utama",
      options: {
        hotspot: true,
      },
    },
  ],
  preview: {
    select: {
      title: "title",
      subtitle: "program.programName",
      media: "videoThumbnail",
    },
  },
};
