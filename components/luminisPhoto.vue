<template>
  <div class="my-16 mt-64">
    <h1 class="text-5xl font-semibold text-gray-100 mb-4">
      My gallery
    </h1>
    <p class="text-gray-300 text-xl mb-6"> Here are some photos I took recently :</p>
    <div class="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
      <div class="overflow-hidden aspect-square cursor-pointer rounded-xl relative group">
        <div class="rounded-xl z-50 opacity-0 group-hover:opacity-100 transition duration-300 ease-in-out absolute from-black/80 to-transparent bg-gradient-to-t inset-x-0 -bottom-2 pt-30 text-white flex items-end">
          <div>
            <div class="p-4 space-y-3 text-xl group-hover:opacity-100 group-hover:translate-y-0 translate-y-4 pb-10 transition duration-300 ease-in-out">
              <div class="font-bold">Photo 1</div>
              <div class="opacity-60 text-sm">
                Description de l'image quoicoubaka
              </div>
            </div>
          </div>
        </div>
        <img class="object-cover w-full h-full group-hover:scale-110 transition duration-300 ease-in-out" src="../assets/images/marquee.png" alt="Featured Photo 1" />
      </div>

      <div class="overflow-hidden aspect-square cursor-pointer rounded-xl relative group">
        <div class="rounded-xl z-50 opacity-0 group-hover:opacity-100 transition duration-300 ease-in-out absolute from-black/80 to-transparent bg-gradient-to-t inset-x-0 -bottom-2 pt-30 text-white flex items-end">
          <div>
            <div class="p-4 space-y-3 text-xl group-hover:opacity-100 group-hover:translate-y-0 translate-y-4 pb-10 transition duration-300 ease-in-out">
              <div class="font-bold">Photo 2</div>
              <div class="opacity-60 text-sm">
                Description de l'image quoicoubaka
              </div>
            </div>
          </div>
        </div>
        <img class="object-cover w-full h-full group-hover:scale-110 transition duration-300 ease-in-out" src="../assets/images/marquee2.png" alt="Featured Photo 2" />
      </div>

      <div class="overflow-hidden aspect-square cursor-pointer rounded-xl relative group">
        <div class="rounded-xl z-50 opacity-0 group-hover:opacity-100 transition duration-300 ease-in-out absolute from-black/80 to-transparent bg-gradient-to-t inset-x-0 -bottom-2 pt-30 text-white flex items-end">
          <div>
            <div class="p-4 space-y-3 text-xl group-hover:opacity-100 group-hover:translate-y-0 translate-y-4 pb-10 transition duration-300 ease-in-out">
              <div class="font-bold">Photo 3</div>
              <div class="opacity-60 text-sm">
                Description de l'image quoicoubaka
              </div>
            </div>
          </div>
        </div>
        <img class="object-cover w-full h-full group-hover:scale-110 transition duration-300 ease-in-out" src="../assets/images/marquee3.png" alt="Featured Photo 3" />
      </div>

      <div class="overflow-hidden aspect-square cursor-pointer rounded-xl relative group">
        <div class="rounded-xl z-50 opacity-0 group-hover:opacity-100 transition duration-300 ease-in-out absolute from-black/80 to-transparent bg-gradient-to-t inset-x-0 -bottom-2 pt-30 text-white flex items-end">
          <div>
            <div class="p-4 space-y-3 text-xl group-hover:opacity-100 group-hover:translate-y-0 translate-y-4 pb-10 transition duration-300 ease-in-out">
              <div class="font-bold">Photo 4</div>
              <div class="opacity-60 text-sm">
                Description de l'image quoicoubaka
              </div>
            </div>
          </div>
        </div>
        <img class="object-cover w-full h-full group-hover:scale-110 transition duration-300 ease-in-out" src="../assets/images/marquee4.png" alt="Featured Photo 4" />
      </div>

      <div class="overflow-hidden aspect-square cursor-pointer rounded-xl relative group">
        <div class="rounded-xl z-50 opacity-0 group-hover:opacity-100 transition duration-300 ease-in-out absolute from-black/80 to-transparent bg-gradient-to-t inset-x-0 -bottom-2 pt-30 text-white flex items-end">
          <div>
            <div class="p-4 space-y-3 text-xl group-hover:opacity-100 group-hover:translate-y-0 translate-y-4 pb-10 transition duration-300 ease-in-out">
              <div class="font-bold">Photo 5</div>
              <div class="opacity-60 text-sm">
                Description de l'image quoicoubaka
              </div>
            </div>
          </div>
        </div>
        <img class="object-cover w-full h-full group-hover:scale-110 transition duration-300 ease-in-out" src="../assets/images/street.jpg" alt="Featured Photo 5" />
      </div>

      <div class="overflow-hidden aspect-square cursor-pointer rounded-xl relative group">
        <div class="rounded-xl z-50 opacity-0 group-hover:opacity-100 transition duration-300 ease-in-out absolute from-black/80 to-transparent bg-gradient-to-t inset-x-0 -bottom-2 pt-30 text-white flex items-end">
          <div>
            <div class="p-4 space-y-3 text-xl group-hover:opacity-100 group-hover:translate-y-0 translate-y-4 pb-10 transition duration-300 ease-in-out">
              <div class="font-bold">Photo 5</div>
              <div class="opacity-60 text-sm">
                Description de l'image quoicoubaka
              </div>
            </div>
          </div>
        </div>
        <img class="object-cover w-full h-full group-hover:scale-110 transition duration-300 ease-in-out" src="../assets/images/marquee.png" alt="Featured Photo 5" />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts"></script>
