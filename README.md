# Custom Ionic Icon Sample

A comprehensive test project demonstrating how to use custom SVG icons in Ionic applications with both **Vue3** and **Angular** frameworks.

## Overview

This repository contains two complete implementations:
- **Vue3 Application** (`vue-app/`) - Ionic Vue3 with custom icon support
- **Angular Application** (`angular-app/`) - Ionic Angular with custom icon support and comprehensive tests

Both implementations share the same custom SVG icons stored in the `shared/assets/icons/` directory, following the DRY (Don't Repeat Yourself) principle.

## Key Features

- ✅ Custom SVG icon integration using the `src` attribute approach
- ✅ Shared icon assets between Vue3 and Angular implementations
- ✅ Comprehensive test suites verifying shadow-root rendering
- ✅ Multiple icon examples (rocket, star, heart)
- ✅ Different sizes, colors, and use cases
- ✅ Complete working demo pages for both frameworks

## Project Structure

```
custom-ionic-icon-sample/
├── shared/
│   └── assets/
│       └── icons/              # Shared custom SVG icons (source of truth)
│           ├── custom-rocket.svg
│           ├── custom-star.svg
│           └── custom-heart.svg
├── vue-app/                    # Vue3 implementation
│   ├── src/
│   │   ├── views/
│   │   │   ├── Home.vue       # Demo page
│   │   │   └── Home.spec.js   # Comprehensive tests
│   │   ├── main.js
│   │   └── App.vue
│   ├── public/
│   │   └── assets/
│   │       └── icons/         # Icons copied from shared/ (see sync-icons.sh)
│   └── package.json
├── angular-app/                # Angular implementation
│   ├── src/
│   │   ├── app/
│   │   │   └── home/
│   │   │       ├── home.page.html
│   │   │       ├── home.page.ts
│   │   │       └── home.page.spec.ts  # Comprehensive tests
│   │   └── assets/
│   │       └── icons/         # Symlink to shared/assets/icons/
│   ├── TESTING.md             # Detailed testing documentation
│   └── package.json
├── sync-icons.sh              # Script to sync icons to both apps
└── README.md                  # This file
```

## Prerequisites

- Node.js (v16 or higher for Vue3, v20 or higher for Angular)
- npm (v10 or higher)

## Installation

### Install All Dependencies

```bash
# Install Vue3 dependencies
cd vue-app
npm install
cd ..

# Install Angular dependencies
cd angular-app
npm install
cd ..
```

### Sync Icons

After cloning, sync the shared icons to both applications:

```bash
./sync-icons.sh
```

This script:
- Copies icons from `shared/assets/icons/` to `vue-app/public/assets/icons/`
- Creates a symlink from `angular-app/src/assets/icons/` to `shared/assets/icons/`

## Running the Applications

### Vue3 Application

```bash
cd vue-app
npm run dev
```

The Vue3 app will be available at `http://localhost:8100`

### Angular Application

```bash
cd angular-app
npm start
# or
ionic serve
```

The Angular app will be available at `http://localhost:8100`

## Building for Production

### Vue3

```bash
cd vue-app
npm run build
npm run preview  # Preview the production build
```

### Angular

```bash
cd angular-app
npm run build
```

## Running Tests

### Vue3 Tests

```bash
cd vue-app
npm test              # Run tests once
npm run test:watch    # Run tests in watch mode
```

### Angular Tests

```bash
cd angular-app
npm test                                                          # Interactive mode
npm test -- --watch=false --browsers=ChromeHeadless             # CI mode
```

Both test suites verify that:
1. All icons (built-in and custom) have a shadow-root
2. The shadow-root contains an `icon-inner` element with children (not empty)
3. The `icon-inner` element contains an SVG element
4. Custom icons have the same structure as built-in icons

## How to Add Custom Icons

### 1. Add Your SVG File

Place your SVG files in the `shared/assets/icons/` directory.

### 2. Sync Icons

Run the sync script to copy icons to both apps:

```bash
./sync-icons.sh
```

### 3. Use Icons in Components

#### Vue3 and Angular

```html
<ion-icon src="/assets/icons/custom-my-icon.svg" size="large"></ion-icon>
```

## Important Implementation Notes

### Why Use the `src` Attribute?

Both implementations use the `src` attribute to load custom SVG icons.

**This approach was chosen because:**

1. ✅ Icons render properly in the shadow-root
2. ✅ The `icon-inner` element contains actual SVG content (not empty)
3. ✅ Works consistently across both Vue3 and Angular
4. ✅ No need to register icons in code (simpler implementation)

### Previous Approach (Vue3 - Not Working)

The original Vue3 implementation used `addIcons()` from ionicons, which resulted in empty `icon-inner` elements.

## Technologies Used

### Vue3 Application
- **Ionic Framework**: v8.7.10
- **Vue.js**: v3.5.24
- **Vite**: v7.2.4
- **Ionicons**: v8.0.13
- **Vitest**: v3.0.5 (testing)

### Angular Application
- **Ionic Framework**: v8.0.0
- **Angular**: v20.0.0
- **Ionicons**: v7.0.0
- **Karma + Jasmine**: (testing)

## Testing Approach

Both implementations include comprehensive tests that verify icons render correctly. For more details, see [`angular-app/TESTING.md`](angular-app/TESTING.md).

## License

ISC
