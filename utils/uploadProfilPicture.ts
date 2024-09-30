export const uploadProfilePicture = async (files: FileList, emit: Function) => {
  const supabase = useSupabaseClient();
  const toast = useToast();
  const uploading = ref(false);
  const user = useSupabaseUser();
  const userId = user?.value?.id;

  if (!files || files.length === 0) {
    toast.add({
      title: "Error uploading image",
      description: "You must select an image to upload.",
    });
    return;
  }

  try {
    uploading.value = true;

    const file = files[0];
    const fileExt = file.name.split(".").pop();
    const fileName = `${Math.random()}.${fileExt}`;
    const filePath = `${userId}/profil_picture/${fileName}`;

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