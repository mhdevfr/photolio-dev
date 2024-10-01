export const deleteImage = async (
  user: Ref<{ id: string } | null>,
  imageId: string,
  images: Ref<Image[]>,
  supabase: SupabaseClient
): Promise<void> => {
  if (!user?.value || !imageId) return;
  try {
    const { error } = await supabase.storage
      .from("pictures")
      .remove([`${user.value.id}/photos/${imageId}`]);

    if (error) {
      return;
    }

    images.value = images.value.filter((image) => image.id !== imageId);
  } catch (error: any) {}
};
