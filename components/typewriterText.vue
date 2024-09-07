<template>
    <div>
      <div ref="typewriter" class="text-[64px] font-semibold ml-6 brico-800"></div>
    </div>
  </template>
  
  <script>
  import Typewriter from 'typewriter-effect/dist/core';
  
  export default {
    mounted() {
      const typewriter = new Typewriter(this.$refs.typewriter, {
        loop: true, 
        delay: 75,  
      });
  
      
      typewriter
        .typeString('Create your own portfolio...')
        .pauseFor(1500) 
        .deleteAll()     
        .typeString('Fully customizable...')
        .pauseFor(1500)
        .deleteAll()
        .typeString('Fully responsive...')
        .pauseFor(1500)
        .deleteAll()
        .typeString('in 120 seconds...')
        .pauseFor(1500)
        .start();
    },
  };
  </script>
  
  