export default {
    name: 'track',
    title: 'Track',
    type: 'object',
    fields: [
        {
            name: 'title',
            title: 'Judul Lagu/Episode',
            type: 'string',
            validation: (Rule: any) => Rule.required(),
        },
        {
            name: 'duration',
            title: 'Durasi',
            type: 'string',
            description: 'Contoh: 15:20',
        },
        {
            name: 'audioFile',
            title: 'File Audio',
            type: 'file',
            options: { accept: 'audio/*' },
            validation: (Rule: any) => Rule.required(),
        },
    ],
};