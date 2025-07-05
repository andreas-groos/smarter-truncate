# Smarter Truncate

A smart text truncation component for React with Tailwind CSS support.

## Installation

```bash
npm install smarter-truncate
```

## Usage

```tsx
import { SmartTruncate } from "smart-truncate";

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

# Build library
npm run build:lib

# Lint code
npm run lint
```

## License

MIT
{
files: ['**/*.{ts,tsx}'],
extends: [
// Other configs...
// Enable lint rules for React
reactX.configs['recommended-typescript'],
// Enable lint rules for React DOM
reactDom.configs.recommended,
],
languageOptions: {
parserOptions: {
project: ['./tsconfig.node.json', './tsconfig.app.json'],
tsconfigRootDir: import.meta.dirname,
},
// other options...
},
},
])

```

```
