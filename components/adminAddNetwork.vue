<template>
  <UPopover>
    <UButton class="flex flex-col" color="white" label="Open">
      <div>
        <Icon
          name="simple-line-icons:social-instagram"
          class="dark:text-gray-50 text-gray-950"
        />
        <Icon
          name="foundation:social-pinterest"
          class="dark:text-gray-50 text-gray-950"
        />
        <Icon
          name="ion:social-linkedin"
          class="dark:text-gray-50 text-gray-950"
        />
      </div>

      <span> Add Network </span>
    </UButton>
    <template v-motion-pop #panel="{ close }">
      <div class="p-4 flex justify-start items-center flex-col">
        <p class="text-xl">Add your differents network links</p>
        <input
          type="text"
          v-model="instagram"
          placeholder="https://instagram.com/yourinsta"
          class="w-full outline-none p-2 my-2 border border-gray-300 rounded-md"
        />
        <input
          type="text"
          v-model="pinterest"
          placeholder="https://pinterest.com/yourpinterest"
          class="w-full p-2 my-2 outline-none border border-gray-300 rounded-md"
        />
        <input
          type="text"
          v-model="linkedin"
          placeholder="https://linkedin.com/yourlinkedin"
          class="w-full p-2 my-2 border outline-none border-gray-300 rounded-md"
        />
        <button
          @click="addNetworks"
          class="bg-green-500 text-white py-1 px-4 hover:opacity-85 rounded-md"
        >
          Save
        </button>
      </div>
    </template>
  </UPopover>
</template>

<script setup lang="ts">
const route = useRoute();
const toast = useToast();
const client = useSupabaseClient();
const user = useSupabaseUser();
const instagram = ref("");
const pinterest = ref("");
const linkedin = ref("");
const addNetworks = async () => {
  try {
    const { data, error } = await client.from("users")
    .update({
      instagram_network: instagram.value,
      pinterest_network: pinterest.value,
      linkedin_network: linkedin.value,
    })
    .eq("id", user.value?.id);

    if (error) {
      throw error;
    }

    toast.add({
      title: "Success",
      description: "Networks updated successfully",
    });
  } catch (error) {
    toast.add({
      title: "Error updating networks",
      description: error.message,
    });
  }
};
</script>
