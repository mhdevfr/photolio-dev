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

      <span> Your Networks </span>
    </UButton>
    <template v-motion-pop #panel="{ close }">
      <div class="p-4 flex justify-start items-center flex-col">
        <p class="text-xl">Add your different network links</p>
        <input
          type="text"
          pattern="https://instagram.com/.*"
          v-model="instagram"
          title="https://instagram.com/yourinsta"
          :placeholder="
            users.value?.instagram_network || 'https://instagram.com/yourinsta'
          "
          class="w-full outline-none p-2 my-2 border border-gray-300 rounded-md"
          :disabled="!!users.value?.instagram_network"
        />
        <input
          type="text"
          title="https://pinterest.com/yourpinterest"
          pattern="https://pinterest.com/.*"
          v-model="pinterest"
          :placeholder="
            users.value?.pinterest_network ||
            'https://pinterest.com/yourpinterest'
          "
          class="w-full p-2 my-2 outline-none border border-gray-300 rounded-md"
          :disabled="!!users.value?.pinterest_network"
        />
        <input
          type="text"
          v-model="linkedin"
          pattern="https://linkedin.com/.*"
          title="https://linkedin.com/yourlinkedin"
          :placeholder="
            users.value?.linkedin_network || 'https://linkedin.com/yourlinkedin'
          "
          class="w-full p-2 my-2 border outline-none border-gray-300 rounded-md"
          :disabled="!!users.value?.linkedin_network"
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
import { fetchData } from "@/utils/userUtils";
const route = useRoute();
const toast = useToast();
const client = useSupabaseClient();
const user = useSupabaseUser();
const instagram = ref("");
const pinterest = ref("");
const linkedin = ref("");
const users = ref({});
const props = defineProps({
  users: Object as PropType<User>,
});

onMounted(() => {
  if (user.value) {
    instagram.value = users.value.instagram_network || "";
    pinterest.value = users.value.pinterest_network || "";
    linkedin.value = users.value.linkedin_network || "";
    console.log(users.value);
  }
});

await fetchData(client, user, users);

const addNetworks = async () => {
  try {
    const updates: { [key: string]: string | null } = {};

    if (instagram.value && !users.value?.instagram_network) {
      updates.instagram_network = instagram.value;
    }
    if (pinterest.value && !users.value?.pinterest_network) {
      updates.pinterest_network = pinterest.value;
    }
    if (linkedin.value && !users.value?.linkedin_network) {
      updates.linkedin_network = linkedin.value;
    }

    if (Object.keys(updates).length > 0) {
      const { data, error } = await client
        .from("users")
        .update(updates)
        .eq("id", users.value?.id);

      if (error) {
        throw error;
      }

      toast.add({
        title: "Success",
        description: "Networks updated successfully",
      });
    } else {
      toast.add({
        title: "No Updates",
        description: "No new networks to update.",
      });
    }
  } catch (error) {
    toast.add({
      title: "Error updating networks",
      description: error.message,
    });
  }
};
</script>
