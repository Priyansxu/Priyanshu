export default function manifest() {
  return {
    name: 'Priyanshu Gupta',
    short_name: 'Priyanshu Gupta',
    description: 'They don't know me son.',
    start_url: '/',
    display: 'standalone',
    background_color: '#080808',
    theme_color: '#080808',
    icons: [
      {
        src: '/icon.svg',
        sizes: 'any',
        type: 'image/x-icon',
      },
    ],
  }
}