<template>
  <div
    class="flex flex-col items-center w-40 h-full overflow-hidden text-indigo-200 bg-gray-800 rounded"
  >
    <a class="flex items-center justify-center w-full px-3 mt-3 p-4" href="#">
        <Icon name="eos-icons:admin" />
      <span class="ml-2 text-sm font-bold brico-800">Dashboard</span>
    </a>
    <div class="w-full px-2">
      <div
        class="flex flex-col items-center justify-center w-full mt-3 border-t border-gray-700"
      >
        <a
          class="flex items-center w-full h-12 px-3 mt-2 rounded hover:bg-indigo-700"
          href="#"
        >
        <Icon name="iconamoon:home" />
          <span class="ml-2 text-sm font-medium brico-800">Home</span>
        </a>
        <a
          class="flex items-center w-full h-12 px-3 mt-2 rounded hover:bg-indigo-700"
          href="#"
        >
        <Icon name="material-symbols:search" />
          <span class="ml-2 text-sm font-medium brico-800">Search</span>
        </a>
        <a
          class="flex items-center w-full h-12 px-3 mt-2  hover:bg-indigo-700 text-indigo-100 rounded"
          href="#"
        >
        <Icon name="et:pictures" />
          <span class="ml-2 text-sm font-medium brico-800">Pictures</span>
        </a>
        <a
          class="flex items-center w-full h-12 px-3 mt-2 rounded hover:bg-indigo-700"
          href="#"
        >
        <Icon name="ri:contract-fill" />
          <span class="ml-2 text-sm font-medium brico-800">Plan</span>
        </a>
      </div>
      <div
        class="flex flex-col items-center w-full mt-2 border-t border-gray-700"
      >
        <a
          class="flex items-center w-full h-12 px-3 mt-2 rounded hover:bg-indigo-700"
          href="#"
        >
        <Icon name="codicon:settings" />
          <span class="ml-2 text-sm font-medium brico-800">Settings</span>
        </a>
        <a
          class="relative flex items-center w-full h-12 px-3 mt-2 rounded hover:bg-indigo-700"
          href="#"
        >
        <Icon name="mdi:message" />
          <span class="ml-2 text-sm font-medium brico-800">Support</span>
          <span
            class="absolute top-0 left-0 w-2 h-2 mt-2 ml-2 bg-indigo-500 rounded-full"
          ></span>
        </a>
      </div>
    </div>
    <a
      class="flex items-center justify-center w-full h-16 mt-auto bg-indigo-800 hover:bg-indigo-700"
      href="#"
    >
    <Icon name="material-symbols:account-box" />
      <span class="ml-2 text-sm font-medium brico-800">Account</span>
    </a>
  </div>
</template>

<script lang="ts"></script>
