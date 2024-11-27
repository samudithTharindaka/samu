import { createApp } from 'vue';
import App from './App.vue';

import AOS from 'aos'; // Import AOS
import 'aos/dist/aos.css'; // Import AOS CSS

import { MotionPlugin } from '@vueuse/motion';

import './main.css'; 

// Create Vue app
const app = createApp(App);

// Mount AOS initialization after the app is mounted
app.use(MotionPlugin);
app.mount('#app');
AOS.init();
