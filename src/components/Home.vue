<template>
  <div class="min-h-screen bg-black text-white">
    <!-- Header -->
    <header class="absolute top-5 left-5 text-sm tracking-wide">
      <p>SAMUDITH</p>
      <p>THARINDAKA</p>
    </header>

    <!-- Main Content -->
    <div class="flex flex-col items-center justify-center space-y-20">
      <!-- Image Section -->
      <img 
        src="../assets/images/samudith1.jpg" 
        alt="Photo"
        class="w-72 h-96 object-cover"
      />

      <!-- Title -->
      <div class="text-center" v-motion-roll-visible-bottom
        
      >
        <h1 class="text-9xl font-bold tracking-wide">PHOTO</h1>
        <h1 class="text-9xl font-bold tracking-wide">FOLIO</h1>
      </div>
    </div>

    <!-- Scroll Text -->
    <footer class="absolute bottom-5 text-sm tracking-wider text-center">
      <p>SCROLL TO VIEW</p>
    </footer>
  </div>
</template>

<script>
export default {
  name: "HomePage",
};
</script>

<style>
/* Optional additional styles for layout and design */
</style>

