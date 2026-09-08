# Multiple Page Portfolio

A responsive portfolio built with Next.js, React, TypeScript, Tailwind CSS, and static export. The site includes a home page, About page, Skills page, Projects page, theme and language toggles, animated backgrounds, project cards, and course certifications.

## Features

- Static Next.js export suitable for GitHub Pages or any static host.
- Light and dark themes managed with `next-themes`.
- English and Spanish content managed through `LanguageContext`.
- Responsive pages for Home, About, Skills, and Projects.
- Theme-aware WebGL Balatro background on the home page.
- Theme-aware animated ShapeGrid background on internal pages.
- Project cards with optimized WebP images and technology icons.
- About page with experience, education, skills, and contact links.
- Static blog/post infrastructure retained under `src/app/_posts` and `src/posts`.

## Requirements

- Node.js 20 or newer is recommended.
- npm.

## Getting Started

Install dependencies:

```bash
npm install
```

Start the development server:

```bash
npm run dev
```

Open `http://localhost:3000` in a browser.

## Production Build

Create the static export:

```bash
npm run build
```

The generated static site is written to `out/` because `next.config.js` uses `output: 'export'`.

Serve the generated build locally with:

```bash
npx serve@latest out
```

The development server is useful for development, but the exported `out/` directory should be used to test the production site and run Lighthouse against the final static output.

## Available Scripts

| Command | Description |
| --- | --- |
| `npm run dev` | Start the Next.js development server. |
| `npm run build` | Build the optimized static export in `out/`. |
| `npm run start` | Start Next's server command. Static deployments should serve `out/` instead. |
| `npm run lint` | Run the configured Next.js lint command. |
| `npm run generate-posts` | Generate post page files from the Markdown post data. |

## Static Deployment

The project is configured for static hosting:

- `output: 'export'` generates the `out/` directory.
- `trailingSlash: true` creates route directories compatible with static hosts.
- `NEXT_PUBLIC_BASE_PATH` can be used when deploying below a repository path.
- `assetPrefix` and asset URLs use the same base path when configured.

Example for a repository hosted at `/portfolio-v2`:

```bash
$env:NEXT_PUBLIC_BASE_PATH="/portfolio-v2"
npm run build
npx serve@latest out
```

For macOS or Linux:

```bash
NEXT_PUBLIC_BASE_PATH=/portfolio-v2 npm run build
npx serve@latest out
```

The GitHub Actions workflow is located at `.github/workflows/deploy.yml`.

## Project Structure

```text
.
|-- public/
|   |-- assets/                  Images, icons, and animation data
|   `-- css/                     Legacy/generated stylesheet assets
|-- scripts/
|   `-- generate-posts.js       Post generation script
|-- src/
|   |-- app/                     Next.js App Router routes and global CSS
|   |   |-- page.tsx             Home page
|   |   |-- about/page.tsx       About route
|   |   |-- projects/page.tsx    Projects route
|   |   |-- skills/page.tsx      Skills route
|   |   `-- _posts/              Blog listing and post routes
|   |-- components/              Reusable UI and animated backgrounds
|   |-- config/                  Portfolio content and site configuration
|   |-- context/                 Theme and language providers
|   |-- lib/                     Asset and utility helpers
|   |-- posts/                   Markdown post source files
|   |-- styles/                  Additional stylesheet assets
|   `-- types/                   Shared TypeScript declarations
|-- next.config.js               Static export and base path configuration
|-- package.json                 Scripts and dependencies
|-- postcss.config.js            PostCSS configuration
|-- tailwind.config.js           Tailwind configuration
`-- tsconfig.json                TypeScript configuration
```

## Content and Data Structure

Most editable portfolio content lives in `src/config/`:

- `global.ts`: site identity, navigation, footer, and social links.
- `home.ts`: home greeting, description, and button labels.
- `about.ts`: About text, skills, experience, education, and currently/contact data.
- `projects.ts`: project titles, descriptions, URLs, images, repositories, and technology icons.
- `skills.ts`: skill categories, technology names, icon data, and certifications.
- `content.ts`: shared site metadata.
- `posts.ts`: post metadata used by the blog system.

Most translatable values use this shape:

```ts
{
	en: "English value",
	es: "Valor en espanol"
}
```

Technology icon entries use a URL and optional theme-aware colors:

```ts
{
	url: "/assets/images/projects/icon/react.svg",
	color: "#00D8FF"
}
```

The `TechIcon` component also supports `themeColors.light` and `themeColors.dark` when an icon needs different colors per theme.

## Backgrounds and Theming

- `HomeBackground.tsx` selects light/dark Balatro colors and renders the WebGL home background.
- `Balatro.tsx` pauses when hidden or outside the viewport and renders at 60 FPS while visible.
- `ShapeGridBackground.tsx` selects light/dark grid colors for internal pages.
- `ShapeGrid.tsx` renders the interactive canvas grid and supports square, hexagon, circle, and triangle shapes.
- `ThemeProvider.tsx` configures `next-themes` with class-based theme switching.

When adding a new theme-sensitive component, prefer `useTheme()` and a small local palette rather than duplicating theme detection logic.

## Performance Notes

- Run Lighthouse against the production export, not only the development server:

	```bash
	npm run build
	npx serve@latest out
	```

- Project images use optimized WebP variants in `public/assets/images/projects/`.
- Only the first project image is prioritized; the remaining project images load lazily.
- Animated backgrounds pause when hidden or outside the viewport.
- Keep large images close to their rendered dimensions and add explicit `sizes` values when using `next/image`.

## License and Attribution

This portfolio is maintained by Luis Arturo. The project contains design and code adapted from the original ThemeWagon multiple-page portfolio template. See the original template attribution and ISC license terms in the repository history and source distribution.