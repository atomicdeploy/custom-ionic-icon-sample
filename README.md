# Custom Ionic Icon Sample

A test project to use custom icons using SVGs in Ionic Vue3.

## Overview

This project demonstrates how to create and use custom SVG icons in an Ionic Vue3 application. It includes:
- Custom SVG icon integration
- Multiple icon examples (rocket and star)
- Different sizes, colors, and use cases
- Complete working demo page

## Prerequisites

- Node.js (v16 or higher)
- npm or yarn

## Installation

1. Clone the repository:
```bash
git clone https://github.com/atomicdeploy/custom-ionic-icon-sample.git
cd custom-ionic-icon-sample
```

2. Install dependencies:
```bash
npm install
```

## Running the Application

Start the development server:
```bash
npm run dev
```

The application will be available at `http://localhost:8100`

## Building for Production

Build the application:
```bash
npm run build
```

Preview the production build:
```bash
npm run preview
```

## How to Add Custom Icons

### 1. Add Your SVG File

Place your SVG files in the `src/assets/icons/` directory. For example:
- `src/assets/icons/custom-rocket.svg`
- `src/assets/icons/custom-star.svg`

### 2. Import and Register Icons

In `src/main.js`, import your SVG files using the `?raw` query parameter and register them:

```javascript
import { addIcons } from 'ionicons';
import customRocketIcon from './assets/icons/custom-rocket.svg?raw';
import customStarIcon from './assets/icons/custom-star.svg?raw';

// Register custom icons
addIcons({
  'custom-rocket': customRocketIcon,
  'custom-star': customStarIcon
});
```

### 3. Use Icons in Components

Use your custom icons with the `ion-icon` component:

```vue
<template>
  <ion-icon :icon="customRocket"></ion-icon>
</template>

<script>
export default {
  setup() {
    return {
      customRocket: 'custom-rocket'
    };
  }
};
</script>
```

## Icon Usage Examples

### Different Sizes
```vue
<ion-icon :icon="customRocket" size="small"></ion-icon>
<ion-icon :icon="customRocket"></ion-icon>
<ion-icon :icon="customRocket" size="large"></ion-icon>
```

### Different Colors
```vue
<ion-icon :icon="customStar" color="primary"></ion-icon>
<ion-icon :icon="customStar" color="warning"></ion-icon>
<ion-icon :icon="customStar" color="danger"></ion-icon>
```

### In Buttons
```vue
<ion-button>
  <ion-icon slot="start" :icon="customRocket"></ion-icon>
  Launch
</ion-button>

<ion-button fill="outline">
  <ion-icon slot="icon-only" :icon="customStar"></ion-icon>
</ion-button>
```

## Project Structure

```
custom-ionic-icon-sample/
├── src/
│   ├── assets/
│   │   └── icons/           # Custom SVG icons
│   │       ├── custom-rocket.svg
│   │       └── custom-star.svg
│   ├── components/          # Vue components
│   ├── router/              # Vue Router configuration
│   │   └── index.js
│   ├── theme/               # Ionic theme and CSS variables
│   │   └── variables.css
│   ├── views/               # Page components
│   │   └── Home.vue
│   ├── App.vue              # Root component
│   └── main.js              # Application entry point
├── index.html               # HTML template
├── vite.config.js           # Vite configuration
└── package.json             # Dependencies and scripts
```

## Technologies Used

- **Ionic Framework**: v8.7.10
- **Vue.js**: v3.5.24
- **Vite**: v7.2.4
- **Ionicons**: v8.0.13

## Tips for Custom Icons

1. **SVG Optimization**: Optimize your SVG files before adding them to reduce file size
2. **Viewbox**: Ensure your SVG has a proper `viewBox` attribute for proper scaling
3. **Paths**: Use `<path>` elements for better control and smaller file sizes
4. **Colors**: Remove fill colors from SVG if you want to control colors via Ionic's color prop

## License

ISC

## Author

Created as a demonstration project for using custom SVG icons in Ionic Vue3.
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
