# custom-ionic-icon-sample

A test project to use custom icons using SVGs in Ionic, with comprehensive tests to verify icon rendering in the shadow DOM.

## Features

- Demonstrates both built-in and custom Ionic icons
- Includes tests that verify icon rendering in shadow-root
- Compares custom icons with built-in icons to ensure consistent behavior
- Addresses the issue where custom icons may have empty icon-inner elements in the shadow-root

## Project Structure

- `ionic-app/` - Ionic Angular application
  - `src/assets/icons/` - Custom SVG icon files
  - `src/app/home/` - Home page with icon demonstrations
  - `src/app/home/home.page.spec.ts` - Comprehensive tests for icon rendering

## Getting Started

### Prerequisites

- Node.js (v20 or later)
- npm (v10 or later)

### Installation

```bash
cd ionic-app
npm install
```

### Running the App

To run the application in development mode:

```bash
cd ionic-app
npm start
# or
ionic serve
```

The app will be available at `http://localhost:8100`

### Building the App

To build the application for production:

```bash
cd ionic-app
npm run build
```

### Running Tests

To run the test suite:

```bash
cd ionic-app
npm test
```

For headless testing (useful in CI/CD):

```bash
cd ionic-app
npm test -- --watch=false --browsers=ChromeHeadless
```

## Custom Icon Implementation

Custom icons are implemented using the `src` attribute on `ion-icon` elements:

```html
<ion-icon src="/assets/icons/custom-star.svg"></ion-icon>
```

This approach ensures that custom icons:
- Load properly from SVG files
- Render content in the shadow-root's icon-inner element
- Display consistently with built-in Ionic icons

## Testing Approach

The test suite verifies that:
1. All icons (built-in and custom) have a shadow-root
2. The shadow-root contains an `icon-inner` element with children
3. The `icon-inner` element contains an SVG element
4. Custom icons have the same structure as built-in icons

This ensures that the issue of empty icon-inner elements is prevented and caught early.

## License

This is a test/sample project.
