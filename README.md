# Jose Albizures Portfolio & Blog

![Typescript](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white)
![GitHub](https://img.shields.io/github/license/albizures/albizures?color=%232F3741&style=for-the-badge)
[![Conventional Commits](https://img.shields.io/badge/Conventional%20Commits-1.0.0-%23FE5196?logo=conventionalcommits&logoColor=white&style=for-the-badge)](https://conventionalcommits.org)
[![Commitizen friendly](https://img.shields.io/badge/commitizen-friendly-brightgreen.svg?style=for-the-badge)](http://commitizen.github.io/cz-cli/)

My portfolio & blog website and other goodies

## 💻 Tech Stack

**Frameworks** - [Astro](https://astro.build), [React](https://react.dev)  
**JS Flavor** - [TypeScript](https://www.typescriptlang.org)  
**Fuzzy Search** - [FuseJS](https://fusejs.io)  
**Styling** - [Tailwind CSS](https://tailwindcss.com)  
**Deployment** - [Netlify](https://netlify.com)  
**Linting** - [ESLint](https://eslint.org)  
**Code Formatting** - [Prettier](https://prettier.io)  
**Icons** - [React Icons](react-icons.github.io/react-icons)

<!-- ## Lighthouse Score

<p align="center">
  <a href="https://pagespeed.web.dev/report?url=https%3A%2F%2Falbizures.com%2F&form_factor=desktop">
    <img width="710" alt="Jose Albizures Website Lighthouse Score" src="public/lighthouse-result.svg">
  <a>
</p> -->

## 🚀 Project Structure

```bash
/
├── public/
│   ├── assets/
│   │   └── logo.svg
│   │   └── logo.png
│   └── favicon.svg
│   └── robots.txt
│   └── toggle-theme.js
├── src/
│   ├── assets/
│   │   └── socialIcons.ts
│   ├── components/
│   ├── content/
│   │   |  blog/
│   │   |    └── some-blog-posts.md
│   │   └── config.ts
│   ├── layouts/
│   └── pages/
│   └── styles/
│   └── utils/
│   └── config.ts
│   └── types.ts
└── package.json
```

Astro looks for `.astro` or `.md` files in the `src/pages/` directory. Each page is exposed as a route based on its file name.

Any static assets, like images, can be placed in the `public/` directory.

All blog posts are stored in `src/content/blog` directory.

## 💻 Tech Stack

**Main Framework** - [Astro](https://astro.build/)  
**Type Checking** - [TypeScript](https://www.typescriptlang.org/)  
**Component Framework** - [ReactJS](https://reactjs.org/)  
**Styling** - [TailwindCSS](https://tailwindcss.com/)  
**UI/UX** - [Figma](https://figma.com)  
**Fuzzy Search** - [FuseJS](https://fusejs.io/)  
**Icons** - [Boxicons](https://boxicons.com/) | [Tablers](https://tabler-icons.io/)  
**Code Formatting** - [Prettier](https://prettier.io/)  
**Deployment** - [Cloudflare Pages](https://pages.cloudflare.com/)  
**Illustration in About Page** - [https://freesvgillustration.com](https://freesvgillustration.com/)  
**Linting** - [ESLint](https://eslint.org)

## 👨🏻‍💻 Running Locally

```bash
# using @antfu/ni
ni
nr dev
```

## 🧞 Commands

All commands are run from the root of the project, from a terminal:

| Command           | Action                                                                                                                           |
| :---------------- | :------------------------------------------------------------------------------------------------------------------------------- |
| `ni`              | Installs dependencies                                                                                                            |
| `nr dev`          | Starts local dev server at `localhost:4321`                                                                                      |
| `nr build`        | Build your production site to `./dist/`                                                                                          |
| `nr preview`      | Preview your build locally, before deploying                                                                                     |
| `nr format:check` | Check code format with Prettier                                                                                                  |
| `nr format`       | Format codes with Prettier                                                                                                       |
| `nr test`         | Run tests                                                                                                                        |
| `nr sync`         | Generates TypeScript types for all Astro modules. [Learn more](https://docs.astro.build/en/reference/cli-reference/#astro-sync). |
| `nr cz`           | Commit code changes with commitizen                                                                                              |
| `nr lint`         | Lint with ESLint                                                                                                                 |

## Inspiration and Credits

- [Astro Paper](https://github.com/satnaing/astro-paper) by [Sat Naing](https://satnaing.dev)

## ✨ Feedback & Suggestions

If you have any suggestions/feedback, you can contact me via [my email](mailto:jose@albizures.com). Alternatively, feel free to open an issue if you find bugs or want to request new features.

## 📜 License

Licensed under the MIT License, Copyright © 2023
