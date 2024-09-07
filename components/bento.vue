<template>
  <div
    class="flex h-screen w-full flex-col items-center justify-center rounded-lg p-6"
  >
    <div class="grid h-full w-full grid-cols-3 grid-rows-8 gap-4">
      <div class="col-span-3 row-span-8 rounded-3xl bg-neutral-800">
        <div>
            <TypewriterText></TypewriterText>
        </div>
      </div>

      <div class="row-span-12 col-span-2 rounded-3xl bg-neutral-800">
        <h1 class="text-[48px] font-semibold ml-6 brico-800">
            Showcase your best shots
        </h1>
        <NuxtMarquee class="flex space-x-4">
          <img src="../assets/images/marquee.png" alt="" class="mx-2">
          <img src="../assets/images/marquee2.png" alt="" class="mx-2">
          <img src="../assets/images/marquee3.png" alt="" class="mx-2">
          <img src="../assets/images/marquee4.png" alt="" class="mx-2">
        </NuxtMarquee>
      </div>
      
      <div class="row-span-12 col-span-1 rounded-3xl bg-neutral-800">
       <counting></counting>
      
        <p class="text-[48px] font-semibold text-center mb-6">seconds to build</p>
      </div>
    </div>
  </div>
</template>

