This is a [Next.js](https://nextjs.org) project configured for **static export** deployment on Netlify.

## Getting Started

First, run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `src/app/page.tsx`. The page auto-updates as you edit the file.

## Build for Static Export

Run the build command to generate a static `out/` directory:

```bash
npm run build
```

This produces an `out/` folder containing the fully static site, ready for zip-based deployment to Netlify.

## Deploy on Netlify

1. Run `npm run build` locally.
2. Zip the contents of the `out/` directory.
3. Upload the zip to Netlify via the Netlify dashboard (drag-and-drop or manual deploy).

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Static Exports](https://nextjs.org/docs/app/building-your-application/deploying/static-exports) - learn about Next.js static export.
