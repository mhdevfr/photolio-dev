<template>
  <div
    class="flex h-screen w-full flex-col items-center justify-center rounded-lg p-6"
  >
    <div class="grid h-full w-full grid-cols-3 grid-rows-8 gap-4">
      <div
        class="col-span-3 row-span-8 rounded-3xl bg-gray-50 flex flex-col justify-between"
      >
        <div>
          <TypewriterText></TypewriterText>
        </div>
        <div
          class="flex justify-center items-end flex-wrap space-x-6 mt-auto mb-0"
        ></div>
      </div>

      <div
        class="row-span-12 col-span-2 rounded-3xl flex justify-center flex-col bg-gray-100"
      >
        <div class="mb-10">
        <h1 class="text-5xl text-slate-900 font-semibold p-4 brico-800">
          Showcase your best shots
        </h1>
        <NuxtMarquee class="flex">
          <img
            src="../assets/images/marquee.png"
            alt=""
            class="mx-2 sm:max-w-[250px]"
          />
          <img
            src="../assets/images/marquee2.png"
            alt=""
            class="mx-2 sm:max-w-[250px]"
          />
          <img
            src="../assets/images/marquee3.png"
            alt=""
            class="mx-2 sm:max-w-[250px]"
          />
          <img
            src="../assets/images/marquee4.png"
            alt=""
            class="mx-2 sm:max-w-[250px]"
          />
        </NuxtMarquee>
        </div>
      </div>

      <div class="row-span-12 col-span-1 rounded-3xl bg-gray-100">
        <counting></counting>
        <p
          class="text-[48px] text-slate-900 brico-800 font-semibold text-center mb-6"
        >
          seconds to build
        </p>
      </div>
    </div>
  </div>
</template>
