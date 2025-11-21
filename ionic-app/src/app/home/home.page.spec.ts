import { ComponentFixture, TestBed, flush, fakeAsync, tick } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { HomePage } from './home.page';

describe('HomePage', () => {
  let component: HomePage;
  let fixture: ComponentFixture<HomePage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [HomePage],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(HomePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  // Helper function to wait for icon to load
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

  describe('Built-in Icons', () => {
    it('should render built-in star icon with content in shadow-root', async () => {
      await fixture.whenStable();
      fixture.detectChanges();
      
      const iconElement = fixture.nativeElement.querySelector('#builtin-star');
      expect(iconElement).toBeTruthy();
      
      // Wait for icon to load
      await waitForIconToLoad(iconElement);
      
      // Access shadow root
      const shadowRoot = iconElement.shadowRoot;
      expect(shadowRoot).toBeTruthy();
      
      // Check that icon-inner exists and has content
      const iconInner = shadowRoot.querySelector('.icon-inner');
      expect(iconInner).toBeTruthy();
      expect(iconInner.children.length).toBeGreaterThan(0, 'icon-inner should have children elements');
      
      // Check for SVG content
      const svg = iconInner.querySelector('svg');
      expect(svg).toBeTruthy('icon-inner should contain an SVG element');
    });

    it('should render built-in heart icon with content in shadow-root', async () => {
      await fixture.whenStable();
      fixture.detectChanges();
      
      const iconElement = fixture.nativeElement.querySelector('#builtin-heart');
      expect(iconElement).toBeTruthy();
      
      await waitForIconToLoad(iconElement);
      
      const shadowRoot = iconElement.shadowRoot;
      expect(shadowRoot).toBeTruthy();
      
      const iconInner = shadowRoot.querySelector('.icon-inner');
      expect(iconInner).toBeTruthy();
      expect(iconInner.children.length).toBeGreaterThan(0, 'icon-inner should have children elements');
      
      const svg = iconInner.querySelector('svg');
      expect(svg).toBeTruthy('icon-inner should contain an SVG element');
    });

    it('should render built-in rocket icon with content in shadow-root', async () => {
      await fixture.whenStable();
      fixture.detectChanges();
      
      const iconElement = fixture.nativeElement.querySelector('#builtin-rocket');
      expect(iconElement).toBeTruthy();
      
      await waitForIconToLoad(iconElement);
      
      const shadowRoot = iconElement.shadowRoot;
      expect(shadowRoot).toBeTruthy();
      
      const iconInner = shadowRoot.querySelector('.icon-inner');
      expect(iconInner).toBeTruthy();
      expect(iconInner.children.length).toBeGreaterThan(0, 'icon-inner should have children elements');
      
      const svg = iconInner.querySelector('svg');
      expect(svg).toBeTruthy('icon-inner should contain an SVG element');
    });
  });

  describe('Custom Icons', () => {
    it('should render custom-star icon with content in shadow-root', async () => {
      await fixture.whenStable();
      fixture.detectChanges();
      
      const iconElement = fixture.nativeElement.querySelector('#custom-star');
      expect(iconElement).toBeTruthy();
      
      // Wait for icon to load
      await waitForIconToLoad(iconElement);
      
      // Access shadow root
      const shadowRoot = iconElement.shadowRoot;
      expect(shadowRoot).toBeTruthy();
      
      // Check that icon-inner exists and has content
      const iconInner = shadowRoot.querySelector('.icon-inner');
      expect(iconInner).toBeTruthy();
      expect(iconInner.children.length).toBeGreaterThan(0, 'icon-inner should have children elements');
      
      // Check for SVG content
      const svg = iconInner.querySelector('svg');
      expect(svg).toBeTruthy('icon-inner should contain an SVG element');
    });

    it('should render custom-heart icon with content in shadow-root', async () => {
      await fixture.whenStable();
      fixture.detectChanges();
      
      const iconElement = fixture.nativeElement.querySelector('#custom-heart');
      expect(iconElement).toBeTruthy();
      
      await waitForIconToLoad(iconElement);
      
      const shadowRoot = iconElement.shadowRoot;
      expect(shadowRoot).toBeTruthy();
      
      const iconInner = shadowRoot.querySelector('.icon-inner');
      expect(iconInner).toBeTruthy();
      expect(iconInner.children.length).toBeGreaterThan(0, 'icon-inner should have children elements');
      
      const svg = iconInner.querySelector('svg');
      expect(svg).toBeTruthy('icon-inner should contain an SVG element');
    });

    it('should render custom-rocket icon with content in shadow-root', async () => {
      await fixture.whenStable();
      fixture.detectChanges();
      
      const iconElement = fixture.nativeElement.querySelector('#custom-rocket');
      expect(iconElement).toBeTruthy();
      
      await waitForIconToLoad(iconElement);
      
      const shadowRoot = iconElement.shadowRoot;
      expect(shadowRoot).toBeTruthy();
      
      const iconInner = shadowRoot.querySelector('.icon-inner');
      expect(iconInner).toBeTruthy();
      expect(iconInner.children.length).toBeGreaterThan(0, 'icon-inner should have children elements');
      
      const svg = iconInner.querySelector('svg');
      expect(svg).toBeTruthy('icon-inner should contain an SVG element');
    });
  });

  describe('Icon Comparison', () => {
    it('should render custom icons with same structure as built-in icons', async () => {
      await fixture.whenStable();
      fixture.detectChanges();
      
      // Get both types of icons
      const builtinIcon = fixture.nativeElement.querySelector('#builtin-star');
      const customIcon = fixture.nativeElement.querySelector('#custom-star');
      
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
