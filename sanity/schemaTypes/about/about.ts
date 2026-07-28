export default {
  name: "about",
  title: "About Page",
  type: "document",
  fields: [
    {
      name: "title",
      title: "Judul",
      type: "string",
      initialValue: "About Radio Budi Luhur",
    },
    {
      name: "heroImage",
      title: "Foto Tim (Hero Image)",
      type: "image",
      options: {
        hotspot: true,
      },
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: "heroImageAlt",
      title: "Deskripsi Foto (Alt Text)",
      type: "string",
      initialValue: "Radio Budi Luhur Team",
    },
  ],
  // Hanya boleh ada 1 dokumen about
  __experimental_actions: ["update", "publish"],
};
