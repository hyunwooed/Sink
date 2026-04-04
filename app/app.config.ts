export default defineAppConfig({
  title: 'go.hyunwoo.org',
  github: 'https://github.com/hyunwooed',
  coffee: '',
  twitter: '',
  telegram: '',
  description: 'A Simple / Speedy / Secure Link Shortener with Analytics, 100% run on Cloudflare.',
  image: 'https://sink.cool/banner.png',
  previewTTL: 300, // 5 minutes
  slugRegex: /^[a-z0-9]+(?:-[a-z0-9]+)*$/i,
  reserveSlug: [
    'dashboard',
  ],
})
