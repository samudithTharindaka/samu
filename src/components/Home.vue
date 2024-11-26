<template>
  <div class="min-h-screen bg-gradient-to-b from-blue-500 to-purple-600 flex items-center justify-center">
    <div class="text-center">
      <h1 class="text-6xl font-bold text-white">
        Hi, I'm <span class="text-yellow-300">Samudith</span>
      </h1>
      <p class="text-xl text-white mt-4">A Frontend Developer</p>
      <div class="mt-6">
        <button class="bg-white text-blue-600 py-2 px-6 rounded-lg mr-4 hover:bg-gray-200 transition">
          Projects
        </button>
        <button class="bg-yellow-300 text-blue-600 py-2 px-6 rounded-lg hover:bg-yellow-400 transition">
          Contact
        </button>
      </div>
    </div>
  </div>
  <div class="bg-blue-500 text-white p-4">
    Tailwind CSS is working!
  </div>
</template>

<script>
export default {
  name: 'HomePage',
};
</script>

<style scoped>
/* Additional styles for the Home component */
</style>
