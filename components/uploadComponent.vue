<script setup lang="ts">
const props = defineProps(['path'])
const { path } = toRefs(props)
const toast = useToast();
const emit = defineEmits(['update:path', 'upload'])

const supabase = useSupabaseClient()

const uploading = ref(false)
const src = ref('')
const files = ref()

const downloadImage = async () => {
  try {
    const { data, error } = await supabase.storage.from('pictures').download(path.value)
    if (error) throw error
    src.value = URL.createObjectURL(data)
  } catch (error) {
    console.error('Error downloading image: ', error.message)
  }
}

const uploadAvatar = async (evt) => {
  files.value = evt.target.files
  try {
    uploading.value = true

    if (!files.value || files.value.length === 0) {
      throw new Error('You must select an image to upload.')
    }

    const file = files.value[0]
    const fileExt = file.name.split('.').pop()
    const fileName = `${Math.random()}.${fileExt}`
    const filePath = `${fileName}`

    const { error: uploadError } = await supabase.storage.from('pictures').upload(filePath, file)

    if (uploadError) throw uploadError

    emit('update:path', filePath)
    emit('upload')
  } catch (error) {
    toast.add({
        title: 'Error uploading image',
        description: error.message,
    })
  } finally {
    uploading.value = false
    toast.add({
        title: 'Success',
        description: 'Image uploaded successfully',
    })
  }
}

downloadImage()

watch(path, () => {
  if (path.value) {
    downloadImage()
  }
})
</script>

<template>
  <div class="h-96 h-48 bg-white flex items-center justify-center flex-col rounded-md">
    <div style="h-full bg-white rounded-lg flex items-center justify-center">
        <img
          v-if="src"
          :src="src"
          alt="avatar"
          class="h-48 w-48 rounded-full object-cover"
        />
        <span v-else>Upload Avatar</span>
      <input
        type="file"
        id="single"
        accept="image/*"
        class="bg-slate-950 w-1/2 py-2 px-2 rounded-md"
        @change="uploadAvatar"
        :disabled="uploading"
      />
    </div>
  </div>
</template>