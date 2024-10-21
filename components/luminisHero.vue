<template>
  <div 
  class="absolute -top-[400px] -left-[150px] w-[600px] h-[600px] 
         bg-gradient-to-br from-white/40 to-transparent 
         rounded-full blur-3xl overflow-hidden">
</div>

  <div class="relative container mx-auto flex flex-col">

    <LuminisNavbar />

    <div 
      class="my-auto mb-8 mt-36 w-full grid-cols-1 justify-center text-gray-50 
             md:flex md:gap-5 lg:grid lg:grid-cols-2">
      <div 
        class="col-span-1 flex flex-col justify-center text-center 
               md:w-3/5 lg:w-full lg:justify-center lg:text-left">
        <div class="mb-4 flex items-center justify-center lg:justify-start">
          <BadgePricing />
        </div>

        <div class="flex items-center">
          <h1 class="text-4xl font-extrabold leading-tight text-dark-grey-900 lg:text-7xl">
            Kaito Yamato
          </h1>
        </div>

        <p class="mt-6 mb-10 text-base font-regular leading-7 lg:text-xl text-dark-grey-600 xl:w-3/4">
          Hi I’m Kaito, I’m a Japanese photographer. I’ve worked for most of the
          popular newspapers as a photographer for 25 years, giving meaning to
          my wonderful life.
        </p>

        <div class="flex flex-col items-center space-x-4 lg:flex-row">
          <button 
            class="flex items-center rounded-xl bg-purple-blue-500 px-8 py-5 
                   text-xl font-medium bg-slate-50 text-black transition 
                   hover:bg-purple-blue-600 focus:bg-purple-blue-700">
            My photos
          </button>
          <button 
            class="flex items-center rounded-xl px-8 py-5 text-xl font-medium 
                   border border-slate-50/40 text-dark-grey-900">
            Contact me
          </button>
        </div>
      </div>

      <div class="col-span-1 flex items-center justify-center lg:justify-end">
        <img 
          class="w-4/6 rounded-full shadow-md" 
          src="../assets/images/pp.png"
          alt="Profile photo of Kaito Yamato" />
      </div>
    </div>

    <div>
      <LuminisPhoto />
    </div>

    <div>
      <LuminisContact />
    </div>

    <div>
      <luminisFooter />
    </div>

  
  </div>
</template>


