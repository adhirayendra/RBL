export default {
  name: "article",
  title: "Article",
  type: "document",
  fields: [
    {
      name: "title",
      title: "Judul Artikel",
      type: "string",
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: "thumbnail",
      title: "Thumbnail / Gambar Utama",
      type: "image",
      options: {
        hotspot: true,
      },
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: "category",
      title: "Kategori",
      type: "reference",
      to: [{ type: "category" }],
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: "publishedAt",
      title: "Dibuat Kapan",
      type: "datetime",
      initialValue: () => new Date().toISOString(),
    },
    {
      name: "content",
      title: "Konten Artikel (Dinamis)",
      type: "array",
      of: [
        {
          type: "block",
        },
        {
          type: "image",
          title: "Sisipkan Gambar",
          options: { hotspot: true },
          fields: [
            {
              name: "alt",
              type: "string",
              title: "Alternative Text (Deskripsi Gambar)",
            },
          ],
        },
      ],
    },
  ],
};
