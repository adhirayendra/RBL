export default {
  name: "broadcastProgram",
  title: "Program Siaran",
  type: "document",
  fields: [
    {
      name: "programName",
      title: "Nama Program",
      type: "string",
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: "thumbnailImg",
      title: "Thumbnail Program",
      type: "image",
      validation: (Rule: any) => Rule.required(),
    },
  ],
};
