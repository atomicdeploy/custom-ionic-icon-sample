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

// Import custom icons
import { addIcons } from 'ionicons';
import customRocketIcon from './assets/icons/custom-rocket.svg?raw';
import customStarIcon from './assets/icons/custom-star.svg?raw';

// Register custom icons
addIcons({
  'custom-rocket': customRocketIcon,
  'custom-star': customStarIcon
});

const app = createApp(App)
  .use(IonicVue)
  .use(router);

router.isReady().then(() => {
  app.mount('#app');
});
