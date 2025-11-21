import { createApp } from 'vue';
import { IonicVue } from '@ionic/vue';
import App from './App.vue';
import router from './router';

// Import Ionic CSS
import '@ionic/vue/css/core.css';
import '@ionic/vue/css/normalize.css';
import '@ionic/vue/css/structure.css';
import '@ionic/vue/css/typography.css';

// Optional Ionic CSS utilities
import '@ionic/vue/css/padding.css';
import '@ionic/vue/css/float-elements.css';
import '@ionic/vue/css/text-alignment.css';
import '@ionic/vue/css/text-transformation.css';
import '@ionic/vue/css/flex-utils.css';
import '@ionic/vue/css/display.css';

// Custom styles
import './theme/variables.css';

// Note: Custom icons are now loaded using the src attribute directly
// in the components (e.g., src="/assets/icons/custom-rocket.svg")
// This approach ensures icons render properly in the shadow-root

const app = createApp(App)
  .use(IonicVue)
  .use(router);

router.isReady().then(() => {
  app.mount('#app');
});
