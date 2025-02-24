
##############################      HOLA        ############################

It'is me Abel and this is the description:

 Figma design used: https://www.figma.com/community/file/1216616090937021365


Brief explanation of my approach:

Project Structure & Organization
The project follows a structured Next.js folder hierarchy, with src/app/ for pages and src/components/ for reusable UI elements.
SCSS modules (.module.scss) are used for component-specific styles.
Global styles, variables, and mixins are managed in src/styles/

Fetches posts from a mock API (jsonplaceholder.typicode.com).
Transforms data (adding tags, views, readingTime, date).
Uses SCSS Grid layout for responsive design.
Displays posts with an image, metadata, and a "Read more" button.

Fetches individual posts dynamically.
Displays a large header image, title, and content.

mplements a dark/light mode toggle using localStorage.
Updates CSS variables in globals.scss dynamically.


SCSS variables & mixins for reusable styles.
Flexbox & Grid layouts for responsiveness.
BEM-like class naming for structure.

Asynchronous data fetching (useEffect for BlogList, async function for Post).
Modular, reusable components for maintainability.



Setup instructions:
1. Install sassnpm install --save-dev sass and

This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.js`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
