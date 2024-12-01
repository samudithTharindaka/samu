<template>
  <div class="min-h-screen bg-black text-white custom-cursor-container">
    <header class="absolute top-5 left-5 text-sm tracking-wide">
      <p>SAMUDITH</p>
      <p>THARINDAKA</p>
    </header>
    <MenuCom />

    <div class="flex items-center justify-center h-screen">
      <!-- Image Section -->
      <div class="flex-1 flex items-center justify-center">
        <img 
          src="../assets/images/samudith1.jpg" 
          alt="Photo"
          class="w-full h-full object-cover transition duration-500 hover:blur-sm hover:scale-105"
        />
      </div>

      <!-- Title Section -->
      <div class="flex-1 text-center">
        <h1 class="text-9xl font-bold tracking-wide cursor-text-target">
          PHOTO
        </h1>
        <h1 class="text-9xl font-bold tracking-wide cursor-text-target">
          FOLIO
        </h1>
      </div>
    </div>

    <footer class="absolute bottom-5 text-sm tracking-wider text-center">
      <p>SCROLL TO VIEW</p>
    </footer>

    <!-- Custom Cursor -->
    <div id="custom-cursor"></div>
  </div>
</template>

<script>
import MenuCom from "./Menu.vue";

export default {
  name: "HomePage",
  components: {
    MenuCom,
  },
  mounted() {
    const cursor = document.getElementById("custom-cursor");

    // Update cursor position based on mouse movement
    document.addEventListener("mousemove", (event) => {
      const { clientX, clientY } = event;
      cursor.style.left = `${clientX}px`;
      cursor.style.top = `${clientY}px`;
    });

    // Change cursor color based on hover state
    document.querySelectorAll(".cursor-text-target").forEach((textElement) => {
      textElement.addEventListener("mouseenter", () => {
        cursor.style.backgroundColor = "black";
        cursor.style.borderColor = "white";
        cursor.style.boxShadow = "0 0 10px 2px white";
        cursor.style.transform = "translate(-50%, -50%) scale(1.5)";
      });

      textElement.addEventListener("mouseleave", () => {
        cursor.style.backgroundColor = "white";
        cursor.style.borderColor = "transparent";
        cursor.style.boxShadow = "none";
        cursor.style.transform = "translate(-50%, -50%) scale(1)";
      });
    });
  },
};
</script>

<style>
/* Hide the default cursor */
.custom-cursor-container {
  cursor: none;
}

/* Custom cursor styles */
#custom-cursor {
  position: fixed;
  width: 15px;
  height: 15px;
  background-color: white;
  border: 2px solid transparent; /* Default transparent border */
  border-radius: 50%;
  pointer-events: none; /* Prevent interaction */
  transform: translate(-50%, -50%);
  z-index: 9999;
  box-shadow: 0 0 8px rgba(255, 255, 255, 0.6); /* Glow effect */
  animation: ripple 1.5s infinite; /* Ripple effect */
  transition: background-color 0.3s ease, border-color 0.3s ease, box-shadow 0.3s ease, transform 0.1s ease;
}

/* Ripple effect */
@keyframes ripple {
  0%, 100% {
    box-shadow: 0 0 8px rgba(255, 255, 255, 0.6), 0 0 20px rgba(255, 255, 255, 0.3);
    transform: translate(-50%, -50%) scale(1);
  }
  50% {
    box-shadow: 0 0 15px rgba(255, 255, 255, 0.8), 0 0 30px rgba(255, 255, 255, 0.5);
    transform: translate(-50%, -50%) scale(1.2);
  }
}
</style>