# Managing portfolio projects

All project content lives in `app/data/projects.js`. Project images live in
`public/projects/<project-slug>/`.

## Add a new project

1. Create a folder such as `public/projects/my-project/`.
2. Add a cover image named `cover.webp`, `cover.png`, or `cover.jpg`.
3. Add as many gallery images as needed. There is no three-image limit.
4. Copy an existing object in `app/data/projects.js` and update its fields.

```js
{
  slug: 'my-project',
  featured: false,
  title: 'My Project',
  category: 'Data Platform',
  group: 'Data & AI',
  cover: '/projects/my-project/cover.webp',
  coverAlt: 'A useful description of the cover image',
  intro: 'One concise sentence explaining the project.',
  role: 'Software Engineer',
  timeline: 'Jan 2026 — Mar 2026',
  team: 'Team project',
  stack: ['Next.js', 'Python', 'PostgreSQL'],
  overview: [
    'First overview paragraph.',
    'Optional second overview paragraph.',
  ],
  solutionImpact: [
    'First solution and impact paragraph.',
    'Optional second solution and impact paragraph.',
  ],
  impactPoints: ['Outcome one', 'Outcome two'],
  gallery: [
    { src: '/projects/my-project/gallery-01.webp', alt: 'Screen description' },
    { src: '/projects/my-project/gallery-02.webp', alt: 'Screen description' },
  ],
  links: {
    repository: 'https://github.com/username/repository',
    live: 'https://project.example.com',
  },
}
```

## Choose the homepage top three

Set `featured: true` on exactly three projects and assign `featuredOrder` from
1 to 3. The homepage reads these values automatically.

## Images

- Recommended cover ratio: 16:10.
- Gallery images can use any practical ratio.
- Prefer WebP for new screenshots where possible.
- Always add meaningful `alt` text.
- A missing cover is handled with a generated navy placeholder until an image
  is added.
