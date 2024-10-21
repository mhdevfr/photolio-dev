<template>
    <div class="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
      <div class="social-card bg-gradient-to-br from-purple-500 via-pink-500 to-yellow-500">
        <div class="icon-container">
          <Icon name="mdi:instagram" width="48" height="48" style="color: white;" />
        </div>
      </div>
  
      
      <div class="social-card bg-gradient-to-br from-red-300 via-red-500 to-red-700">
        <div class="icon-container">
          <Icon name="mdi:pinterest" width="48" height="48"  style="color: white" />
        </div>
      </div>
  
      <div class="social-card bg-gradient-to-br from-blue-700 to-blue-300">
        <div class="icon-container">
          <Icon
          name="ion:social-linkedin"
          size="48"
          class="dark:text-gray-50 text-gray-950"
        />
        </div>
      </div>

    </div>
  </template>
  
  <script setup lang="ts"></script>
  
  <style scoped>
  .social-card {
    @apply p-8 rounded-lg flex items-center justify-center backdrop-blur-md shadow-lg cursor-pointer transition;
  }
  .icon-container {
    @apply transition-transform;
  }
  
  .social-card:hover .icon-container {
    transform: scale(1.1); 
  }
  </style>
  