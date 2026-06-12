<div align="center">

# Eno README Lab

**A browser-based README builder and editor for open-source projects.**

![Version](https://img.shields.io/badge/version-1.0.0-blue)
![License](https://img.shields.io/badge/license-MIT-green)
![Next.js](https://img.shields.io/badge/built_with-Next.js_16-black?logo=next.js)
![TypeScript](https://img.shields.io/badge/language-TypeScript-3178c6?logo=typescript)
![Tailwind CSS](https://img.shields.io/badge/styled_with-Tailwind_CSS-06b6d4?logo=tailwindcss)

[Features](#features) • [Tech Stack](#tech-stack) • [Getting Started](#getting-started) • [Usage](#usage) • [Deploy](#deploy) • [Contributing](#contributing)

</div>

---

## About

Eno README Lab is a polished, browser-based tool that helps open-source maintainers create professional README files without writing markdown from scratch. Choose a template, fill in your project details, drag-and-drop sections, add badges, and export a beautiful README.md — all without leaving your browser.

**No signup required. No server processing. Your data never leaves your browser.**

## Features

- **Smart Templates** — Pre-built templates for web apps, libraries, CLI tools, and starter repos
- **Live Preview** — Real-time markdown rendering as you type
- **Drag & Drop** — Reorder sections with intuitive drag-and-drop
- **Badge Helper** — Browse and insert 40+ badges powered by shields.io
- **Best Practices Checklist** — Built-in checklist for open-source README essentials
- **Heading Validator** — Validates heading structure and catches common mistakes
- **One-Click Export** — Download as README.md or copy to clipboard
- **Section Blocks** — Add, remove, enable, or disable any section
- **Dark Mode** — Full dark mode support throughout the editor
- **Responsive Design** — Works beautifully on desktop and mobile
- **100% Client-Side** — No server required, works offline after initial load

## Tech Stack

| Technology | Purpose |
|------------|---------|
| **Next.js 16** | React framework with App Router |
| **TypeScript** | Type-safe development |
| **Tailwind CSS** | Utility-first styling |
| **@dnd-kit** | Drag-and-drop functionality |
| **react-markdown** | Markdown rendering |
| **remark-gfm** | GitHub Flavored Markdown support |
| **lucide-react** | Beautiful icons |

## Getting Started

### Prerequisites

- Node.js 18+
- npm, yarn, or pnpm

### Installation

```bash
# Clone the repository
git clone https://github.com/username/eno-readme-lab.git
cd eno-readme-lab

# Install dependencies
npm install

# Start development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Available Scripts

| Script | Description |
|--------|-------------|
| `npm run dev` | Start development server |
| `npm run build` | Build for production |
| `npm run start` | Start production server |
| `npm run lint` | Run ESLint |

## Usage

1. **Choose a template** — Select from Web App, Library, CLI Tool, or Starter Template
2. **Fill in project details** — Enter your project name, description, version, license, and repository URL
3. **Edit sections** — Each section has a dedicated editor with markdown support
4. **Add badges** — Use the Badge Helper to browse and insert status badges
5. **Drag to reorder** — Drag sections by the grip handle to reorder them
6. **Check best practices** — Use the sidebar checklist to ensure completeness
7. **Preview & export** — See the live preview and export when ready

### Section Types

- **Header** — Auto-generated from project name and description
- **Badges** — Status badges powered by shields.io
- **Description** — Project overview and purpose
- **Features** — Key features list
- **Screenshots** — Visual preview placeholders
- **Installation** — Setup and install instructions
- **Usage** — How to use the project
- **Tech Stack** — Technologies and frameworks used
- **Roadmap** — Future plans and upcoming features
- **Contributing** — Contribution guidelines
- **FAQ** — Frequently asked questions
- **License** — Auto-generated from license selection
- **Custom** — Add any custom section

## Deploy

### Vercel (Recommended)

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/username/eno-readme-lab)

1. Push your code to GitHub
2. Import the repository on [Vercel](https://vercel.com)
3. Vercel will auto-detect Next.js and deploy

### Other Platforms

This project can be deployed to any platform that supports Next.js:

- **Netlify** — Use the Next.js runtime
- **AWS Amplify** — Connect your repository
- **Railway** — One-click deploy
- **Docker** — Create your own Dockerfile

## Project Structure

```
eno-readme-lab/
├── src/
│   ├── app/
│   │   ├── layout.tsx          # Root layout with metadata
│   │   ├── page.tsx            # Landing page
│   │   ├── globals.css         # Global styles
│   │   └── editor/
│   │       └── page.tsx        # Main editor page
│   ├── components/
│   │   ├── ui/                 # Reusable UI components
│   │   │   ├── Button.tsx
│   │   │   ├── BadgePicker.tsx
│   │   │   ├── Checklist.tsx
│   │   │   ├── ValidationPanel.tsx
│   │   │   └── TemplateSelector.tsx
│   │   ├── editor/             # Editor components
│   │   │   ├── SectionEditor.tsx
│   │   │   └── SortableSection.tsx
│   │   ├── preview/            # Preview components
│   │   │   └── MarkdownPreview.tsx
│   │   └── landing/            # Landing page components
│   │       └── FeatureCard.tsx
│   ├── data/                   # Static data
│   │   ├── badges.ts
│   │   └── templates.ts
│   ├── lib/                    # Utilities
│   │   ├── utils.ts
│   │   └── markdown.ts
│   └── types/                  # TypeScript types
│       └── index.ts
├── public/                     # Static assets
├── package.json
├── tsconfig.json
├── postcss.config.mjs
├── .env.example
└── next.config.ts
```

## Roadmap

- [x] Core editor with all sections
- [x] Live markdown preview
- [x] Template system (app, library, CLI, starter)
- [x] Badge helper with shields.io integration
- [x] Drag-and-drop section reordering
- [x] Best practices checklist
- [x] Heading structure validator
- [x] One-click export
- [x] Dark mode support
- [ ] Import existing README.md
- [ ] Custom CSS themes for preview
- [ ] More badge categories
- [ ] Collaborative editing
- [ ] AI-powered suggestions (optional)

## Contributing

Contributions are welcome! Please follow these steps:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing`)
3. Commit your changes (`git commit -m "Add amazing feature"`)
4. Push to the branch (`git push origin feature/amazing`)
5. Open a Pull Request

Please read the [Contributing Guidelines](CONTRIBUTING.md) before submitting.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

## Acknowledgements

- [shields.io](https://shields.io) — For the badge service
- [Next.js](https://nextjs.org) — The React framework
- [Tailwind CSS](https://tailwindcss.com) — For the styling system
- [lucide-react](https://lucide.dev) — For the beautiful icons

---

<div align="center">

**Built with ❤️ for the open-source community**

</div>
