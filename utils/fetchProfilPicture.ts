export const fetchProfilePicture = async (userId: string) => {
  const client = useSupabaseClient();
  const images = ref([]);

  try {
    const { data: fileList, error: listError } = await client.storage
      .from("pictures")
      .list(`${userId}/profil_picture`, {
        limit: 1,
        offset: 0,
      });
    if (listError) {
      console.error("Error listing profile picture:", listError.message);
      throw listError;
    }
    if (!fileList || fileList.length === 0) {
      throw new Error("No profile picture found.");
    }
    const { data: signedUrlData, error: signedUrlError } = await client.storage
      .from("pictures")
      .createSignedUrl(`${userId}/profil_picture/${fileList[0].name}`, 60 * 60); // 1 heure

    if (signedUrlError) {
      console.error("Error creating signed URL:", signedUrlError.message);
      throw signedUrlError;
    }
    images.value = [{
      id: fileList[0].name,
      url: signedUrlData.signedUrl,
    }];
    console.log("images", images.value);
  } catch (error) {
    console.error("test", error);
    throw error;
  }
  return images.value[0];
};
