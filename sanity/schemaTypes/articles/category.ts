export default {
  name: "category",
  title: "Category",
  type: "document",
  fields: [
    {
      name: "name",
      title: "Category Name",
      type: "string",
      description: "Contoh: musik, podcast, edukasi",
    },
    {
      name: "label",
      title: "Label",
      type: "string",
      description: "Label untuk tampilan UI (Contoh: Musik Kampus)",
    },
  ],
};
