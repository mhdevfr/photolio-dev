<template>
  <div class="h-screen w-full flex justify-center items-center flex-col">
    <navbar />
    <loginForm v-if="!register"/>
    <registerForm v-else/>
    <elementCard
      class="parallax absolute left-24 z-[-1]"
      v-motion-slide-top
    />
    <secondElementCard
      class="parallax absolute drop-shadow-2xl right-24 bottom-24 z-[-1]"
      v-motion-slide-right
    />
    <thirdElementCard
      class="parallax absolute drop-shadow-2xl right-52 top-24 z-[-1]"
      v-motion-slide-bottom
    />
    <fourthElementCard
      class="parallax absolute drop-shadow-2xl left-48 bottom-10 z-[-1]"
      v-motion-slide-left
    />
  </div>
</template>

<script setup lang="ts">
const register = ref(false);


const getRandomInRange = (min, max) => Math.random() * (max - min) + min;
const elements = [];
const handleMouseMove = (event) => {
  const { clientX: x, clientY: y } = event;

  elements.forEach(el => {
    const { offsetWidth: width, offsetHeight: height } = el;
    const rect = el.getBoundingClientRect();
    const elementCenterX = rect.left + width / 2;
    const elementCenterY = rect.top + height / 2;
    const deltaX = (x - elementCenterX) / window.innerWidth;
    const deltaY = (y - elementCenterY) / window.innerHeight;
    const moveX = deltaX * el.dataset.factorX;
    const moveY = deltaY * el.dataset.factorY;
    
    el.style.transform = `translate(${moveX}px, ${moveY}px)`;
  });
};

onMounted(() => {
  window.addEventListener('mousemove', handleMouseMove);

  document.querySelectorAll('.parallax').forEach(el => {
    el.dataset.factorX = getRandomInRange(10, 70); 
    el.dataset.factorY = getRandomInRange(10, 70);
    elements.push(el);
  });
});

onUnmounted(() => {
  window.removeEventListener('mousemove', handleMouseMove);
});
</script>


<style lang="css">
.parallax {
  transition: transform 0.1s;
}

@import url("https://fonts.googleapis.com/css2?family=Bricolage+Grotesque:opsz,wght@12..96,200..800&display=swap");
.brico-800 {
  font-family: "Bricolage Grotesque", sans-serif;
  font-optical-sizing: auto;
  font-weight: 800;
  font-style: normal;
  font-variation-settings: "wdth" 100;
}
.brico-200 {
  font-family: "Bricolage Grotesque", sans-serif;
  font-optical-sizing: auto;
  font-weight: 200;
  font-style: normal;
  font-variation-settings: "wdth" 100;
}

* {
  padding: 0;
  margin: 0;
}
</style>
