export default {
  name: "event",
  title: "Events Page",
  type: "document",
  fields: [
    {
      name: "title",
      title: "Judul Halaman Events",
      type: "string",
      initialValue: "Events",
    },
    {
      name: "photos",
      title: "Foto-Foto Event",
      type: "array",
      description: "Tambahkan foto event. Layout akan otomatis menyesuaikan jumlah foto (ganjil/genap).",
      of: [
        {
          type: "object",
          name: "eventPhoto",
          title: "Foto Event",
          fields: [
            {
              name: "image",
              title: "Foto",
              type: "image",
              options: { hotspot: true },
              validation: (Rule: any) => Rule.required(),
            },
            {
              name: "alt",
              title: "Deskripsi Foto (Alt Text)",
              type: "string",
              validation: (Rule: any) => Rule.required(),
            },
          ],
          preview: {
            select: {
              title: "alt",
              media: "image",
            },
          },
        },
      ],
    },
  ],
  // Hanya boleh 1 dokumen
  __experimental_actions: ["update", "publish"],
};
