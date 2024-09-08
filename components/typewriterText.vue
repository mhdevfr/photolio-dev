<template>
  <div>
    <div ref="typewriter" class="text-[64px] font-semibold ml-6 brico-800"></div> 
  </div>
</template>

<script setup lang="ts">
import Typewriter from 'typewriter-effect/dist/core'; // Ici tu importes la librairie typewriter

const typewriter = ref(null); // important de toujours definir de quoi on parle ici typewriter est un ref qui est null pour le moment

onMounted(() => { // En claire ici tu dis que quand le setup est lancer il faut lancer cette fonction
  const typewriterInstance = new Typewriter(typewriter.value, {
    loop: true,
    delay: 75,
  });

  typewriterInstance // Ici c'est la déclaration du script à faire UNIQUEMENT grâce au typewriterInstance la librairie typewriter
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
});
</script>