# Bando Website

The official website for **Bando CMS**.

This website is the public-facing home of Bando — where developers can discover the project, follow its development, explore the roadmap, and learn how to contribute.

Bando is an open source, TypeScript-first, self-hosted headless CMS built around a code-first approach to content infrastructure.

> 🚧 **Early development**
>
> The Bando website and Bando CMS are actively evolving.

---

## Purpose

The Bando website is designed to give the project a clear public presence and make its development transparent.

It provides:

* Project overview
* Bando philosophy and vision
* Architecture overview
* Current project status
* Development roadmap
* Links to documentation
* Contribution information
* Community resources

The website is intentionally separate from **Bando Studio**, which is the editorial interface used to manage content.

---

## Tech Stack

| Technology | Purpose                 |
| ---------- | ----------------------- |
| Next.js    | Website framework       |
| React      | UI                      |
| TypeScript | Application development |
| CSS        | Styling                 |
| pnpm       | Package management      |

---

## Structure

```text
bando/
│
├── app/
│   ├── page.tsx
│   ├── roadmap/
│   │   └── page.tsx
│   │
│   ├── layout.tsx
│   └── globals.css
│
├── components/
│   ├── Navbar.tsx
│   ├── Footer.tsx
│   └── ...
│
├── public/
│   └── ...
│
├── package.json
├── pnpm-lock.yaml
├── tsconfig.json
└── README.md
```

The structure may evolve as the website grows.

---

## Development

### Requirements

Make sure you have:

* Node.js 24+
* pnpm 10+
* Git

### Clone

```bash
git clone <repository-url>
cd bando
```

### Install dependencies

```bash
pnpm install
```

### Start development

```bash
pnpm dev
```

The development server will start locally.

---

## Production Build

Create a production build:

```bash
pnpm build
```

Run the production server:

```bash
pnpm start
```

---

## Project Pages

### Home

The main landing page introduces Bando, its philosophy, architecture, and current state.

### Roadmap

The roadmap provides a transparent view of what has been completed, what is currently being developed, and what is planned for the future.

Additional pages may be added as the project evolves.

---

## Design Principles

The website follows the same principles as Bando itself.

### Developer-first

The website should communicate clearly with developers without unnecessary complexity.

### Open development

The progress and direction of Bando should remain visible to the community.

### Consistent

The visual identity should remain consistent across the Bando website, Studio, documentation, and other project resources.

### Simple

The website should remain fast, focused, and easy to navigate.

---

## Contributing

Contributions to the Bando website are welcome.

You can help by:

* Improving the UI
* Fixing bugs
* Improving accessibility
* Improving responsive behavior
* Improving documentation
* Adding new pages
* Improving developer experience

Before contributing, check the main Bando CMS repository for contribution guidelines and project discussions.

---

## Related Projects

The Bando ecosystem includes several components:

* **Bando CMS** — the core content management system
* **Bando Studio** — the editorial interface
* **Bando Core** — schema and content infrastructure
* **Bando Database** — persistence layer
* **Bando Client** — client-side API utilities

The website serves as the public entry point to the ecosystem.

---

## Status

```text
Bando Website

├── Landing Page     🟢
├── Roadmap          🟢
├── Responsive UI    🟡
├── Documentation    🟡
└── Additional Pages ⚪
```

### Legend

```text
🟢 Working
🟡 In active development
⚪ Planned
```

---

## License

This project is part of the Bando open source ecosystem and is distributed under the **MIT License**.

Copyright © 2026 Bando Contributors.
