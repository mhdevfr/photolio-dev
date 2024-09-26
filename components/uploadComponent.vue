<script setup lang="ts">
const props = defineProps(["path"]);
const { path } = toRefs(props);
const toast = useToast();
const emit = defineEmits(["update:path", "upload"]);
const supabase = useSupabaseClient();
const uploading = ref(false);
const files = ref();
const user = useSupabaseUser();
const userId = user?.value?.id;
const uploadPicture = async (evt) => {
  files.value = evt.target.files;
  try {
    uploading.value = true;

    if (!files.value || files.value.length === 0) {
      throw new Error("You must select an image to upload.");
    }

    const file = files.value[0];
    const fileExt = file.name.split(".").pop();
    const fileName = `${Math.random()}.${fileExt}`;
    const filePath = `${userId}/photos/${fileName}`;

    const { error: uploadError } = await supabase.storage
      .from("pictures")
      .upload(filePath, file);

    if (uploadError) throw uploadError;

    emit("update:path", filePath);
    emit("upload");

    toast.add({
      title: "Success",
      description: "Image uploaded successfully",
    });
  } catch (error) {
    toast.add({
      title: "Error uploading image",
      description: error.message,
    });
  } finally {
    uploading.value = false;
  }
};

watch(path, () => {
  if (path.value) {
    downloadImage();
  }
});
</script>


<template>
  <div class="flex items-center justify-center h-full w-full" v-if="!uploading">
    <label
      for="dropzone-file"
      class="flex flex-col items-center justify-center w-full h-96 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 dark:hover:bg-gray-800 dark:bg-slate-900 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500"
    >
      <div class="flex flex-col items-center justify-center pt-5 pb-6">
        <svg
          class="w-8 h-8 mb-4 text-gray-500 dark:text-gray-400"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 20 16"
        >
          <path
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2"
          />
        </svg>
        <p class="mb-2 text-sm text-gray-500 dark:text-gray-400">
          <svg class="animate-spin h-5 w-5 mr-3 ..." viewBox="0 0 24 24">
          <span class="font-semibold">Click to upload</span> or drag and drop
          </svg>
        </p>
        <p class="text-xs text-gray-500 dark:text-gray-400">
          SVG, PNG, JPG or GIF (MAX. 800x400px)
        </p>
      </div>
      <input
        id="dropzone-file"
        :disabled="uploading"
        @change="uploadPicture"
        type="file"
        class="hidden"
        accept="image/*"
      />
    </label>
  </div>
  <div v-if="uploading" class="rounded-xl h-96 w-96 flex items-center justify-center bg-gray-50 dark:bg-slate-900">
    <button type="button" class="bg-indigo-500 flex py-2 px-2 rounded-lg" disabled>
      <Icon name="heroicons-solid:upload" class="animate-bounce" size="24" />
      Uploading ...
    </button>
  </div>
</template>