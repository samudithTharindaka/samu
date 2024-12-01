<!-- Menu.vue -->
<template>
    <div class="menu-container">
      <button @click="toggleMenu" class="menu-button">☰</button>
      <nav
        v-if="isMenuOpen"
        class="menu-content"
      >
        <ul class="menu-list">
          <li class="menu-item"><a href="#home">Home</a></li>
          <li class="menu-item"><a href="#portfolio">Portfolio</a></li>
          <li class="menu-item"><a href="#about">About</a></li>
          <li class="menu-item"><a href="#contact">Contact</a></li>
        </ul>
      </nav>
    </div>
  </template>
  
  <script>
  export default {
    name: "MenuCom",
    data() {
      return {
        isMenuOpen: false, // Track menu visibility
      };
    },
    methods: {
      toggleMenu() {
        this.isMenuOpen = !this.isMenuOpen;
      },
    },
  };
  </script>
  
  <style>
  .menu-container {
    position: absolute;
    top: 10px;
    right: 10px;
    z-index: 1000;
  }
  
  .menu-button {
    background-color: white;
    color: black;
    border: none;
    border-radius: 5px;
    padding: 10px 15px;
    font-size: 18px;
    cursor: pointer;
    transition: transform 0.3s ease;
  }
  
  .menu-button:hover {
    transform: scale(1.1);
  }
  
  .menu-content {
    background-color: black;
    color: white;
    position: absolute;
    top: 50px;
    right: 10px;
    width: 200px;
    padding: 10px;
    border-radius: 8px;
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.5);
  }
  
  .menu-list {
    list-style-type: none;
    padding: 0;
  }
  
  .menu-item {
    margin: 10px 0;
    text-align: center;
  }
  
  .menu-item a {
    text-decoration: none;
    color: white;
    font-size: 16px;
    transition: color 0.3s ease;
  }
  
  .menu-item a:hover {
    color: #f39c12;
  }
  </style>
  