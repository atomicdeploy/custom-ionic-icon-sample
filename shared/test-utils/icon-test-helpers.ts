/**
 * Shared test utility for waiting for Ionic icons to load in the shadow-root.
 * This helper can be used across both Vue3 and Angular test suites.
 * 
 * @param iconElement - The ion-icon HTML element
 * @param maxWait - Maximum time to wait in milliseconds (default: 3000ms)
 * @returns Promise that resolves when the icon has loaded
 */
export async function waitForIconToLoad(iconElement: any, maxWait = 3000): Promise<void> {
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

/**
 * Verifies that an icon has properly rendered content in its shadow-root.
 * 
 * @param iconElement - The ion-icon HTML element
 * @returns Object containing verification results
 */
export function verifyIconShadowRoot(iconElement: any) {
  const shadowRoot = iconElement.shadowRoot;
  if (!shadowRoot) {
    return { 
      success: false, 
      error: 'No shadow root found',
      hasShadowRoot: false,
      hasIconInner: false,
      hasChildren: false,
      hasSVG: false
    };
  }
  
  const iconInner = shadowRoot.querySelector('.icon-inner');
  if (!iconInner) {
    return { 
      success: false, 
      error: 'No icon-inner element found',
      hasShadowRoot: true,
      hasIconInner: false,
      hasChildren: false,
      hasSVG: false
    };
  }
  
  const hasSVG = !!iconInner.querySelector('svg');
  const hasChildren = iconInner.children.length > 0;
  
  return {
    success: hasChildren && hasSVG,
    hasShadowRoot: true,
    hasIconInner: true,
    hasChildren,
    childCount: iconInner.children.length,
    hasSVG
  };
}
