# Contributing to Eno README Lab

Thank you for your interest in contributing! This document provides guidelines and instructions for contributing.

## How to Contribute

### Reporting Bugs

1. Check existing [issues](https://github.com/username/eno-readme-lab/issues) to avoid duplicates
2. Create a new issue with a clear title and description
3. Include steps to reproduce, expected behavior, and actual behavior
4. Add screenshots if applicable

### Suggesting Features

1. Open a new issue with the `enhancement` label
2. Describe the feature and its use case
3. Explain why it would be valuable

### Submitting Code

1. Fork the repository
2. Create a feature branch from `main`:
   ```bash
   git checkout -b feature/your-feature-name
   ```
3. Make your changes
4. Follow the code style guidelines below
5. Test your changes thoroughly
6. Commit with a clear message:
   ```bash
   git commit -m "Add: description of your changes"
   ```
7. Push to your fork:
   ```bash
   git push origin feature/your-feature-name
   ```
8. Open a Pull Request

## Code Style Guidelines

- **TypeScript** — Use TypeScript for all new code
- **Components** — Use functional components with hooks
- **Naming** — Use PascalCase for components, camelCase for functions/variables
- **Imports** — Use absolute imports with `@/` prefix
- **Styling** — Use Tailwind CSS utility classes
- **Comments** — Add comments for complex logic only
- **Types** — Define proper TypeScript types, avoid `any`

## Project Structure

- `src/components/ui/` — Reusable UI components
- `src/components/editor/` — Editor-specific components
- `src/components/preview/` — Preview components
- `src/components/landing/` — Landing page components
- `src/data/` — Static data (badges, templates)
- `src/lib/` — Utility functions
- `src/types/` — TypeScript type definitions

## Development Setup

```bash
# Clone your fork
git clone https://github.com/your-username/eno-readme-lab.git
cd eno-readme-lab

# Install dependencies
npm install

# Start development server
npm run dev
```

## Commit Messages

Use clear, descriptive commit messages:

- `Add: new feature or functionality`
- `Fix: bug fix`
- `Update: improvement to existing feature`
- `Refactor: code restructuring without behavior change`
- `Docs: documentation changes`
- `Style: formatting, missing semicolons, etc.`

## Questions?

Feel free to open an issue for any questions about contributing.
