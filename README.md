# Alejandro Cuba Ruiz's Website

Personal website for Alejandro Cuba Ruiz with links to his social media and projects.

## 🚀 Technologies

- **[Vite](https://vite.dev/)**
- **[Pug](https://pugjs.org/) ([HTML / Data powered by Vituum](https://vituum.dev/))**
- **[CSS](https://developer.mozilla.org/en-US/docs/Web/CSS)**
- **[Firebase Hosting](https://firebase.google.com/docs/hosting)**
- **[pnpm](https://pnpm.io/)**

## 📁 Project Structure

```bash
.
├── dist/               # Production build output
├── public/             # Static assets (images, favicon, etc.)
├── sources/            # Project source files
│   ├── css/            # CSS styles and components
│   ├── html/           # Pug components, layouts, and data
│   │   ├── _components/
│   │   ├── _data/      # JSON data for Pug templates
│   │   ├── _layout/    # HTML templates
│   │   └── index.pug   # Main entry point template
│   └── js/             # JavaScript files
├── package.json        # Dependencies and scripts
├── vite.config.js      # Vite configuration
└── firebase.json       # Firebase Hosting configuration
```

## 🛠️ Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (latest LTS recommended)
- [pnpm](https://pnpm.io/installation)

### Installation

1. Clone the repository:
   ```bash
   git clone <repository-url>
   cd alejandrocuba
   ```

2. Install dependencies:
   ```bash
   pnpm install
   ```

### Development

Start the development server with Hot Module Replacement (HMR):

```bash
pnpm run dev
```

The site will be available at [http://localhost:5173/](http://localhost:5173/).

### Production Build

Generate the production-ready build in the `dist/` directory:

```bash
pnpm run build
```

The build includes a `postbuild` script to ensure the correct entry point name (`index.html`).

### Previewing the Build

Preview the production build locally:

```bash
pnpm run preview
```

## 🚀 Deployment

The project is configured for **Firebase Hosting**.

To deploy to production:

```bash
firebase login
firebase deploy
```

## 📄 License

This project is licensed under the GNU GENERAL PUBLIC LICENSE. See the [LICENSE](LICENSE) file for details.
