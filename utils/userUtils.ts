interface User {
  id: string;
  pseudo: string;
  profil_picture: string;
  biography: string;
  country: string;
  work: string;
  current_plan: string;
}

export const fetchData = async (
  client: SupabaseClient,
  user: Ref<{ id: string } | null>, 
  users: Ref<User[]>,
  biographyContent: Ref<string>
): Promise<void> => {
  if (!user.value) return;
  const { data, error } = await client
    .from('users')
    .select('id, pseudo, profil_picture, biography, country, work, current_plan')
    .eq('id', user.value.id);

  if (data) {
    users.value = data as User[];
    biographyContent.value = users.value[0]?.biography ?? ''; 
  } else {
    console.error(error);
  }
};