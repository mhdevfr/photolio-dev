<template>
    <div class="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
      <div class="social-card bg-gradient-to-br from-purple-500 via-pink-500 to-yellow-500">
        <div class="icon-container">
          <Icon name="mdi:instagram" width="48" height="48" style="color: white;" />
        </div>
      </div>
  
      <div class="social-card bg-gradient-to-br from-blue-500 via-blue-600 to-blue-800">
        <div class="icon-container">
          <Icon name="ic:baseline-facebook" width="48" height="48" style="color: white;" />
        </div>
      </div>
  
      <div class="social-card bg-gradient-to-br from-blue-400 to-gray-300">
        <div class="icon-container">
            <Icon name="ant-design:behance-circle-filled" width="48" height="48"  style="color: white" />
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
  