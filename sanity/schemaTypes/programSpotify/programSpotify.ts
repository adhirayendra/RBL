export default ({
  name: 'programSpotify',
  title: 'Program Spotify',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Judul Program',
      type: 'string',
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: 'author',
      title: 'Author',
      type: 'string',
      initialValue: 'Radio Budi Luhur',
    },
    {
      name: 'coverImage',
      title: 'Cover / Thumbnail Program',
      type: 'image',
      options: { hotspot: true },
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: 'playlist',
      title: 'Playlist Audio',
      type: 'array',
      of: [{ type: 'track' }],
    },
  ],
});