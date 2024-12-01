import { createApp } from 'vue';
import App from './App.vue';

import AOS from 'aos'; // Import AOS
import 'aos/dist/aos.css'; // Import AOS CSS

import { MotionPlugin } from '@vueuse/motion';

import './main.css'; 

// Create Vue app
const app = createApp(App);

// Use plugins
app.use(MotionPlugin);

// Mount app
app.mount('#app');

// Initialize AOS on mounted lifecycle
AOS.init({
  duration: 1000, // Adjust animation duration as needed
  easing: 'ease-out', // Adjust easing for animations
  once: true, // Whether animation should happen only once or every time you scroll
});
