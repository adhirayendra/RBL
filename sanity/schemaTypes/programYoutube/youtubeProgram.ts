export default {
  name: "youtubeProgram",
  title: "Program YouTube RBL",
  type: "document",
  fields: [
    {
      name: "programName",
      title: "Nama Program/Segmen",
      type: "string",
      description: "Contoh: Nyobrak, Now We Know, Edisi Ramadhan",
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: "description",
      title: "Deskripsi Program",
      type: "text",
      description: "Penjelasan mengenai tentang apa program video ini.",
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: "programThumbnail",
      title: "Thumbnail/Cover Utama Program",
      type: "image",
      options: {
        hotspot: true,
      },
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: "youtubeUrl",
      title: "Link / URL Video YouTube Utama (Untuk tombol PLAY)",
      type: "url",
      description: "Masukkan link penuh video YouTube utama untuk program ini. Contoh: https://www.youtube.com/watch?v=...",
    },
  ],
};
