<template>
  <ion-page>
    <ion-header :translucent="true">
      <ion-toolbar>
        <ion-title>Custom Ionic Icons Demo</ion-title>
      </ion-toolbar>
    </ion-header>
    
    <ion-content :fullscreen="true">
      <ion-header collapse="condense">
        <ion-toolbar>
          <ion-title size="large">Custom Icons</ion-title>
        </ion-toolbar>
      </ion-header>
      
      <div class="container">
        <h1>Welcome to Custom Ionic Icon Sample</h1>
        <p class="subtitle">This demo shows how to use custom SVG icons in Ionic Vue3</p>
        
        <ion-card>
          <ion-card-header>
            <ion-card-title>Custom Icons</ion-card-title>
            <ion-card-subtitle>Using SVG files as Ionic icons</ion-card-subtitle>
          </ion-card-header>
          
          <ion-card-content>
            <div class="icon-showcase">
              <div class="icon-item">
                <ion-icon :icon="customRocket" size="large" color="primary"></ion-icon>
                <p>Custom Rocket Icon</p>
                <code>&lt;ion-icon icon="custom-rocket"&gt;</code>
              </div>
              
              <div class="icon-item">
                <ion-icon :icon="customStar" size="large" color="warning"></ion-icon>
                <p>Custom Star Icon</p>
                <code>&lt;ion-icon icon="custom-star"&gt;</code>
              </div>
            </div>
          </ion-card-content>
        </ion-card>
        
        <ion-card>
          <ion-card-header>
            <ion-card-title>Different Sizes</ion-card-title>
            <ion-card-subtitle>Icons can be displayed in various sizes</ion-card-subtitle>
          </ion-card-header>
          
          <ion-card-content>
            <div class="size-showcase">
              <div class="size-item">
                <ion-icon :icon="customRocket" size="small"></ion-icon>
                <p>Small</p>
              </div>
              <div class="size-item">
                <ion-icon :icon="customRocket"></ion-icon>
                <p>Default</p>
              </div>
              <div class="size-item">
                <ion-icon :icon="customRocket" size="large"></ion-icon>
                <p>Large</p>
              </div>
            </div>
          </ion-card-content>
        </ion-card>
        
        <ion-card>
          <ion-card-header>
            <ion-card-title>Different Colors</ion-card-title>
            <ion-card-subtitle>Using Ionic color variants</ion-card-subtitle>
          </ion-card-header>
          
          <ion-card-content>
            <div class="color-showcase">
              <ion-icon :icon="customStar" size="large" color="primary"></ion-icon>
              <ion-icon :icon="customStar" size="large" color="secondary"></ion-icon>
              <ion-icon :icon="customStar" size="large" color="tertiary"></ion-icon>
              <ion-icon :icon="customStar" size="large" color="success"></ion-icon>
              <ion-icon :icon="customStar" size="large" color="warning"></ion-icon>
              <ion-icon :icon="customStar" size="large" color="danger"></ion-icon>
            </div>
          </ion-card-content>
        </ion-card>
        
        <ion-card>
          <ion-card-header>
            <ion-card-title>In Buttons</ion-card-title>
            <ion-card-subtitle>Custom icons work great in buttons</ion-card-subtitle>
          </ion-card-header>
          
          <ion-card-content>
            <div class="button-showcase">
              <ion-button>
                <ion-icon slot="start" :icon="customRocket"></ion-icon>
                Launch
              </ion-button>
              
              <ion-button color="warning">
                <ion-icon slot="start" :icon="customStar"></ion-icon>
                Favorite
              </ion-button>
              
              <ion-button fill="outline" color="primary">
                <ion-icon slot="icon-only" :icon="customRocket"></ion-icon>
              </ion-button>
              
              <ion-button fill="clear" color="warning">
                <ion-icon slot="icon-only" :icon="customStar"></ion-icon>
              </ion-button>
            </div>
          </ion-card-content>
        </ion-card>
        
        <ion-card>
          <ion-card-header>
            <ion-card-title>How It Works</ion-card-title>
          </ion-card-header>
          
          <ion-card-content>
            <ol class="instructions">
              <li>Place your SVG files in <code>src/assets/icons/</code></li>
              <li>Import them in <code>main.js</code> using <code>?raw</code> query</li>
              <li>Register them with <code>addIcons()</code> from ionicons</li>
              <li>Use them with <code>&lt;ion-icon :icon="iconName"&gt;</code></li>
            </ol>
          </ion-card-content>
        </ion-card>
      </div>
    </ion-content>
  </ion-page>
</template>

<script>
import {
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
  IonCard,
  IonCardContent,
  IonCardHeader,
  IonCardTitle,
  IonCardSubtitle,
  IonIcon,
  IonButton
} from '@ionic/vue';

export default {
  name: 'HomePage',
  components: {
    IonContent,
    IonHeader,
    IonPage,
    IonTitle,
    IonToolbar,
    IonCard,
    IonCardContent,
    IonCardHeader,
    IonCardTitle,
    IonCardSubtitle,
    IonIcon,
    IonButton
  },
  setup() {
    return {
      customRocket: 'custom-rocket',
      customStar: 'custom-star'
    };
  }
};
</script>

<style scoped>
.container {
  padding: 20px;
}

h1 {
  font-size: 28px;
  font-weight: bold;
  margin-bottom: 8px;
}

.subtitle {
  color: var(--ion-color-medium);
  margin-bottom: 24px;
}

.icon-showcase {
  display: flex;
  gap: 40px;
  justify-content: center;
  flex-wrap: wrap;
}

.icon-item {
  text-align: center;
  padding: 20px;
}

.icon-item ion-icon {
  margin-bottom: 12px;
}

.icon-item p {
  font-weight: 500;
  margin-bottom: 8px;
}

.icon-item code {
  font-size: 12px;
  color: var(--ion-color-medium);
}

.size-showcase {
  display: flex;
  gap: 30px;
  justify-content: center;
  align-items: flex-end;
  flex-wrap: wrap;
}

.size-item {
  text-align: center;
}

.size-item ion-icon {
  margin-bottom: 8px;
}

.size-item p {
  font-size: 12px;
  color: var(--ion-color-medium);
}

.color-showcase {
  display: flex;
  gap: 16px;
  justify-content: center;
  flex-wrap: wrap;
}

.button-showcase {
  display: flex;
  gap: 12px;
  justify-content: center;
  flex-wrap: wrap;
}

.instructions {
  padding-left: 20px;
  line-height: 1.8;
}

.instructions code {
  background: var(--ion-color-light);
  padding: 2px 6px;
  border-radius: 4px;
  font-size: 13px;
}

ion-card {
  margin-bottom: 16px;
}
</style>
