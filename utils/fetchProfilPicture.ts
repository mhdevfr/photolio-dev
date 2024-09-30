import { ref } from 'vue';

export const fetchProfilePicture = async (userId: string) => {
  const supabase = useSupabaseClient();
  const images = ref([]);

  try {
    const { data, error } = await supabase.storage
      .from("pictures")
      .list(`${userId}/profil_picture`, {
        limit: 1, 
        offset: 0,
      });

    if (error) {
      throw error;
    }

    images.value = await Promise.all(
      data.map(async (file) => {
        const { data: signedUrlData, error: signedUrlError } =
          await supabase.storage
            .from("pictures")
            .createSignedUrl(`${userId}/profil_picture/${file.name}`, 60 * 60);

        if (signedUrlError) {
          console.error(signedUrlError.message);
          return null;
        }

        return {
          id: file.name,
          url: signedUrlData.signedUrl,
        };
      })
    );

    images.value = images.value.filter((img) => img !== null);

  } catch (error) {
    console.error("Error fetching profile picture:", error);
    throw error;
  }

  return images;
};