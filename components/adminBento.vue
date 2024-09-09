<template>
  <div class="w-5/6 h-full flex flex-col justify-center">
    <div class="flex items-center justify-center p-0">
      <div class="h-80 w-full bg-gray-50 mb-6 mr-6 rounded-xl">
        <div class="text-slate-900 flex items-center justify-center flex-col">
          <h1 class="text-3xl brico-800 p-4">👋 Hey MHDev !</h1>
          <div>
            <adminCounter/>
          </div>
        </div>
      </div>
      <div class="w-3/4 h-80 bg-gray-50 mb-6 rounded-xl">
        <div class="text-slate-900">
          <h1 class="text-3xl flex justify-start items-center p-4">
            <button class="flex items-center justify-center">
              <Icon name="solar:pen-line-duotone" class="mr-4" />
            </button>
            <span class="brico-800">Your biography : </span>
          </h1>
        </div>
      </div>
    </div>
    <div class="w-full h-80 bg-gray-50 rounded-xl">
      <div class="p-4">
        <h1 class="text-3xl brico-800 text-slate-900 m-4">Add a picture</h1>
        <AdminAddPicture />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const user = useSupabaseUser();
const client = useSupabaseClient();



</script>

<style lang="css" scoped></style>
