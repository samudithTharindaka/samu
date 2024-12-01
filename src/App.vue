<template>
  <div id="app">
    <!-- Home Component -->
    <HomePage />
    <!-- About Component -->
    <div class="bg-white">
      
      <AboutPage />
    </div>
   
    <!-- Particles Background -->
    <div id="particles" class="absolute inset-0">
     
    </div> <!-- Ensure particles are placed behind the content -->
  

   
  </div>
</template>

<script>
import HomePage from './components/Home.vue';
import AboutPage from './components/About.vue';
import { loadFull } from 'tsparticles';

export default {
  name: 'App',
  components: {
    HomePage,
    AboutPage,
  },
  data() {
    return {
      particleOptions: {
        background: {
          color: "#000", // Background color for particles
        },
        particles: {
          number: {
            value: 1000, // Number of particles
          },
          color: {
            value: "#ffffff", // Color of particles
          },
          shape: {
            type: "circle", // Shape of particles
          },
        },
      },
    };
  },
  mounted() {
    // Initialize particles when the component is mounted
    loadFull().then((engine) => {
      const particlesContainer = document.getElementById('particles');
      if (particlesContainer) {
        engine.load(particlesContainer, this.particleOptions); // Apply particle options to the container
      } else {
        console.error("Particles container not found!");
      }
    }).catch(error => {
      console.error("Particles initialization failed", error);
    });
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 0; /* Reset top margin for fullscreen look */
  overflow: hidden; /* Ensure no scrollbars appear */
  position: relative;
  height: 100vh; /* Full screen height */
}

#particles {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: -1; /* Ensure particles are in the background */
}
</style>
