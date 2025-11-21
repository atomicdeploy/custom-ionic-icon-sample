# Testing Custom Ionic Icons

This document explains the testing approach used to verify that custom Ionic icons render correctly in the shadow DOM.

## The Problem

When custom icons are not properly configured, they may render with an empty `icon-inner` element in the shadow-root, resulting in no visible icon. This can happen when:

1. Custom icons are not loaded correctly
2. SVG files are not accessible
3. Icons are registered incorrectly

## The Solution

### 1. Proper Icon Implementation

Use the `src` attribute to load custom SVG icons:

```html
<ion-icon src="/assets/icons/custom-icon.svg"></ion-icon>
```

This ensures the icon loads from the SVG file and renders properly in the shadow-root.

### 2. Comprehensive Testing

The test suite verifies that icons render correctly by:

1. **Checking Shadow Root Exists**: Ensures the web component has a shadow-root
2. **Checking Icon-Inner Has Content**: Verifies the icon-inner element contains children (not empty)
3. **Checking SVG Element**: Confirms an SVG element is present
4. **Comparing with Built-in Icons**: Ensures custom icons have the same structure as built-in icons

### 3. Async Icon Loading

Icons load asynchronously, so tests must wait for content to be available:

```typescript
async function waitForIconToLoad(iconElement: any, maxWait = 3000): Promise<void> {
  const startTime = Date.now();
  
  while (Date.now() - startTime < maxWait) {
    await new Promise(resolve => setTimeout(resolve, 100));
    
    if (iconElement.shadowRoot) {
      const iconInner = iconElement.shadowRoot.querySelector('.icon-inner');
      if (iconInner && iconInner.children.length > 0) {
        return;
      }
    }
  }
}
```

## Test Structure

### Built-in Icon Tests

These tests verify that Ionic's built-in icons render correctly as a baseline:

```typescript
it('should render built-in star icon with content in shadow-root', async () => {
  const iconElement = fixture.nativeElement.querySelector('#builtin-star');
  await waitForIconToLoad(iconElement);
  
  const shadowRoot = iconElement.shadowRoot;
  const iconInner = shadowRoot.querySelector('.icon-inner');
  
  expect(iconInner.children.length).toBeGreaterThan(0);
  expect(iconInner.querySelector('svg')).toBeTruthy();
});
```

### Custom Icon Tests

These tests verify that custom icons render with the same structure:

```typescript
it('should render custom-star icon with content in shadow-root', async () => {
  const iconElement = fixture.nativeElement.querySelector('#custom-star');
  await waitForIconToLoad(iconElement);
  
  const shadowRoot = iconElement.shadowRoot;
  const iconInner = shadowRoot.querySelector('.icon-inner');
  
  expect(iconInner.children.length).toBeGreaterThan(0);
  expect(iconInner.querySelector('svg')).toBeTruthy();
});
```

### Comparison Tests

These tests ensure custom icons match the structure of built-in icons:

```typescript
it('should render custom icons with same structure as built-in icons', async () => {
  const builtinIcon = fixture.nativeElement.querySelector('#builtin-star');
  const customIcon = fixture.nativeElement.querySelector('#custom-star');
  
  await waitForIconToLoad(builtinIcon);
  await waitForIconToLoad(customIcon);
  
  const builtinInner = builtinIcon.shadowRoot.querySelector('.icon-inner');
  const customInner = customIcon.shadowRoot.querySelector('.icon-inner');
  
  expect(builtinInner.children.length).toBeGreaterThan(0);
  expect(customInner.children.length).toBeGreaterThan(0);
  
  expect(builtinInner.querySelector('svg')).toBeTruthy();
  expect(customInner.querySelector('svg')).toBeTruthy();
});
```

## Running Tests

```bash
# Run all tests
npm test

# Run tests in CI/CD mode
npm test -- --watch=false --browsers=ChromeHeadless
```

## What the Tests Prevent

These tests ensure that:
- Custom icons are not accidentally broken during refactoring
- Icon loading issues are caught early in development
- The shadow-root structure remains consistent
- Empty icon-inner elements are detected immediately
- Custom icons maintain parity with built-in icons

## Best Practices

1. **Always use `src` attribute for custom SVG icons**
2. **Store SVG files in `src/assets/icons/` directory**
3. **Wait for icons to load before making assertions in tests**
4. **Test both built-in and custom icons for comparison**
5. **Verify shadow-root content, not just element existence**
