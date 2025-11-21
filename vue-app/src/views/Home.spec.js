import { describe, it, expect, beforeEach, vi } from 'vitest';
import { mount } from '@vue/test-utils';
import Home from './Home.vue';
import { IonicVue } from '@ionic/vue';

// Helper function to wait for icon to load
async function waitForIconToLoad(iconElement, maxWait = 3000) {
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

describe('Home.vue - Icon Rendering Tests', () => {
  let wrapper;

  beforeEach(() => {
    // Mount the component with Ionic
    wrapper = mount(Home, {
      global: {
        plugins: [IonicVue]
      }
    });
  });

  it('should render the home page', () => {
    expect(wrapper.exists()).toBe(true);
  });

  describe('Built-in Icons', () => {
    it('should render built-in star icon with content in shadow-root', async () => {
      await wrapper.vm.$nextTick();
      
      const iconElement = wrapper.find('#builtin-star').element;
      expect(iconElement).toBeTruthy();
      
      // Wait for icon to load
      await waitForIconToLoad(iconElement);
      
      // Access shadow root
      const shadowRoot = iconElement.shadowRoot;
      expect(shadowRoot).toBeTruthy();
      
      // Check that icon-inner exists and has content
      const iconInner = shadowRoot.querySelector('.icon-inner');
      expect(iconInner).toBeTruthy();
      expect(iconInner.children.length).toBeGreaterThan(0);
      
      // Check for SVG content
      const svg = iconInner.querySelector('svg');
      expect(svg).toBeTruthy();
    });

    it('should render built-in heart icon with content in shadow-root', async () => {
      await wrapper.vm.$nextTick();
      
      const iconElement = wrapper.find('#builtin-heart').element;
      expect(iconElement).toBeTruthy();
      
      await waitForIconToLoad(iconElement);
      
      const shadowRoot = iconElement.shadowRoot;
      expect(shadowRoot).toBeTruthy();
      
      const iconInner = shadowRoot.querySelector('.icon-inner');
      expect(iconInner).toBeTruthy();
      expect(iconInner.children.length).toBeGreaterThan(0);
      
      const svg = iconInner.querySelector('svg');
      expect(svg).toBeTruthy();
    });

    it('should render built-in rocket icon with content in shadow-root', async () => {
      await wrapper.vm.$nextTick();
      
      const iconElement = wrapper.find('#builtin-rocket').element;
      expect(iconElement).toBeTruthy();
      
      await waitForIconToLoad(iconElement);
      
      const shadowRoot = iconElement.shadowRoot;
      expect(shadowRoot).toBeTruthy();
      
      const iconInner = shadowRoot.querySelector('.icon-inner');
      expect(iconInner).toBeTruthy();
      expect(iconInner.children.length).toBeGreaterThan(0);
      
      const svg = iconInner.querySelector('svg');
      expect(svg).toBeTruthy();
    });
  });

  describe('Custom Icons', () => {
    it('should render custom-star icon with content in shadow-root', async () => {
      await wrapper.vm.$nextTick();
      
      const iconElement = wrapper.find('#custom-star').element;
      expect(iconElement).toBeTruthy();
      
      // Wait for icon to load
      await waitForIconToLoad(iconElement);
      
      // Access shadow root
      const shadowRoot = iconElement.shadowRoot;
      expect(shadowRoot).toBeTruthy();
      
      // Check that icon-inner exists and has content
      const iconInner = shadowRoot.querySelector('.icon-inner');
      expect(iconInner).toBeTruthy();
      expect(iconInner.children.length).toBeGreaterThan(0);
      
      // Check for SVG content
      const svg = iconInner.querySelector('svg');
      expect(svg).toBeTruthy();
    });

    it('should render custom-heart icon with content in shadow-root', async () => {
      await wrapper.vm.$nextTick();
      
      const iconElement = wrapper.find('#custom-heart').element;
      expect(iconElement).toBeTruthy();
      
      await waitForIconToLoad(iconElement);
      
      const shadowRoot = iconElement.shadowRoot;
      expect(shadowRoot).toBeTruthy();
      
      const iconInner = shadowRoot.querySelector('.icon-inner');
      expect(iconInner).toBeTruthy();
      expect(iconInner.children.length).toBeGreaterThan(0);
      
      const svg = iconInner.querySelector('svg');
      expect(svg).toBeTruthy();
    });

    it('should render custom-rocket icon with content in shadow-root', async () => {
      await wrapper.vm.$nextTick();
      
      const iconElement = wrapper.find('#custom-rocket').element;
      expect(iconElement).toBeTruthy();
      
      await waitForIconToLoad(iconElement);
      
      const shadowRoot = iconElement.shadowRoot;
      expect(shadowRoot).toBeTruthy();
      
      const iconInner = shadowRoot.querySelector('.icon-inner');
      expect(iconInner).toBeTruthy();
      expect(iconInner.children.length).toBeGreaterThan(0);
      
      const svg = iconInner.querySelector('svg');
      expect(svg).toBeTruthy();
    });
  });

  describe('Icon Comparison', () => {
    it('should render custom icons with same structure as built-in icons', async () => {
      await wrapper.vm.$nextTick();
      
      // Get both types of icons
      const builtinIcon = wrapper.find('#builtin-star').element;
      const customIcon = wrapper.find('#custom-star').element;
      
      expect(builtinIcon).toBeTruthy();
      expect(customIcon).toBeTruthy();
      
      // Wait for both icons to load
      await waitForIconToLoad(builtinIcon);
      await waitForIconToLoad(customIcon);
      
      // Both should have shadow roots
      expect(builtinIcon.shadowRoot).toBeTruthy();
      expect(customIcon.shadowRoot).toBeTruthy();
      
      // Both should have icon-inner with children
      const builtinInner = builtinIcon.shadowRoot.querySelector('.icon-inner');
      const customInner = customIcon.shadowRoot.querySelector('.icon-inner');
      
      expect(builtinInner).toBeTruthy();
      expect(customInner).toBeTruthy();
      
      expect(builtinInner.children.length).toBeGreaterThan(0);
      expect(customInner.children.length).toBeGreaterThan(0);
      
      // Both should have SVG elements
      expect(builtinInner.querySelector('svg')).toBeTruthy();
      expect(customInner.querySelector('svg')).toBeTruthy();
    });
  });
});
