interface Image {
  id: string;
  url: string;
}

export const fetchImages = async (
  user: Ref<{ id: string } | null>,  
  images: Ref<Image[]>,             
  loading: Ref<boolean>,             
  supabase: SupabaseClient           
): Promise<void> => {
  if (!user?.value) return;
  loading.value = true;
  try {
    const { data, error } = await supabase.storage
      .from("pictures")
      .list(`${user.value.id}/photos`, {
        limit: 10,
        offset: 0,
      });

    if (error) {
      console.error("Erreur lors de la récupération des images: ", error.message);
      return;
    }

    images.value = await Promise.all(
      data.map(async (file) => {
        const { data: signedUrlData, error: signedUrlError } = await supabase.storage
          .from("pictures")
          .createSignedUrl(`${user.value.id}/photos/${file.name}`, 60 * 60); 

        if (signedUrlError) {
          toast.add({
            title: "Erreur lors de la récupération des images",
            description: signedUrlError.message,
          });
          return null;
        }

        return {
          id: file.name,
          url: signedUrlData.signedUrl,
        };
      })
    ) as Image[];

    images.value = images.value.filter((img) => img !== null);
  } catch (error: any) {
    toast.add({
      title: "Erreur lors de la récupération des images",
      description: error.message,
    });
  } finally {
    loading.value = false;
  }
};