# Smarter Truncate

A smart text truncation component for React with Tailwind CSS support.

## Installation

```bash
npm install smarter-truncate
```

## Usage

```tsx
import { SmarterTruncate } from "smarter-truncate";

function MyComponent() {
  return (
    <SmarterTruncate className="text-gray-900 truncate">
      This is some long text that will be truncated smartly
    </SmarterTruncate>
  );
}
```

## Props

- `children`: React node - The content to be truncated
- `className`: string (optional) - Tailwind CSS classes to apply

## Requirements

- React 18+
- Tailwind CSS (for styling)

## Development

This project uses Vite for development and building.

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Run tests
npm run test

# Run tests in watch mode
npm run test:watch

# Build library
npm run build:lib

# Lint code
npm run lint

# Type check
npm run type-check

# Test build
npm run test:build
```

## Publishing

This project uses `np` for automated publishing:

```bash
# First time setup: Add git remote
git remote add origin https://github.com/yourusername/smarter-truncate.git

# Dry run to see what would happen
npm run dry-run

# Publish new version (interactive)
npm run publish
# or
npm run release
```

The `np` tool will:

- Run tests and build
- Bump version in package.json
- Create git tag
- Push to git repository
- Publish to npm

Make sure you have:

- npm login configured (`npm login`)
- Git remote set up
- All changes committed

## License

MIT
