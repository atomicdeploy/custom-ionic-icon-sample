# Custom Ionic Icon Sample

A comprehensive test project demonstrating how to use custom SVG icons in Ionic applications with both **Vue3** and **Angular** frameworks.

## 🎯 Key Achievement

This repository successfully resolves the common issue where **custom icons display empty `icon-inner` elements in the shadow-root**, preventing icons from rendering. Both implementations now use the proven `src` attribute approach that ensures icons render correctly.

## Overview

This repository contains two complete implementations:
- **Vue3 Application** (`vue-app/`) - Ionic Vue3 with custom icon support and comprehensive tests
- **Angular Application** (`angular-app/`) - Ionic Angular with custom icon support and comprehensive tests

Both implementations share the same custom SVG icons stored in the `shared/assets/icons/` directory, following the DRY (Don't Repeat Yourself) principle.

## ✨ Key Features

- ✅ Custom SVG icon integration using the `src` attribute approach
- ✅ Shared icon assets between Vue3 and Angular implementations
- ✅ Comprehensive test suites verifying shadow-root rendering
- ✅ Multiple icon examples (rocket, star, heart)
- ✅ Different sizes, colors, and use cases
- ✅ Complete working demo pages for both frameworks
- ✅ Both built-in and custom icons render properly in shadow-root

## 📸 Working Demo

Both implementations display icons correctly with proper shadow-root content:

![Vue3 Custom Icons Demo](https://github.com/user-attachments/assets/cb751453-ac99-4e67-b606-252580abdce1)

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

## 🚀 Quick Start

### 1. Clone and Install

```bash
# Clone the repository
git clone https://github.com/atomicdeploy/custom-ionic-icon-sample.git
cd custom-ionic-icon-sample

# Sync icons to both apps
./sync-icons.sh

# Install Vue3 dependencies
cd vue-app
npm install
cd ..

# Install Angular dependencies
cd angular-app
npm install
cd ..
```

### 2. Run Vue3 Application

```bash
cd vue-app
npm run dev
```

Open `http://localhost:8100` in your browser.

### 3. Run Angular Application

```bash
cd angular-app
npm start
# or
ionic serve
```

Open `http://localhost:8100` in your browser.

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
2. The shadow-root contains an `icon-inner` element with children (not empty!)
3. The `icon-inner` element contains an SVG element
4. Custom icons have the same structure as built-in icons

## 🎨 How to Add Custom Icons

### 1. Add Your SVG File

Place your SVG files in the `shared/assets/icons/` directory:

```bash
# Example:
shared/assets/icons/custom-my-icon.svg
```

### 2. Sync Icons

Run the sync script to copy icons to both apps:

```bash
./sync-icons.sh
```

### 3. Use Icons in Components

#### Vue3

```vue
<template>
  <!-- Custom icon -->
  <ion-icon src="/assets/icons/custom-my-icon.svg" size="large"></ion-icon>
  
  <!-- Built-in icon (must be registered in main.js) -->
  <ion-icon name="star" size="large"></ion-icon>
</template>
```

#### Angular

```html
<!-- Custom icon -->
<ion-icon src="/assets/icons/custom-my-icon.svg" size="large"></ion-icon>

<!-- Built-in icon -->
<ion-icon name="star" size="large"></ion-icon>
```

## 🔧 Important Implementation Notes

### Why Use the `src` Attribute for Custom Icons?

Both implementations use the `src` attribute to load custom SVG icons:

```html
<ion-icon src="/assets/icons/custom-icon.svg"></ion-icon>
```

**This approach was chosen because:**

1. ✅ Icons render properly in the shadow-root
2. ✅ The `icon-inner` element contains actual SVG content (not empty!)
3. ✅ Works consistently across both Vue3 and Angular
4. ✅ No need to register custom icons in code (simpler implementation)
5. ✅ Direct file reference is more reliable

### ⚠️ Previous Approach (Vue3 - NOT Working)

The original Vue3 implementation used `addIcons()` from ionicons:

```javascript
// ❌ DON'T USE THIS APPROACH - Results in empty icon-inner
import { addIcons } from 'ionicons';
import customIcon from './assets/icons/custom-icon.svg?raw';

addIcons({
  'custom-icon': customIcon
});
```

**This approach was abandoned because:**
- ❌ Icons had empty `icon-inner` elements in the shadow-root
- ❌ No visible icon was displayed
- ❌ Failed the shadow-root content tests

### ✅ Correct Approach for Built-in Icons (Vue3)

Built-in Ionicons **must** be registered using `addIcons()`:

```javascript
// ✅ Correct way to use built-in icons in Vue3
import { addIcons } from 'ionicons';
import { star, heart, rocket } from 'ionicons/icons';

addIcons({
  'star': star,
  'heart': heart,
  'rocket': rocket
});
```

Then use them in templates:

```vue
<ion-icon name="star"></ion-icon>
```

## 🐛 Troubleshooting

### Issue: Custom Icons Not Showing (Empty icon-inner)

**Symptoms:**
- Icons don't display
- Browser console shows warnings about failed icon loading
- Shadow-root contains empty `icon-inner` element

**Solution:**
1. **Use `src` attribute** for custom icons, not `addIcons()`
2. Ensure icons are synced: `./sync-icons.sh`
3. Check that icons exist in `vue-app/public/assets/icons/` (Vue) or `angular-app/src/assets/icons/` (Angular)
4. Use absolute paths: `/assets/icons/custom-icon.svg`

### Issue: Built-in Icons Not Showing (Vue3)

**Symptoms:**
- Built-in icons like `star`, `heart` show as empty
- Console warnings: "Could not load icon with name 'star'"

**Solution:**
Register built-in icons in `src/main.js`:

```javascript
import { addIcons } from 'ionicons';
import { star, heart, rocket } from 'ionicons/icons';

addIcons({
  'star': star,
  'heart': heart,
  'rocket': rocket
});
```

### Issue: Angular Tests Failing (404 on icon assets)

**Symptoms:**
- Tests fail with 404 errors for `/assets/icons/*.svg`
- Custom icon tests fail

**Solution:**
Ensure `karma.conf.js` includes:

```javascript
files: [
  { pattern: 'src/assets/**/*', watched: false, included: false, served: true, nocache: false }
],
proxies: {
  '/assets/': '/base/src/assets/'
}
```

### Issue: Icons Missing After Fresh Clone

**Symptoms:**
- Icons don't show up in either app
- Directory `vue-app/public/assets/icons/` is empty

**Solution:**
Run the sync script:

```bash
./sync-icons.sh
```

This copies icons from `shared/assets/icons/` to both applications.

### Issue: Vite Build Fails (Vue3)

**Symptoms:**
- Error: "ENOENT: no such file or directory, stat '.../public/assets/icons'"
- Build fails when trying to copy assets

**Solution:**
1. Run `./sync-icons.sh` to copy icons
2. Don't use symlinks in `vue-app/public/` (Vite doesn't follow them well)
3. Icons should be actual files, not symlinks

## 📊 Verifying Icon Rendering

To verify icons render correctly in the shadow-root, use browser DevTools:

```javascript
// In browser console
const icon = document.querySelector('#custom-star');
const shadowRoot = icon.shadowRoot;
const iconInner = shadowRoot.querySelector('.icon-inner');

console.log('Has icon-inner:', !!iconInner);
console.log('Has children:', iconInner.children.length > 0);
console.log('Has SVG:', !!iconInner.querySelector('svg'));
```

**Expected output:**
```
Has icon-inner: true
Has children: true (> 0)
Has SVG: true
```

## 📚 Icon Usage Examples

### Different Sizes

```html
<!-- Vue3 and Angular -->
<ion-icon src="/assets/icons/custom-rocket.svg" size="small"></ion-icon>
<ion-icon src="/assets/icons/custom-rocket.svg"></ion-icon>
<ion-icon src="/assets/icons/custom-rocket.svg" size="large"></ion-icon>
```

### Different Colors

```html
<!-- Vue3 and Angular -->
<ion-icon src="/assets/icons/custom-star.svg" color="primary"></ion-icon>
<ion-icon src="/assets/icons/custom-star.svg" color="warning"></ion-icon>
<ion-icon src="/assets/icons/custom-star.svg" color="danger"></ion-icon>
```

### In Buttons

```html
<!-- Vue3 and Angular -->
<ion-button>
  <ion-icon slot="start" src="/assets/icons/custom-rocket.svg"></ion-icon>
  Launch
</ion-button>

<ion-button fill="outline">
  <ion-icon slot="icon-only" src="/assets/icons/custom-star.svg"></ion-icon>
</ion-button>
```

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

## Tips for Custom Icons

1. **SVG Optimization**: Optimize your SVG files before adding them to reduce file size
2. **Viewbox**: Ensure your SVG has a proper `viewBox` attribute for proper scaling
3. **Paths**: Use `<path>` elements for better control and smaller file sizes
4. **Colors**: Remove fill colors from SVG if you want to control colors via Ionic's color prop
5. **Syncing**: Always run `./sync-icons.sh` after adding/modifying icons in `shared/assets/icons/`

## Testing Approach

Both implementations include comprehensive tests that verify icons render correctly by:

1. **Checking Shadow Root Exists**: Ensures the web component has a shadow-root
2. **Checking Icon-Inner Has Content**: Verifies the icon-inner element contains children (not empty!)
3. **Checking SVG Element**: Confirms an SVG element is present
4. **Comparing with Built-in Icons**: Ensures custom icons have the same structure as built-in icons

This prevents the issue where custom icons may have empty `icon-inner` elements in the shadow-root.

For more details on the testing approach, see [`angular-app/TESTING.md`](angular-app/TESTING.md).

## Contributing

When adding custom icons:
1. Add SVG files to `shared/assets/icons/`
2. Run `./sync-icons.sh`
3. Update tests if needed
4. Verify both Vue3 and Angular apps work correctly

## License

ISC

## Author

Created as a demonstration project for using custom SVG icons in Ionic applications with both Vue3 and Angular frameworks.
