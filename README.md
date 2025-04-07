# AWS Generative AI Meetup Agenda - Cloudflare Edition

This is a [Next.js](https://nextjs.org) project that manages the agenda for AWS Generative AI Meetups, deployed on Cloudflare's edge network. The project uses modern web technologies and is optimized for performance and scalability.

## Tech Stack

- [Next.js 15](https://nextjs.org) - React framework with App Router
- [React 19](https://react.dev) - UI library
- [Tailwind CSS](https://tailwindcss.com) - Utility-first CSS framework
- [Cloudflare Workers](https://workers.cloudflare.com) - Edge computing platform
- [OpenNext](https://open-next.js.org) - Cloudflare-optimized Next.js deployment

## Getting Started

First, install the dependencies:

```bash
npm install
# or
yarn install
# or
pnpm install
```

Then, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Development

- The project uses TypeScript for type safety
- ESLint is configured for code quality
- TailwindCSS is set up with PostCSS for styling
- Cloudflare environment types are available via `cloudflare-env.d.ts`

## Deployment

This project is configured to deploy to Cloudflare using OpenNext. To deploy:

```bash
npm run deploy
# or
yarn deploy
# or
pnpm deploy
```

To preview the production build locally:

```bash
npm run preview
# or
yarn preview
# or
pnpm preview
```

## Environment Variables

Create a `.dev.vars` file in the root directory for local development with Cloudflare Workers:

```env
# Required environment variables
# Add your environment variables here
```

## Additional Resources

- [Next.js Documentation](https://nextjs.org/docs)
- [Cloudflare Workers Documentation](https://developers.cloudflare.com/workers/)
- [OpenNext Documentation](https://open-next.js.org/)
