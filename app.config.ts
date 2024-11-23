export default defineAppConfig({
  title: 'go.hyunwoo.org',
  email: 'jo@hyunwoo.org',
  github: 'https://github.com/hyunwooed',
  twitter: '',
  telegram: '',
  mastodon: '',
  blog: 'https://www.hyunwoo.org',
  description: 'A Simple / Speedy / Secure Link Shortener with Analytics, 100% run on Cloudflare.',
  image: 'https://sink.cool/banner.png',
  previewTTL: 24 * 3600, // 24h
  slugRegex: /^[a-z0-9]+(?:-[a-z0-9]+)*$/i,
  reserveSlug: [
    'dashboard',
  ],
})
