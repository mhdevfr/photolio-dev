<template>
  <div
    class="h-full w-screen bg-gray-50 justify-end items-end dark:bg-gray-900 flex"
  >
  <adminSidebar class="w-1/6 left-0 top-0 fixed lg:block hidden" />
  <AdminNavbarBottom class="lg:hidden block" />
    <div class="flex flex-col ml-32 items-center h-full w-full justify-center">
      
      <adminBento />
    </div>
  </div>
</template>
<script setup lang="ts">
const user = useSupabaseUser();
const client = useSupabaseClient();
</script>

<style lang="css">
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
